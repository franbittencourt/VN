# Game Design Document (GDD)
## *[Título provisório]* — Visual Novel · Quilombos & Orixás

> **Documento vivo.** Este GDD é a peça central do desenvolvimento. Ele muda conforme o projeto evolui — mas toda mudança deve ser deliberada e registrada (use o histórico de commits do Git para isso). Sempre que o Claude Code for trabalhar no jogo, ele deve ler este arquivo primeiro.

---

## 0. Como usar este documento

- **Para você:** consulta rápida de qualquer decisão de design já tomada. Evita retrabalho e "deriva de escopo".
- **Para o Claude Code:** contexto completo do projeto. Aponte para `GDD.md` no início de cada sessão.
- **Status de cada seção:** marque `[DEFINIDO]`, `[EM ABERTO]` ou `[A REVISAR]` para saber o que ainda falta decidir.

---

## 1. Conceito de alto nível `[PARCIAL]`

**Pitch de uma frase:**
Um jovem nascido livre, mas filho de mãe ainda escravizada, é forçado a escolher entre lealdade ao quilombo e sobrevivência — guiado pelos orixás — nos anos finais antes da abolição.

**Gênero:** Visual novel narrativa com escolhas ramificadas e múltiplos finais.

**Plataforma-alvo:** Mobile (Android primeiro; iOS depois). Jogável em sessões curtas.

**Duração-alvo:** 4–8 horas de leitura (padrão mobile contemporâneo: 10–15h é o teto; comece menor).

**Tom:** Mistura de drama histórico, aventura e místico/sobrenatural.

**Público-alvo:**
- Primário: jogadores de VN interessados em narrativa culturalmente única (BR e ocidental).
- Secundário: público brasileiro interessado em história afro-brasileira, religiões de matriz africana, e literatura/jogos de temática nacional.
- Terciário: uso educacional (escolas, refª cultural).

**Proposta de valor (o gap de mercado):**
Não existe VN mobile sobre quilombos no período 1871–1888 com orixás como força narrativa e protagonista filho da Lei do Ventre Livre. Mercado mobile de VN é o maior do setor; temas culturalmente distintos têm demanda crescente.

---

## 2. Pilares de design `[A DEFINIR JUNTOS]`

Os 3 princípios inegociáveis que toda decisão deve respeitar. Proposta inicial:

1. **Respeito e autenticidade cultural.** Religião e história tratadas com pesquisa e dignidade, nunca como exotismo ou folclore raso.
2. **Escolha com peso real.** Toda decisão importante tem custo. Não há caminho "limpo".
3. **O espiritual é estrutural, não decorativo.** Os orixás afetam a mecânica e a narrativa, não são só estética.

---

## 3. Framework MDA `[PARCIAL]`

Ordem de design para VN: **começar pelas Aesthetics** (emoções-alvo), depois Dynamics, por fim Mechanics.

### Aesthetics (o que o jogador deve sentir)
- Tensão moral (escolhas sem resposta certa)
- Pertencimento ancestral (conexão com raízes e comunidade)
- Esperança frágil (a abolição chegando, mas incerta)

### Dynamics (comportamentos que emergem)
- Jogador pesa lealdade ao quilombo × sobrevivência individual a cada escolha
- Relacionamento com os orixás se fortalece ou enfraquece conforme as decisões
- Releitura para descobrir caminhos alternativos (replayability)

### Mechanics (regras concretas)
- Escolhas de diálogo com consequências
- Sistema de afinidade com 4 orixás (ver seção 6)
- Múltiplos finais condicionados às escolhas acumuladas

---

## 4. Cenário e contexto histórico `[DEFINIDO]`

**Período:** 1871–1888 (da Lei do Ventre Livre à Lei Áurea).

**Local:** Um quilombo menor (fictício, baseado em comunidades reais espalhadas pelo interior). Evita Palmares — território já saturado.

**Tensões históricas disponíveis para a trama:**
- Abolição chegando, mas sem garantia de terra, dinheiro ou futuro
- Geração nascida livre (Ventre Livre) vivendo como se não fosse
- Calundus/primeiros terreiros: a própria religião ainda em formação
- Sincretismo (camuflar a fé) × preservação pura dos cultos
- Tropas coloniais ainda atacando comunidades
- Redes abolicionistas urbanas buscando contato com quilombos

**Nota de pesquisa:** ver `referencias/` para a bibliografia. Validar cada elemento histórico antes de escrever.

---

## 5. Protagonista e personagens `[EM ABERTO]`

