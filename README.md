# O Que Nasce Livre
### Visual novel · Quilombos & Orixás · 1871–1888

Repositório do projeto. Documentação de design em `docs/`, jogo jogável em `game/`.

## Estrutura

```
VN/
├── CLAUDE.md                    ← contexto para o Claude Code (leia primeiro)
├── docs/                        ← documentos de design (fonte da verdade da narrativa)
│   ├── GDD.md                   ← Game Design Document — documento central
│   ├── ramificacoes_narrativas.md
│   ├── biblia_personagens.md
│   ├── roteiro_piloto_cap1.md
│   └── referencias.md           ← bibliografia de pesquisa
└── game/                        ← projeto Monogatari (engine de VN para web)
    ├── index.html                ← abre isso no browser para jogar
    ├── engine/                   ← engine — não editar
    ├── js/
    │   ├── script.js             ← ROTEIRO do jogo em código (cap. 1 já implementado)
    │   ├── storage.js            ← variáveis persistentes (afinidade dos orixás, flags)
    │   ├── options.js            ← configurações do jogo
    │   └── main.js                ← inicialização (raramente precisa editar)
    ├── style/                    ← CSS customizado
    └── assets/                   ← imagens, música, sons (pastas prontas, vazias por ora)
        ├── scenes/                ← backgrounds
        ├── characters/            ← sprites
        ├── music/
        ├── sounds/
        ├── gallery/               ← CGs
        └── ...
```

## Como testar o jogo

**Pelo GitHub Pages (recomendado para testar no celular):**
1. Nas configurações do repositório → Pages → source: branch `main`, pasta `/game`
2. Acesse a URL gerada pelo GitHub no navegador do celular

**Localmente (com computador):** abra `game/index.html` direto no navegador, ou rode `bun run serve` dentro de `game/` para live-reload.

## Engine: Monogatari

Motivo da escolha e alternativas avaliadas: ver `docs/GDD.md` seção 10.

Documentação oficial: https://monogatari.io/ · Sintaxe de roteiro: https://developers.monogatari.io/

## Estado atual

- ✅ GDD, ramificações, bíblia de personagens e roteiro do piloto completos
- ✅ Capítulo 1 ("O Que a Mata Trouxe") implementado e jogável em `script.js`
- ⏳ Assets (arte, música) ainda não criados — pastas prontas em `game/assets/`
- ⏳ Capítulos 2–8 ainda não roteirizados

Ver `docs/GDD.md` seção 14 para os próximos passos.
