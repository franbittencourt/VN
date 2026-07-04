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
		curiosoDoSagrado: false,
		adiaSagrado: false,
		paiSabe: false,
		paiNaoSabe: false,
		abraco: false,
		socorroPrimeiro: false,
		congelou: false
	}
});
