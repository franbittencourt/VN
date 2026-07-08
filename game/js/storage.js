/* global monogatari */

// =============================================================
// VARIÁVEIS PERSISTENTES DO JOGO
// Salvas junto com o save/load do jogador.
// Ver docs/GDD.md (seção 9.1) e docs/ramificacoes_narrativas.md (seção 7)
// =============================================================

monogatari.storage ({

	// Afinidade com cada orixá — cresce por AÇÃO, nunca por escolher
	// o orixá diretamente (cf. ramificações §1). NUNCA exibir como
	// número na UI: o feedback deve ser diegético (cor, trilha, diálogo).
	afinidade: {
		ogum: 0,
		oxossi: 0,
		iemanja: 0,
		exu: 0
	},

	// Flags narrativas — registram decisões para leitura futura
	// (ex: Ato 2 e 3 verificam essas flags para variar diálogos).
	flags: {
		// —— Capítulo 1 ——
		curiosoDoSagrado: false,
		adiaSagrado: false,
		paiSabe: false,
		paiNaoSabe: false,
		abraco: false,
		socorroPrimeiro: false,
		congelou: false,

		// —— Capítulo 2 (cf. docs/enredo_cap2.md §6) ——
		perguntouOrigem: false,     // Cena 1: perguntou da fazenda/origem
		perguntouAmeaca: false,     // Cena 1: mediu a ameaça de frente
		luziaGuardado: false,       // Cena 1: guardou as perguntas
		diaComMalaquias: false,     // Cena 2: dia na paliçada/forja
		diaComCaetano: false,       // Cena 2: dia lendo a mata
		vigiaNoturna: false,        // Cena 3a: ficou de vigia
		naoVigiou: false,           // Cena 3a: recolheu
		defendeuFirmina: false,     // Cena 3b: tomou o lado dela
		apoiouDisciplina: false,    // Cena 3b: deu razão a Malaquias
		absteveVigilia: false,      // Cena 3b: ficou na fresta
		banhoAceito: false,         // Cena 5: aceitou o banho de folhas
		banhoAdiado: false          // Cena 5: adiou a porta espiritual
	}
});
