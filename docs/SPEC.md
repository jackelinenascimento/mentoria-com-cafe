# Spec do projeto: Mentoria com Café

## Visão geral

Mentoria com Café é uma landing page para divulgar e converter pessoas interessadas em mentoria 1:1 com Jackie Nascimento. A proposta central é oferecer clareza técnica, direcionamento de carreira e um plano de ação personalizado para pessoas em transição de carreira, iniciantes em tecnologia e profissionais que querem evoluir em backend.

O canal principal de conversão é o WhatsApp. A página conduz a pessoa visitante por uma narrativa simples: entender a proposta, ver como funciona, reconhecer temas relevantes, ganhar confiança por prova social, conferir detalhes de agendamento e iniciar contato.

## Objetivos do produto

- Converter visitantes em conversas no WhatsApp para agendamento.
- Reduzir dúvidas antes do contato inicial.
- Reforçar autoridade, acolhimento e clareza técnica da mentora.
- Comunicar valor da sessão 1:1 e do PDF consolidado pós-mentoria.
- Criar base mínima de mensuração por eventos de CTA, WhatsApp, e-mail, redes sociais, FAQ, scroll de seções e engajamento.

## Público-alvo

- Pessoas em transição de carreira para tecnologia.
- Pessoas buscando o primeiro emprego em tech.
- Estagiárias(os), juniores e profissionais em evolução de carreira.
- Pessoas que desejam melhorar LinkedIn, GitHub, portfólio, currículo ou preparação para entrevistas.
- Pessoas interessadas em backend, especialmente Kotlin, Java, Spring Boot, arquitetura e boas práticas.
- Mulheres em tecnologia que buscam orientação técnica e de carreira em um ambiente acolhedor.

## Proposta de valor

"Uma sessão 1:1, direta e acolhedora, para organizar objetivos, diagnosticar lacunas e sair com próximos passos claros, incluindo um PDF consolidado com plano de ação."

Pontos fortes atuais:

- Linguagem humana e acolhedora.
- Valor acessível a partir de R$ 70,00.
- Sessão com até 1h30.
- Combinação de didática, experiência técnica e carreira.
- Prova social com relatos.
- FAQ cobrindo dúvidas operacionais.

## Jornada do usuário

1. Usuário chega à landing page.
2. Lê o hero e entende que a mentoria entrega um plano claro para carreira, portfólio ou backend.
3. Pode clicar direto no WhatsApp ou continuar lendo para entender o processo.
4. Valida confiança pela bio da Jackie, que aparece perto do topo.
5. Confere formato, investimento e etapas de agendamento.
6. Entende o PDF consolidado como entregável pós-sessão.
7. Verifica se a mentoria é adequada na seção "Para quem é".
8. Identifica temas de interesse e reconhece resultados em feedbacks.
9. Lê o FAQ para reduzir dúvidas sobre pagamento, remarcação e suporte.
10. Envia mensagem pré-preenchida pelo WhatsApp com objetivo e momento atual.
11. Recebe agenda, formulário de alinhamento e opções de pagamento.
12. Confirma pagamento e reserva.

## Arquitetura atual

- `index.html`: conteúdo principal da landing page.
- `styles.css`: estilos visuais customizados, variáveis de cor, botões, cards, FAQ e botão flutuante.
- `scripts/main.js`: ano dinâmico no footer e comportamento do FAQ.
- `scripts/ga.js`: eventos de Google Analytics para CTAs, WhatsApp, e-mail, redes sociais, FAQ, visualização de seções e engajamento de 45 segundos.
- `assets/jackie.jpg`: foto da mentora.
- `assets/whatsapp-logo.svg`: ícone do botão flutuante.

## Seções atuais

- Header fixo com navegação e CTA para WhatsApp.
- Hero com proposta específica, CTA direto para WhatsApp, CTA secundário e tags de temas.
- Sobre a Jackie Nascimento perto do topo.
- Como funciona em quatro etapas.
- Entregável pós-sessão com destaque para o PDF consolidado.
- Para quem é / para quem talvez não seja.
- Temas frequentes.
- Feedbacks com Dor / Trabalho feito / Resultado.
- Agendamento com passo a passo, WhatsApp e microcopy de segurança.
- FAQ.
- CTA final.
- Botão flutuante do WhatsApp.
- Footer.

## Métricas recomendadas

- Cliques no CTA do header.
- Cliques no CTA do hero.
- Cliques no CTA da seção de agendamento.
- Cliques no botão flutuante do WhatsApp.
- Cliques em redes sociais.
- Aberturas de itens do FAQ.
- Scroll até a seção de agendamento.
- Scroll até o FAQ.
- Scroll até "Para quem é" e "Feedbacks".
- Tempo engajado na página.
- Taxa de conversão visitante -> clique no WhatsApp.
- Taxa de conversão clique no WhatsApp -> agendamento confirmado, medida manualmente ou via planilha/CRM simples.

## Status da versão 1.1

Implementado:

- Preço e fluxo de pagamento/agendamento padronizados em página, README e spec.
- Hero com benefício mais específico para carreira, portfólio e backend.
- CTA principal direto para WhatsApp.
- Mensagens de WhatsApp com perguntas de qualificação.
- Seção "Para quem é / talvez não seja".
- Destaque próprio para o PDF consolidado.
- Bio da Jackie movida para mais perto do topo.
- Feedbacks reestruturados por dor, trabalho feito e resultado.
- Microcopy de segurança antes do contato.
- Texto mais claro sobre remarcação, cancelamento, reembolso e uso de dados.
- README atualizado com estrutura real do projeto.
- Open Graph, Twitter Card e JSON-LD adicionados.
- Estados de foco mais consistentes para links e botões.
- Tracking de FAQ aberto e visualização de seções-chave.

