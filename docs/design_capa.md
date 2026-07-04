# Design da capa — tela inicial

Conceito e prompt de geração da imagem de fundo da tela-título (`main screen`). Segue o mesmo padrão de `pipeline_assets_cap1.md`.

**Arquivo alvo:** `assets/ui/capa.png`

---

## Conceito

A capa é a primeira imagem do jogo e precisa dizer, sem palavras, o que ele é: um jovem nascido livre diante de caminhos que não escolheu. Em vez de um retrato heroico, a imagem é uma **pergunta** — coerente com a fala da Vó Damiana no fim do capítulo 1 ("o que a mata trouxe foi a pergunta").

**Composição proposta:** a silhueta de Bento **de costas**, em primeiro plano, parado numa **encruzilhada** de onde partem quatro caminhos para dentro da mata/quilombo. O espectador vê o que Bento vê — a decisão à frente, não o rosto de quem decide. Cada um dos quatro caminhos carrega um **acento sutil** da cor ritual de um orixá, a única cor num quadro de outra forma preto-e-branco:

| Caminho | Orixá | Acento de cor | Motivo diegético |
|---|---|---|---|
| Esquerda | Ogum | verde (`#4a7c3a`) | ferro, forja, o caminho do confronto |
| Centro-esquerda | Oxóssi | azul-verde (`#3a6b7c`) | a mata, a caça, a rota de fuga |
| Centro-direita | Iemanjá | azul-claro (`#6fa8d0`) | a água, a memória, a mãe |
| Direita | Exu | vermelho (`#8c2f2f`) | a encruzilhada, a decisão, a fresta |

O **título** ("O Que Nasce Livre") não é gravado na imagem — é renderizado por cima, via HTML/CSS, para permanecer nítido em qualquer tela e idioma. Portanto a arte deve **reservar espaço** no terço superior (céu/copa das árvores mais escuros e vazios) para o texto assentar com legibilidade.

**Estética (GDD §8.1):** xilogravura brasileira, alto contraste preto-e-branco, traço de goiva visível, referência a Angola Janga (D'Salete). Os quatro acentos de cor são a exceção deliberada — o resto é P&B.

**Restrição técnica:** enquadramento paisagem, até 1920×1080px, comprimido para mobile. A composição deve funcionar tanto em landscape quanto recortada em telas mais estreitas (manter Bento e a encruzilhada centralizados).

---

## Prompt de geração (`assets/ui/capa.png`)

> title screen composition: back view silhouette of a young Black teenage boy standing at a crossroads, seen from behind, facing away into the scene, four dirt paths diverging ahead of him into a dense forest and a quilombo settlement at dusk, woodcut / xilogravura style, high contrast black and white, visible gouge carving texture, Brazilian folk art, 19th century, Angola Janga graphic novel influence, mostly black and white EXCEPT four subtle single-color accents — one path tinted deep green, one path teal blue-green, one path light sky blue, one path dark red — dramatic and quiet, the upper third of the image kept dark and empty (night sky / dark canopy) to leave room for a title overlay, cinematic vertical depth, no text, no lettering

**Notas de geração:**
- Se a IA insistir em desenhar o rosto, reforçar `strictly seen from behind, face not visible`.
- Se os quatro acentos de cor saírem fortes/saturados demais, pedir `desaturated, subtle color accents, almost monochrome`.
- Gerar algumas variações e escolher a que deixa o terço superior mais limpo (o título vai ali).

---

## Integração já feita no código

- `style/main.css`: `[data-screen="main"]` usa `assets/ui/capa.png` como `background` (cover, centralizado) com fallback `#0d0d0d` enquanto a imagem não existir. Botões do menu estilizados (fundo translúcido escuro, borda clara fina, serifada, hover dourado-palha `#e8d9b5`).
- `index.html`: título "O Que Nasce Livre" injetado no `<main-screen>` como overlay estilizado (o `<main-menu>` do Monogatari só renderiza botões, não o nome do jogo).

## Checklist

- [ ] Gerar `capa.png` com o prompt acima e escolher a melhor variação.
- [ ] Subir em `game/assets/ui/capa.png`.
- [ ] Conferir no celular: título legível sobre a arte, botões com contraste suficiente sobre a imagem.
