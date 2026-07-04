# Contexto do projeto para o Claude Code

Este é o repositório da visual novel **"O Que Nasce Livre"** — quilombos e orixás, 1871–1888.

## Leia primeiro, nesta ordem

1. `docs/GDD.md` — Game Design Document. Documento central; todas as decisões de design vivem aqui.
2. `docs/ramificacoes_narrativas.md` — mapa completo de ramificações, os 5 finais, matriz de afinidade.
3. `docs/biblia_personagens.md` — os 9 personagens, vozes, arcos, função estrutural de cada um.
4. `docs/roteiro_piloto_cap1.md` — roteiro do capítulo 1 em prosa anotada (referência de tom e formato).

## Onde o código do jogo vive

- `game/js/script.js` — o roteiro em si, na sintaxe da engine Monogatari. O capítulo 1 já está implementado aqui.
- `game/js/storage.js` — variáveis persistentes: afinidade com os 4 orixás (ogum, oxossi, iemanja, exu) e flags narrativas.
- `game/js/options.js` — configurações do motor (nome do jogo, orientação, etc).
- Engine em `game/engine/` — **nunca editar**, é código de terceiros (Monogatari, MIT license).

## Regras de escrita ao gerar novas cenas (checklist obrigatório)

Extraídas do GDD e da bíblia — verificar antes de considerar uma cena pronta:

- [ ] Toda escolha tem função: muda diálogo, soma afinidade, ou ambos. Nunca uma escolha "decorativa" (GDD 7.3).
- [ ] Afinidade nunca é exibida como número ao jogador — só efeito diegético (cor, trilha, reação de personagem).
- [ ] Mentores (Luzia/Iemanjá, Malaquias/Ogum, Caetano/Oxóssi, Querino/Exu) ensinam por ofício, nunca por sermão (bíblia §11.1).
- [ ] Vó Damiana nunca aconselha qual caminho seguir — só traduz e devolve a pergunta (bíblia §11.3).
- [ ] Nenhum mentor está simplesmente errado; cada um está certo demais sobre uma parte do mundo.
- [ ] A palavra "liberdade" não é dita de forma ingênua por personagem adulto (ramificações §8.4).
- [ ] Todo elemento ritual/religioso é plausível para **calundu do séc. XIX** — não candomblé moderno anacrônico. Validar contra Prandi/Verger (`docs/referencias.md`).
- [ ] Toda cena após o HARD BRANCH 1 verifica o estado A/B; toda cena após o HARD BRANCH 2, o estado C/D (ramificações §8).

## Convenções técnicas do script.js

- Labels de capítulo seguem o padrão `CapN_CenaX_Nome` (ex: `Cap1_Cena3_Mata`).
- Escolhas usam `Do: 'jump NomeDoLabel'`.
- Afinidade é somada via função utilitária: `function () { return afinidade ('ogum', 1); }` (nunca subtrai — cf. ramificações §7).
- Flags narrativas: `function () { return setFlag ('nomeDaFlag', true); }`.
- Cores de personagem no diálogo já mapeiam a cor ritual do orixá associado (ver início de `script.js`).

## Assets pendentes

As pastas em `game/assets/` estão criadas mas vazias. Backgrounds, sprites e música ainda não existem — ver GDD seções 8 e 9 para o pipeline planejado (xilogravura via IA + comissão para CGs-chave; atabaque/agogô via IA + percussionista para temas principais). Ao referenciar um asset no script que ainda não existe, é esperado — a engine vai só não mostrar a imagem/tocar o som até o arquivo ser adicionado.

## Ao trabalhar em capítulos novos

Seguir a estrutura de atos definida em `docs/ramificacoes_narrativas.md` (3 atos, 2 hard branches, 5 finais). Antes de escrever, localizar a cena no mapa e confirmar: que estado de mundo ela pressupõe, que flags ela deve checar, e que afinidades ela deve poder mover.
