# Mentoria com Café

Landing page e formulário de onboarding da Mentoria com Café, por Jackie Nascimento.

## Visão geral

O projeto reúne duas experiências complementares:

- `index.html`: landing page pública da Mentoria com Café.
- `onboarding.html`: formulário curto de onboarding para preparar a sessão após o contato inicial.

A proposta do produto é vender uma sessão 1:1 altamente personalizada, com até 1h30, foco em diagnóstico, clareza e plano de ação.

**Sessão individual: R$ 97**.

## O que a mentoria entrega

- Diagnóstico personalizado do momento profissional.
- Priorização do que faz mais sentido agora.
- Direcionamento para carreira, backend, portfólio, LinkedIn, GitHub ou entrevistas.
- PDF pós-sessão com pontos fortes, lacunas, plano de ação, roadmap, materiais e próximos passos.

## Fluxo de conversão

1. A pessoa chega à landing page e entende a proposta da sessão.
2. Clica em um CTA que leva para o WhatsApp com mensagem pré-preenchida.
3. Recebe agenda, orientações iniciais e o link do formulário de onboarding.
4. Preenche o onboarding para apoiar a preparação da sessão, sem precisar sair da página para consultar política, entregável ou FAQ.
5. Confirma a reserva com pagamento via Pix ou cartão.
6. Participa da sessão e recebe o PDF personalizado depois da conversa.

## Estrutura do projeto

```text
mentoria-com-cafe
├── index.html
├── onboarding.html
├── styles.css
├── docs
│   └── SPEC.md
├── scripts
│   ├── ga.js
│   ├── main.js
│   └── onboarding.js
└── assets
    ├── jackie.jpg
    └── whatsapp-logo.svg
```

## Landing page

Principais blocos da página pública:

- Hero com proposta de valor e CTAs para WhatsApp.
- Bloco de transformação com dores e estado desejado.
- Como funciona.
- Sobre a Jackie.
- Destaque de personalização.
- Como a mentoria é preparada.
- Timeline da sessão.
- Entregável do PDF.
- Para quem é.
- Temas frequentes.
- Feedbacks.
- Agendamento e política.
- FAQ.

## Formulário de onboarding

O onboarding foi desenhado para levar cerca de 3 a 5 minutos e coletar só o necessário para personalizar a sessão.

Inclui:

- barra de progresso por etapas
- bloco de referência rápida dentro da própria página
- autosave em `localStorage`
- aviso antes de sair com alterações não enviadas
- validação amigável com checagem real de WhatsApp
- envio compatível com Netlify Forms
- tela final de sucesso

Também incorpora, na própria página:

- resumo de como funciona
- explicação do entregável
- política de agendamento
- FAQ rápido

## Tecnologias

- HTML5 semântico
- Tailwind via CDN
- CSS3
- JavaScript Vanilla
- Google Analytics
- Netlify Forms

## Scripts

- `scripts/main.js`: FAQ, alternância de tema, ano dinâmico e interações principais da landing.
- `scripts/ga.js`: eventos de mensuração da landing.
- `scripts/onboarding.js`: navegação por etapas, autosave, validação, envio para Netlify Forms e tela de sucesso do onboarding.

## Tema

O projeto suporta:

- tema automático baseado em `prefers-color-scheme`
- persistência da escolha em `localStorage`
- botão manual de alternância entre claro e escuro

## Publicação

Por ser um projeto estático, a publicação pode ser feita facilmente em serviços como GitHub Pages ou Netlify.

Se o onboarding for usado de forma privada, basta compartilhar apenas o link direto da página `onboarding.html` com a pessoa agendada.

Quando publicado no Netlify, o formulário `mentoria-onboarding` envia submissões de forma nativa via Netlify Forms.

## Contato

- E-mail: [jackeline_nascimento@hotmail.com](mailto:jackeline_nascimento@hotmail.com)
- LinkedIn: [jackelinenascimento](https://www.linkedin.com/in/jackelinenascimento)
- GitHub: [jackelinenascimento](https://github.com/jackelinenascimento)
- Clube Leitura Dev: [leitura.dev](https://leitura.dev)