**Protagonista:** Masculino, ~16 anos em 1888. Nascido livre em 1872 (Lei do Ventre Livre). Mãe ainda escravizada em fazenda próxima. Cresceu no quilombo com o pai. Nunca foi iniciado nos cultos — geração entre dois mundos.

**Personagens a desenvolver (próxima etapa):**
- A mãe (escravizada)
- Liderança política do quilombo
- Liderança espiritual (zelador/a do culto)
- Antagonista (fazendeiro / capitão do mato / autoridade)
- Possível interesse romântico / aliado da mesma geração
- Contato abolicionista urbano

*(Esta seção será expandida no próximo bloco de trabalho.)*

---

## 6. Sistema dos orixás `[CONCEITUAL]`

Cada orixá representa um **caminho/abordagem**. As escolhas do jogador aumentam afinidade com um deles, influenciando opções futuras e o final.

| Orixá | Domínio | Caminho narrativo |
|-------|---------|-------------------|
| Ogum | Guerra, ferro | Confrontação direta |
| Oxóssi | Floresta, caça | Estratégia e paciência |
| Iemanjá | Água, maternidade | Diplomacia e memória |
| Exu | Encruzilhadas, comunicação | Negociação e astúcia |

**A definir:** mecânica exata de afinidade (pontos? flags? medidor visível ou oculto?), número de orixás no jogo final, como a iniciação do protagonista funciona narrativamente.

**Cuidado cultural:** consultar as fontes (Prandi, Verger) para representar atribuições, cores e domínios corretamente. Considerar sensibilidade ao retratar rituais.

---

## 7. Estrutura narrativa e sistema de escolhas `[PARCIAL]`

### 7.1 Arquitetura narrativa

**Padrão adotado: Foldback com hard branching pontual.**

A maioria das escolhas diverge e reconverge (foldback), mantendo o escopo gerenciável. Hard branching permanente reservado para 2–3 momentos pivô de alto impacto ao longo do jogo.

```
[Escolha] → [Cena A] ↘
                      → [Cena comum] → [Próxima escolha]
[Escolha] → [Cena B] ↗
```

- **Número de finais:** 4 — um por caminho de orixá (Ogum, Oxóssi, Iemanjá, Exu) + 1 final oculto para jogadores que equilibram todos os caminhos.
- **Densidade de escolhas:** ~1 escolha significativa a cada 500–800 palavras.
- **Atos:** 3 atos — incidente inicial → escalada → clímax/escolha final.
- **Incidente inicial:** a definir entre duas opções (fuga da mãe / proposta abolicionista). Decidir na etapa de roteiro.

### 7.2 Tipos de escolha

Cada escolha pertence a uma das quatro categorias abaixo. O roteirista deve classificar cada ponto de decisão ao escrever.

| Tipo | Definição | Frequência |
|------|-----------|------------|
| **Hard branching** | Ramificação permanente; muda o final | Rara (2–3x no jogo) |
| **Soft branching** | Diverge e volta; muda diálogos e relações | Maioria das escolhas |
| **Afinidade de orixá** | Acumula silenciosamente; desbloqueia opções futuras | Constante |
| **Worldbuilding** | Sem impacto narrativo; aprofunda o universo | Ocasional |

### 7.3 Regras anti-"illusion of choice"

- Escolhas do mesmo tipo nunca levam à mesma cena sem ao menos diálogos diferentes.
- Toda escolha soft branching deve gerar uma consequência visível dentro do mesmo capítulo (reação de personagem, informação nova, tom de cena alterado).
- O sistema de afinidade nunca é exibido como número — o jogador percebe pelos efeitos.
- Proibido: escolha que não muda nada e não acumula afinidade. Se não tem função, cortar.

---

## 8. Arte e estética visual `[PARCIAL]`

### 8.1 Estilo visual adotado: Gravura/Xilogravura

**Decisão:** estilo inspirado na xilogravura brasileira — técnica historicamente associada ao Brasil popular do séc. XIX (literatura de cordel, folhetos). Alto contraste, traço expressivo, identidade inconfundível.

