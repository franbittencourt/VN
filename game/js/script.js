/* global monogatari */

// =============================================================
// "O QUE NASCE LIVRE" — Capítulo 1: "O Que a Mata Trouxe"
// Sistema de afinidade dos orixás implementado via storage.
// Ver /docs/GDD.md, ramificacoes_narrativas.md e biblia_personagens.md
// =============================================================

// -------------------------------------------------------------
// PERSONAGENS
// Cor de cada um usada nas caixas de diálogo.
// -------------------------------------------------------------
monogatari.characters ({
	'bento': { name: 'Bento', color: '#e8d9b5' },
	'malaquias': { name: 'Malaquias', color: '#4a7c3a' },   // verde de Ogum
	'firmina': { name: 'Firmina', color: '#d98e3a' },
	'caetano': { name: 'Caetano', color: '#3a6b7c' },       // azul-verde de Oxóssi
	'tiao': { name: 'Tião', color: '#8a7355' },
	'luzia': { name: 'Luzia', color: '#6fa8d0' },           // azul-claro de Iemanjá
	'damiana': { name: 'Vó Damiana', color: '#c9c9c9' },
	'narracao': { name: '', color: '#a89a7f' }              // voz interna de Bento
});

// -------------------------------------------------------------
// AFINIDADE COM OS ORIXÁS
// As variáveis em si são declaradas em js/storage.js (carregado
// antes deste arquivo). Aqui ficam só as funções utilitárias.
// Nunca exibidas ao jogador — cf. GDD 9.1 / ramificações §7.
// -------------------------------------------------------------

// Função utilitária para somar afinidade sem quebrar o "voltar" do jogador.
// Uso dentro do script: function () { return monogatari.afinidade('iemanja', 2); }
function afinidade (orixa, valor) {
	const atual = monogatari.storage ().afinidade;
	atual[orixa] += valor;
	monogatari.storage ({ afinidade: atual });
	return true;
}

function setFlag (nome, valor) {
	const atual = monogatari.storage ().flags;
	atual[nome] = valor;
	monogatari.storage ({ flags: atual });
	return true;
}

// -------------------------------------------------------------
// ASSETS — backgrounds (scenes), música e CGs.
// Troque os caminhos quando os arquivos de arte/áudio existirem
// em /assets/scenes, /assets/music, /assets/gallery.
// -------------------------------------------------------------
monogatari.assets ('scenes', {
	'forja': 'forja.jpg',
	'terreiro': 'terreiro.jpg',
	'mata': 'mata.jpg',
	'casa': 'casa.jpg',
	'clareira_noite': 'clareira_noite.jpg',
	'casa_damiana': 'casa_damiana.jpg'
});

monogatari.assets ('music', {
	'quilombo_dia': 'quilombo_dia.mp3',
	'mata_ambiente': 'mata_ambiente.mp3',
	'tensao_silencio': 'tensao_silencio.mp3',
	'alerta_agogo': 'alerta_agogo.mp3',
	'memoria_xequere': 'memoria_xequere.mp3'
});

monogatari.assets ('gallery', {
	'cg_chegada_luzia': 'cg_01_chegada_luzia.jpg'
});

