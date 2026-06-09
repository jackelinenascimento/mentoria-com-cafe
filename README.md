# Mentoria com Café

Landing page da Mentoria com Café, por Jackie Nascimento.

## Sobre o projeto

Uma página estática para divulgar e converter interessados em mentoria 1:1 para carreira em tecnologia, transição de carreira, primeiro emprego, backend, portfólio, LinkedIn e entrevistas técnicas.

A mentoria tem uma sessão online de até 1h30, investimento a partir de **R$ 70,00** e entrega um **PDF consolidado** com diagnóstico, prioridades e plano de ação.

## Fluxo de agendamento

1. A pessoa chama a Jackie pelo WhatsApp e informa objetivo, momento atual e principal dúvida.
2. Jackie envia a agenda e o formulário de alinhamento.
3. A pessoa escolhe o horário e confirma a reserva com pagamento via Pix ou cartão.
4. Após a sessão, recebe o PDF consolidado com próximos passos.

Mensagem principal de WhatsApp:

```text
Oi Jackie! Quero agendar minha Mentoria com Café. Meu objetivo é: ____. Meu momento atual é: transição / primeiro emprego / backend / entrevistas. Pode me enviar a agenda e o formulário de alinhamento?
```

## Estrutura do projeto

```text
mentoria-com-cafe
├── index.html
├── styles.css
├── SPEC.md
├── scripts
│   ├── ga.js
│   └── main.js
└── assets
    ├── jackie.jpg
    └── whatsapp-logo.svg
```

## Seções da página

- Hero com CTA direto para WhatsApp.
- Sobre a Jackie perto do topo para reforçar confiança.
- Como funciona em 4 etapas.
- Destaque do PDF consolidado.
- Para quem é e para quem talvez não seja.
- Temas frequentes.
- Feedbacks em formato Dor / Trabalho feito / Resultado.
- Agendamento com microcopy de segurança.
- FAQ com dúvidas de preço, pagamento, Pix, suporte e remarcação.
- CTA final e botão flutuante de WhatsApp.

## Mensuração

O projeto usa Google Analytics via `scripts/ga.js` para acompanhar:

- Cliques em CTAs internos.
- Cliques no WhatsApp.
- Cliques em e-mail.
- Cliques em redes sociais.
- Abertura de perguntas do FAQ.
- Visualização das seções `para-quem`, `feedbacks`, `agendamento` e `faq`.
- Evento de engajamento após 45 segundos.

## Tecnologias

- HTML5
- CSS3
- Tailwind via CDN
- JavaScript Vanilla
- Google Analytics
- GitHub Pages

## Contato

- E-mail: [jackeline_nascimento@hotmail.com](mailto:jackeline_nascimento@hotmail.com)
- LinkedIn: [jackelinenascimento](https://www.linkedin.com/in/jackelinenascimento)
- GitHub: [jackelinenascimento](https://github.com/jackelinenascimento)
- Instagram: [@jackienascimento_](https://www.instagram.com/jackienascimento_)