**Justificativa estratégica:**
- Único no mercado de VN (diferenciação total do padrão anime japonês)
- Historicamente coerente com o período 1871–1888
- Ecoa Angola Janga (D'Salete), referência canônica do projeto
- Funciona excepcionalmente bem com geração por IA
- Em mobile, P&B + acentos de cor por orixá é legível e marcante

**Paleta de cor:** preto e branco como base. Cada orixá tem uma cor ritual que aparece como acento nas cenas onde sua influência é dominante:

| Orixá | Cores rituais | Uso na UI/cenas |
|-------|---------------|-----------------|
| Ogum | Verde e preto | Cenas de confronto |
| Oxóssi | Azul e verde | Cenas na mata |
| Iemanjá | Azul claro e branco | Cenas de memória e água |
| Exu | Preto e vermelho | Cenas de encruzilhada e decisão |

**Referência visual primária:** Angola Janga (Marcelo D'Salete).
**Referência visual secundária:** Talaka (aquarela afro-brasileira — estilo alternativo caso o teste de gravura não convença).

### 8.2 Assets necessários

| Asset | Prioridade | Qtd. estimada |
|-------|-----------|---------------|
| Sprites de personagens + expressões | Alta | 6–8 personagens × 4–6 expressões |
| Backgrounds | Alta | 8–12 cenários (quilombo, mata, fazenda, terreiro, etc.) |
| CGs de momentos-chave | Alta | 4–6 ilustrações épicas |
| UI (menus, caixas de diálogo) | Média | Conjunto completo |
| Ícones de orixás | Média | 4 |

### 8.3 Pipeline de criação

**Backgrounds → IA generativa** (Midjourney ou Stable Diffusion)
- Prompts padronizados e documentados para evitar deriva de estilo
- Modelo de prompt: `[cena], woodcut style, high contrast black and white, Brazilian folk art, 19th century, [elementos específicos]`
- Custo estimado: ~$0,10 por geração; $5–20 para o conjunto completo

**Sprites de personagens → IA + refinamento manual**
- IA para concept e variações de pose base
- Refinamento no Canva ou similar para consistência entre expressões
- Maior investimento de tempo do pipeline — não subestimar

**CGs de momentos-chave → comissionar ilustrador brasileiro**
- 4–6 cenas épicas com arte humana elevam toda a percepção do jogo
- Priorizar artistas negros/afro-brasileiros — coerente com os pilares do projeto
- Orçamento a definir; buscar na plataforma ArtStation e redes de ilustradores BR

**Restrição mobile:** todas as imagens otimizadas para Android gama média. Backgrounds: máx. 1920×1080px, comprimidos. Sprites: máx. 512×1024px por pose.

---

## 9. Áudio `[PARCIAL]`

### 9.1 Direção sonora

**Conceito central:** cada orixá tem um toque percussivo próprio na liturgia real do Candomblé. A trilha do jogo reflete a afinidade dominante do jogador — quem segue Ogum ouve percussão mais marcada; quem segue Iemanjá ouve melodia e água. O áudio é extensão da mecânica de orixás, não decoração.

### 9.2 Instrumentos e referências históricas

Instrumentos da tradição afro-brasileira do período, usados em rituais e no cotidiano do quilombo:

| Instrumento | Descrição | Função no jogo |
|-------------|-----------|----------------|
| **Atabaque** (rum, rumpi, lê) | Três tambores de tamanhos distintos; base dos rituais | Tema dos orixás |
| **Agogô** | Sinos duplos metálicos; padrão sincopado | Marcação rítmica, tensão |
| **Xequerê** | Cabaça coberta de contas; textura rítmica | Ambiente |
| **Berimbau** | Arco musical; associado à capoeira | Cenas de tensão/ação |
| **Afoxé** | Chocalho de origem iorubá | Transições e meditação |

**Nota:** esses instrumentos têm poder espiritual na tradição. Representar seus toques com respeito à função ritual — não usar toque de orixá específico como simples BGM genérico.

### 9.3 Pipeline de criação

**Trilhas ambientes e loops de fundo → IA generativa (Suno / Udio)**
- Prompt base: `atabaque ritual drums, agogô bells, dense forest night, spiritual tension, afro-brazilian, 19th century`
- Variações por orixá: ajustar mood e instrumentos dominantes conforme tabela acima
- Resultado: loops de 1–3 min para cada "clima" do jogo

**Temas principais → comissionar percussionista brasileiro**
- 3–4 composições originais para momentos-chave (abertura, ritual, clímax, créditos)
- Investimento prioritário: é o que diferencia o som do jogo de algo genérico
- Buscar músicos de tradição afro-brasileira — autenticidade e apoio à cadeia cultural

**SFX ambientais → royalty-free + IA**
- Mata, água, fogo, vento, tambores distantes, pássaros
- Fonte: Oritmo.com (biblioteca de sons afro-brasileiros BR), Freesound, ZapSplat

### 9.4 Voz

- **Decisão:** sem dublagem completa (custo proibitivo para solo dev).
- **Considerar:** vinhetas de voz em momentos-chave — abertura, rituais, final. Máximo 5–10 linhas dubladas por personagem principal.
- **Idioma:** português brasileiro. Considerar sotaque baiano/nordestino para autenticidade.

### 9.5 Estrutura de áudio por cena

| Tipo de cena | Áudio |
|-------------|-------|
| Quilombo (dia) | Loop leve, atabaques distantes, pássaros |
| Quilombo (noite/ritual) | Atabaques próximos, agogô, tensão crescente |
| Mata | Ambiente denso, berimbau suave, insetos |
| Fazenda | Silêncio tenso, vento, ausência de percussão |
| Encruzilhada (Exu) | Dissonância, agogô isolado, silêncio quebrado |
| Flashback/memória | Melodia suave, xequerê, reverb aumentado |

---

## 10. Tecnologia e pipeline `[PARCIAL]`

**Restrição central:** desenvolvimento exclusivamente pelo celular, via Claude Code (web) + GitHub.

- **Engine candidata:** Ren'Py é o padrão de VN, mas exige build local. Para mobile-only, avaliar **stack web (HTML/JS + biblioteca de narrativa como Ink)** que roda no browser e pode ser empacotada depois.
- **Versionamento:** Git/GitHub (repositório já criado). Editar arquivos via GitHub mobile + Claude Code.
- **Gargalo conhecido:** build para APK/IPA exige ambiente local — etapa final, fora do fluxo mobile.
- **Decisão pendente:** engine definitiva. Vai determinar todo o pipeline.

---

## 11. Monetização `[EM ABERTO]`

Opções comuns no mercado VN mobile:
- Premium (pago único)
- Freemium (capítulos iniciais grátis + desbloqueio)
- Free + apoio (Patreon/doação)

*Decidir mais tarde — não bloqueia o início do desenvolvimento.*

---

## 12. Escopo e fases de desenvolvimento `[GUIA]`

### Fase 1 — Conceito ✅ (em andamento)
Ideia, público, mercado, referências, viabilidade. **Faltam:** finalizar pilares e arquitetura narrativa.

### Fase 2 — Pré-produção (próxima)
- GDD completo (este documento)
- Bíblia de personagens
- Roteiro do **piloto** (primeiro capítulo / vertical slice)
- Definição da engine
- Protótipo mínimo: uma cena jogável com 1 escolha e 1 orixá

### Fase 3 — Produção
Roteiro completo, arte, código, áudio. A fase mais longa.

### Fase 4 — Alpha
Jogo jogável do início ao fim (mesmo cru).

### Fase 5 — Beta
Playtesters externos. Coletar feedback qualitativo (recurso escasso em indie — priorizar).

### Fase 6 — Lançamento
Página nas stores, marketing, build final (exige computador).

---

## 13. Riscos `[VIVO]`

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Qualidade da escrita (principal fator de sucesso/fracasso em VN) | Alto | Investir pesado em roteiro antes de código |
| Representação cultural inadequada | Alto | Pesquisa rigorosa; considerar consultoria/sensitivity reader |
| Escopo grande demais (nunca termina) | Alto | Vertical slice primeiro; manter duração-alvo enxuta |
| Deriva de estilo visual na arte IA | Médio | Templates de prompt documentados; revisão de consistência por lote |
| Toques de orixás usados de forma irrespeitosa | Alto | Consultar fontes (Prandi, Verger) para cada toque; considerar orientação de praticante |
| Build mobile-only travado | Médio | Planejar etapa de build com acesso a computador |
| Engine errada escolhida tarde | Médio | Decidir engine ainda na pré-produção |
| Áudio genérico sem identidade | Médio | Comissionar percussionista para temas principais; não depender só de IA |

---

## 14. Próximos passos imediatos

1. ✅ ~~Fechar os **pilares de design**~~ (seção 2 — definidos)
2. ✅ ~~Definir **sistema de escolhas**~~ (seção 7 — foldback + afinidade oculta)
3. ✅ ~~Definir **estilo visual**~~ (seção 8 — gravura/xilogravura)
4. ✅ ~~Definir **direção de áudio**~~ (seção 9 — atabaques + toque por orixá)
5. **Criar a bíblia de personagens** (seção 5 — próxima etapa)
6. Definir **arquitetura narrativa** dos 3 atos (seção 7.1)
7. Escrever o **roteiro do piloto** (cap. 1 / vertical slice)
8. Decidir a **engine** definitiva

---

*Última atualização: defina via commit. Mantenha este documento sincronizado com as decisões reais do projeto.*
