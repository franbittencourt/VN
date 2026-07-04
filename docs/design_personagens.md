# Design de personagens — sprites do capítulo 1

Derivado de `biblia_personagens.md`. Para cada um dos 7 personagens que aparecem no capítulo 1: (a) descrição visual canônica consolidada e (b) prompt de geração pronto, em xilogravura P&B consistente com os backgrounds.

## Regras de estilo (todos os sprites)

- **Corpo inteiro**, pose neutra de pé, olhando para a frente.
- **Fundo neutro/transparente** (a engine sobrepõe o sprite ao background).
- Xilogravura P&B de alto contraste, mesma linguagem gráfica dos cenários.
- **Acento de cor ritual APENAS nos mentores** (Luzia, Malaquias, Caetano). Bento, Tião e Firmina são **puro preto-e-branco**. Vó Damiana não leva acento único — leva **contas multicoloridas discretas** (ela carrega todas as cores dos orixás, cf. bíblia §6).
- Para garantir consistência entre os 7, todo prompt termina com o **sufixo comum** abaixo.

### Sufixo de prompt comum (colar ao final de cada prompt)

> , full body, standing, neutral frontal pose, woodcut / xilogravura style, high contrast black and white, visible gouge carving texture, consistent bold line weight, Brazilian folk art, 19th century, Angola Janga graphic novel influence, plain flat neutral light-gray background, character isolated for cutout, no text, no lettering, no border

---

## 1. Bento — protagonista (P&B, sem acento)

**Descrição canônica:** rapaz negro de 16 anos, magro e sempre em leve movimento, como quem não assentou ainda no próprio corpo. Veste uma camisa clara herdada do pai, larga demais para ele — o tecido sobra nos ombros e nos punhos. Traço jovem, olhar que pergunta antes de afirmar. É o único personagem que, ao longo do jogo, pode assumir as cores de todos os orixás conforme a afinidade — mas no sprite base é puro preto-e-branco.

**Prompt:**
> young Black teenage boy, 16 years old, lean and slightly restless posture, wearing an oversized pale light shirt inherited from his father, sleeves and shoulders too big, curious searching expression, short cropped hair[SUFIXO]

## 2. Luzia — mãe · mentora de IEMANJÁ (acento azul-claro)

**Descrição canônica:** mulher negra de uns 34 anos, traços serenos marcados pelo cansaço da fuga. Cicatriz recente no braço esquerdo. Um pano azul-claro amarrado na cabeça — a cor de Iemanjá, o único acento colorido de sua figura. A serenidade não é doçura: é a firmeza de quem guarda a memória de todos.

**Prompt:**
> Black woman around 34 years old, serene but exhausted face, a recent scar on her left arm, wearing a worn dress, a light sky-blue cloth wrapped around her head as the only color accent in an otherwise black and white figure, dignified tired posture[SUFIXO]

## 3. Tião — pai (P&B, sem acento)

**Descrição canônica:** homem negro de uns 40 anos, carpinteiro. Mãos enormes e calejadas, quase sempre segurando uma ferramenta. Costas curvadas pelo ofício — não pela derrota. Rosto fechado de quem diz "cuidado" no lugar de "eu te amo". Puro preto-e-branco.

**Prompt:**
> Black man around 40 years old, a carpenter, very large calloused hands often holding a wood tool, broad shoulders slightly hunched from labor not defeat, reserved closed expression, simple worker clothes[SUFIXO]

## 4. Malaquias — liderança · mentor de OGUM (acento verde)

**Descrição canônica:** o homem mais pesado do elenco, uns 45 anos, ferreiro e veterano da Guerra do Paraguai. Avental de couro, uma perna rígida, cicatriz de guerra no rosto ou no braço. Verde (e preto) é a cor de Ogum — um acento verde discreto no avental ou num pano. Corpo de quem já viu o pior e se prepara para ele.

**Prompt:**
> heavyset Black man around 45 years old, blacksmith and war veteran, wearing a leather apron, a war scar, one stiff leg, powerful build, stern prepared expression, a subtle deep-green accent on his apron or cloth as the only color in an otherwise black and white figure[SUFIXO]

## 5. Caetano (Odé) — mateiro · mentor de OXÓSSI (acento azul-verde)

**Descrição canônica:** homem negro magro e seco de uns 50 anos, o mateiro. Aljava de flechas às costas, arco na mão. Movimento econômico, silencioso. Azul e verde são as cores de Oxóssi — um acento azul-esverdeado discreto na roupa ou na aljava. Rosto atento, de quem lê a mata como página.

