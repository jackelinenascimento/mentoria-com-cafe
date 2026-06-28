# SPEC: Mentoria com Café

## Resumo

Mentoria com Café é uma experiência digital composta por:

- uma landing page pública para apresentar a proposta e converter visitas em conversas no WhatsApp
- um formulário de onboarding para preparar sessões individuais de forma rápida e personalizada

O produto principal não é curso, acompanhamento mensal nem mentoria longa. A oferta é uma **sessão 1:1 de até 1h30** com foco em:

- diagnóstico personalizado
- clareza sobre o momento atual
- priorização
- plano de ação

Sessão individual: **R$ 97**.

## Objetivo do produto

Fazer a pessoa visitante concluir que a sessão pode economizar meses de tentativa e erro, transformando dúvida em direção prática.

## Público

- Pessoas em transição de carreira para tecnologia
- Pessoas buscando primeira vaga ou estágio
- Desenvolvedoras(es) em evolução
- Pessoas com dúvidas sobre backend, currículo, LinkedIn, GitHub, portfólio ou entrevistas
- Mulheres em tecnologia buscando orientação técnica e de carreira em um ambiente acolhedor

## Proposta de valor

Uma sessão individual, preparada com antecedência, que combina acolhimento, profundidade técnica e direcionamento concreto para o próximo passo.

## Jornada principal

1. A pessoa chega à landing.
2. Entende rapidamente para quem a sessão faz sentido.
3. Reconhece dores, transformação e autoridade da mentora.
4. Clica em um CTA para WhatsApp.
5. Recebe agenda e link do onboarding.
6. Preenche o formulário curto com contexto, objetivo e materiais.
7. Confirma a reserva com pagamento.
8. Participa da sessão.
9. Recebe PDF personalizado após a conversa.

## Estrutura do projeto

- `index.html`: landing page principal
- `onboarding.html`: formulário de onboarding
- `styles.css`: estilos compartilhados
- `scripts/main.js`: interações da landing e alternância de tema
- `scripts/ga.js`: mensuração da landing
- `scripts/onboarding.js`: fluxo do formulário

## Requisitos da landing

- Manter identidade visual minimalista e elegante
- Preservar paleta e tipografia existentes
- Comunicar sessão personalizada, não acompanhamento longo
- Reforçar valor antes, durante e depois da sessão
- Direcionar a conversão para o WhatsApp
- Funcionar bem em desktop, tablet e mobile
- Suportar tema claro e escuro com alternância manual

## Seções da landing

- Hero com proposta principal e CTA
- Bloco de transformação
- Como funciona
- Sobre a Jackie
- Destaque de personalização
- Como preparo sua mentoria
- Timeline da sessão
- Entregável do PDF
- Para quem é
- Temas frequentes
- Feedbacks
- Agendamento e política
- FAQ
- CTA final

## Requisitos do onboarding

- Resposta entre 3 e 5 minutos
- Visual consistente com a landing
- Etapas com progresso
- Campos suficientes para preparar sessão personalizada
- `localStorage` para autosave
- Alerta antes de sair da página com alterações não enviadas
- Sucesso final com próximo passo claro

## Dados coletados no onboarding

- Nome, e-mail e WhatsApp
- Links opcionais como LinkedIn, GitHub e portfólio
- Momento profissional
- Objetivo da mentoria
- Principal desafio
- Temas que quer conversar
- Materiais para análise
- Pergunta principal da sessão
- Observações adicionais
- Aceite da política de agendamento

## Conteúdo crítico que precisa permanecer consistente

- Duração da sessão: até 1h30
- Valor da sessão: R$ 97
- Pagamento: Pix ou cartão
- Conversão principal: WhatsApp
- Entregável: PDF personalizado pós-sessão

## Mensuração

Eventos principais acompanhados hoje:

- clique em CTAs
- clique em WhatsApp
- clique em links externos
- abertura de itens do FAQ
- visualização de seções-chave
- engajamento na página

## Critérios de qualidade

- Copy humana, clara e acolhedora
- HTML semântico
- Boa acessibilidade
- Sem bibliotecas desnecessárias
- Reaproveitamento de componentes visuais
- Sem divergência entre página pública e documentação
