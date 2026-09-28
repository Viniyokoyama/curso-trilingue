// Questões de múltipla escolha por dia e língua.
// [pergunta, texto em destaque (opcional), [CORRETA, errada, errada, errada], explicação]
// A primeira opção é sempre a correta; o app embaralha na hora.
window.QUIZ = {

  1: {
    jp: [
      ["Qual é o som de か?", "か", ["ka", "ki", "ko", "ku"], "か abre a linha do k: ka ki ku ke ko."],
      ["Como se lê?", "かお", ["kao", "kai", "koe", "ako"], "か = ka, お = o. かお = rosto."],
      ["Qual kana é a vogal \"e\"?", "", ["え", "う", "お", "あ"], "あ い う え お = a i u e o."],
      ["O que significa?", "いえ", ["casa", "rosto", "em cima", "voz"], "いえ (ie) = casa."]
    ],
    zh: [
      ["Qual tom sobe, como uma pergunta?", "", ["2º tom (má)", "1º tom (mā)", "3º tom (mǎ)", "4º tom (mà)"], "O 2º tom sobe, como o \"hein?\" do português."],
      ["Qual destas é \"cavalo\"?", "马", ["mǎ", "mā", "má", "mà"], "马 mǎ, 3º tom: cai e sobe."],
      ["Como é o 4º tom?", "mà", ["Cai forte, de cima pra baixo", "Reto e alto", "Sobe", "Cai e depois sobe"], "O 4º tom é seco, como uma ordem: \"Vai!\""]
    ],
    en: [
      ["O que o EF SET mede?", "", ["Seu nível de inglês na escala CEFR", "Seu vocabulário em 4 línguas", "Só a sua pronúncia", "Sua velocidade de digitação"], "Ele dá um nível de A1 a C2."],
      ["Qual é o nível mais alto do CEFR?", "", ["C2", "A1", "B2", "D1"], "A escala vai de A1 (iniciante) até C2 (proficiente)."],
      ["Qual destes sons NÃO existe em português?", "", ["th, de think", "s, de sun", "m, de man", "f, de fish"], "O th é um dos sons que você treina amanhã."]
    ]
  },

  2: {
    jp: [
      ["Como se lê?", "し", ["shi", "si", "chi", "su"], "Irregular: し é shi, nunca si."],
      ["Como se lê?", "つ", ["tsu", "tu", "su", "chi"], "Irregular: つ é tsu."],
      ["O que significa?", "そと", ["fora", "embaixo", "sushi", "ano"], "そと (soto) = fora. した (shita) = embaixo."],
      ["Qual kana se lê \"chi\"?", "", ["ち", "し", "つ", "た"], "ち = chi, da linha た."]
    ],
    zh: [
      ["O que diferencia p de b no mandarim?", "", ["p sai com um sopro forte; b quase sem ar", "b vibra e p não, como no português", "b é mais longo", "Não há diferença"], "É aspiração: segure um papel na frente da boca e veja."],
      ["Qual destas significa \"pai\"?", "", ["bà", "pà", "dà", "tā"], "爸 bà = pai. 怕 pà = ter medo."],
      ["O que significa?", "他 tā", ["ele", "grande", "pai", "ter medo"], "他 tā = ele. O t sai com sopro."]
    ],
    en: [
      ["Onde fica a língua no th?", "", ["Entre os dentes, de leve", "Atrás dos dentes, como no t", "Enrolada pra trás", "Encostada no céu da boca"], "A ponta da língua aparece um pouquinho entre os dentes."],
      ["Qual palavra tem o th vibrado /ð/?", "", ["this", "think", "three", "both"], "this, mother, the: vibram. think, three, both: não."],
      ["Erro típico de brasileiro em \"think\":", "", ["Falar \"fink\" ou \"tink\"", "Alongar o i", "Pronunciar o k", "Engolir o n"], "Troque o f/t pela língua entre os dentes."]
    ]
  },

  3: {
    jp: [
      ["Como se lê?", "ふ", ["fu", "hu", "ho", "bu"], "ふ é fu, um som entre h e f."],
      ["O que significa?", "ひと", ["pessoa", "flor", "o quê", "barco"], "ひと (hito) = pessoa."],
      ["Como se lê?", "なに", ["nani", "nano", "nane", "hana"], "なに = nani = o quê."]
    ],
    zh: [
      ["O que significa?", "家 jiā", ["casa", "irmão mais velho", "ir", "agradecer"], "家 jiā = casa, família."],
      ["Como se faz j, q, x?", "", ["Língua achatada, atrás dos dentes de baixo", "No fundo da garganta", "Com a língua enrolada pra trás", "Com os lábios fechados"], "g k h saem da garganta; j q x, da frente."],
      ["O que significa?", "去 qù", ["ir", "poder", "agradecer", "bom"], "去 qù = ir."]
    ],
    en: [
      ["Qual palavra tem vogal LONGA?", "", ["sheep", "ship", "bit", "full"], "sheep /iː/ é longa; ship /ɪ/ é curta."],
      ["\"full\" e \"fool\" significam…", "", ["cheio / bobo", "bobo / cheio", "cheio / cheio", "navio / ovelha"], "full /fʊl/ curto; fool /fuːl/ longo."],
      ["O que significa?", "ship", ["navio", "ovelha", "barato", "ombro"], "ship = navio. sheep = ovelha."]
    ]
  },

  4: {
    jp: [
      ["Quantas kana tem a linha や?", "", ["3: や ゆ よ", "5", "2", "4"], "Não existe \"yi\" nem \"ye\" no hiragana moderno."],
      ["O som de ら lembra…", "ら", ["o r fraco de \"caro\"", "o r forte de \"rato\"", "o l de \"lua\"", "o h do inglês"], "Um toque rápido da língua no céu da boca."],
      ["O que significa?", "やま", ["montanha", "água", "céu", "nuvem"], "やま (yama) = montanha."],
      ["Como se lê?", "みず", ["mizu", "misu", "mitsu", "mazu"], "み = mi, ず = zu. みず = água."]
    ],
    zh: [
      ["Qual destas é retroflexa (língua curvada)?", "", ["吃 chī", "菜 cài", "三 sān", "在 zài"], "zh ch sh r curvam a língua; z c s não."],
      ["O que significa?", "是 shì", ["ser", "saber", "comer", "três"], "是 shì = ser. 我是… = eu sou…"],
      ["O que significa?", "在 zài", ["estar em", "comer", "prato", "pessoa"], "在 zài indica onde algo está."]
    ],
    en: [
      ["Como se pronuncia \"good\"?", "good", ["/gʊd/, terminando seco", "\"gudi\"", "\"gudê\"", "\"gú\""], "Feche no d e não solte vogal."],
      ["Qual é o erro comum em \"big\"?", "", ["Pôr um i no fim: \"biggi\"", "Alongar o i", "Não falar o b", "Falar o g como j"], "A consoante final fica seca."],
      ["Qual está pronunciado certo?", "", ["stop /stɒp/", "\"istópi\"", "\"stópi\"", "\"istop\""], "Dois erros comuns: i antes do s e i depois do p."]
    ]
  },

  5: {
    jp: [
      ["Qual kana é o \"n\" sozinho?", "", ["ん", "な", "の", "ぬ"], "ん é a única kana sem vogal."],
      ["Como se lê?", "わたし", ["watashi", "wadashi", "otashi", "watachi"], "わたし = eu."],
      ["を é usado principalmente como…", "を", ["partícula de objeto, lida \"o\"", "sílaba \"wo\" em palavras comuns", "o som \"n\"", "ponto final"], "水を飲みます: bebo água. を marca o que é bebido."],
      ["O que significa?", "にほん", ["Japão", "eu", "livro", "chuva"], "にほん (nihon) = Japão."]
    ],
    zh: [
      ["很 hěn termina em nasal…", "很 hěn", ["curta (-n)", "longa (-ng)", "sem nasal", "dupla"], "-n fecha rápido; -ng ressoa no fundo."],
      ["O que significa?", "买 mǎi", ["comprar", "bonito", "bom", "muito"], "买 mǎi = comprar. 卖 mài = vender (só o tom muda)."],
      ["O que significa?", "中 zhōng", ["meio, centro", "montanha", "nascer", "muito"], "中国 Zhōngguó = China, o \"país do meio\"."]
    ],
    en: [
      ["Como soa o -ed de \"needed\"?", "needed", ["/ɪd/", "/t/", "/d/", "mudo"], "Depois de t ou d, o -ed ganha vogal."],
      ["Como soa o -ed de \"worked\"?", "worked", ["/t/", "/d/", "/ɪd/", "/ed/"], "Depois de som surdo (k), vira /t/: \"workt\"."],
      ["Como soa o -ed de \"played\"?", "played", ["/d/", "/t/", "/ɪd/", "/ed/"], "Depois de vogal, vira /d/: \"playd\"."],
      ["Qual destas tem o -ed com vogal /ɪd/?", "", ["wanted", "watched", "loved", "kissed"], "wanted termina em t, então -ed = /ɪd/."]
    ]
  },

  8: {
    jp: [
      ["か com dakuten (゛) vira…", "か → ?", ["が", "ぱ", "ざ", "だ"], "O dakuten deixa o som mais grave: ka → ga."],
      ["は com handakuten (゜) vira…", "は → ?", ["ぱ", "ば", "が", "ざ"], "゜ só existe na linha は e cria o som p."],
      ["Como se lê?", "だれ", ["dare", "tare", "zare", "bare"], "だれ = quem."],
      ["O que significa?", "かぎ", ["chave", "espelho", "chapéu", "quem"], "かぎ (kagi) = chave."]
    ],
    zh: [
      ["O que significa?", "学习 xuéxí", ["estudar", "professor", "muito bom", "obrigado"], "学习 = estudar, dois 2º tons."],
      ["Em 很好, o primeiro 3º tom soa como…", "很好 hěn hǎo", ["2º tom", "1º tom", "4º tom", "neutro"], "Dois 3º tons seguidos: o primeiro vira 2º."],
      ["Em 谢谢, a segunda sílaba é…", "谢谢 xièxie", ["neutra, curta e leve", "4º tom", "1º tom", "3º tom"], "Sílabas repetidas costumam ficar neutras."]
    ],
    en: [
      ["Onde fica a tônica de \"photography\"?", "photography", ["pho-TO-gra-phy", "PHO-to-gra-phy", "pho-to-GRA-phy", "pho-to-gra-PHY"], "phoTOgraphy. Em photograph é PHOtograph."],
      ["\"reCORD\", com tônica na 2ª sílaba, é…", "reCORD", ["verbo: gravar", "substantivo: registro", "adjetivo", "advérbio"], "Verbo na 2ª, substantivo na 1ª: REcord / reCORD."],
      ["Onde fica a tônica de \"photographic\"?", "photographic", ["pho-to-GRA-phic", "PHO-to-gra-phic", "pho-TO-gra-phic", "pho-to-gra-PHIC"], "Palavras em -ic têm tônica logo antes do -ic."]
    ]
  },

  9: {
    jp: [
      ["Como se lê?", "きょう", ["kyō", "kiyō", "kyu", "kiyou"], "きょ é uma sílaba só. きょう = hoje."],
      ["O que significa?", "しゃしん", ["foto", "hoje", "chá", "cliente"], "しゃしん (shashin) = foto."],
      ["O ゃ pequeno em きゃ faz…", "きゃ", ["os dois sons virarem uma sílaba só", "a sílaba ficar longa", "uma pausa", "o som ficar nasal"], "き + ゃ = kya, não ki-ya."]
    ],
    zh: [
      ["Como perguntar \"como vai?\"", "", ["你好吗？", "你好", "对不起", "没关系"], "吗 no final vira pergunta."],
      ["Alguém diz 对不起. Você responde:", "对不起", ["没关系", "你好", "再见", "我很好"], "没关系 = sem problema."],
      ["O que significa?", "我很好", ["estou bem", "você é bom", "muito obrigado", "olá"], "我 eu · 很 muito · 好 bem."]
    ],
    en: [
      ["Em \"a cup of tea\", o of soa…", "a cup of tea", ["/əv/, bem fraco", "/ɒf/, forte", "\"óf\"", "\"óv\" forte"], "Palavras gramaticais ficam fracas na fala."],
      ["Qual destas NUNCA reduz na fala?", "", ["can't", "can", "to", "and"], "can soa /kən/; can't fica forte /kænt/. É assim que se diferencia."],
      ["\"I can help\": can soa…", "I can help", ["/kən/", "/kæn/", "\"kén\"", "/kænt/"], "Sem ênfase, can reduz."]
    ]
  },

  10: {
    jp: [
      ["Como se lê?", "がっこう", ["gakkō", "gakō", "gatsukō", "gakkou-u"], "っ dobra o k e ou alonga: gak-kō."],
      ["O que significa?", "おばあさん", ["avó", "tia", "mãe", "irmã"], "Com o a longo, é avó."],
      ["O que significa?", "おばさん", ["tia", "avó", "mãe", "senhora idosa"], "Sem o a longo, é tia."],
      ["O っ pequeno representa…", "っ", ["uma pausa que dobra a consoante seguinte", "o som tsu", "uma vogal longa", "o fim da palavra"], "きって = kit-te (selo)."]
    ],
    zh: [
      ["Resposta certa para 谢谢:", "谢谢", ["不客气", "再见", "对不起", "你好"], "不客气 bú kèqi = de nada."],
      ["再见 literalmente quer dizer…", "再见", ["\"ver de novo\"", "\"boa noite\"", "\"até amanhã\"", "\"obrigado\""], "再 de novo · 见 ver."],
      ["Como se lê 不客气?", "不客气", ["bú kèqi", "bù kèqì", "bǔ kéqi", "bu keqi (sem tons)"], "不 vira 2º tom antes de um 4º tom."]
    ],
    en: [
      ["\"turn it off\" soa como…", "turn it off", ["\"tur-ni-toff\"", "\"turn · it · off\", separado", "\"turni-ti-offi\"", "\"tur-it-of\""], "A consoante final gruda na vogal seguinte."],
      ["Linking acontece quando…", "", ["uma palavra termina em consoante e a próxima começa em vogal", "duas palavras longas se encontram", "há uma vírgula", "a frase é pergunta"], "an_apple, pick_it_up."]
    ]
  },

  11: {
    jp: [
      ["O que significa?", "ちち", ["pai", "mãe", "irmão mais velho", "irmã mais velha"], "ちち = pai (o seu). はは = mãe."],
      ["O que significa?", "あめ", ["chuva", "céu", "montanha", "água"], "あめ (ame) = chuva."],
      ["O que significa?", "ありがとう", ["obrigado", "olá", "desculpe", "tchau"], "ありがとう (arigatō) = obrigado."]
    ],
    zh: [
      ["O que pergunta?", "你叫什么名字？", ["qual é o seu nome?", "quantos anos você tem?", "você é estudante?", "onde você mora?"], "叫 chamar-se · 什么 o quê · 名字 nome."],
      ["吗 no fim da frase…", "吗", ["vira pergunta de sim ou não", "indica passado", "indica posse", "é cumprimento"], "你是学生吗？ = você é estudante?"],
      ["O que significa?", "学生", ["estudante", "professor", "amigo", "nome"], "学生 xuésheng = estudante."]
    ],
    en: [
      ["\"gonna\" é a forma falada de…", "gonna", ["going to", "got to", "want to", "gone"], "I'm gonna go = I'm going to go."],
      ["\"I wanna help\" =", "I wanna help", ["I want to help", "I have to help", "I'm going to help", "I helped"], "wanna = want to."],
      ["Dá pra usar \"gotta\" num e-mail formal?", "", ["Não, só na fala casual", "Sim, sempre", "Só no começo", "Só no assunto"], "Na escrita formal: have to / got to."]
    ]
  },

  12: {
    jp: [
      ["Regra geral de ordem de traço:", "", ["De cima pra baixo, da esquerda pra direita", "De baixo pra cima", "Da direita pra esquerda", "Qualquer ordem"], "Vale para kana e kanji."],
      ["Quantos traços tem ん?", "ん", ["1", "2", "3", "4"], "ん é um traço só."],
      ["Qual kana se lê \"sa\"?", "", ["さ", "ち", "き", "そ"], "さ e ち são espelhadas: cuidado."]
    ],
    zh: [
      ["Qual é o radical de 好?", "好", ["女 mulher", "子 filho", "口 boca", "木 árvore"], "好 = 女 + 子. O radical é 女."],
      ["氵 indica relação com…", "氵", ["água", "pessoa", "boca", "árvore"], "河 rio, 海 mar, 洗 lavar."],
      ["Qual radical está em 你?", "你", ["亻 pessoa", "氵 água", "女 mulher", "口 boca"], "亻 é a forma de 人 na lateral."],
      ["林 é formado por…", "林", ["木 + 木: floresta", "水 + 木", "人 + 木", "口 + 木"], "Duas árvores = bosque."]
    ],
    en: [
      ["O que é shadowing?", "", ["Ouvir e repetir junto, copiando ritmo e entonação", "Traduzir palavra por palavra", "Ler a legenda sem som", "Escrever o que ouviu"], "É fala, não tradução."],
      ["No shadowing, o foco principal é…", "", ["ritmo e entonação", "gramática", "ortografia", "vocabulário novo"], "O som primeiro; o resto vem junto."]
    ]
  },

  15: {
    jp: [
      ["Katakana serve principalmente para…", "", ["palavras estrangeiras", "verbos", "partículas", "nomes japoneses"], "コーヒー, テレビ, パン…"],
      ["O que significa?", "コーヒー", ["café", "caderno", "chá", "táxi"], "コーヒー vem de coffee."],
      ["Como se lê?", "ノート", ["nōto", "noto", "nōta", "nete"], "ノート = caderno (note)."],
      ["Qual é \"ka\" em katakana?", "", ["カ", "ケ", "ク", "力"], "力 é um kanji (força) muito parecido com カ."]
    ],
    zh: [
      ["O que significa?", "这是我的书", ["este é o meu livro", "eu tenho um livro", "quem é você?", "e você?"], "的 marca posse: 我的 = meu."],
      ["Em 我很好，你呢？, o 呢 significa…", "呢", ["\"e você?\"", "\"quem?\"", "\"de\" (posse)", "\"não\""], "呢 devolve a pergunta."],
      ["O que significa?", "谁", ["quem", "o quê", "onde", "quando"], "谁 shéi = quem."]
    ],
    en: [
      ["Qual está correta?", "", ["Hi, I'm Vini.", "Hi, I Vini.", "Hello, my name Vini.", "I am call Vini."], "I'm = I am."],
      ["\"I work as an engineer\" responde…", "", ["o que você faz", "de onde você é", "quantos anos tem", "onde mora"], "work as + profissão."]
    ]
  },

  16: {
    jp: [
      ["O que significa?", "ホテル", ["hotel", "restaurante", "hospital", "pão"], "ホテル (hoteru)."],
      ["Como se lê?", "レストラン", ["resutoran", "restoran", "resutoranu", "rasutoren"], "O japonês põe vogal depois de cada consoante: re-su-to-ra-n."],
      ["Qual é \"n\" em katakana?", "", ["ン", "ソ", "シ", "ツ"], "ン e ソ confundem: o traço longo de ン sobe de baixo."]
    ],
    zh: [
      ["Como perguntar a idade de um adulto?", "", ["你多大？", "你几岁？", "你是谁？", "你好吗？"], "几岁 é para crianças."],
      ["O que significa?", "我二十五岁", ["tenho 25 anos", "tenho 52 anos", "são 25 horas", "tenho 2 filhos"], "二十五 = 2 × 10 + 5."],
      ["几 é usado quando…", "几", ["se espera um número pequeno", "se pergunta o nome", "se pergunta o lugar", "se pede desculpa"], "几 = quantos (poucos)."]
    ],
    en: [
      ["Qual está correta?", "", ["I think you're right.", "I'm thinking you're right.", "I am think you're right.", "I thinking you're right."], "Opinião: think sem -ing."],
      ["\"I'm having lunch\" está certo porque…", "", ["have aqui é ação (almoçar), não posse", "have sempre aceita -ing", "é passado", "é informal"], "Posse: I have a car. Ação: I'm having lunch."],
      ["Qual está correta?", "", ["I know the answer.", "I'm knowing the answer.", "I knowing the answer.", "I am know the answer."], "know é verbo de estado."]
    ]
  },

  17: {
    jp: [
      ["O que significa?", "ファイル", ["arquivo", "festa", "filme", "fogo"], "ファイル = file."],
      ["Por que existem ティ e ファ?", "", ["Para sons estrangeiros que o japonês não tem", "São erros de digitação", "São hiragana antigos", "Para palavras chinesas"], "O japonês nativo não tem ti nem fa."],
      ["Como se lê?", "パーティー", ["pātī", "pati", "pāchī", "bādī"], "パーティー = party, festa."]
    ],
    zh: [
      ["O que significa?", "我会说中文", ["eu sei falar chinês", "eu vou para a China", "eu gosto de chinês", "eu estudo chinês"], "会 = saber fazer, habilidade aprendida."],
      ["Como perguntar \"como se diz isso?\"", "", ["这个怎么说？", "这个多少钱？", "你叫什么？", "这是什么？"], "怎么 = como."],
      ["会 indica…", "会", ["habilidade aprendida", "posse", "lugar", "passado"], "我会游泳 = eu sei nadar."]
    ],
    en: [
      ["\"We provide software for builders\" usa…", "", ["present simple, fato permanente", "present continuous", "past simple", "futuro"], "Fatos sobre a empresa: present simple."],
      ["Complete: \"My role is ___ the sales team.\"", "", ["to lead", "lead", "leading to", "to leading"], "My role is to + verbo."]
    ]
  },

  18: {
    jp: [
      ["No katakana, o som longo se marca com…", "", ["ー", "a vogal repetida", "っ", "゛"], "コーヒー. No hiragana se repete a vogal."],
      ["O que significa?", "ボタン", ["botão", "pão", "bolo", "barco"], "ボタン vem do português \"botão\"."],
      ["O que significa?", "パン", ["pão", "panela", "pano", "caneta"], "パン também veio do português."]
    ],
    zh: [
      ["讠 vem de 言 e indica…", "讠", ["fala", "metal", "comida", "água"], "说 falar, 话 fala, 谢 agradecer."],
      ["O que significa?", "钱", ["dinheiro", "prata", "arroz", "falar"], "钱 qián, radical 钅 (metal)."],
      ["饿 tem o radical 饣. Tem a ver com…", "饿", ["comida: faminto", "metal", "fala", "água"], "饿 è = com fome."]
    ],
    en: [
      ["Qual está correta?", "", ["Could you tell me where the station is?", "Could you tell me where is the station?", "Could you tell me where does the station is?", "Could you tell me the station where is?"], "Dentro da pergunta indireta, ordem de afirmação."],
      ["\"Do you know what time it is?\" é…", "", ["uma pergunta indireta educada", "uma pergunta errada", "uma ordem", "uma afirmação"], "Sem inversão: what time it is."]
    ]
  },

  19: {
    jp: [
      ["Nesta frase, o は se lê…", "これはペンです", ["wa", "ha", "ba", "e"], "Como partícula de tópico, は = wa."],
      ["O que significa?", "私の本", ["meu livro", "eu sou um livro", "livro para mim", "o livro é meu?"], "の marca posse: 私の = meu."],
      ["O que se põe no fim pra virar pergunta?", "", ["か", "の", "は", "を"], "学生ですか = é estudante?"],
      ["O que significa?", "あなたは学生ですか。", ["você é estudante?", "eu sou estudante", "ele é estudante", "você não é estudante"], "あなた você · 学生 estudante · か pergunta."]
    ],
    zh: [
      ["Ordem da data em chinês:", "", ["mês → dia", "dia → mês", "tanto faz", "só o dia"], "Do maior pro menor: ano, mês, dia."],
      ["O que significa?", "星期一", ["segunda-feira", "domingo", "janeiro", "dia 1"], "星期 + número: 一 segunda, 二 terça…"],
      ["O que significa?", "十月一号", ["1º de outubro", "10 de janeiro", "11 de outubro", "1º de novembro"], "十月 outubro · 一号 dia 1."]
    ],
    en: [
      ["Qual é uma pergunta aberta?", "", ["What do you do?", "Do you work?", "Are you from here?", "Is it cold?"], "Aberta = não dá pra responder só com yes/no."],
      ["Bom follow-up para \"I'm from Portugal\":", "I'm from Portugal", ["What's it like there?", "Ok.", "Me too, bye.", "Is it?"], "Follow-up puxa mais conversa."]
    ]
  },

  22: {
    jp: [
      ["Objeto perto de quem OUVE:", "", ["それ", "これ", "あれ", "どれ"], "これ perto de mim · それ perto de você · あれ longe."],
      ["O que significa?", "これは何ですか。", ["o que é isto?", "o que é aquilo?", "qual é?", "isto é seu?"], "何 (nan) = o quê."],
      ["Objeto longe dos dois:", "", ["あれ", "それ", "これ", "どれ"], "あれ = aquilo."]
    ],
    zh: [
      ["O que significa?", "多少钱？", ["quanto custa?", "quantos anos?", "onde fica?", "quanto tempo?"], "多少 quanto · 钱 dinheiro."],
      ["O que significa?", "我想买这个", ["eu quero comprar isto", "eu comprei isto", "eu vendo isto", "eu gosto disto"], "想 + verbo = querer fazer."],
      ["块 é…", "块", ["a unidade de dinheiro na fala", "um tipo de comida", "\"quanto\"", "\"comprar\""], "三十块 = 30 iuanes."]
    ],
    en: [
      ["Qual está correta?", "", ["I went to the office last week.", "I have gone to the office last week.", "I go to the office last week.", "I was go to the office last week."], "Tempo terminado (last week) pede past simple."],
      ["Qual está correta?", "", ["I have two meetings tomorrow.", "I have two meeting tomorrow.", "I has two meetings tomorrow.", "I having two meetings tomorrow."], "Plural com -s; I have."]
    ]
  },

  23: {
    jp: [
      ["\"este livro\" em japonês:", "", ["この本", "これ本", "これの本", "ここ本"], "この sempre cola num substantivo."],
      ["O que significa?", "あそこ", ["lá, longe dos dois", "aqui", "aí", "onde"], "ここ aqui · そこ aí · あそこ lá."],
      ["この sempre vem…", "この", ["antes de um substantivo", "sozinho", "no fim da frase", "depois de です"], "これ fica sozinho; この + substantivo."]
    ],
    zh: [
      ["O que significa?", "我在家", ["estou em casa", "minha casa", "vou pra casa", "tenho casa"], "在 + lugar = estar em."],
      ["O que significa?", "哪儿", ["onde", "quem", "quando", "o quê"], "你在哪儿？ = onde você está?"],
      ["O que significa?", "书在桌子上", ["o livro está na mesa", "a mesa está no livro", "compro um livro", "leio na mesa"], "上 = em cima."]
    ],
    en: [
      ["Qual está correta?", "", ["I have lived here since 2020.", "I live here since 2020.", "I am living here since 2020.", "I lived here since 2020."], "Com since, present perfect. Erro clássico de brasileiro."],
      ["Qual está correta?", "", ["She is an engineer.", "She is engineer.", "She is a engineer.", "She is the engineer of profession."], "Profissão leva artigo: an antes de vogal."]
    ]
  },

  24: {
    jp: [
      ["Negue: これは猫です", "これは猫です", ["これは猫じゃないです", "これは猫ですか", "これは猫もです", "これは猫のです"], "じゃないです = não é."],
      ["O que significa?", "私も学生です", ["eu também sou estudante", "eu sou estudante", "eu não sou estudante", "você é estudante?"], "も = também, no lugar do は."],
      ["O que significa?", "誰の", ["de quem", "quem", "qual", "onde"], "誰の本ですか = de quem é o livro?"]
    ],
    zh: [
      ["O que significa?", "请坐", ["por favor, sente-se", "posso sentar?", "sentei", "senta já!"], "请 + verbo = pedido educado."],
      ["O que significa?", "我能帮你吗？", ["posso te ajudar?", "você pode me ajudar?", "eu te ajudei", "me ajuda!"], "能 = poder."],
      ["O que significa?", "我有一只猫", ["eu tenho um gato", "eu sou um gato", "eu vejo um gato", "eu quero um gato"], "有 = ter. 只 é o contador de animais."]
    ],
    en: [
      ["It depends ___ the weather.", "", ["on", "of", "from", "in"], "depend ON, nunca \"of\"."],
      ["He arrived ___ Tokyo yesterday.", "", ["in", "at", "to", "on"], "Cidade ou país: arrive in."],
      ["She's married ___ a doctor.", "", ["to", "with", "of", "in"], "married TO."],
      ["I'm good ___ math.", "", ["at", "in", "on", "for"], "good AT."]
    ]
  },

  25: {
    jp: [
      ["Como se lê?", "三百", ["sanbyaku", "sanhyaku", "sanpyaku", "mihyaku"], "Depois de さん, ひゃく vira びゃく."],
      ["Quanto é?", "千円", ["1.000 ienes", "100 ienes", "10.000 ienes", "10 ienes"], "千 sen = mil."],
      ["Como se lê?", "二百円", ["nihyaku en", "nibyaku en", "nipyaku en", "nisen en"], "Com 二 não muda: nihyaku."]
    ],
    zh: [
      ["O que significa?", "年", ["ano", "mês", "dia", "semana"], "年 nián = ano."],
      ["O que significa?", "日", ["dia, sol", "lua", "ano", "hora"], "日 rì = dia (escrito)."],
      ["O que significa?", "月", ["mês, lua", "sol", "ano", "semana"], "月 yuè = mês."]
    ],
    en: [
      ["Qual está correta?", "", ["I didn't go to work yesterday.", "I didn't went to work yesterday.", "I not went to work yesterday.", "I don't went to work yesterday."], "Depois de didn't, verbo na forma base."],
      ["Qual está correta?", "", ["There are many people here.", "Have many people here.", "It has many people here.", "There is many people here."], "\"Tem\" de existência = there is/are, não have."]
    ]
  },

  26: {
    jp: [
      ["O que significa?", "いくらですか。", ["quanto custa?", "o que é isto?", "onde fica?", "quem é?"], "いくら = quanto (preço)."],
      ["O que significa?", "それはカメラです。", ["isso é uma câmera", "isto é uma câmera", "aquilo é uma câmera", "a câmera é sua?"], "それ = isso, perto de quem ouve."]
    ],
    zh: [
      ["Que horas são?", "三点半", ["3:30", "3:15", "2:30", "3:05"], "半 = meia."],
      ["O que significa?", "现在几点？", ["que horas são?", "que dia é hoje?", "quanto custa?", "onde você está?"], "现在 agora · 几点 que horas."],
      ["O que significa?", "十分钟以前", ["10 minutos atrás", "daqui a 10 minutos", "10 horas atrás", "às 10 horas"], "以前 = antes, atrás."]
    ],
    en: [
      ["Melhor abertura de e-mail curto:", "", ["I'm writing to ask if we could reschedule our meeting.", "I write for to ask reschedule.", "Hello, how are you, how is your family, I hope…", "Reschedule meeting now."], "Propósito na primeira frase."],
      ["Fechamento adequado:", "", ["Best, Vini", "Kisses, Vini", "Bye bye", "That's all."], "Best, / Best regards, / Thanks,"]
    ]
  },

  29: {
    jp: [
      ["食べる na forma ます:", "食べる", ["食べます", "食べります", "食びます", "食べるます"], "Verbo ru: tira る e põe ます."],
      ["飲む na forma ます:", "飲む", ["飲みます", "飲むます", "飲めます", "飲ます"], "Verbo u: む vira み + ます."],
      ["行く na forma ます:", "行く", ["行きます", "行くます", "行けます", "行ます"], "く vira き + ます."]
    ],
    zh: [
      ["O que significa?", "太贵了！", ["caro demais!", "muito barato!", "que tal?", "é bom!"], "太…了 = demais."],
      ["O que significa?", "这个怎么样？", ["que tal isso?", "quanto custa isso?", "o que é isso?", "como se diz isso?"], "怎么样 pede opinião."]
    ],
    en: [
      ["I ___ when the alarm rang.", "", ["was sleeping", "slept", "am sleeping", "sleep"], "Ação em andamento, interrompida: past continuous."],
      ["She was cooking when the phone ___.", "", ["rang", "was ringing", "rings", "ring"], "A interrupção vai no past simple."],
      ["O past continuous descreve…", "", ["uma ação em andamento no passado", "uma ação futura", "um hábito atual", "uma ação antes de outra no passado"], "was/were + -ing."]
    ]
  },

  30: {
    jp: [
      ["学校___行きます (vou PARA a escola)", "", ["へ", "で", "を", "の"], "へ = direção."],
      ["図書館___勉強します (estudo NA biblioteca)", "", ["で", "へ", "を", "が"], "で = onde a ação acontece."],
      ["水___飲みます (bebo água)", "", ["を", "で", "に", "へ"], "を = objeto direto."],
      ["7時___起きます (acordo ÀS 7)", "", ["に", "で", "を", "へ"], "に = horário ou destino."]
    ],
    zh: [
      ["O que significa?", "我在吃饭呢", ["estou comendo agora", "eu comi", "vou comer", "estou em casa"], "在 + verbo + 呢 = ação em andamento."],
      ["\"Estou estudando chinês agora\":", "", ["我在学中文呢", "我学中文了", "我会学中文", "我想学中文"], "在…呢."]
    ],
    en: [
      ["When I arrived, the movie ___.", "", ["had already started", "has already started", "already starts", "was already start"], "Antes de outro momento passado: past perfect."],
      ["Em \"they had left\", a saída aconteceu…", "", ["antes de outro momento do passado", "depois", "agora", "no futuro"], "had + particípio = o passado do passado."]
    ]
  }

};
