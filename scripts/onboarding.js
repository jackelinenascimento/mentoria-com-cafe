(function () {
  const form = document.getElementById("onboardingForm");
  if (!form) return;

  const STORAGE_KEY = "mentoria-onboarding-data";
  const STEP_KEY = "mentoria-onboarding-step";
  const SAVE_STATUS_DELAY = 900;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const indicators = Array.from(document.querySelectorAll(".step-indicator"));
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");
  const progressPercent = document.getElementById("progressPercent");
  const saveStatus = document.getElementById("saveStatus");
  const formError = document.getElementById("formError");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");
  const formActions = document.getElementById("formActions");
  const successScreen = document.getElementById("successScreen");

  let currentStep = Math.max(0, Math.min(Number(localStorage.getItem(STEP_KEY) || 0), steps.length - 2));
  let autosaveTimeout = null;
  let dirty = false;
  let submitted = false;

  const getStepElements = (step) =>
    Array.from(steps[step].querySelectorAll("input, textarea, select"));

  const getFormData = () => {
    const data = {};
    const formData = new FormData(form);

    Array.from(form.elements).forEach((field) => {
      if (!field.name) return;

      if (field.type === "checkbox") {
        if (!Array.isArray(data[field.name])) data[field.name] = [];
        if (field.checked) data[field.name].push(field.value || true);
        return;
      }

      if (field.type === "radio") {
        if (field.checked) data[field.name] = field.value;
        return;
      }

      data[field.name] = formData.get(field.name) || "";
    });

    return data;
  };

  const hasStarted = () => {
    const data = getFormData();
    return Object.values(data).some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return String(value).trim() !== "";
    });
  };

  const updateSaveStatus = (message) => {
    if (!saveStatus) return;
    saveStatus.textContent = message;
  };

  const formatTime = (date) =>
    date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const saveDraft = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()));
    localStorage.setItem(STEP_KEY, String(currentStep));
    dirty = false;
    updateSaveStatus("Salvo automaticamente às " + formatTime(new Date()) + ".");
  };

  const scheduleAutosave = () => {
    dirty = true;
    updateSaveStatus("Salvando automaticamente...");
    window.clearTimeout(autosaveTimeout);
    autosaveTimeout = window.setTimeout(saveDraft, SAVE_STATUS_DELAY);
  };

  const restoreDraft = () => {
    const rawDraft = localStorage.getItem(STORAGE_KEY);
    if (!rawDraft) return;

    try {
      const draft = JSON.parse(rawDraft);

      Array.from(form.elements).forEach((field) => {
        if (!field.name || draft[field.name] == null) return;

        if (field.type === "checkbox") {
          const values = Array.isArray(draft[field.name]) ? draft[field.name] : [draft[field.name]];
          field.checked = values.includes(field.value || true);
          return;
        }

        if (field.type === "radio") {
          field.checked = draft[field.name] === field.value;
          return;
        }

        field.value = draft[field.name];
      });

      if (hasStarted()) {
        updateSaveStatus("Rascunho restaurado automaticamente.");
      }
    } catch (error) {
      updateSaveStatus("Não foi possível restaurar o rascunho anterior.");
    }
  };

  const clearInvalidStates = (scope = form) => {
    scope.querySelectorAll(".field-invalid").forEach((el) => el.classList.remove("field-invalid"));
    scope.querySelectorAll(".choice-invalid").forEach((el) => el.classList.remove("choice-invalid"));
    if (formError) {
      formError.hidden = true;
      formError.textContent = "";
    }
  };

  const markInvalid = (field) => {
    const choiceCard = field.closest(".choice-card");
    if (choiceCard) {
      const span = choiceCard.querySelector("span");
      if (span) span.classList.add("choice-invalid");
      return;
    }

    if (field.classList.contains("form-input")) {
      field.classList.add("field-invalid");
      return;
    }

    const line = field.closest(".checkbox-line");
    if (line) line.classList.add("choice-invalid");
  };

  const showError = (message) => {
    if (!formError) return;
    formError.hidden = false;
    formError.textContent = message;
  };

  const encodeFormData = () => {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  };

  const isValidWhatsapp = (value) => {
    const digits = String(value).replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 13;
  };

  const validateStep = (stepIndex) => {
    const step = steps[stepIndex];
    const fields = getStepElements(stepIndex);

    clearInvalidStates(step);

    const radioGroupsChecked = new Set();
    const checkboxGroupsChecked = new Set();

    for (const field of fields) {
      if (field.disabled || field.hidden) continue;

      if (field.type === "radio" && field.required) {
        if (radioGroupsChecked.has(field.name)) continue;
        const checked = step.querySelector(`input[name="${field.name}"]:checked`);
        radioGroupsChecked.add(field.name);
        if (!checked) {
          step.querySelectorAll(`input[name="${field.name}"]`).forEach(markInvalid);
          showError("Escolha uma opção para eu entender melhor o seu momento.");
          return false;
        }
        continue;
      }

      if (field.type === "checkbox" && field.required) {
        if (checkboxGroupsChecked.has(field.name)) continue;
        const checked = step.querySelector(`input[name="${field.name}"]:checked`);
        checkboxGroupsChecked.add(field.name);
        if (!checked) {
          markInvalid(field);
          showError("Antes de enviar, preciso que você confirme a política de agendamento.");
          return false;
        }
        continue;
      }

      if (field.name === "whatsapp" && !isValidWhatsapp(field.value)) {
        markInvalid(field);
        showError("Pode me enviar um WhatsApp valido? Exemplo: (11) 99999-9999.");
        field.focus();
        return false;
      }

      if (!field.checkValidity()) {
        markInvalid(field);
        if (field.type === "email") {
          showError("Pode conferir o email? Quero garantir que eu consiga falar com você depois.");
        } else if (field.type === "url") {
          showError("Se for enviar um link, tente colar no formato completo, começando com https://.");
        } else {
          showError("Falta preencher um campo importante desta etapa antes de continuar.");
        }
        field.focus();
        return false;
      }
    }

    return true;
  };

  const updateStepUI = () => {
    const totalSteps = steps.length - 1;
    const isSuccess = submitted;

    steps.forEach((step, index) => {
      const active = (!isSuccess && index === currentStep) || (isSuccess && step === successScreen);
      step.classList.toggle("active", active);
      step.hidden = !active;
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index <= currentStep && !isSuccess);
    });

    if (progressBar && progressLabel && progressPercent) {
      const currentVisualStep = isSuccess ? totalSteps : currentStep + 1;
      const progress = isSuccess ? 100 : (currentVisualStep / totalSteps) * 100;
      progressBar.style.width = progress + "%";
      progressLabel.textContent = isSuccess ? "Concluído" : `Etapa ${currentVisualStep} de ${totalSteps}`;
      progressPercent.textContent = Math.round(progress) + "%";
    }

    if (backButton) {
      backButton.disabled = currentStep === 0 || isSuccess;
    }

    if (nextButton) {
      nextButton.textContent = currentStep === totalSteps - 1 ? "Enviar formulário" : "Continuar";
    }

    if (formActions) {
      formActions.hidden = isSuccess;
    }

    localStorage.setItem(STEP_KEY, String(currentStep));
  };

  const goToStep = (nextStep) => {
    currentStep = Math.max(0, Math.min(nextStep, steps.length - 2));
    updateStepUI();
    clearInvalidStates();
    const firstField = getStepElements(currentStep)[0];
    if (firstField) firstField.focus();
  };

  const handleNoneMaterial = (changedField) => {
    if (changedField.name !== "materials") return;

    const fields = Array.from(form.querySelectorAll('input[name="materials"]'));
    if (changedField.value === "Nenhum" && changedField.checked) {
      fields.forEach((field) => {
        if (field !== changedField) field.checked = false;
      });
      return;
    }

    if (changedField.value !== "Nenhum" && changedField.checked) {
      const noneField = fields.find((field) => field.value === "Nenhum");
      if (noneField) noneField.checked = false;
    }
  };

  const submitForm = async () => {
    window.clearTimeout(autosaveTimeout);
    saveDraft();

    if (nextButton) {
      nextButton.disabled = true;
      nextButton.textContent = "Enviando...";
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulário.");
      }

      submitted = true;
      dirty = false;
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STEP_KEY);
      updateSaveStatus("Tudo certo. Formulário enviado.");
      updateStepUI();
    } catch (error) {
      showError("Não consegui enviar agora. Se a página estiver no Netlify, tente novamente em alguns segundos.");
      updateSaveStatus("Falha no envio. Seu rascunho continua salvo.");
    } finally {
      if (nextButton && !submitted) {
        nextButton.disabled = false;
        nextButton.textContent = "Enviar formulário";
      }
    }
  };

  restoreDraft();
  updateStepUI();

  form.addEventListener("input", (event) => {
    handleNoneMaterial(event.target);
    clearInvalidStates(event.target.closest(".form-section") || form);
    scheduleAutosave();
  });

  form.addEventListener("change", (event) => {
    handleNoneMaterial(event.target);
    clearInvalidStates(event.target.closest(".form-section") || form);
    scheduleAutosave();
  });

  if (nextButton) {
    nextButton.addEventListener("click", async () => {
      if (!validateStep(currentStep)) return;

      if (currentStep === steps.length - 2) {
        await submitForm();
        return;
      }

      goToStep(currentStep + 1);
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (currentStep === 0) return;
      goToStep(currentStep - 1);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  window.addEventListener("beforeunload", (event) => {
    if (submitted) return;
    if (!dirty && !hasStarted()) return;

    event.preventDefault();
    event.returnValue = "";
  });
})();
