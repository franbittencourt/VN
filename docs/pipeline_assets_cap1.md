# Pipeline de assets — Capítulo 1

Checklist prático para tirar o capítulo 1 da tela preta. Só isso já resolve: nenhum sprite de personagem é referenciado no `script.js` ainda (ver GDD §8.2 — sprites ficam para uma fase seguinte). O que falta são **6 backgrounds, 1 CG e 5 músicas**.

## Ferramentas recomendadas (grátis, funcionam pelo navegador do celular)

| Uso | Ferramenta | Por quê |
|---|---|---|
| Backgrounds + CG | **Bing Image Creator** (bing.com/create) ou **Microsoft Designer** | Grátis, roda no navegador mobile, boa aderência a prompts de estilo (xilogravura/woodcut) |
| Alternativa de imagem | **Leonardo.ai** (free tier diário) | Mais controle de estilo se o Bing não convencer |
| Música | **Suno** (suno.com, free tier) | Web app mobile-friendly, gera faixas instrumentais em loop a partir de prompt |
| Alternativa de música | **Udio** | Mesma proposta do Suno, use se preferir variar o resultado |

Depois de gerar cada arquivo, o caminho mais simples pelo celular é: no GitHub, abrir a pasta de destino (`game/assets/scenes`, `game/assets/gallery` ou `game/assets/music`) → **Add file → Upload files** → subir com o **nome exato** da tabela abaixo. Ou me manda o arquivo aqui no chat que eu cuido do commit.

**Restrições técnicas (GDD §8.3):** backgrounds até 1920×1080px comprimidos; a CG pode ser um pouco maior mas ainda otimizada para mobile. Músicas em `.mp3`, comprimidas (evitar arquivos brutos de estúdio).

---

## 1. Backgrounds (`game/assets/scenes/`)

### `forja.png` — Cena 1, madrugada
> blacksmith forge inside a quilombo settlement, dawn, glowing embers and anvil, hammer and iron tools, wood and clay walls, smoke rising, woodcut style, high contrast black and white, Brazilian folk art, 19th century, wide empty establishing shot, no people

### `terreiro.png` — Cena 2, manhã
> central clearing of a quilombo settlement, morning light, wattle-and-daub houses (pau a pique) surrounding a packed dirt terreiro, distant birds, woodcut style, high contrast black and white, Brazilian folk art, 19th century, wide empty establishing shot, no people

### `mata.png` — Cena 3, tarde
> dense tropical forest interior, afternoon, dappled sunlight cutting through thick canopy, undergrowth and roots, a faint footprint visible in soft earth, woodcut style, high contrast black and white, Brazilian folk art, 19th century, no people

### `casa.png` — Cena 4, fim de tarde
> humble one-room quilombo house interior, late afternoon, small ground fire pit (fogo de chão) with a cooking pot, simple wooden stools, packed earth floor, woodcut style, high contrast black and white, Brazilian folk art, 19th century, no people

### `clareira_noite.png` — Cena 5, noite fechada
> the same central clearing of the quilombo at night, torches lit around the perimeter, dark forest line at the edge, tense atmosphere, woodcut style, high contrast black and white, Brazilian folk art, 19th century, small warm torchlight accents, no people

### `casa_damiana.png` — Coda, noite, velas
> elder healer's hut interior at night, candlelight, drying herbs and clay pots hanging from beams, a low wooden pilão (mortar and pestle) with plants, woodcut style, high contrast black and white, Brazilian folk art, 19th century, no people

---

## 2. CG (`game/assets/gallery/`)

### `cg_01_chegada_luzia.png` — Cena 5, chegada de Luzia
Prioridade máxima do GDD §8.2 — é o primeiro momento em que uma cor ritual (Iemanjá) entra no jogo.

> key illustration: forest treeline at night, silhouette of a woman breaking through dense vegetation, half-collapsed to her knees, a pale white cloth on her head catching the only light in the scene, desperate and searching expression, woodcut / xilogravura style, high contrast black and white with a single light-blue accent color (Iemanjá's ritual color) on the cloth and on a wound on one arm, Brazilian folk art, 19th century, dramatic cinematic composition

---

## 3. Música (`game/assets/music/`)

Todas em loop, sem vocais, 1–3 min (cf. GDD §9.5).

### `quilombo_dia.mp3` — Cenas 1 e 2
> light atabaque hand drums played gently in the distance, morning birdsong, calm loopable ambient track, no vocals, afro-brazilian percussion, warm everyday quilombo atmosphere, 19th century

### `mata_ambiente.mp3` — Cena 3
> dense forest ambience, soft berimbau, insect sounds, subtle atabaque far in the distance, no vocals, looping meditative track, afro-brazilian, calm with a tense undertone

### `tensao_silencio.mp3` — Cena 4
> near silence, a single low fire crackling, sparse low drone, occasional distant single agogô bell hit, no vocals, unsettling quiet ambient loop, afro-brazilian minimalist

### `alerta_agogo.mp3` — Cena 5, abertura
> urgent agogô double bells in a syncopated alarm pattern, rising tension atabaque hits, distant dogs barking, dramatic afro-brazilian percussion, no vocals, crescendo loop for a night emergency

### `memoria_xequere.mp3` — Coda
> soft gentle melody, xequerê shaker texture, heavy reverb, dreamlike afro-brazilian ambient, no vocals, flashback / memory feeling, slow and tender

### `tema_abertura.mp3` — Tema principal / menu inicial
Tema da tela-título (`MainScreenMusic`, hoje vazio em `options.js`). É o cartão de visita sonoro do jogo — investimento prioritário do GDD §9.3 (idealmente comissionar percussionista; a geração por IA abaixo serve de rascunho/placeholder). Deve soar lento, digno, contido — não épico de trailer.
> slow dignified atabaque ritual drums, restrained contained melody, solemn and hopeful, spacious, a single agogô marking time, afro-brazilian, 19th century, no vocals, loopable main theme, respectful and grounded, not bombastic

---

## Ordem sugerida

1. **`clareira_noite.png` + `cg_01_chegada_luzia.png`** — maior impacto emocional, cena de clímax do capítulo.
2. Os outros 5 backgrounds, na ordem das cenas (forja → terreiro → mata → casa → casa_damiana).
3. As 5 músicas — testar uma de cada vez após subir, pra confirmar que o nome bate com o `script.js` (ver correção do typo `memoria_xequere` já aplicada).

Depois de subir cada lote, dá um refresh no jogo pelo GitHub Pages e confirma se carregou — imagem/áudio ausente não trava o jogo, só fica invisível/mudo, então é seguro testar incremental.
