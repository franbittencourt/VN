/* global monogatari */

// =============================================================
// "O QUE NASCE LIVRE"
//   Capítulo 1: "O Que a Mata Trouxe" (expandido, ~3k palavras)
//   Capítulo 2: "O Que Não Seca" (docs/roteiro_cap2.md)
// Ver /docs/GDD.md, ramificacoes_narrativas.md e biblia_personagens.md
// =============================================================

// -------------------------------------------------------------
// PERSONAGENS
// Cor de cada um usada nas caixas de diálogo (cor ritual do orixá
// associado; codificação diegética, NÃO indicador de afinidade).
//
// Sprites: o Monogatari PRÉ-CARREGA todos os sprites *declarados* já no
// load da página (não só os usados por um 'show character' ativo). Por isso
// a linha `sprites:` de cada personagem fica COMENTADA com // TODO-SPRITE —
// assim nenhum arquivo inexistente é baixado e o jogo não gera 404s. Ao subir
// a arte de um personagem, descomentar a linha sprites dele E os
// 'show character' das cenas (cf. checklist em docs/design_personagens.md).
// Sem 'directory', cada arquivo resolve para assets/characters/<arquivo>.
// -------------------------------------------------------------
monogatari.characters ({
	'bento': {
		name: 'Bento', color: '#e8d9b5',
		// TODO-SPRITE: sprites: { neutro: 'bento_neutro.png', tenso: 'bento_tenso.png', suave: 'bento_suave.png' }
	},
	'malaquias': {                                          // verde de Ogum
		name: 'Malaquias', color: '#4a7c3a',
		// TODO-SPRITE: sprites: { neutro: 'malaquias_neutro.png', tenso: 'malaquias_tenso.png', suave: 'malaquias_suave.png' }
	},
	'firmina': {
		name: 'Firmina', color: '#d98e3a',
		// TODO-SPRITE: sprites: { neutro: 'firmina_neutro.png', tenso: 'firmina_tenso.png', suave: 'firmina_suave.png' }
	},
	'caetano': {                                            // azul-verde de Oxóssi
		name: 'Caetano', color: '#3a6b7c',
		// TODO-SPRITE: sprites: { neutro: 'caetano_neutro.png', tenso: 'caetano_tenso.png', suave: 'caetano_suave.png' }
	},
	'tiao': {
		name: 'Tião', color: '#8a7355',
		// TODO-SPRITE: sprites: { neutro: 'tiao_neutro.png', tenso: 'tiao_tenso.png', suave: 'tiao_suave.png' }
	},
	'luzia': {                                              // azul-claro de Iemanjá
		name: 'Luzia', color: '#6fa8d0',
		// TODO-SPRITE: sprites: { neutro: 'luzia_neutro.png', tenso: 'luzia_tenso.png', suave: 'luzia_suave.png' }
	},
	'damiana': {
		name: 'Vó Damiana', color: '#c9c9c9',
		// TODO-SPRITE: sprites: { neutro: 'damiana_neutro.png', tenso: 'damiana_tenso.png', suave: 'damiana_suave.png' }
	},
	'narracao': { name: '', color: '#a89a7f' }              // voz interna de Bento (sem sprite)
});

