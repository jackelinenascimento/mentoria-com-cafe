(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function initGAEvents() {
    const hasGtag = typeof window.gtag === "function";

    const send = (name, params = {}) => {
      if (!hasGtag) return;
      window.gtag("event", name, {
        send_to: "G-MZ940H74GR",
        transport_type: "beacon",
        ...params,
      });
    };

    const guessPosition = (el) => {
      if (!el) return "unknown";
      if (el.closest("header")) return "header";
      if (el.closest("footer")) return "footer";
      const section = el.closest("section");
      if (section && section.id) return section.id;
      return "page";
    };

    const onClickSend = (el, name, extra = {}) => {
      if (!el) return;
      el.addEventListener("click", () => {
        send(name, {
          link_text: (el.textContent || "").trim(),
          destination: el.href || "",
          location_path: window.location.pathname,
          cta_position: guessPosition(el),
          ...extra,
        });
      });
    };

    document.querySelectorAll('a[href="#agendamento"], a[href="#como-funciona"]').forEach((a) => {
      onClickSend(a, "cta_agendar_click");
    });

    document.querySelectorAll('a[href^="https://wa.me/"]').forEach((a) => {
      onClickSend(a, "whatsapp_click");
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
      onClickSend(a, "email_click");
    });

    document.querySelectorAll('#sobre a[href^="http"]').forEach((a) => {
      onClickSend(a, "outbound_social_click", {
        social_network: /instagram\.com/i.test(a.href)
          ? "instagram"
          : /linkedin\.com/i.test(a.href)
          ? "linkedin"
          : /github\.com/i.test(a.href)
          ? "github"
          : "other",
      });
    });

    document.querySelectorAll(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const question = (btn.textContent || "").trim();
        const isOpen = item && item.classList.contains("open");

        if (isOpen) {
          send("faq_open", {
            question,
            location_path: window.location.pathname,
          });
        }
      });
    });

    if ("IntersectionObserver" in window) {
      const sectionEvents = {
        agendamento: "view_agendamento",
        faq: "view_faq",
        feedbacks: "view_feedbacks",
        "para-quem": "view_para_quem",
      };

      const seen = new Set();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          if (!id || seen.has(id)) return;

          seen.add(id);
          send(sectionEvents[id], {
            location_path: window.location.pathname,
          });
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.45 });

      Object.keys(sectionEvents).forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    }

    setTimeout(() => {
      send("engaged_45s");
    }, 45000);
  });
})();
