# Enredo do Capítulo 2 — esboço estrutural

> **Estágio:** este é o *enredo* (tratamento cena a cena), o passo anterior à prosa anotada (como `roteiro_piloto_cap1.md`) e à implementação em `game/js/script.js`. Serve para travar a estrutura contra o mapa antes de escrever o texto final.
>
> **Título definido:** **"O Que Não Seca"** — a água do banho lava o susto, mas o que a estrada traz não seca; e a memória (de Luzia, do Tião, do próprio quilombo) também não. *(Decisão registrada — ver §8.)*

---

## 1. Localização no mapa (`ramificacoes_narrativas.md`)

- **Ato 1 — "O Sangue Chama", capítulo do meio** (entre o cap. 1 e o cap. 3).
- **Precede:** cap. 3, que traz a **primeira consulta aos búzios** (soft 6) e termina no **HARD BRANCH 1** (*"As tropas vêm atrás dela"* — Rota A esconder/resistir × Rota B despistar/negociar).
- **NÃO bifurca a história.** Todo o Ato 1 é soft branch: o cap. 2 move **afinidade** (oculta) e **flags**; nada abre rota exclusiva ainda.

### Função estrutural do capítulo (o que ele DEVE entregar)
1. Aprofundar dois dos mentores por **ofício** (Malaquias/Ogum e Caetano-Odé/Oxóssi discordam sobre como reagir à ameaça — nenhum está errado).
2. Abrir a **porta espiritual** do Bento: primeiro banho de ervas com a Vó Damiana (soft 5), preparando a consulta aos búzios do cap. 3.
3. Desenvolver a relação **mãe–filho** com Luzia se recuperando — modulada pela escolha do cap. 1.
4. **Apertar o cerco:** transformar o "cachorro estranho da Boa Vista" (gancho do cap. 1) em ameaça concreta, empurrando a comunidade para a consulta e o HB1 do cap. 3.
5. Realizar as soft branches **3** (vigília) e **4** (defender Firmina).

---

## 2. Estado de mundo na entrada (flags do cap. 1)

O cap. 2 **precisa checar** estas flags e variar de acordo (regra 8.2: toda cena carrega consequência visível de escolha anterior):

| Flag do cap. 1 | Efeito no cap. 2 |
|---|---|
| `curiosoDoSagrado` / `adiaSagrado` | Abertura: se curioso, Bento chega à casa da Vó por vontade; se adiou, chega puxado pela convocação da Vó (cap. 1 coda) e pela mãe — mais resistente, a Vó nota. |
| `paiSabe` / `paiNaoSabe` | Estado do Tião: se sabia do rastro, já vinha armado de silêncio; se não sabia, foi pego de surpresa e há uma dívida muda entre pai e filho (Bento omitiu). |
| `abraco` / `socorroPrimeiro` / `congelou` | Tom do reencontro à luz do dia com Luzia: ternura desajeitada (abraço) · respeito de quem a viu agir (socorro) · vergonha que ronda (congelou). |

---

## 3. Afinidades em jogo (pesos soft: ±1–2, nunca subtrai)

| Orixá | Como sobe no cap. 2 |
|---|---|
| 🟢 Ogum (Malaquias) | Querer confrontar a ameaça de frente; ajudar na paliçada/forja; apoiar a disciplina da vigília. |
| 🔷 Oxóssi (Caetano-Odé) | Ler a mata, rastrear quem ronda, mapear rota; sair na vigília para checar o barulho. |
| 🔵 Iemanjá (Luzia/Damiana) | Cuidar da mãe, perguntar da origem/memória, aceitar o banho de ervas como quem se entrega ao cuidado. |
| 🔴 Exu (sem mentor ainda — Querino é Ato 2) | Guardar informação, ler as pessoas, ficar na fresta, não tomar partido. Coerente com o "guardar" do cap. 1. |

> Lembrete (matriz §7): **nunca exibir número.** O primeiro *feedback diegético* de afinidade aparece na **coda** (o sonho — ver Cena 6).

---

## 4. Beats cena a cena

Assets reaproveitáveis (nada novo obrigatório): `casa_damiana`, `terreiro`, `mata`, `clareira_noite`, `casa`.

### CENA 1 — A CASA DA VÓ (manhã seguinte)
**BG:** `casa_damiana`, luz de manhã · **BGM:** `memoria_xequere` (memória) ou trilha calma
Bento não dormiu (gancho do cap. 1 coda). A Vó o convocou "amanhã cedo". Luzia está ali, o braço sendo tratado com folhas maceradas — a Vó trabalha o pilão. É o primeiro encontro à luz do dia entre mãe e filho.
- **Damiana ensina sem sermão:** nomeia as folhas pelo uso ("essa fecha o corte; essa tira a febre; essa é pra dormir sem sonho ruim"), não por doutrina — calundu do séc. XIX, folhas de cura (validado contra Verger, *Orixás*, cap. das folhas/ewé; `referencias.md`). Ela **não aconselha caminho**: observa Bento e devolve pergunta ("Você não dormiu. Corpo que não dorme carrega a noite dos outros. De quem é a noite que você tá carregando, menino?").
- **Semeia o banho:** a Vó diz que, à tarde, vai preparar um banho de folhas — pra ela (Luzia), e "pra quem mais precisar lavar o susto". (prepara a soft 5 da Cena 5.)