// -------------------------------------------------------------
// ROTEIRO — Capítulo 1
// -------------------------------------------------------------
monogatari.script ({

	'Start': [
		'jump Cap1_Cena1_Forja'
	],

	// ===========================================================
	// CENA 1 — A FORJA
	// ===========================================================
	'Cap1_Cena1_Forja': [
		'show scene forja with fadeIn',
		'play music quilombo_dia with loop',

		'narracao Seu Malaquias diz que o ferro conta a verdade. Que madeira aceita prego calado, mas ferro, não — ferro só vira alguma coisa se passar pelo fogo. Ele diz isso toda vez que eu erro a batida. Ele diz isso muito.',
		'malaquias De novo.',
		'narracao A enxada nem parece enxada ainda. Parece o que eu sou: um pedaço de coisa esperando dar forma.',
		'malaquias Você bate com raiva. Raiva entorta.',
		'bento Eu bato do jeito que o senhor ensinou.',
		'malaquias Ensinei a força. Não ensinei a pressa. No Paraguai, o cabo dizia: soldado apressado morre descansado.',
		'bento O senhor sempre fala do Paraguai.',
		'malaquias Porque o Paraguai sempre fala de mim. De novo.',

		{
			'Choice': {
				'Dialog': 'bento (O que eu pergunto agora?)',
				'PerguntarGuerra': {
					'Text': 'Por que o senhor foi pra guerra?',
					'Do': 'jump Cap1_Forja_PerguntaGuerra'
				},
				'PerguntarForjava': {
					'Text': 'O que o senhor forjava lá?',
					'Do': 'jump Cap1_Forja_PerguntaForjava'
				},
				'FicarCalado': {
					'Text': '(Só bater de novo, calado)',
					'Do': 'jump Cap1_Forja_Calado'
				}
			}
		}
	],

	'Cap1_Forja_PerguntaGuerra': [
		'malaquias Fui escravo brigando pela bandeira de quem me acorrentou. Voltei livre. Vai entender a conta.',
		'jump Cap1_Cena1_Fim'
	],

	'Cap1_Forja_PerguntaForjava': [
		'malaquias Baioneta. Agora forjo enxada. O braço é o mesmo. O que muda é o que a mão decide.',
		function () { return afinidade ('ogum', 1); },
		'jump Cap1_Cena1_Fim'
	],

	'Cap1_Forja_Calado': [
		'malaquias (aprova com um grunhido) Aprendeu alguma coisa hoje, afinal.',
		'jump Cap1_Cena1_Fim'
	],

	'Cap1_Cena1_Fim': [
		'narracao Lá fora o galo cantou atrasado, como sempre. No quilombo do Passo da Pedra até o galo tem preguiça. Dezesseis anos que eu vivo aqui. Dezesseis anos que meu pai me trouxe no escuro, enrolado num pano, antes que eu soubesse que existia mundo. Livre, dizem. Nasci livre. Tá escrito numa lei que eu nunca vi, guardada numa cidade que eu não conheço, assinada por gente que não sabe meu nome.',
		'jump Cap1_Cena2_Terreiro'
	],

	// ===========================================================
	// CENA 2 — O TERREIRO CENTRAL
	// ===========================================================
	'Cap1_Cena2_Terreiro': [
		'show scene terreiro with fadeIn',

		'firmina Deixou o velho do Paraguai te fazer de bigorna de novo?',
		'bento Aprendiz. A palavra é aprendiz.',
		'firmina A palavra é teimoso. Todo mundo sabe que tu tem medo de fogo desde que caiu na fogueira de São João.',
		'bento Eu tinha sete anos!',
		'firmina E gritou que nem porco até os doze. (ri; muda de tom) Vó Damiana perguntou de ti.',
		'bento De mim? Por quê?',
		'firmina Sei lá. Jogou os búzios ontem pros mais velhos e depois ficou te olhando no terreiro. Aquele olhar dela de quem leu carta que não era pra ler.',
		'narracao Firmina nasceu aqui, igual eu. Diferente de mim, nunca teve dúvida de que isso significa alguma coisa. Pra ela o Passo da Pedra não é esconderijo — é o mundo, inteiro, com tudo dentro.',

		{
			'Choice': {
				'Ir': {
					'Text': 'Vou lá falar com ela.',
					'Do': 'jump Cap1_Terreiro_Curioso'
				},
				'Adiar': {
					'Text': 'Coisa de velho. Depois eu vejo.',
					'Do': 'jump Cap1_Terreiro_Adia'
				}
			}
		}
	],

	'Cap1_Terreiro_Curioso': [
		function () { return setFlag ('curiosoDoSagrado', true); },
		'firmina Tu? Procurando a Vó? O mundo tá acabando mesmo.',
		'jump Cap1_Cena3_Mata'
	],

	'Cap1_Terreiro_Adia': [
		function () { return setFlag ('adiaSagrado', true); },
		'firmina Depois não existe, Bento. Existe agora e existe tarde demais.',
		'jump Cap1_Cena3_Mata'
	],

	// ===========================================================
	// CENA 3 — A MATA
	// ===========================================================
	'Cap1_Cena3_Mata': [
		'show scene mata with fadeIn',
		'play music mata_ambiente with loop fade 2',

		'narracao Toda semana Caetano me leva mato adentro. Meu pai pediu a ele, anos atrás: "ensina o menino a não se perder". Caetano ensinou o contrário — a se perder de propósito, que é a única forma de ninguém te achar.',
		'caetano (agachado, mão no chão) Olha.',
		'bento Pegada?',
		'caetano Pergunta errada.',
		'bento ...Pegada de quê?',
		'caetano Ainda errada.',
		'narracao Ele espera. Caetano espera como a mata espera — sem pressa e sem dó.',
		'bento ...Pra onde vai?',
		'caetano (quase sorri) Agora sim. Bota rasgada. Passada curta, funda no calcanhar. Gente cansada, carregando o próprio peso como se fosse castigo. Veio da banda da Fazenda Boa Vista. Vai... vai pra cá.',
		'bento Pra cá? Alguém fugido?',
		'caetano Ou alguém atrás de fugido. Bota de sinhá não rasga. Bota de capataz, também não. Volta pra casa antes do escuro. E Bento —',
		'bento Sim?',
		'caetano Rastro a gente conta pra quem precisa saber. Não pra quem gosta de ouvir.',
		function () { return afinidade ('oxossi', 1); },
		'narracao No caminho de volta a mata inteira parecia prender a respiração. Ou era só eu.',
		'jump Cap1_Cena4_Casa'
	],

	// ===========================================================
	// CENA 4 — A CASA
	// ===========================================================
	'Cap1_Cena4_Casa': [
		'show scene casa with fadeIn',
		'play music tensao_silencio with loop fade 3',

		'tiao Telhado da Nazária. Amanhã. Duas mãos rendem mais que uma.',
		'bento Tá.',
		'tiao (olha o filho por cima do prato) Caetano te levou longe hoje.',
		'bento Nem tanto.',
		'narracao Meu pai fala em trabalho porque trabalho é o idioma dele. "Telhado da Nazária" quer dizer "quero você por perto". Eu aprendi a traduzir cedo. O que eu nunca aprendi é o que fazer quando tenho uma coisa entalada — dessas que mudam a cara da noite.',

		{
			'Choice': {
				'Dialog': 'bento (Conto pro meu pai o que vi na mata?)',
				'Contar': {
					'Text': 'Contar o que viu na mata.',
					'Do': 'jump Cap1_Casa_Contar'
				},
				'Guardar': {
					'Text': 'Guardar pra si.',
					'Do': 'jump Cap1_Casa_Guardar'
				}
			}
		}
	],

	'Cap1_Casa_Contar': [
		function () { return afinidade ('iemanja', 1); },
		function () { return setFlag ('paiSabe', true); },
		'bento Caetano achou rastro. Vindo da Boa Vista. Gente cansada, ele disse.',
		'narracao (Tião para de comer. O silêncio dura três batidas do fogo.)',
		'tiao (baixo) Da Boa Vista.',
		'bento O senhor conhece lá?',
		'tiao (volta a comer, mais devagar) Conheci. Tranca a porta hoje.',
		'narracao Foi tudo que ele disse. Mas a mão dele tremeu no prato, e meu pai tem mão de carpinteiro — mão que não treme nem quando a madeira racha.',
		'jump Cap1_Cena5_Noite'
	],

	'Cap1_Casa_Guardar': [
		function () { return afinidade ('exu', 1); },
		function () { return setFlag ('paiNaoSabe', true); },
		'bento Longe não. O de sempre.',
		'tiao (assente devagar) Hm.',
		'narracao Caetano disse: rastro se conta pra quem precisa saber. Meu pai precisava? Eu não sabia. E quando eu não sei, eu guardo. Guardar é o meu jeito de não errar — ou de errar sozinho, que dói menos.',
		'jump Cap1_Cena5_Noite'
	],

	// ===========================================================
	// CENA 5 — A NOITE (chegada de Luzia)
	// ===========================================================
	'Cap1_Cena5_Noite': [
		'show scene clareira_noite with fadeIn',
		'play music alerta_agogo with loop fade 1',

		'narracao Os cachorros começaram primeiro. Depois o sino de pau que o Malaquias inventou — três toques, espera, três toques. Eu nunca tinha ouvido os três toques fora de treino. Ninguém tinha.',
		'malaquias (voz de guerra, baixa e total) Ninguém acende mais tocha. Mulher e criança pro paiol. Homem que sabe segurar cabo, comigo.',
		'narracao E então a mata se abriu.',

		'show image cg_chegada_luzia with fadeIn',
		// CG sugerida: silhueta de mulher rompendo a mata à noite, pano azul-claro na cabeça.
		// Estilo xilogravura, acento de cor de Iemanjá — cf. GDD 8.1.

		'narracao Uma mulher. Descalça de um pé só. O braço esquerdo pintado de escuro que não era tinta. Ela atravessou a clareira como quem atravessa um rio — lutando contra uma correnteza que ninguém mais via — e caiu de joelhos no meio de todos nós.',
		'caetano (chegando por trás dela, arco ainda na mão) Ela veio sozinha. Por ora.',
		'narracao A mulher levantou a cabeça. Procurou rosto por rosto, tocha por tocha, com uma fome que dava medo de olhar. E parou em mim.',
		'luzia (um fio de voz) ...Cresceu.',
		'tiao Luzia.',
		'narracao A mulher que me pariu num chão de fazenda. A mulher que me entregou pro escuro pra que o escuro me salvasse. Dezesseis anos de distância caíram ajoelhados na minha frente, sangrando pelo braço, me olhando como se eu fosse a última porta do mundo.',

		'hide image cg_chegada_luzia',

		{
			'Choice': {
				'Correr': {
					'Text': 'Correr até ela.',
					'Do': 'jump Cap1_Noite_Abraco'
				},
				'Gritar': {
					'Text': 'Gritar por Vó Damiana — ela está sangrando.',
					'Do': 'jump Cap1_Noite_Socorro'
				},
				'Parado': {
					'Text': 'Ficar parado.',
					'Do': 'jump Cap1_Noite_Congelou'
				}
			}
		}
	],

	'Cap1_Noite_Abraco': [
		function () { return afinidade ('iemanja', 2); },
		function () { return setFlag ('abraco', true); },
		'narracao Eu não decidi. As pernas decidiram. Quando dei por mim estava no chão junto dela, segurando um corpo que eu não conhecia e que era minha origem inteira. Ela cheirava a mato, a sangue e a uma coisa antiga que eu não sabia nomear.',
		'luzia (dentro do meu ombro) Meu rio.',
		'narracao Eu não sabia o que respondia um rio. Fiquei.',
		'jump Cap1_Coda'
	],

	'Cap1_Noite_Socorro': [
		function () { return afinidade ('oxossi', 1); },
		function () { return afinidade ('ogum', 1); },
		function () { return setFlag ('socorroPrimeiro', true); },
		'narracao "VÓ DAMIANA! Ela tá ferida!" Minha voz saiu de comando, que nem a do Malaquias, e me assustou mais que tudo naquela noite.',
		'narracao A Vó já vinha vindo — a Vó sempre já vem vindo. Luzia me olhou enquanto a levavam. Não sei se o que vi no olhar dela foi orgulho ou foi pergunta. Talvez as duas coisas. Talvez em mãe seja tudo a mesma coisa.',
		'jump Cap1_Coda'
	],

	'Cap1_Noite_Congelou': [
		function () { return afinidade ('exu', 1); },
		function () { return setFlag ('congelou', true); },
		'narracao Dezesseis anos ensaiando esse encontro no escuro da cabeça — e quando ele veio, eu virei pedra. Todo mundo se moveu menos eu. Meu pai a ergueu, a Vó chegou com panos, o Malaquias fechou a ronda.',
		'narracao E eu ali, plantado, aprendendo da pior forma a primeira lição da encruzilhada: quem não escolhe também escolheu.',
		'jump Cap1_Coda'
	],

	// ===========================================================
	// CODA — fechamento do capítulo
	// ===========================================================
	'Cap1_Coda': [
		'show scene casa_damiana with fadeIn',
		'play music memoria_xequere with loop fade 3',

		'narracao Deixaram Luzia com a Vó. Da porta, eu via as mãos velhas trabalhando ervas no pilão, e ouvi — baixinho, no meio das rezas que eu não entendia — a Vó falar como quem fala com a noite:',
		'damiana (sem se virar) Menino.',
		'bento ...Senhora.',
		'damiana O que a mata trouxe hoje não foi tua mãe, não. (vira; os olhos vivos na luz da vela) Tua mãe é o começo. O que a mata trouxe... foi a pergunta. (volta ao pilão) Dorme. Amanhã cedo, vem. Os búzios já sabem teu nome faz tempo. Tá na hora de tu saber o deles.',
		'narracao Eu não dormi. Do lado de fora, o quilombo inteiro fingia dormir de olho aberto. E longe, na banda da Boa Vista, um cachorro que não era nosso latiu três vezes.',

		'show scene #000000 with fadeIn 3',
		'centered CAPÍTULO 1 — FIM',
		'end'
	]

});