**Prompt:**
> lean wiry Black man around 50 years old, a forest tracker, a quiver of arrows on his back and a bow in hand, economical silent posture, alert attentive face, a subtle teal blue-green accent on his clothing or quiver as the only color in an otherwise black and white figure[SUFIXO]

## 6. Vó Damiana — zeladora · NEUTRA (contas multicoloridas discretas)

**Descrição canônica:** anciã africana, pequena e curvada, "mais velha que a estrada". Olhos vivíssimos que contrastam com o corpo miúdo. Veste branco. Carrega fios de contas coloridas (as cores de todos os orixás) — o único ponto de cor, e discreto. Não é mentora de um caminho: é quem lê todos.

**Prompt:**
> very old small hunched African elder woman, "older than the road", tiny frail body but extremely vivid alert eyes, wearing white garments, several strands of small discreet multicolored ritual beads across her chest as the only points of color in an otherwise black and white figure, wise knowing expression[SUFIXO]

## 7. Firmina — aliada da mesma geração (P&B, sem acento)

**Descrição canônica:** menina negra de 15 anos, nascida no quilombo — livre de fato e de direito. Trança alta, sempre descalça. Postura solta, rápida, de quem pertence ao lugar sem esforço. Expressão viva, provocadora, à beira do riso. Puro preto-e-branco.

**Prompt:**
> Black teenage girl, 15 years old, hair in a high braid, barefoot, loose confident quick posture, lively teasing expression on the edge of laughter, simple quilombo clothes[SUFIXO]

---

## Expressões (set mínimo do piloto)

3 expressões por personagem bastam no capítulo 1: **neutro**, **tenso**, **suave**.

| Expressão | Quando usar |
|---|---|
| `neutro` | pose/rosto base, entrada em cena |
| `tenso` | viradas de conflito, medo, alerta, dor |
| `suave` | ternura, memória, baixar a guarda |

**Convenção de nomes de arquivo:** `assets/characters/<id>_<expressao>.png`

```
bento_neutro.png     bento_tenso.png     bento_suave.png
luzia_neutro.png     luzia_tenso.png     luzia_suave.png
tiao_neutro.png      tiao_tenso.png      tiao_suave.png
malaquias_neutro.png malaquias_tenso.png malaquias_suave.png
caetano_neutro.png   caetano_tenso.png   caetano_suave.png
damiana_neutro.png   damiana_tenso.png   damiana_suave.png
firmina_neutro.png   firmina_tenso.png   firmina_suave.png
```

Para gerar `tenso`/`suave`, reaproveitar o mesmo prompt do personagem trocando a expressão facial (`tense alarmed expression` / `soft tender expression`) e mantendo TODO o resto idêntico para consistência.

---

## Checklist de descomentagem dos sprites em `script.js`

Os sprites já estão escritos em `monogatari.characters()` (propriedade `sprites`) e os comandos `show character` / `hide character` já estão nas cenas, mas **tudo comentado** com o marcador `// TODO-SPRITE:`.

> **Por que a declaração `sprites:` também fica comentada:** o Monogatari pré-carrega no load da página **todos os sprites declarados** — não só os usados por um `show` ativo. Se deixássemos a declaração ativa sem os arquivos, seriam 21 requisições 404 a cada abertura. Por isso a linha `sprites:` de cada personagem fica comentada até a arte existir.

Ao subir a arte de um personagem, descomentar **(1)** a linha `sprites:` dele em `characters()` **e (2)** os `show/hide character` das cenas abaixo. Testar a cena depois de cada lote:

- [ ] **Cena 1 (Forja):** `bento`, `malaquias` (entrada; `malaquias` → `tenso` em "Raiva entorta"; hide no fim).
- [ ] **Cena 2 (Terreiro):** `firmina`, `bento` (entrada; hide no fim).
- [ ] **Cena 3 (Mata):** `caetano`, `bento` (entrada; `caetano` → `tenso` em "o rosto fecha"; hide no fim).
- [ ] **Cena 4 (Casa):** `tiao`, `bento` (entrada; `tiao` → `tenso` em "Da Boa Vista"; hide no fim).
- [ ] **Cena 5 (Noite):** `malaquias` `tenso` (entrada); esconder sprites antes da CG; após a CG, `luzia` `tenso`/`suave` + `tiao`; hide no fim.
- [ ] **Coda:** `damiana` (entrada; → `suave` em "vira; os olhos vivos"); hide antes do fade preto.

Regra ao descomentar: só descomentar o `show`/`hide` de um personagem quando os 3 arquivos de expressão dele (ou ao menos `neutro`) existirem em `assets/characters/`. Testar a cena no jogo após cada lote.