> **ESCOLHA 1 — [SOFT · relação com a mãe + afinidade]** *(modulada por abraco/socorro/congelou)*
> - **"Como era lá? A fazenda… eu."** → memória/origem · **Iemanjá +1** · flag `perguntouOrigem`
> - **"Quem vem atrás da senhora? Quantos?"** → medir a ameaça de frente · **Ogum +1** · flag `perguntouAmeaca`
> - *(Não perguntar. Ficar olhando as mãos da Vó no pilão.)* → guardar-se · **Exu +1** · flag `luziaGuardado`

### CENA 2 — O TERREIRO: OS MENTORES DIVERGEM
**BG:** `terreiro`, dia · **BGM:** `quilombo_dia` com tensão
O quilombo processa a noite. **Malaquias** (Ogum) quer preparar defesa — planta em fala o que será a posição dele no HB1 ("quem entrega um, entrega todos; então ninguém se entrega, e a gente se apronta"). **Caetano-Odé** (Oxóssi) discorda pelo ofício dele: antes de aprontar guerra, é preciso *saber* — ler a mata, achar quem rondou de noite, ter rota pronta ("parede não serve de nada se você não sabe de que lado vem o vento"). **Nenhum está errado** (regra 8.3).
- **Consequência plantada:** Caetano mostra sinal fresco — alguém circundou o quilombo na madrugada e ficou olhando de longe. O "cachorro estranho" do cap. 1 vira **um vigia de carne e osso**. O cerco começou.

> **ESCOLHA 2 — [SOFT · mentor + afinidade]** Onde Bento passa o dia:
> - **Com Malaquias, na paliçada/forja** → aprender ferro e preparo · **Ogum +1** · flag `diaComMalaquias`
> - **Com Caetano, lendo a linha da mata** → aprender rastro e rota · **Oxóssi +1** · flag `diaComCaetano`

### CENA 3 — A VIGÍLIA (soft 3) + FIRMINA (soft 4)
**BG:** `clareira_noite`, tochas contidas · **BGM:** `tensao_silencio` → `alerta_agogo` no incidente
Malaquias organiza vigília por causa do vigia visto de dia.

> **ESCOLHA 3a — [SOFT 3 · participar ou não da vigília]**
> - **Ficar de vigia** → desbloqueia o incidente abaixo E, mais tarde, a cena do agouro com a Vó (Cena 4). flag `vigiaNoturna`
> - **Recolher (cuidar de Luzia / dormir)** → cena curta e íntima com a mãe ou o pai; **perde** o agouro e a leitura da Vó. flag `naoVigiou`

**Se ficou de vigia:** no meio da noite, **Firmina** é flagrada fora do posto por Malaquias — ele lê como descuido. Ela tinha saído para checar um barulho na moita (instinto, não desleixo — a cara dela). Malaquias vem duro.

> **ESCOLHA 3b — [SOFT 4 · relação com Firmina]** *(só se `vigiaNoturna`)*
> - **Defender Firmina** ("ela foi ver o barulho — isso não é descuido, é ouvido bom") → laço com Firmina firma · flag `defendeuFirmina` · *(sem afinidade — é relação pura)*
> - **Dar razão a Malaquias** (a regra é a regra na vigília) → **Ogum +1** · flag `apoiouDisciplina`
> - *(Ficar calado, deixar os dois resolverem)* → **Exu +1** · flag `absteveVigilia`

**O agouro:** ainda na vigia, Bento vê algo na linha da mata — uma luz breve? um vulto? um bando de pássaros levantando à noite (o que não é natural). Guarda para levar à Vó.

### CENA 4 — O AGOURO E A VÓ *(só se `vigiaNoturna`)*
**BG:** `casa_damiana`, madrugada, velas · **BGM:** `memoria_xequere`
Bento leva o que viu à Vó Damiana. Ela **não interpreta como oráculo fechado** — devolve a pergunta e prepara o terreno dos búzios do cap. 3 ("o que a mata mostra, a mata mostra pra quem já tava olhando. Você tava olhando pra quê, menino?"). Cena de confiança que aproxima Bento do sagrado sem doutrinar. *(Se `naoVigiou`, esta cena não acontece — o jogador chega ao cap. 3 sem esse preparo, e a leitura dos búzios lá reflete isso.)*

### CENA 5 — O BANHO DE ERVAS (soft 5)
**BG:** `casa_damiana` ou beira d'água · **BGM:** trilha de água/memória
A Vó preparou o banho de folhas prometido. Luzia toma o dela (cura + espírito). A Vó oferece um a Bento — "pra lavar o susto de ontem". Historicamente: **banho de folhas maceradas** para limpeza/força espiritual, humilde, plausível para calundu do séc. XIX (não é iniciação formal — essa é a soft 2.4 do Ato 2; aqui é só a **porta se abrindo**). Validar contra Prandi/Verger.