Observação:

- O Tailwind ainda está via CDN para manter o projeto simples e sem etapa de build. Uma otimização futura seria gerar um CSS final versionado se a página passar a ter pipeline de deploy.

## Melhorias priorizadas

### Prioridade alta

1. Ajustar inconsistências de valor e processo. **Implementado.**
   - README, página e spec foram alinhados para R$ 70,00.
   - O fluxo agora é consistente: contato, agenda/formulário, escolha de horário e confirmação da reserva com pagamento.
   - Impacto: reduz fricção e aumenta confiança.

2. Melhorar o hero com um benefício mais específico. **Implementado.**
   - O hero agora explicita o resultado para carreira, portfólio ou backend.
   - Impacto: aumenta identificação logo na primeira dobra.

3. Incluir CTA direto para WhatsApp já no hero. **Implementado.**
   - O CTA primário abre WhatsApp com mensagem qualificada, e o CTA secundário leva para "Como funciona".
   - Impacto: reduz um passo para pessoas já convencidas.

4. Criar uma seção "Para quem é / Para quem não é". **Implementado.**
   - Ajuda a segmentar melhor o público e reduzir contatos desalinhados.
   - Impacto: melhora qualificação e confiança.

5. Dar mais destaque ao PDF consolidado. **Implementado.**
   - O PDF aparece como entregável próprio, com diagnóstico, prioridades e próximos passos.
   - Impacto: torna o valor mais tangível.

6. Instrumentar eventos de FAQ e scroll. **Implementado.**
   - `scripts/ga.js` mede abertura de FAQ e visualização de seções-chave.
   - Impacto: ajuda a descobrir objeções antes da conversão.

### Prioridade média

7. Reordenar "Sobre" antes de "Agendamento" ou inserir um resumo curto da mentora perto do hero. **Implementado.**
   - Pessoas compram mentoria pela confiança na pessoa.
   - Impacto: aumenta credibilidade antes do CTA.

8. Melhorar prova social com resultado + contexto. **Implementado.**
   - Os feedbacks foram reestruturados em "Dor", "Trabalho feito" e "Resultado".
   - Impacto: melhora leitura rápida e identificação.

9. Adicionar microcopy de segurança perto do WhatsApp. **Implementado.**
   - Exemplo: "Sem compromisso: me conte seu momento e eu digo se a mentoria faz sentido."
   - Impacto: reduz medo de clicar e iniciar conversa.

10. Criar perguntas de qualificação na mensagem do WhatsApp. **Implementado.**
    - Exemplo: "Meu objetivo é: ____. Meu momento atual é: transição / primeiro emprego / backend / entrevistas."
    - Impacto: melhora triagem e acelera atendimento.

11. Adicionar política clara de remarcação, cancelamento e reembolso. **Implementado.**
    - A seção de agendamento e o FAQ agora explicam remarcação, cancelamento, reembolso e uso de dados.
    - Impacto: reduz objeção no pagamento antecipado.

12. Atualizar README para refletir a estrutura real. **Implementado.**
    - O README agora lista `scripts/main.js`, `scripts/ga.js`, `SPEC.md` e assets reais.
    - Impacto: melhora manutenção e documentação.

### Prioridade baixa

13. Adicionar dados estruturados básicos. **Implementado.**
    - JSON-LD para pessoa/serviço pode melhorar entendimento por buscadores.
    - Impacto: apoio a SEO.

14. Adicionar Open Graph e imagem social. **Implementado.**
    - Melhor preview quando o link for compartilhado no WhatsApp, LinkedIn e Instagram.
    - Impacto: aumenta confiança em compartilhamentos.

15. Otimizar carregamento do Tailwind. **Parcial.**
    - O projeto usa CDN do Tailwind em produção.
    - Sugestão: gerar CSS final em build ou manter CDN se a simplicidade for prioridade.
    - Impacto: performance e estabilidade.

16. Adicionar estados de foco mais consistentes para links e botões. **Implementado.**
    - O FAQ tem bom foco, mas os CTAs e links podem ter foco visual mais claro.
    - Impacto: acessibilidade e navegação por teclado.

17. Revisar contraste e hierarquia visual em mobile. **Implementado.**
    - O design escuro funciona, mas alguns textos secundários podem ficar discretos demais.
    - Impacto: leitura e acessibilidade.

## Sugestão de versão 1.1

Escopo recomendado para a próxima rodada:

- Corrigir inconsistências de preço/processo no README e nos textos.
- Fazer o CTA primário do hero abrir WhatsApp com mensagem qualificada.
- Adicionar seção "Para quem é".
- Destacar o PDF consolidado como entregável.
- Adicionar Open Graph.
- Adicionar tracking de FAQ e scroll até agendamento.

Essa combinação tem alto impacto em conversão e baixo risco técnico, porque mexe principalmente em copy, estrutura da landing page e mensuração.

## Critérios de aceite

- Visitante entende em até 10 segundos o que é a mentoria, para quem é e qual resultado esperar.
- Existe pelo menos um CTA visível na primeira dobra.
- O fluxo de agendamento é consistente em todos os textos.
- A página deixa claro valor, duração, formato, pagamento e remarcação.
- O WhatsApp recebe uma mensagem inicial suficiente para qualificar o atendimento.
- Eventos principais de conversão estão mensurados.
- README e página pública não apresentam informações divergentes.