// -------------------------------------------------------------
// AFINIDADE COM OS ORIXÁS (variáveis em js/storage.js)
// -------------------------------------------------------------
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
// ASSETS
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
// ROTEIRO — Capítulo 1 (expandido)
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
		// TODO-SPRITE: 'show character malaquias neutro at center with fadeIn',
		// TODO-SPRITE: 'show character bento neutro at right with fadeIn',

		'narracao O fogo da forja acorda antes de todo mundo no Passo da Pedra. Quando eu chego, ainda escuro, seu Malaquias já está lá, e as brasas já respiram sozinhas naquele vermelho fundo que não é bem cor — é mais uma coisa viva dentro do carvão.',
		'narracao Seu Malaquias diz que o ferro conta a verdade. Que madeira aceita prego calado, mas ferro, não. Ferro só vira alguma coisa se passar pelo fogo, e mesmo passando pelo fogo, ainda pode entortar na sua mão se você não souber o que quer dele. Ele diz isso toda vez que eu erro a batida. Ele diz isso muito.',
		'malaquias De novo.',
		'narracao A peça na bigorna nem parece enxada ainda. É um pedaço torto de metal aquecido, mais perto do nada do que de qualquer coisa. Parece o que eu sou, penso, e logo espanto o pensamento — porque pensamento assim, cedo demais, azeda o dia inteiro.',
		// TODO-SPRITE: 'show character malaquias tenso at center',   // vira: reprova a batida com raiva
		'malaquias Você bate com raiva. Raiva entorta o ferro igual entorta o homem.',
		'bento Eu bato do jeito que o senhor ensinou.',
		'malaquias Ensinei a força. Não ensinei a pressa. Uma coisa é a outra ao contrário. No Paraguai, o cabo velho dizia: soldado apressado morre descansado.',
		'bento (baixinho) O senhor sempre fala do Paraguai.',
		'malaquias Porque o Paraguai sempre fala de mim. Ele não me larga, menino. Todo ferro quente que eu pego, ele me lembra de outro ferro, de outro tempo.',
		'narracao Ele vira a peça na brasa com a tenaz, sem pressa nenhuma, e por um instante o rosto dele fica laranja de fogo. A perna ruim, a que ele arrasta desde antes de eu nascer, encontra o apoio de sempre no chão de terra batida. Depois estende o martelo pra mim, com o cabo pra frente.',
		'malaquias De novo. E dessa vez, escuta o ferro antes de bater nele.',

		{
			'Choice': {
				'Dialog': 'bento (O que eu pergunto agora? Ele está falante hoje — isso é raro.)',
				'PerguntarGuerra': {
					'Text': 'Por que o senhor foi pra guerra?',
					'Do': 'jump Cap1_Forja_PerguntaGuerra'
				},
				'PerguntarForjava': {
					'Text': 'O que o senhor forjava lá?',
					'Do': 'jump Cap1_Forja_PerguntaForjava'
				},
				'FicarCalado': {
					'Text': '(Não perguntar nada. Só bater.)',
					'Do': 'jump Cap1_Forja_Calado'
				}
			}
		}
	],

	'Cap1_Forja_PerguntaGuerra': [
		'malaquias (para o martelo no ar por um segundo) Ninguém me perguntou isso faz tempo.',
		'malaquias Prometeram carta de alforria pra quem fosse. Fui escravo brigando pela bandeira de quem me acorrentou, menino. Carreguei a espingarda de um império que me chamava de coisa. Voltei livre — livre e com essa perna. Vai entender a conta.',
		'malaquias Aprendi lá que promessa escrita em papel de branco vale o papel. E o papel, o fogo come.',
		'narracao Ele não disse mais nada sobre isso. Nunca diz. Mas naquela manhã eu bati o ferro mais devagar, como se ele estivesse escutando junto comigo.',
		'jump Cap1_Cena1_Fim'
	],

	'Cap1_Forja_PerguntaForjava': [
		'malaquias Baioneta. Ponta de lança. Coisa feita pra entrar em gente.',
		'malaquias Agora forjo enxada, foice, dobradiça. O braço é o mesmo, o fogo é o mesmo, o ferro é o mesmo. O que muda é o que a mão decide na hora de bater.',
		'malaquias Guarda isso, Bento: não é a ferramenta que escolhe. É a mão.',
		function () { return afinidade ('ogum', 1); },
		'narracao Ele falou aquilo sem levantar a voz, mas ficou na minha cabeça o dia inteiro, do jeito que ficam as coisas que a gente ainda não entende direito mas já sabe que vai precisar.',
		'jump Cap1_Cena1_Fim'
	],

	'Cap1_Forja_Calado': [
		'narracao Eu não perguntei nada. Peguei o martelo, respirei, e tentei escutar o ferro do jeito que ele mandou — como se metal quente pudesse dizer alguma coisa pra quem sabe ouvir.',
		'narracao Bati. Uma vez, duas. Mais firme, menos apressado.',
		'malaquias (um grunhido que, nele, é quase elogio) Hm. Aprendeu alguma coisa hoje, afinal.',
		'jump Cap1_Cena1_Fim'
	],

	'Cap1_Cena1_Fim': [
		// TODO-SPRITE: 'hide character malaquias with fadeOut',
		// TODO-SPRITE: 'hide character bento with fadeOut',
		'narracao Lá fora o galo cantou atrasado, como sempre. No quilombo do Passo da Pedra até o galo tem preguiça — dizem os velhos que é porque aqui ninguém precisa acordar ninguém pra trabalhar pra outro. A gente acorda porque o dia chama, não porque o chicote chama.',
		'narracao Dezesseis anos que eu vivo aqui. Dezesseis anos desde a noite em que meu pai me trouxe no escuro, enrolado num pano, antes que eu soubesse que existia mundo lá fora, ou fazenda, ou senhor. Livre, dizem que eu sou. Nasci livre. Está escrito numa lei que eu nunca vi, guardada numa cidade que eu não conheço, assinada com pena e tinta por gente que não sabe meu nome, não sabe meu rosto, e que se me visse na estrada mandaria me prender assim mesmo.',
		'narracao Meu pai diz que liberdade que precisa de papel pra provar não é bem liberdade. É outra coisa, com o mesmo nome.',
		'jump Cap1_Cena2_Terreiro'
	],

	// ===========================================================
	// CENA 2 — O TERREIRO CENTRAL
	// ===========================================================
	'Cap1_Cena2_Terreiro': [
		'show scene terreiro with fadeIn',
		// TODO-SPRITE: 'show character firmina neutro at left with fadeIn',
		// TODO-SPRITE: 'show character bento neutro at right with fadeIn',

		'narracao O sol já estava alto quando saí da forja. No meio do terreiro, entre as casas de pau a pique, a Firmina me esperava sentada num toco, descascando uma laranja com as unhas e fingindo que não tinha me esperado.',
		'firmina Deixou o velho do Paraguai te fazer de bigorna de novo?',
		'bento Aprendiz. A palavra é aprendiz.',
		'firmina A palavra é teimoso. Todo mundo aqui sabe que tu tem medo de fogo desde que caiu na fogueira de São João.',
		'bento Eu tinha sete anos, Firmina!',
		'firmina E gritou que nem leitão no mato até os doze. (ri, e joga uma casca de laranja em mim) Toda São João eu lembro. É meu presente do santo.',
		'narracao Firmina ri de tudo. É o jeito dela de segurar o mundo pela rédea curta — rindo antes que o mundo ria dela. Mas aí ela parou de descascar a laranja, e quando a Firmina para de fazer o que estava fazendo, é porque vem coisa séria.',
		'firmina Vó Damiana perguntou de ti.',
		'bento De mim? Por quê?',
		'firmina Sei lá. Jogou os búzios ontem de noite pros mais velhos, e depois ficou te olhando atravessado no terreiro. Aquele olhar dela de quem leu carta que não era pra ler.',
		'narracao Firmina nasceu aqui, igual eu. Só que diferente de mim, ela nunca teve dúvida de que isso significa alguma coisa. Pra ela, o Passo da Pedra não é esconderijo, não é sorte, não é papel nenhum. É o mundo. Inteiro. Com tudo que precisa caber dentro.',
		'narracao Pra mim é sempre uma pergunta. Toda manhã a mesma: e se acabar? E se um dia baterem na mata e isso tudo virar fumaça, que nem o papel no fogo do seu Malaquias?',

		{
			'Choice': {
				'Ir': {
					'Text': 'Vou lá falar com a Vó agora.',
					'Do': 'jump Cap1_Terreiro_Curioso'
				},
				'Adiar': {
					'Text': 'Coisa de gente velha. Depois eu vejo.',
					'Do': 'jump Cap1_Terreiro_Adia'
				}
			}
		}
	],

	'Cap1_Terreiro_Curioso': [
		function () { return setFlag ('curiosoDoSagrado', true); },
		'narracao Não sei o que me deu. Talvez o jeito que a Firmina falou. Talvez porque a Vó Damiana nunca perguntou de mim antes, em dezesseis anos.',
		'bento Vou lá agora.',
		'firmina (a sobrancelha sobe) Tu? Procurando a Vó, por vontade própria? (assobia baixo) O mundo tá acabando mesmo.',
		'narracao Ela riu, mas não era só piada. Tinha um quê de espanto de verdade ali. Como se eu tivesse feito uma coisa que ela esperava havia tempo, sem dizer.',
		// TODO-SPRITE: 'hide character firmina with fadeOut',
		// TODO-SPRITE: 'hide character bento with fadeOut',
		'jump Cap1_Cena3_Mata'
	],

	'Cap1_Terreiro_Adia': [
		function () { return setFlag ('adiaSagrado', true); },
		'bento Coisa de velho. Depois eu passo lá.',
		'firmina (deixa a laranja cair no colo) Depois.',
		'firmina Tu fala "depois" que nem tua mãe mandasse guardar. Mas depois não existe, Bento. Existe agora, e existe tarde demais. Não tem meio-termo com a Vó.',
		'narracao A Firmina raramente fala sério duas vezes no mesmo dia. Gastou as duas comigo, naquela manhã. Eu devia ter percebido que o dia estava torto desde cedo.',
		// TODO-SPRITE: 'hide character firmina with fadeOut',
		// TODO-SPRITE: 'hide character bento with fadeOut',
		'jump Cap1_Cena3_Mata'
	],

	// ===========================================================
	// CENA 3 — A MATA
	// ===========================================================
	'Cap1_Cena3_Mata': [
		'show scene mata with fadeIn',
		'play music mata_ambiente with loop fade 2',
		// TODO-SPRITE: 'show character caetano neutro at center with fadeIn',
		// TODO-SPRITE: 'show character bento neutro at right with fadeIn',

		'narracao Toda semana o Caetano me leva mato adentro. Meu pai pediu a ele, anos atrás — "ensina o menino a não se perder". O Caetano ouviu, cuspiu de lado, e ensinou o contrário: a se perder de propósito. Porque, ele diz, quem sabe se perder de propósito é o único que ninguém consegue achar sem querer.',
		'narracao A mata do Passo da Pedra é assim: parece toda igual pra quem chega, e toda diferente pra quem fica. O Caetano lê nela como a Vó lê os búzios. Onde eu vejo só verde e sombra, ele vê estrada, aviso, história.',
		'caetano (agachado, a mão espalmada sobre a terra) Olha.',
		'bento Pegada?',
		'caetano Pergunta errada.',
		'bento ...Pegada de quê?',
		'caetano Ainda errada.',
		'narracao Ele espera. O Caetano espera do jeito que a mata espera — sem pressa e sem dó. Já vi ele ficar meia hora parado esperando eu chegar sozinho na resposta, e não abrir a boca uma vez.',
		'bento (devagar, tentando ver o que ele vê) ...Pra onde vai?',
		'caetano (quase, quase sorri) Agora sim.',
		// TODO-SPRITE: 'show character caetano tenso at center',   // "o rosto fecha como porta" ao reconhecer o rastro
		'caetano Bota rasgada, olha a marca da sola aberta na ponta. Passada curta, funda no calcanhar — gente carregando o próprio peso como se fosse castigo, cansada de um jeito que não é de um dia só. Veio da banda da Fazenda Boa Vista, seguindo o corguinho pra não deixar cheiro. E vai... (a voz baixa; o rosto dele fecha como porta) ...vai pra cá. Pro Passo.',
		'bento Pra cá? Alguém fugido, o senhor acha?',
		'caetano Ou alguém atrás de fugido. Bota de sinhá não rasga desse jeito. Bota de capataz também não — capataz anda de cima do cavalo. Isso aqui é pé no chão, com pressa e com medo.',
		'narracao Ele se levantou, olhou o sol entre as folhas pra medir a hora, e ajeitou o arco no ombro.',
		'caetano Volta pra casa antes do escuro hoje. E Bento —',
		'bento Senhor?',
		'caetano Rastro a gente conta pra quem precisa saber. Não pra quem gosta de ouvir. Guarda a diferença. Um dia ela vale tua vida, ou a de alguém.',
		function () { return afinidade ('oxossi', 1); },
		'narracao No caminho de volta, a mata inteira parecia prender a respiração. Os passarinhos calaram cedo. Ou talvez fosse só eu, escutando demais, do jeito que a gente escuta quando alguém diz uma coisa que ainda não terminou de acontecer.',
		// TODO-SPRITE: 'hide character caetano with fadeOut',
		// TODO-SPRITE: 'hide character bento with fadeOut',
		'jump Cap1_Cena4_Casa'
	],

	// ===========================================================
	// CENA 4 — A CASA
	// ===========================================================
	'Cap1_Cena4_Casa': [
		'show scene casa with fadeIn',
		'play music tensao_silencio with loop fade 3',
		// TODO-SPRITE: 'show character tiao neutro at center with fadeIn',
		// TODO-SPRITE: 'show character bento neutro at right with fadeIn',

		'narracao Quando cheguei, meu pai já tinha posto a comida no fogo de chão. A fumaça subia reta pelo buraco do teto, e a sombra dele na parede de barro era maior que ele — as costas curvadas de tanto ano dobrado sobre madeira.',
		'tiao Telhado da Nazária. Amanhã cedo. Duas mãos rendem mais que uma.',
		'bento Tá.',
		'tiao (me olha por cima do prato, sem parar de comer) O Caetano te levou longe hoje.',
		'bento Nem tanto.',
		'narracao Meu pai fala em trabalho porque trabalho é o idioma dele. "Telhado da Nazária" quer dizer "quero você por perto amanhã". "Come antes que esfrie" quer dizer outra coisa que ele nunca aprendeu a dizer com as palavras certas. Eu aprendi a traduzir cedo, do mesmo jeito que aprendi a bater o ferro: errando muito, apanhando pouco, prestando atenção sempre.',
		'narracao O que eu nunca aprendi foi o que fazer quando tenho uma coisa entalada. Dessas que a gente sente que, dita em voz alta, muda a cara da noite inteira.',

		{
			'Choice': {
				'Dialog': 'bento (Conto pro meu pai o que o Caetano achou na mata?)',
				'Contar': {
					'Text': 'Contar o que vi na mata.',
					'Do': 'jump Cap1_Casa_Contar'
				},
				'Guardar': {
					'Text': 'Guardar pra mim.',
					'Do': 'jump Cap1_Casa_Guardar'
				}
			}
		}
	],

	'Cap1_Casa_Contar': [
		function () { return afinidade ('iemanja', 1); },
		function () { return setFlag ('paiSabe', true); },
		'bento Pai. O Caetano achou rastro hoje. Vindo da Boa Vista, ele disse. Gente cansada, a pé, com pressa.',
		'narracao Meu pai parou de comer. O silêncio que veio durou três batidas do fogo — eu contei, sem querer, do jeito que a gente conta quando o coração fica alto demais.',
		// TODO-SPRITE: 'show character tiao tenso at center',   // o nome da fazenda o atinge
		'tiao (baixo, quase pra dentro) Da Boa Vista.',
		'bento O senhor conhece lá?',
		'tiao (volta a comer, mais devagar, cada garfada pesando mais que a outra) Conheci. Faz tempo. Outra vida.',
		'tiao Tranca a porta hoje, filho. E dorme perto dela.',
		'narracao Foi tudo que ele disse. Mas a mão dele tremeu no prato — de leve, quase nada. E meu pai tem mão de carpinteiro. Mão que não treme nem quando a madeira racha rente ao dedo. Naquela noite eu entendi que existiam coisas na Boa Vista que meu pai carregava calado havia dezesseis anos, e que tinham acabado de bater na nossa porta.',
		'jump Cap1_Cena5_Noite'
	],

	'Cap1_Casa_Guardar': [
		function () { return afinidade ('exu', 1); },
		function () { return setFlag ('paiNaoSabe', true); },
		'bento (dou de ombros) Longe não. O caminho de sempre.',
		'tiao (assente devagar) Hm.',
		'narracao O Caetano tinha dito: rastro se conta pra quem precisa saber. Meu pai precisava? Eu não sabia. E quando eu não sei, eu guardo. Sempre foi assim comigo. Guardar é o meu jeito de não errar — ou de errar sozinho, que dói menos e não espalha.',
		'narracao Comi calado, olhando o fogo. Lá fora, longe, um cachorro latiu e parou. Eu quase falei. Quase. Mas o quase, naquela noite, foi do tamanho de um erro que eu ia levar muito tempo pra entender.',
		'jump Cap1_Cena5_Noite'
	],

	// ===========================================================
	// CENA 5 — A NOITE (chegada de Luzia)
	// ===========================================================
	'Cap1_Cena5_Noite': [
		'show scene clareira_noite with fadeIn',
		'play music alerta_agogo with loop fade 1',
		// TODO-SPRITE: 'show character malaquias tenso at center with fadeIn',   // voz de guerra

		'narracao Os cachorros começaram primeiro. Todos ao mesmo tempo, o que nunca é bom sinal — cachorro que late sozinho é lua, cachorro que late junto é gente.',
		'narracao Depois veio o sino de pau que o Malaquias inventou e pendurou no centro do terreiro. Três toques, espera, três toques. Eu nunca tinha ouvido os três toques fora de treino. Ninguém tinha. E ao ouvir de verdade, no escuro, o corpo entende antes da cabeça: aquilo é o som do fim de alguma coisa.',
		'malaquias (a voz de guerra, baixa e inteira, cortando o escuro) Ninguém acende mais tocha! Mulher e criança pro paiol. Homem que sabe segurar cabo, comigo. Devagar. Sem correr.',
		'narracao E então a mata se abriu.',

		// TODO-SPRITE: 'hide character malaquias',   // limpa a cena para a CG de chegada
		'show image cg_chegada_luzia with fadeIn',

		'narracao Uma mulher. Descalça de um pé só, o outro ainda com resto de uma bota rasgada. O braço esquerdo pintado de um escuro que, mesmo na noite, eu sabia que não era tinta. Ela atravessou a clareira como quem atravessa um rio contra a correnteza — uma correnteza que só ela via, que a puxava pra trás a cada passo — e caiu de joelhos bem no meio de todos nós, ofegando.',
		// TODO-SPRITE: 'show character luzia tenso at center with fadeIn',   // ajoelhada, ferida (revelada quando a CG some)
		// TODO-SPRITE: 'show character caetano neutro at left',
		'caetano (surgindo da mata atrás dela, o arco ainda armado na mão) Ela veio sozinha. Por ora. Segui o rastro dela desde o corguinho. Ninguém atrás, ainda.',
		'narracao A mulher levantou a cabeça devagar. E começou a procurar. Rosto por rosto, tocha apagada por tocha apagada, com uma fome no olhar que dava medo de encarar — a fome de quem procura uma coisa há tanto tempo que já não sabe se ela ainda existe.',
		'narracao Os olhos dela pararam em mim. E ficaram.',
		'luzia (um fio de voz, rachado) ...Cresceu.',
		'narracao Meu pai saiu do escuro e passou na minha frente. Devagar, como quem anda dentro de um sonho — e eu não sabia dizer se sonho bom ou ruim, porque a cara dele tinha os dois ao mesmo tempo. Ele disse o nome. O nome que eu só conhecia de bilhete decorado por gente que sabia ler, o nome que era metade da minha história e que eu nunca tinha ouvido em voz de gente viva.',
		// TODO-SPRITE: 'show character tiao tenso at right with fadeIn',   // sai do escuro e diz o nome
		'tiao Luzia.',
		'narracao A mulher que me pariu num chão de fazenda. A mulher que me entregou pro escuro nos braços do meu pai, pra que o escuro me salvasse do que ela não pôde. Dezesseis anos de distância caíram de joelhos na minha frente naquela noite. Sangrando pelo braço. Me olhando como se eu fosse a última porta de um corredor muito longo.',

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
					'Text': 'Ficar onde estou.',
					'Do': 'jump Cap1_Noite_Congelou'
				}
			}
		}
	],

	'Cap1_Noite_Abraco': [
		function () { return afinidade ('iemanja', 2); },
		function () { return setFlag ('abraco', true); },
		'narracao Eu não decidi. As pernas decidiram por mim, antes de a cabeça ter voto. Quando dei por mim, estava no chão junto dela, segurando um corpo que eu não conhecia e que era, ao mesmo tempo, a minha origem inteira.',
		'narracao Ela cheirava a mato, a sangue e a uma coisa antiga que eu não sabia nomear — talvez o cheiro de todos os anos que a gente não teve. Senti o braço bom dela fechar nas minhas costas com uma força que não combinava com o corpo quebrado.',
		'luzia (dentro do meu ombro, mais sopro que palavra) Meu rio.',
		'narracao Eu não sabia o que se responde a um rio. Não sabia o que dizer a uma palavra que ela devia ter guardado por dezesseis anos pra esse exato momento. Então não disse nada. Só fiquei. E de todas as coisas que eu podia ter feito naquela noite, ficar foi a única que não precisou de tradução.',
		'jump Cap1_Coda'
	],

	'Cap1_Noite_Socorro': [
		function () { return afinidade ('oxossi', 1); },
		function () { return afinidade ('ogum', 1); },
		function () { return setFlag ('socorroPrimeiro', true); },
		'bento VÓ DAMIANA! Ela tá ferida, o braço! Corre!',
		'narracao Minha voz saiu de comando — firme, cheia, que nem a do Malaquias na hora do sino. Saiu de um lugar de dentro de mim que eu não sabia que existia, e me assustou mais do que tudo naquela noite inteira.',
		'narracao A Vó já vinha vindo. A Vó sempre já vem vindo, é como se ela soubesse das coisas um passo antes de elas acontecerem. Enquanto erguiam Luzia pra levar, os olhos dela me acharam de novo, no meio da confusão. Não sei se o que vi ali foi orgulho, ou se foi pergunta. Talvez fossem os dois. Talvez, em mãe, seja tudo a mesma coisa e não tenha nome separado.',
		'jump Cap1_Coda'
	],

	'Cap1_Noite_Congelou': [
		function () { return afinidade ('exu', 1); },
		function () { return setFlag ('congelou', true); },
		'narracao Dezesseis anos ensaiando esse encontro no escuro da minha cabeça. Dezesseis anos imaginando o que eu diria, o que faria, como seria a minha cara. E quando ele finalmente veio, de verdade, ali na minha frente — eu virei pedra.',
		'narracao Todo mundo se moveu, menos eu. Meu pai a ergueu do chão. A Vó chegou com panos e folhas. O Malaquias fechou a ronda na beira da mata, gritando ordens baixas. E eu, plantado no meio do terreiro, aprendendo da pior forma a primeira lição da encruzilhada: quem não escolhe, também escolheu. Só que escolheu sem saber o quê.',
		'narracao Do canto do olho, vi a Firmina me olhando. Ela não disse nada. Mas guardou aquilo. A Firmina guarda tudo.',
		'jump Cap1_Coda'
	],

	// ===========================================================
	// CODA — fechamento do capítulo
	// ===========================================================
	'Cap1_Coda': [
		// TODO-SPRITE: 'hide character luzia',    // convergência das 3 escolhas da noite
		// TODO-SPRITE: 'hide character caetano',
		// TODO-SPRITE: 'hide character tiao',
		'show scene casa_damiana with fadeIn',
		'play music memoria_xequere with loop fade 3',
		// TODO-SPRITE: 'show character damiana neutro at center with fadeIn',

		'narracao Levaram Luzia pra casa da Vó Damiana. Da porta, no escuro, eu via as mãos velhas dela trabalhando as ervas no pilão — um socar lento, paciente, que fazia par com as rezas baixas numa língua que eu não entendia mas que, de algum jeito, entendia a mim.',
		'narracao Fiquei ali parado, sem coragem de entrar nem de ir embora. Foi quando a Vó falou, sem se virar, como quem conversa com a própria noite:',
		'damiana Menino.',
		'bento ...Senhora.',
		// TODO-SPRITE: 'show character damiana suave at center',   // vira; os olhos vivos na luz da vela
		'damiana O que a mata trouxe hoje não foi tua mãe, não. (aí ela virou, devagar, e os olhos dela na luz da vela eram os mais vivos de todo o Passo) Tua mãe é só o começo. O que a mata trouxe pra dentro do Passo hoje... foi a pergunta.',
		'bento Que pergunta, Vó?',
		'damiana (voltou pro pilão, e o socar recomeçou) Essa eu não respondo. Essa quem responde é você, com os pés, no tempo certo. Eu só jogo os búzios e digo o que eles mostram. Andar, quem anda é você.',
		'damiana Dorme, se conseguir. E amanhã cedo, antes do galo preguiçoso, tu vem aqui. Os búzios já sabem teu nome faz muito tempo, Bento. Tá na hora de tu saber o nome deles.',
		'narracao Eu não dormi. Do lado de fora da nossa casa, o Passo da Pedra inteiro fingia dormir de olho aberto — dava pra sentir, no ar, todo mundo acordado no escuro, esperando um barulho que talvez não viesse essa noite. Talvez.',
		'narracao E longe, muito longe, na banda da Boa Vista, um cachorro que não era nosso latiu três vezes. Depois calou.',

		// TODO-SPRITE: 'hide character damiana with fadeOut',
		'show scene #000000 with fadeIn 3',
		'centered CAPÍTULO 1 — FIM',
		'jump Cap2_Abertura'
	],

	// ===========================================================
	// ===========================================================
	//  CAPÍTULO 2 — "O QUE NÃO SECA"
	//  Roteiro: docs/roteiro_cap2.md · Estrutura: docs/enredo_cap2.md
	//  Ato 1, capítulo do meio. Só soft branches: move afinidade
	//  (oculta) e flags; lê o estado do cap. 1 via Conditional.
	// ===========================================================
	// ===========================================================

	'Cap2_Abertura': [
		'centered CAPÍTULO 2 — "O QUE NÃO SECA"',
		'jump Cap2_Cena1_CasaDaVo'
	],

	// ===========================================================
	// CENA 1 — A CASA DA VÓ (manhã seguinte)
	// ===========================================================
	'Cap2_Cena1_CasaDaVo': [
		'show scene casa_damiana with fadeIn',
		'play music memoria_xequere with loop fade 2',
		// TODO-SPRITE: 'show character damiana neutro at center with fadeIn',

		'narracao Eu não dormi, e a manhã veio me cobrar. A casa da Vó Damiana de dia é outra casa: o que de noite era sombra e reza, de manhã é folha pendurada, pote de barro, cheiro verde de coisa macerada. Só o pilão é o mesmo — o pilão e as mãos.',

		// Variação: como Bento chega (flags do cap. 1, cena do terreiro)
		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage ().flags.curiosoDoSagrado === true;
				},
				'True': 'jump Cap2_Cena1_ChegadaCurioso',
				'False': 'jump Cap2_Cena1_ChegadaAdiou'
			}
		}
	],

	'Cap2_Cena1_ChegadaCurioso': [
		'damiana (sem se virar) Veio antes de eu mandar. (ri curto, no meio da frase grave, como só ela) Ainda não sei se isso é bom sinal ou se é pressa. Senta, menino.',
		'jump Cap2_Cena1_Reencontro'
	],

	'Cap2_Cena1_ChegadaAdiou': [
		'damiana (sem se virar) Chegou o "depois" do menino. (ri curto) A Firmina avisou que tu ia dizer isso. Senta. O depois senta também.',
		'jump Cap2_Cena1_Reencontro'
	],

	'Cap2_Cena1_Reencontro': [
		// TODO-SPRITE: 'show character luzia neutro at left with fadeIn',
		'narracao Luzia estava sentada na esteira, o braço esquerdo envolto em pano com cheiro de folha amassada. À luz do dia ela era menor do que a mulher que rasgou a mata ontem. E maior também. Não sei explicar as duas coisas ao mesmo tempo, mas eram verdade juntas.',

		// Variação: tom do reencontro (escolha da noite do cap. 1)
		{
			'Conditional': {
				'Condition': function () {
					const f = monogatari.storage ().flags;
					if (f.abraco) { return 'abraco'; }
					if (f.socorroPrimeiro) { return 'socorro'; }
					return 'congelou';
				},
				'abraco': 'jump Cap2_Cena1_TomAbraco',
				'socorro': 'jump Cap2_Cena1_TomSocorro',
				'congelou': 'jump Cap2_Cena1_TomCongelou'
			}
		}
	],

	'Cap2_Cena1_TomAbraco': [
		'narracao Ela me olhou como quem ainda estava no meio do abraço de ontem — e eu não sabia onde pôr as mãos, porque intimidade dada rápido demais é roupa de outro: serve, mas não assenta.',
		'jump Cap2_Cena1_Folhas'
	],

	'Cap2_Cena1_TomSocorro': [
		'narracao Ela me olhou e quase sorriu.',
		'luzia (baixo, pra Vó, como quem apresenta) O menino que gritou.',
		'narracao Tinha respeito naquilo. Eu não sabia que respeito também podia doer.',
		'jump Cap2_Cena1_Folhas'
	],

	'Cap2_Cena1_TomCongelou': [
		'narracao Eu não conseguia olhar pra ela. Ontem eu virei pedra na frente do quilombo inteiro, e a pedra ainda estava aqui dentro, pesando. Ela não cobrou. Só disse, pra ninguém:',
		'luzia Água não força porta.',
		'narracao E voltou a olhar o pano do braço.',
		'jump Cap2_Cena1_Folhas'
	],

	'Cap2_Cena1_Folhas': [
		'damiana (trabalhando o pilão, nomeando sem olhar) Essa aqui fecha o corte. Essa tira o quente do sangue. Essa é pra dormir sem sonho ruim — essa tu vai me agradecer depois.',
		'damiana (pausa; me olha por cima) Tu não dormiu. Corpo que não dorme carrega a noite dos outros. De quem é a noite que tu tá carregando, menino?',
		'narracao Eu não respondi. Ela não esperava resposta — a Vó pergunta pra plantar, não pra colher. Voltou ao pilão e disse, como quem fala do tempo:',
		'damiana De tarde eu apronto um banho de folha. Pra ela — (o queixo aponta Luzia) — e pra quem mais precisar lavar o susto. Susto que não se lava, cria raiz.',

		{
			'Choice': {
				'Dialog': 'bento (Ela está aqui. Viva. Na minha frente. E eu com dezesseis anos de pergunta entalada.)',
				'Origem': {
					'Text': 'Como era lá? A fazenda… eu.',
					'Do': 'jump Cap2_Cena1_PerguntaOrigem'
				},
				'Ameaca': {
					'Text': 'Quem vem atrás da senhora? Quantos?',
					'Do': 'jump Cap2_Cena1_PerguntaAmeaca'
				},
				'Calar': {
					'Text': '(Não perguntar. Olhar as mãos da Vó no pilão.)',
					'Do': 'jump Cap2_Cena1_Guardado'
				}
			}
		}
	],

	'Cap2_Cena1_PerguntaOrigem': [
		function () { return afinidade ('iemanja', 1); },
		function () { return setFlag ('perguntouOrigem', true); },
		'luzia (demora; fala baixo, em imagens) Era um lugar onde os dias não eram da gente. Nem os filhos.',
		'luzia (olha o próprio braço) Tu tinha um cheiro de fubá quando nasceu. Isso era meu. Isso eu trouxe.',
		'narracao Dezesseis anos de perguntas e a primeira resposta era um cheiro. Achei pouco. Achei tudo. As duas coisas, juntas, de novo.',
		'jump Cap2_Cena2_Terreiro'
	],

	'Cap2_Cena1_PerguntaAmeaca': [
		function () { return afinidade ('ogum', 1); },
		function () { return setFlag ('perguntouAmeaca', true); },
		'luzia (o rosto muda; não de medo — de conta feita) O feitor da Boa Vista. E os que ele pagar.',
		'luzia Não é o número que importa, meu... (não termina a palavra) — o que importa é que homem pago cansa. Quem corre por amor, não.',
		'narracao Eu guardei isso do jeito que o Malaquias guarda ferramenta: sabendo que ia precisar.',
		'jump Cap2_Cena2_Terreiro'
	],

	'Cap2_Cena1_Guardado': [
		function () { return afinidade ('exu', 1); },
		function () { return setFlag ('luziaGuardado', true); },
		'narracao Tinha pergunta demais em mim, e quando é assim, nenhuma sai na frente. Fiquei olhando o pilão socar.',
		'narracao A Vó riu baixinho no meio de uma reza, como se o meu silêncio tivesse dito a pergunta inteira. Talvez tenha.',
		'jump Cap2_Cena2_Terreiro'
	],

	// ===========================================================
	// CENA 2 — O TERREIRO: OS MENTORES DIVERGEM
	// ===========================================================
	'Cap2_Cena2_Terreiro': [
		// TODO-SPRITE: 'hide character damiana with fadeOut',
		// TODO-SPRITE: 'hide character luzia with fadeOut',
		'show scene terreiro with fadeIn',
		'play music quilombo_dia with loop fade 2',
		// TODO-SPRITE: 'show character malaquias tenso at left with fadeIn',
		// TODO-SPRITE: 'show character caetano neutro at right with fadeIn',

		'narracao No terreiro, o quilombo processava a noite do jeito que sabia: trabalhando mais alto que o medo. Mas tinha uma roda no meio, e no meio da roda, os dois velhos que nunca concordam.',
		'malaquias Paliçada no vão do leste. Estaca dupla. E vigília em turno, começando hoje. (bate o punho na palma) Quem entrega um, entrega todos. Então ninguém se entrega — e a gente se apronta.',
		'caetano Aprontar pra quê, se não sabe de onde vem? (agachado, desenhando no chão com um graveto) Parede não serve de nada se tu não sabe de que lado vem o vento. Primeiro se sabe. Depois se apronta.',
		'malaquias No Paraguai, quem esperou saber morreu sabendo.',
		'caetano (sem levantar a voz) E quem atirou no escuro acertou o próprio irmão. Tu me contou essa, Malaquias. Numa noite dessas.',
		'narracao Silêncio de martelo suspenso. Os dois se respeitam do jeito que duas árvores velhas se respeitam: sem se mover, dividindo o mesmo chão. E o pior é que nenhum dos dois estava errado. Eu ia aprender isso do jeito difícil, esse ano inteiro: gente grande erra menos por mentira e mais por acertar só a metade.',
		'caetano (levanta; mostra o que o graveto cercava no chão) Capim deitado atrás da pedreira. Cheiro de fumo de corda. Alguém rondou a madrugada, ficou um tempo olhando, e voltou pra donde veio. Não era bicho. Bicho não fuma.',
		'narracao O cachorro estranho de ontem tinha virado gente. E gente que olha de longe e vai embora é gente que volta acompanhada.',

		{
			'Choice': {
				'Dialog': 'bento (Os dois vão precisar de braço hoje. Eu só tenho dois.)',
				'Malaquias': {
					'Text': 'Ajudar Malaquias na paliçada.',
					'Do': 'jump Cap2_Dia_Malaquias'
				},
				'Caetano': {
					'Text': 'Sair com Caetano pra ler a linha da mata.',
					'Do': 'jump Cap2_Dia_Caetano'
				}
			}
		}
	],

	'Cap2_Dia_Malaquias': [
		function () { return afinidade ('ogum', 1); },
		function () { return setFlag ('diaComMalaquias', true); },
		'narracao Passei o dia no vão do leste, apontando estaca e abrindo buraco. O Malaquias trabalha calado e cobra igual: no gesto, não no grito.',
		'malaquias (endireitando uma estaca que eu tinha fincado) Estaca que entra torta, cai reta. O chão não perdoa pressa. Igual o ferro. Igual quase tudo, menino.',
		'bento E se eles vierem antes da paliçada fechar?',
		'malaquias Então ela fecha com a gente dentro do vão. (cospe no chão, medindo o horizonte) Paliçada não é pra impedir de entrar. É pra custar caro. Coisa que custa caro, homem pago pensa duas vezes.',
		'narracao No fim da tarde, minhas mãos tinham bolha e a paliçada tinha vão fechado pela metade. O velho olhou o serviço e fez que sim, uma vez. Foi o maior elogio que eu recebi no ano.',
		'jump Cap2_Cena3_Vigilia'
	],

	'Cap2_Dia_Caetano': [
		function () { return afinidade ('oxossi', 1); },
		function () { return setFlag ('diaComCaetano', true); },
		'narracao Saí com o Caetano pra linha da mata. Ele me levou até a pedreira, onde o capim tinha deitado, e me fez agachar do lado dele até eu ver o que ele via: o desenho de um homem sentado, esperando, o tempo que três cigarros de corda levam pra morrer.',
		'caetano Ficou aqui. Olhando. (aponta com o queixo) Daqui se vê a casa da Vó, o paiol e o vão do leste. Ele agora sabe o que a gente tem. Nós não sabemos o que ele tem. Essa é a conta a acertar.',
		'bento E como se acerta?',
		'caetano Sabendo mais que ele. (levanta; anda; eu sigo) Lugar se perde, menino. Gente não. Vou te mostrar a primeira rota. Decora com o pé, não com o olho — olho esquece no escuro, pé não.',
		'narracao Ele me mostrou a trilha que desce pro corguinho por dentro da pedra, invisível de fora. "Semente não cai", ele disse no fim, como quem fecha reza. "Rola." Voltamos em silêncio. Eu vinha decorando o chão com a sola do pé.',
		'jump Cap2_Cena3_Vigilia'
	],

	// ===========================================================
	// CENA 3 — A VIGÍLIA (noite)
	// ===========================================================
	'Cap2_Cena3_Vigilia': [
		// TODO-SPRITE: 'hide character malaquias with fadeOut',
		// TODO-SPRITE: 'hide character caetano with fadeOut',
		'show scene clareira_noite with fadeIn',
		'play music tensao_silencio with loop fade 2',

		'narracao A noite chegou com a vigília armada. O Malaquias dividiu os turnos como quem divide ração de guerra: sem sobra e sem falta.',

		{
			'Choice': {
				'Dialog': 'bento (Meu nome não estava em turno nenhum. Ainda.)',
				'Vigiar': {
					'Text': 'Ficar de vigia.',
					'Do': 'jump Cap2_Vigilia_Fica'
				},
				'Recolher': {
					'Text': 'Recolher pra casa.',
					'Do': 'jump Cap2_Vigilia_Recolhe'
				}
			}
		}
	],

	'Cap2_Vigilia_Recolhe': [
		function () { return setFlag ('naoVigiou', true); },
		'show scene casa with fadeIn',

		// A noite em casa muda conforme a escolha da Cena 4 do cap. 1
		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage ().flags.paiSabe === true;
				},
				'True': 'jump Cap2_Recolhe_PaiSabe',
				'False': 'jump Cap2_Recolhe_PaiNaoSabe'
			}
		}
	],

	'Cap2_Recolhe_PaiSabe': [
		// TODO-SPRITE: 'show character tiao neutro at center with fadeIn',
		'narracao Em casa, meu pai estava acordado, reforçando a tranca da porta com um sarrafo novo. Não perguntei. Peguei o formão e segurei a madeira pra ele.',
		'tiao (depois de um tempo, sem olhar) Segura firme.',
		'narracao Trabalhamos calados até tarde, e foi a conversa mais comprida que a gente teve em anos. Tem família que se fala por palavra. A minha se fala por madeira.',
		// TODO-SPRITE: 'hide character tiao with fadeOut',
		'jump Cap2_Cena5_Banho'
	],

	'Cap2_Recolhe_PaiNaoSabe': [
		// TODO-SPRITE: 'show character tiao neutro at center with fadeIn',
		'narracao Em casa, meu pai dormia mal — dava pra ouvir na respiração, que parava e voltava, como quem escuta a casa no escuro. Eu fiquei olhando o teto.',
		'narracao A minha omissão de ontem tinha virado um morador: não fazia barulho, mas ocupava lugar. Dormia entre a minha esteira e a dele. Ia crescer ali, se eu deixasse.',
		// TODO-SPRITE: 'hide character tiao with fadeOut',
		'jump Cap2_Cena5_Banho'
	],

	'Cap2_Vigilia_Fica': [
		function () { return setFlag ('vigiaNoturna', true); },
		'narracao Fiquei. O Malaquias me deu o posto do vão do leste sem comentário, que nele é confiança. A noite andou devagar, do jeito que noite de vigia anda: cada hora com o dobro dos minutos.',
		'narracao Foi na metade do meu turno que ele flagrou o posto vazio da Firmina. Ela voltou da moita um minuto depois, os olhos ainda na escuridão — e ele já vinha em cima, baixo e duro, do jeito que a voz dele fica quando o Paraguai sobe.',
		// TODO-SPRITE: 'show character malaquias tenso at left with fadeIn',
		// TODO-SPRITE: 'show character firmina tenso at right with fadeIn',
		'malaquias Posto vazio é buraco na parede. Por um buraco entra a noite inteira.',
		'firmina Tinha barulho na moita, seu Malaquias. Eu fui —',
		'malaquias Foi. Sozinha. Sem avisar. (pausa de ferro) No Paraguai isso tinha nome.',

		{
			'Choice': {
				'Dialog': 'bento (Ela foi ver o barulho. Ele tem razão na regra. Os dois me olham.)',
				'Defender': {
					'Text': 'Defender Firmina.',
					'Do': 'jump Cap2_Vigilia_Defende'
				},
				'Disciplina': {
					'Text': 'Dar razão a Malaquias.',
					'Do': 'jump Cap2_Vigilia_Disciplina'
				},
				'Calar': {
					'Text': '(Ficar calado.)',
					'Do': 'jump Cap2_Vigilia_Cala'
				}
			}
		}
	],

	'Cap2_Vigilia_Defende': [
		function () { return setFlag ('defendeuFirmina', true); },
		'bento Ela foi ver o barulho, seu Malaquias. Isso não é descuido. É ouvido bom. O senhor não ia querer vigia que escuta barulho e fica parado.',
		'narracao O velho me mediu por um tempo comprido.',
		'malaquias Os dois no mesmo turno, então. Quem defende, acompanha.',
		'narracao E foi embora. A Firmina não disse obrigada — ela nunca diz. Me deu um soco no ombro, que na língua dela é a mesma coisa, dita melhor.',
		'jump Cap2_Vigilia_Agouro'
	],

	'Cap2_Vigilia_Disciplina': [
		function () { return afinidade ('ogum', 1); },
		function () { return setFlag ('apoiouDisciplina', true); },
		'bento (pra ela, sem raiva) A regra existe pra noite ruim, Firmina. Avisar custava um assobio.',
		'narracao Ela engoliu. O Malaquias assentiu uma vez, que nele é medalha. Mas a Firmina passou o resto do turno mais longe de mim do que a moita — e distância, nela, é resposta.',
		'jump Cap2_Vigilia_Agouro'
	],

	'Cap2_Vigilia_Cala': [
		function () { return afinidade ('exu', 1); },
		function () { return setFlag ('absteveVigilia', true); },
		'narracao Eu não tomei lado. Fiquei na fresta entre os dois, onde não chove — foi o que eu disse a mim mesmo.',
		'narracao A Firmina me olhou uma vez, curta. Guardou. A Firmina guarda tudo.',
		'jump Cap2_Vigilia_Agouro'
	],

	'Cap2_Vigilia_Agouro': [
		// TODO-SPRITE: 'hide character malaquias with fadeOut',
		// TODO-SPRITE: 'hide character firmina with fadeOut',
		'narracao Já perto do fim do turno, a mata levantou passarinho. De noite. Um bando inteiro, de uma vez, na banda da pedreira — e passarinho não levanta de noite à toa. Alguma coisa andou por baixo deles. Alguma coisa que não quis ser vista.',
		'narracao Eu não contei pra ninguém do turno. Guardei pra levar pra quem lê essas coisas.',
		'jump Cap2_Cena4_Agouro'
	],

	// ===========================================================
	// CENA 4 — O AGOURO E A VÓ (só na rota da vigília)
	// ===========================================================
	'Cap2_Cena4_Agouro': [
		'show scene casa_damiana with fadeIn',
		'play music memoria_xequere with loop fade 2',
		// TODO-SPRITE: 'show character damiana neutro at center with fadeIn',

		'narracao A Vó estava acordada, como se esperasse. Na frente dela, a peneira de búzios, coberta com um pano.',
		'damiana Fala.',
		'bento Passarinho levantou de noite, Vó. Na pedreira. O bando inteiro.',
		'damiana (não olha os búzios; me olha) E tu veio me contar porque acha que eu falo com passarinho? (ri; a gravidade não sai do lugar) O que a mata mostra, ela mostra pra quem já tava olhando. Tu tava olhando pra quê, menino?',
		'bento Eu... tava olhando pro escuro. Esperando ele ter nome.',
		// TODO-SPRITE: 'show character damiana suave at center',
		'damiana (pausa comprida; o riso vai embora) Hum. Isso os búzios vão gostar de saber. (cobre melhor a peneira, como quem agasalha) Amanhã eles falam. Hoje, dorme. O escuro já sabe teu nome faz tempo — agora ele sabe que tu quer saber o dele. Isso muda a conversa.',
		'narracao Eu saí de lá sem entender e entendendo. Com a Vó é sempre assim: a resposta vem embrulhada na próxima pergunta.',
		// TODO-SPRITE: 'hide character damiana with fadeOut',
		'jump Cap2_Cena5_Banho'
	],

	// ===========================================================
	// CENA 5 — O BANHO DE ERVAS (soft 5 — abre/adia o caminho)
	// ===========================================================
	'Cap2_Cena5_Banho': [
		'show scene casa_damiana with fadeIn',
		'play music memoria_xequere with loop fade 2',
		// TODO-SPRITE: 'show character damiana neutro at center with fadeIn',

		'narracao De tarde, como prometido, a Vó aprontou a gamela. Folha macerada na água, cheiro que era verde e era fundo ao mesmo tempo. Luzia tomou o dela de olhos fechados, e quando saiu, tinha alguma coisa a menos nos ombros. Não sei o nome do que saiu. Mas vi sair.',
		'damiana (me estendendo a cuia, sem cerimônia nenhuma — e isso era a cerimônia) Teu susto de ontem ainda tá em ti. Susto guardado azeda, igual leite.',
		'damiana Não é reza que eu tô te dando, menino. É folha e é água. O resto, se tiver que vir, vem no tempo.',

		{
			'Choice': {
				'Dialog': 'bento (A cuia na mão dela. A porta aberta. Ninguém empurrando.)',
				'Aceitar': {
					'Text': 'Aceitar o banho.',
					'Do': 'jump Cap2_Banho_Aceita'
				},
				'Adiar': {
					'Text': 'Depois, Vó. Agora não.',
					'Do': 'jump Cap2_Banho_Adia'
				}
			}
		}
	],

	'Cap2_Banho_Aceita': [
		function () { return setFlag ('banhoAceito', true); },
		'narracao A água era fria e depois não era. Desceu pelo pescoço carregando o que eu não sabia que segurava — a noite da chegada, o grito que eu dei ou não dei, o cheiro de sangue na clareira.',
		'narracao Não virei outro. Mas fiquei mais perto de mim. Quando terminou, a Vó não disse nada. Só recolheu a cuia com um respeito que me ensinou, sem palavra, que aquilo tinha sido maior do que parecia.',
		'jump Cap2_Cena6_Coda'
	],

	'Cap2_Banho_Adia': [
		function () { return setFlag ('banhoAdiado', true); },
		'bento Depois, Vó. Agora não.',
		'damiana (sem ofensa nenhuma; guarda a cuia) "Depois", ele disse. (ri baixinho) A água não tem pressa, menino. Quem tem pressa é a estrada. Tomara que as duas não se encontrem antes de ti.',
		'narracao A Firmina teria dito que "depois não existe". Eu ouvi a voz dela na minha cabeça e fingi que não.',
		'jump Cap2_Cena6_Coda'
	],

	// ===========================================================
	// CODA — O AVISO + O PRIMEIRO SONHO
	// ===========================================================
	'Cap2_Cena6_Coda': [
		// TODO-SPRITE: 'hide character damiana with fadeOut',
		'show scene casa with fadeIn',
		'play music tensao_silencio with loop fade 2',
		// TODO-SPRITE: 'show character caetano tenso at center with fadeIn',

		'narracao O aviso chegou com o Caetano, na boca da noite, e ele nem desmontou o passo: falou andando, que é como ele fala quando a notícia não pode sentar.',
		'caetano Papel pregado no posto da vila. Recompensa. (pausa; escolhe não olhar pra Luzia, o que é o mesmo que olhar) "Fugida da Boa Vista." Tem nome, tem sinal, tem preço.',
		'malaquias (a voz de guerra, baixa) Então acabou a dúvida. Não é se vêm. É quando.',
		'narracao Ninguém disse mais nada. Não precisava. Meu pai apagou o fogo mais cedo. A Vó, na porta dela, olhou o céu por um tempo comprido — e depois olhou pra mim, do outro lado do terreiro, como se o céu e eu fôssemos a mesma pergunta.',
		'damiana (pra todos e pra ninguém) Amanhã cedo eu jogo. Os búzios não gostam de pressa... mas gostam menos de atraso.',
		// TODO-SPRITE: 'hide character caetano with fadeOut',
		'narracao Naquela noite eu dormi. O corpo venceu. E aí veio o sonho.',

		'show scene #000000 with fadeIn 2',
		'play music memoria_xequere with loop fade 3',

		// Primeiro feedback diegético de afinidade (ramificações §7):
		// o sonho reflete o orixá dominante. Empate = ramo equilibrado
		// (semente do final oculto). Nunca exibe número.
		{
			'Conditional': {
				'Condition': function () {
					const a = monogatari.storage ().afinidade;
					const pares = Object.entries (a);
					const maior = Math.max (...pares.map (function (p) { return p[1]; }));
					const dominantes = pares.filter (function (p) { return p[1] === maior; });
					return dominantes.length === 1 ? dominantes[0][0] : 'equilibrado';
				},
				'ogum': 'jump Cap2_Sonho_Ogum',
				'oxossi': 'jump Cap2_Sonho_Oxossi',
				'iemanja': 'jump Cap2_Sonho_Iemanja',
				'exu': 'jump Cap2_Sonho_Exu',
				'equilibrado': 'jump Cap2_Sonho_Equilibrado'
			}
		}
	],

	'Cap2_Sonho_Ogum': [
		'narracao Sonhei com a forja. Mas a forja era do tamanho da noite, e o ferro na bigorna era comprido demais pra ser enxada.',
		'narracao Cada martelada acendia uma faísca verde que subia e virava estrela. Alguém batia junto comigo, no mesmo ritmo — não vi o rosto. Só o braço, que era como o meu, mas mais velho. O ferro nunca esfriava.',
		'narracao Acordei com as mãos fechadas.',
		'jump Cap2_Fim'
	],

	'Cap2_Sonho_Oxossi': [
		'narracao Sonhei com a mata. Ela se abria na minha frente sem eu pedir — trilha atrás de trilha, cada uma sabendo meu passo antes de mim. Um verde-azul de folha nova em tudo.',
		'narracao No fundo, uma flecha só atravessou o sonho inteiro, de ponta a ponta, sem cair. Eu sabia, do jeito que se sabe em sonho, que ela não ia cair nunca.',
		'narracao Acordei com os pés inquietos.',
		'jump Cap2_Fim'
	],

	'Cap2_Sonho_Iemanja': [
		'narracao Sonhei com uma água que eu nunca vi — grande demais pra ser rio, funda demais pra ter margem. Azul-claro até dentro.',
		'narracao Tinha uma voz nela, embaixo, cantando uma coisa sem palavra que mesmo assim eu entendia: corre, meu rio, que eu te espero no fim.',
		'narracao Acordei com o rosto molhado e não contei pra ninguém.',
		'jump Cap2_Fim'
	],

	'Cap2_Sonho_Exu': [
		'narracao Sonhei com uma encruzilhada de noite, quatro caminhos e nenhuma placa. No meio dela, uma fogueira pequena, vermelha no preto.',
		'narracao Cada caminho que eu olhava se acendia; quando eu olhava outro, o primeiro não apagava. No fim os quatro estavam acesos e eu ainda no meio — e uma risada em algum lugar, que não ria de mim. Ria comigo.',
		'narracao Acordei sem saber se tinha escolhido ou se tinha ficado. E de algum jeito isso não era ruim.',
		'jump Cap2_Fim'
	],

	'Cap2_Sonho_Equilibrado': [
		'narracao Sonhei com os quatro ao mesmo tempo: a forja dentro da mata, a mata bebendo na água, a água correndo pra encruzilhada. Nenhuma cor venceu.',
		'narracao Eu fiquei parado no meio e, em vez de eu andar pros caminhos, foram os caminhos que andaram pra mim — devagar, sem briga, como quem chega pra roda.',
		'narracao Acordei sem pressa. Foi a primeira vez, desde a chegada dela, que acordar não doeu.',
		'jump Cap2_Fim'
	],

	'Cap2_Fim': [
		'narracao Lá fora, o galo preguiçoso cantou atrasado. Mas cantou. Amanhã os búzios falam. E depois de amanhã — depois de amanhã a estrada responde.',
		'show scene #000000 with fadeIn 3',
		'centered CAPÍTULO 2 — FIM',
		'end'
	]

});