> **ESCOLHA 4 — [SOFT 5 · abre/adia o caminho espiritual]**
> - **Aceitar o banho** → a porta se abre; a consulta aos búzios do cap. 3 ganha peso. flag `banhoAceito` · *(sem empurrão de orixá único — para não enviesar o equilíbrio do final oculto)*
> - **Adiar** ("depois, Vó — agora não") → flag `banhoAdiado`; mantém Bento "indefinido", fio que ressoa com o final oculto (que exige a iniciação do Ato 2 adiada)

> **Nota de equilíbrio:** o banho **não** soma afinidade de propósito. O final oculto ("O Que Nasce Livre") exige as 4 afinidades equilibradas — se cada passo espiritual empurrasse Iemanjá, o equilíbrio seria impossível. O banho move **flag**, não número.

### CENA 6 — CODA: O AVISO + O PRIMEIRO SONHO
**BG:** `casa` → escurece · **BGM:** trilha do orixá dominante (primeiro uso diegético)
Dois fechamentos:
1. **O aviso (gancho do HB1):** Caetano/Malaquias trazem a notícia dura que arma o cap. 3 — uma patrulha vista na estrada, ou recompensa anunciada na vila pela fugitiva da Boa Vista. O abstrato virou relógio. Amanhã, a Vó vai jogar os búzios; e a comunidade vai ter que decidir (HB1).
2. **O primeiro sonho (feedback diegético de afinidade):** Bento adormece e sonha — e a **textura/cor do sonho reflete a afinidade dominante até aqui**, sem nenhum número: forja e verde (Ogum) · mata e folha (Oxóssi) · água e azul (Iemanjá) · encruzilhada e vermelho (Exu). Se estiver equilibrado, o sonho é dos quatro ao mesmo tempo — semente visual do final oculto.

> **[FADE OUT · Cartão: "CAPÍTULO 2 — FIM"]**

---

## 5. Gancho para o Capítulo 3

O cap. 2 entrega ao cap. 3 exatamente o que ele pede:
- A ameaça concreta (patrulha/recompensa) → motiva a **consulta aos búzios** (soft 6) e o **HARD BRANCH 1**.
- As flags de preparo espiritual (`banhoAceito`/`banhoAdiado`, agouro visto ou não) → modulam a leitura da Vó nos búzios.
- O estado dos mentores (com quem Bento passou o dia) → posiciona quem ele escuta primeiro quando o HB1 dividir Ogum/Oxóssi (Rota A) de Exu/Iemanjá (Rota B).

---

## 6. Flags novas propostas (para `storage.js`)

```
perguntouOrigem, perguntouAmeaca, luziaGuardado,   // Cena 1
diaComMalaquias, diaComCaetano,                      // Cena 2
vigiaNoturna, naoVigiou,                             // Cena 3a
defendeuFirmina, apoiouDisciplina, absteveVigilia,  // Cena 3b
banhoAceito, banhoAdiado                             // Cena 5
```

---

## 7. Checklist de regras (auto-verificação, cf. CLAUDE.md e ramificações §8)

- [x] Toda escolha tem função (afinidade, flag, ou relação — nenhuma decorativa).
- [x] Afinidade nunca exibida como número — feedback diegético estreia na coda (sonho).
- [x] Mentores ensinam por ofício (folhas/pilão da Vó; ferro do Malaquias; rastro do Caetano) — nunca por sermão.
- [x] Vó Damiana não aconselha caminho — observa e devolve a pergunta.
- [x] Nenhum mentor está errado: Malaquias (aprontar) × Caetano (saber antes) — dois acertos parciais.
- [x] "Liberdade" não é dita de forma ingênua por adulto.
- [x] Ritual plausível para calundu séc. XIX (banho de folhas/ewé; búzios só no cap. 3) — validar contra Prandi/Verger antes da prosa.
- [x] Toda cena checa o estado do cap. 1 (flags da §2). *(HB1/HB2 ainda não ocorreram — regra A/B e C/D começa a valer só a partir do cap. 4.)*
- [x] Pelo menos 1 consequência visível de escolha anterior por cena.

---

## 8. Decisões tomadas (registradas em 2026-07-08)

1. **Título:** "O Que Não Seca". ✅
2. **Acusada na vigia:** Firmina (soft 4). ✅
3. **Sonho de afinidade:** estreia na coda do cap. 2 — via `Conditional` do Monogatari (a `Condition` retorna o orixá dominante ou `equilibrado`; empate = ramo equilibrado, semente do final oculto). ✅
4. **Densidade:** 4–5 escolhas — ficam 4 principais + 1 aninhada (3b, só para quem vigia). ✅

Próximos artefatos: `docs/roteiro_cap2.md` (prosa anotada) → implementação em `game/js/script.js` + flags novas em `game/js/storage.js`.
