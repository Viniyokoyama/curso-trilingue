// Aulas guiadas do Mês 1 (dias 1–30): explicação, exemplos e exercício por língua.
// Dias de consolidação/teste (6, 7, 13, 14, 20, 21, 27, 28) usam a chave "revisao".
window.LICOES = {

  1: {
    jp: {
      titulo: "Hiragana: linhas あ e か",
      explicacao: "O hiragana é um silabário: cada símbolo vale sempre o mesmo som, sem exceção (diferente do português, onde uma letra muda de som). A linha あ tem as 5 vogais puras. A linha か junta o som \"k\" com cada vogal.",
      exemplos: [["あ い う え お", "a i u e o", "as 5 vogais"], ["か き く け こ", "ka ki ku ke ko", "\"k\" + vogal"], ["かお", "kao", "rosto"], ["いえ", "ie", "casa"], ["うえ", "ue", "em cima"]],
      exercicio: { pergunta: "Sem olhar o romaji, leia かお e いえ em voz alta. O que significam?", resposta: "かお = kao = rosto · いえ = ie = casa" }
    },
    zh: {
      titulo: "Pinyin: os 4 tons",
      explicacao: "O mandarim usa o pinyin (letras) para representar o som, mas o tom muda o significado da palavra. 1º tom: reto e alto (mā). 2º: sobe (má). 3º: cai e sobe (mǎ). 4º: cai forte (mà). As finais básicas são a, o, e, i, u, ü.",
      exemplos: [["mā", "1º tom, reto", "妈 (mãe)"], ["má", "2º tom, sobe", "麻 (cânhamo)"], ["mǎ", "3º tom, cai e sobe", "马 (cavalo)"], ["mà", "4º tom, cai forte", "骂 (xingar)"]],
      exercicio: { pergunta: "Diga mā, má, mǎ, mà em sequência 5 vezes e grave. Consegue ouvir as 4 diferenças na gravação?", resposta: "Não há resposta certa/errada — o objetivo é comparar sua gravação com um áudio nativo (Forvo ou Google Tradutor) e notar onde a curva do tom difere." }
    },
    en: {
      titulo: "Dia de diagnóstico: teste EF SET",
      explicacao: "Hoje o bloco de inglês é maior porque você faz o EF SET (efset.org), um teste gratuito de 50 minutos que te dá um nível no CEFR (A1 a C2). Nos próximos 4 dias você vai treinar exatamente os sons que mais atrapalham quem fala português: th, vogais curtas e longas, consoantes finais e a terminação -ed.",
      exemplos: [["EF SET", "efset.org", "teste gratuito, ~50 min"], ["CEFR", "A1–C2", "escala usada no resultado"]],
      exercicio: { pergunta: "Faça o teste agora e anote seu nível.", resposta: "Guarde o resultado — você vai refazer o teste no checkpoint do dia 90." }
    }
  },

  2: {
    jp: {
      titulo: "Hiragana: linhas さ e た",
      explicacao: "Duas leituras irregulares aparecem aqui e vale decorar: し é \"shi\" (não \"si\") e ち é \"chi\" (não \"ti\"). O resto segue o padrão consoante+vogal.",
      exemplos: [["さ し す せ そ", "sa shi su se so", "atenção no し = shi"], ["た ち つ て と", "ta chi tsu te to", "atenção no ち = chi, つ = tsu"], ["すし", "sushi", "sushi"], ["した", "shita", "embaixo"], ["そと", "soto", "fora"]],
      exercicio: { pergunta: "Leia そと e した sem olhar o romaji.", resposta: "そと = soto = fora · した = shita = embaixo" }
    },
    zh: {
      titulo: "Iniciais aspiradas × não aspiradas: b/p, d/t",
      explicacao: "Isto não é \"sonoro × surdo\" como em português — é aspiração. p, t, k saem com um sopro de ar forte; b, d, g saem quase sem ar. Teste: segure um papel na frente da boca. Em p/t/k o papel balança; em b/d/g, quase nada.",
      exemplos: [["bà", "sem sopro forte", "爸 (pai)"], ["pà", "com sopro forte", "怕 (temer)"], ["dà", "sem sopro forte", "大 (grande)"], ["tā", "com sopro forte", "他 (ele)"]],
      exercicio: { pergunta: "Diga bā-pā e dā-tā com um papel na frente da boca. Em qual dos dois o papel se move mais?", resposta: "No pā e no tā — são os aspirados." }
    },
    en: {
      titulo: "Os dois sons de th: /θ/ e /ð/",
      explicacao: "O português não tem nenhum dos dois. A língua fica entre os dentes. /θ/ é sem vibração (think, three); /ð/ é com vibração das cordas vocais (this, mother). Evite trocar por \"t/d\" ou \"f/v\", os erros mais comuns de brasileiro.",
      exemplos: [["think", "/θɪŋk/", "pensar — sem vibração"], ["this", "/ðɪs/", "isto — com vibração"], ["three", "/θriː/", "três"], ["mother", "/ˈmʌðər/", "mãe"], ["both", "/boʊθ/", "ambos"]],
      exercicio: { pergunta: "Grave-se dizendo think, this, three, mother, both. Compare com a pronúncia no dicionário (Cambridge Dictionary tem áudio).", resposta: "Ouça se a língua está tocando os dentes de leve, não atrás deles como no \"t\" do português." }
    }
  },

  3: {
    jp: {
      titulo: "Hiragana: linhas な e は",
      explicacao: "は e へ aqui valem \"ha\" e \"he\" normalmente — só quando viram partícula gramatical (mais pra frente no curso) é que mudam de som. Por enquanto, leia como escrito.",
      exemplos: [["な に ぬ ね の", "na ni nu ne no", ""], ["は ひ ふ へ ほ", "ha hi fu he ho", ""], ["なに", "nani", "o quê"], ["はな", "hana", "flor / nariz"], ["ひと", "hito", "pessoa"]],
      exercicio: { pergunta: "Leia なに, はな e ひと sem romaji.", resposta: "なに = nani (o quê) · はな = hana (flor/nariz) · ひと = hito (pessoa)" }
    },
    zh: {
      titulo: "Iniciais g/k/h × j/q/x",
      explicacao: "g, k, h saem do fundo da garganta, como em português. j, q, x são feitas com a língua achatada atrás dos dentes de baixo — soam parecidos com \"dj/tch/ss\" mas não são iguais a nenhum som do português. É a confusão mais comum de iniciante.",
      exemplos: [["gē", "fundo da garganta", "哥 (irmão mais velho)"], ["kě", "fundo da garganta", "可 (poder)"], ["jiā", "língua achatada", "家 (casa)"], ["qù", "língua achatada", "去 (ir)"], ["xiè", "língua achatada", "谢 (agradecer)"]],
      exercicio: { pergunta: "Diga gē-kě e depois jiā-qù-xiè. Sinta a diferença de onde a língua toca.", resposta: "g/k tocam mais atrás (garganta); j/q/x tocam mais na frente, língua achatada." }
    },
    en: {
      titulo: "Vogais curtas × longas: ship/sheep, full/fool",
      explicacao: "Em português quase não distinguimos vogais por duração. Em inglês isso muda o sentido da palavra. /ɪ/ (ship) é curta e relaxada; /iː/ (sheep) é longa e tensa. O mesmo vale para /ʊ/ (full) × /uː/ (fool).",
      exemplos: [["ship", "/ʃɪp/", "navio — curta"], ["sheep", "/ʃiːp/", "ovelha — longa"], ["full", "/fʊl/", "cheio — curta"], ["fool", "/fuːl/", "bobo — longa"], ["bit / beat", "/bɪt/ / /biːt/", "pedaço / bater"]],
      exercicio: { pergunta: "Grave ship-sheep, full-fool, bit-beat 3 vezes cada, dando mais duração na segunda palavra de cada par.", resposta: "Ouça se a segunda vogal do par soa nitidamente mais longa que a primeira." }
    }
  },

  4: {
    jp: {
      titulo: "Hiragana: linhas ま, や e ら",
      explicacao: "や só tem 3 sons (や ゆ よ, sem \"i\" nem \"e\"). ら り る れ ろ soam entre o \"r\" e o \"l\" do português — é um toque rápido da língua no céu da boca, como o \"r\" fraco de \"caro\".",
      exemplos: [["ま み む め も", "ma mi mu me mo", ""], ["や ゆ よ", "ya yu yo", "só 3 sons"], ["ら り る れ ろ", "ra ri ru re ro", "como o r de \"caro\""], ["やま", "yama", "montanha"], ["みず", "mizu", "água"]],
      exercicio: { pergunta: "Leia やま e みず sem romaji.", resposta: "やま = yama (montanha) · みず = mizu (água)" }
    },
    zh: {
      titulo: "Iniciais retroflexas zh/ch/sh/r × dentais z/c/s",
      explicacao: "zh, ch, sh, r são retroflexas: a ponta da língua se curva pra trás, tocando o céu da boca. z, c, s são dentais: a língua toca perto dos dentes da frente, som mais \"chiado\" e baixo. É outro par que confunde iniciante.",
      exemplos: [["zhī", "língua curvada", "知 (saber)"], ["chī", "língua curvada", "吃 (comer)"], ["shì", "língua curvada", "是 (ser)"], ["zài", "língua reta", "在 (em)"], ["sān", "língua reta", "三 (três)"]],
      exercicio: { pergunta: "Diga zhī-chī-shì e depois zài-sān. Curve a língua nos 3 primeiros, mantenha reta nos 2 últimos.", resposta: "Se soarem iguais, exagere a curvatura da língua nos retroflexos até sentir a diferença física." }
    },
    en: {
      titulo: "Consoantes finais sem vogal extra",
      explicacao: "Brasileiro tende a completar toda consoante final com uma vogal: \"big\" vira \"biggi\", \"stop\" vira \"stopi\", \"good\" vira \"gudi\". Em inglês a consoante final é curta e seca — a boca fecha e não solta ar extra.",
      exemplos: [["big", "/bɪg/", "grande"], ["stop", "/stɒp/", "parar"], ["good", "/gʊd/", "bom"], ["cat", "/kæt/", "gato"], ["dog", "/dɒg/", "cachorro"]],
      exercicio: { pergunta: "Grave big, stop, good, cat, dog sem deixar escapar nenhum som de vogal depois da última consoante.", resposta: "Se ouvir um \"i\" ou \"u\" fantasma no final, repita mais devagar cortando o ar na hora de fechar a boca." }
    }
  },

  5: {
    jp: {
      titulo: "Hiragana: わ, を, ん + revisão das 46",
      explicacao: "わ é \"wa\". を quase só aparece como partícula de objeto (vem mais pra frente) e se lê \"o\". ん é a única \"consoante sozinha\" do hiragana, o som \"n\" no final de sílaba. Com isso fecham as 46 hiragana básicas — hoje é dia de revisar todas.",
      exemplos: [["わ", "wa", ""], ["を", "o (partícula)", ""], ["ん", "n", "único som sem vogal"], ["わたし", "watashi", "eu"], ["にほん", "nihon", "Japão"]],
      exercicio: { pergunta: "Escreva as 46 hiragana básicas de memória numa folha, cronometrando o tempo.", resposta: "Confira contra a linha あ-か-さ-た-な-は-ま-や-ら-わ-を-ん e marque as que errou pra revisar amanhã." }
    },
    zh: {
      titulo: "Finais compostas: ai, ei, ao, ou, an, en, ang, eng, ong",
      explicacao: "Além das finais simples, o pinyin tem finais compostas: ditongos (ai, ei, ao, ou) e finais nasais, que terminam em -n (nasal mais curta, como \"an\" de \"pan\") ou -ng (nasal mais longa, como \"song\" em inglês).",
      exemplos: [["mǎi", "ai", "买 (comprar)"], ["měi", "ei", "美 (bonito)"], ["hǎo", "ao", "好 (bom)"], ["hěn", "en, nasal curta", "很 (muito)"], ["zhōng", "ong, nasal longa", "中 (meio/China)"]],
      exercicio: { pergunta: "Diga hěn e zhōng seguidos, notando a diferença entre a nasal curta (-en) e a longa (-ong).", resposta: "Em hěn a boca fecha rápido; em zhōng o som nasal continua e os lábios arredondam." }
    },
    en: {
      titulo: "Terminação -ed: 3 sons diferentes",
      explicacao: "O -ed no passado regular tem 3 pronúncias, e nenhuma delas é \"-êd\" como o brasileiro tende a falar. Depois de som surdo (k, s, p, f, sh, ch): /t/. Depois de som sonoro (a maioria): /d/. Só depois de t ou d: /ɪd/, com vogal extra.",
      exemplos: [["worked", "/t/", "trabalhou — depois de k"], ["played", "/d/", "jogou — depois de vogal"], ["wanted", "/ɪd/", "quis — depois de t"], ["watched", "/t/", "assistiu — depois de ch"], ["loved", "/d/", "amou — depois de v"]],
      exercicio: { pergunta: "Classifique o som de -ed em: talked, opened, needed, kissed, studied.", resposta: "talked = /t/ · opened = /d/ · needed = /ɪd/ · kissed = /t/ · studied = /d/" }
    }
  },

  6: { revisao: {
    titulo: "Consolidação — sem conteúdo novo",
    itens: [
      { lang: "jp", texto: "Leia 30 palavras só em hiragana (use os exemplos dos dias 1–5 e o dicionário do celular). Aproveite e configure o teclado japonês no seu telefone." },
      { lang: "zh", texto: "Leia 30 sílabas com tom em voz alta. Fique de olho em duas mudanças automáticas: dois 3º tons seguidos (你好 vira ní hǎo) e o tom de 不 e 一, que muda conforme a sílaba seguinte." },
      { lang: "en", texto: "Faça 1 minuto de shadowing: escolha um trecho curto de áudio nativo e repita junto, tentando copiar o ritmo, não traduzir." }
    ],
    exercicio: { pergunta: "Depois de revisar, feche os olhos e recite de memória as 5 linhas de hiragana vistas até aqui (あ,か,さ,た,な,は,ま,や,ら,わ).", resposta: "Se travar em alguma linha, ela é sua prioridade de revisão amanhã antes do teste." }
  } },

  7: { revisao: {
    titulo: "Teste da semana 1",
    itens: [
      { lang: "jp", texto: "Escreva as 46 hiragana básicas em menos de 2 minutos, sem consultar nada." },
      { lang: "zh", texto: "Peça a alguém (ou grave você mesmo lendo embaralhado) um ditado de 20 sílabas com tom e escreva o pinyin com o tom certo." },
      { lang: "en", texto: "Grave-se 1 minuto se apresentando em inglês. Guarde o arquivo — você vai comparar com a gravação do dia 365." }
    ],
    exercicio: { pergunta: "Qual das 3 provas foi mais difícil?", resposta: "Reforce essa língua no bloco de Anki da próxima semana até nivelar com as outras duas." }
  } },

  8: {
    jp: {
      titulo: "Dakuten e handakuten: が, ざ, だ, ば, ぱ",
      explicacao: "Duas marcas pequenas mudam o som da consoante. O dakuten (゛) deixa o som mais \"grave\": か→が (ka→ga), さ→ざ (sa→za), た→だ (ta→da), は→ば (ha→ba). O handakuten (゜), só na linha は, cria o som \"p\": は→ぱ (ha→pa).",
      exemplos: [["か → が", "ka → ga", "かぎ kagi = chave"], ["た → だ", "ta → da", "だれ dare = quem"], ["は → ば", "ha → ba", "ぼうし boushi = chapéu"], ["は → ぱ", "ha → pa", "パン pan = pão (em katakana)"]],
      exercicio: { pergunta: "Converta com dakuten: か→?, し→?, た→?, は→? (duas respostas possíveis na última)", resposta: "か→が · し→じ · た→だ · は→ば (dakuten) ou ぱ (handakuten)" }
    },
    zh: {
      titulo: "Combinações de tons em pares",
      explicacao: "Palavras de duas sílabas combinam dois tons, e a combinação muda o ritmo da fala. Praticar pares reais é mais útil que decorar tabela: repare como o segundo tom \"puxa\" o primeiro.",
      exemplos: [["先生", "xiānsheng (1º + neutro)", "professor/senhor"], ["学习", "xuéxí (2º + 2º)", "estudar"], ["很好", "hěn hǎo (3º + 3º, mas soa 2º+3º)", "muito bom"], ["谢谢", "xièxie (4º + neutro)", "obrigado"]],
      exercicio: { pergunta: "Diga 先生, 学习, 很好, 谢谢 prestando atenção em como o tom muda de uma sílaba pra outra.", resposta: "Em 很好, repare que o primeiro 3º tom vira quase um 2º tom na fala rápida — isso é normal, não erro seu." }
    },
    en: {
      titulo: "Tonicidade muda a palavra: PHOtograph, phoTOgraphy, photoGRAphic",
      explicacao: "A mesma raiz muda de sílaba tônica conforme o sufixo, e a vogal átona vira schwa (som \"uh\" fraco). Isso é comum em famílias de palavras em inglês e não existe regra fixa em português para comparar.",
      exemplos: [["PHOtograph", "/ˈfoʊtəɡræf/", "substantivo"], ["phoTOgraphy", "/fəˈtɒɡrəfi/", "substantivo (arte)"], ["photoGRAphic", "/ˌfoʊtəˈɡræfɪk/", "adjetivo"], ["RECord (subst.)", "/ˈrekərd/", "registro"], ["reCORD (verbo)", "/rɪˈkɔːrd/", "gravar"]],
      exercicio: { pergunta: "Bata palma na sílaba tônica das 3 primeiras palavras. Depois diga RECord e reCORD mudando só o acento.", resposta: "PHO-to-graph · pho-TO-gra-phy · pho-to-GRA-phic · RE-cord (substantivo) · re-CORD (verbo)" }
    }
  },

  9: {
    jp: {
      titulo: "Yōon: きゃ, しゅ, ちょ",
      explicacao: "Um ゃゅょ pequeno depois de uma kana da coluna \"i\" funde os dois sons numa sílaba só, que dura o mesmo tempo que uma sílaba normal: き+ゃ = きゃ (kya), não \"ki-ya\" separado.",
      exemplos: [["きゃ きゅ きょ", "kya kyu kyo", ""], ["しゃ しゅ しょ", "sha shu sho", ""], ["ちゃ ちゅ ちょ", "cha chu cho", ""], ["きょう", "kyō", "hoje"], ["しゃしん", "shashin", "foto"]],
      exercicio: { pergunta: "Leia きょう e しゃしん sem separar as sílabas.", resposta: "きょう = kyō (hoje, uma batida só em \"kyo\") · しゃしん = shashin (foto)" }
    },
    zh: {
      titulo: "HSK1 L1: 你好, 对不起, 没关系",
      explicacao: "Primeiro bloco de frases prontas do curso. 你好 é o cumprimento neutro; 你好吗 pergunta como a pessoa está; 我很好 responde \"estou bem\"; 对不起/没关系 é o par pedido de desculpa / \"sem problema\".",
      exemplos: [["你好", "nǐ hǎo", "olá"], ["你好吗？", "nǐ hǎo ma", "como vai?"], ["我很好，谢谢", "wǒ hěn hǎo, xièxie", "estou bem, obrigado"], ["对不起", "duìbuqǐ", "desculpe"], ["没关系", "méi guānxi", "sem problema"]],
      exercicio: { pergunta: "Monte um mini-diálogo: A pergunta como B está; B responde bem e agradece; A pede desculpa por algo; B tranquiliza.", resposta: "A: 你好吗? B: 我很好，谢谢！ A: 对不起! B: 没关系。" }
    },
    en: {
      titulo: "Weak forms: to, for, of, and, can",
      explicacao: "Palavras gramaticais curtas (preposições, conjunções, o verbo can) quase sempre reduzem na fala natural: to soa /tə/, for soa /fər/, of soa /əv/, and soa /ən/, can soa /kən/. Só ficam \"fortes\" quando enfatizadas ou no final da frase — e can't nunca reduz, o que ajuda a diferenciar can de can't de ouvido.",
      exemplos: [["I want to go", "/tə/", "quero ir"], ["a cup of tea", "/əv/", "uma xícara de chá"], ["fish and chips", "/ən/", "peixe com batata frita"], ["I can help", "/kən/", "posso ajudar"]],
      exercicio: { pergunta: "Leia em voz alta \"I want to go to the store\" reduzindo os dois \"to\". Grave e compare com uma leitura robótica, palavra por palavra.", resposta: "A versão natural deve soar mais rápida e \"grudada\", quase como \"I wanna go ta the store\"." }
    }
  },

  10: {
    jp: {
      titulo: "っ pequeno e vogal longa: おかあさん",
      explicacao: "Um っ pequeno antes de uma consoante cria uma pausa curta, dobrando o som seguinte (がっこう = ga-K-kou, com uma pausa antes do k). Uma vogal repetida (como あ depois de か) alonga o som: おかあさん não é \"okasan\", é \"okaasan\", com o \"a\" durando o dobro.",
      exemplos: [["がっこう", "gakkou", "escola (pausa antes do k)"], ["きって", "kitte", "selo (pausa antes do t)"], ["おかあさん", "okaasan", "mãe (a alongado)"], ["おばさん", "obasan", "tia"], ["おばあさん", "obaasan", "avó (a alongado)"]],
      exercicio: { pergunta: "Diga おばさん (tia) e おばあさん (avó) em voz alta. Qual a diferença?", resposta: "おばあさん tem o \"a\" do meio alongado — trocar isso muda tia por avó." }
    },
    zh: {
      titulo: "HSK1 L2: 谢谢, 不客气, 再见",
      explicacao: "Fechamento de conversa: agradecer, responder ao agradecimento e se despedir. 你 depois de 谢谢 deixa o agradecimento mais pessoal e direto.",
      exemplos: [["谢谢你！", "xièxie nǐ", "obrigado (a você)!"], ["不客气", "bú kèqi", "de nada"], ["再见！", "zàijiàn", "tchau! (\"ver de novo\")"]],
      exercicio: { pergunta: "Complete o diálogo de despedida: A agradece, B responde educadamente, os dois se despedem.", resposta: "A: 谢谢你！ B: 不客气！ A e B: 再见！" }
    },
    en: {
      titulo: "Linking: an apple, pick it up",
      explicacao: "Quando uma palavra termina em consoante e a próxima começa em vogal, o inglês falado \"gruda\" as duas — não há pausa nenhuma entre elas. É um dos motivos de o inglês nativo soar rápido demais pra quem aprendeu palavra por palavra.",
      exemplos: [["an apple", "an_apple", "uma maçã"], ["turn it off", "turn_it_off", "desligue"], ["look at it", "look_at_it", "olhe pra isso"], ["not at all", "not_at_all", "de forma alguma"]],
      exercicio: { pergunta: "Leia \"pick it up\" e \"turn it off\" ligando as palavras como se fossem uma só. Grave e ouça.", resposta: "Deve soar como \"pi-ki-tup\" e \"tur-ni-toff\", sem pausas entre as palavras." }
    }
  },

  11: {
    jp: {
      titulo: "Leitura livre: 50 palavras reais",
      explicacao: "Sem kana nova hoje — é dia de consolidar lendo. Pegue as palavras dos dias 1 a 10 (números, pessoas, natureza, céu, família, cumprimentos) e leia cada uma em voz alta sem consultar o romaji, cronometrando.",
      exemplos: [["やま みず そら あめ", "yama mizu sora ame", "montanha, água, céu, chuva"], ["ちち はは あに あね", "chichi haha ani ane", "pai, mãe, irmão, irmã"], ["こんにちは ありがとう", "konnichiwa arigatō", "olá, obrigado"]],
      exercicio: { pergunta: "Leia as 50 palavras dos dias 1–10 sem romaji e marque as que travou.", resposta: "As palavras marcadas voltam no seu Anki com prioridade alta esta semana." }
    },
    zh: {
      titulo: "HSK1 L3: 叫, 什么, 是, 吗",
      explicacao: "Estrutura básica de se apresentar e perguntar o nome de alguém. 叫 é \"chamar-se\"; 什么 é \"o quê\"; 吗 no final transforma uma afirmação em pergunta de sim/não.",
      exemplos: [["我叫王芳", "wǒ jiào Wáng Fāng", "eu me chamo Wang Fang"], ["你叫什么名字？", "nǐ jiào shénme míngzi", "qual é o seu nome?"], ["你是学生吗？", "nǐ shì xuésheng ma", "você é estudante?"]],
      exercicio: { pergunta: "Responda em chinês: 你叫什么名字？(use seu próprio nome)", resposta: "我叫 [seu nome] — por exemplo, 我叫维尼西乌斯 wǒ jiào Wéiníxīwūsī." }
    },
    en: {
      titulo: "Fala rápida: gonna, wanna, gotta",
      explicacao: "Na fala casual (nunca na escrita formal), going to vira gonna, want to vira wanna, got to vira gotta. Reconhecer isso de ouvido é essencial — filmes e séries usam o tempo todo.",
      exemplos: [["I'm gonna go", "= going to", "eu vou ir"], ["I wanna eat", "= want to", "eu quero comer"], ["I gotta run", "= got to", "eu tenho que correr"]],
      exercicio: { pergunta: "Converta para fala casual: \"I am going to sleep\" e \"I want to help\".", resposta: "\"I'm gonna sleep\" · \"I wanna help\"" }
    }
  },

  12: {
    jp: {
      titulo: "Escrita à mão: revisão das 46 kana",
      explicacao: "Dia de reforçar a escrita manual — decorar o traçado ajuda a memorizar o som muito mais rápido que só ler na tela. Escreva cada uma das 46 hiragana básicas, prestando atenção na ordem dos traços.",
      exemplos: [["あ", "3 traços", "vogal a"], ["さ", "3 traços", "sa"], ["ん", "1 traço", "n"]],
      exercicio: { pergunta: "Escreva as 46 hiragana à mão numa folha, sem consultar nada.", resposta: "Compare com um gabarito de hiragana (busque \"tabela hiragana\" numa imagem) e refaça as que saíram tortas ou erradas." }
    },
    zh: {
      titulo: "Hanzi: 8 regras de ordem de traço e 4 radicais",
      explicacao: "Caracteres seguem regras fixas: horizontal antes de vertical, de cima pra baixo, da esquerda pra direita, de fora pra dentro. Radicais são \"blocos\" que se repetem e dão pista do significado: 亻 (pessoa), 口 (boca), 女 (mulher), 木 (árvore), 氵 (água).",
      exemplos: [["你 = 亻 + 尔", "nǐ", "você (radical pessoa)"], ["好 = 女 + 子", "hǎo", "bom (mulher + filho)"], ["河 = 氵 + 可", "hé", "rio (radical água)"]],
      exercicio: { pergunta: "Identifique o radical de 你, 好, 河 e 林.", resposta: "你 = 亻 (pessoa) · 好 = 女 (mulher) · 河 = 氵 (água) · 林 = 木 duas vezes (árvore, \"floresta\")" }
    },
    en: {
      titulo: "Shadowing de 10 minutos",
      explicacao: "Shadowing é ouvir e repetir ao mesmo tempo (ou com meio segundo de atraso), copiando o ritmo e a entonação — não traduzindo palavra por palavra. É a técnica mais eficaz pra destravar pronúncia e fluência de fala.",
      exemplos: [["escolha 1 frase curta", "de um vídeo/podcast", "10–15 palavras"], ["repita 10x seguidas", "sem parar pra pensar", "acompanhando o áudio"]],
      exercicio: { pergunta: "Escolha uma frase de um vídeo em inglês e faça shadowing dela 10 vezes seguidas.", resposta: "Na última repetição, tente falar junto sem olhar a legenda — se conseguir acompanhar o ritmo, é sinal de progresso." }
    }
  },

  13: { revisao: {
    titulo: "Checkpoint dia 13 — Consolidação",
    itens: [
      { lang: "jp", texto: "Leia um livro graduado nível 0 (procure \"Tadoku free graded readers\" — são gratuitos e feitos pra iniciante)." },
      { lang: "zh", texto: "Faça shadowing dos diálogos das lições HSK1 L1–3 (dias 9 e 11)." },
      { lang: "en", texto: "Escreva um diário de 5 frases sobre o seu dia e cole no Claude pra correção." }
    ],
    exercicio: { pergunta: "Quantas das 46 hiragana você ainda erra?", resposta: "Se forem mais de 5, use os próximos dias de Anki pra focar só nessas antes do teste do dia 14." }
  } },

  14: { revisao: {
    titulo: "Teste da semana 2",
    itens: [
      { lang: "jp", texto: "Escreva todas as kana e combinações (yōon, dakuten) vistas até aqui em menos de 3 minutos." },
      { lang: "zh", texto: "Ditado de pinyin com tom + recite os diálogos HSK1 L1–3 de memória." },
      { lang: "en", texto: "Grave-se lendo o mesmo texto do dia 7 (1 minuto) e compare a pronúncia." }
    ],
    exercicio: { pergunta: "Comparando as duas gravações de inglês (dia 7 e hoje), o que melhorou?", resposta: "Preste atenção especialmente em th, vogais curtas/longas e -ed — foram o foco da semana passada." }
  } },

  15: {
    jp: {
      titulo: "Katakana: ア a ノ",
      explicacao: "Katakana representa os mesmos sons do hiragana, mas com traços mais angulares, e é usado sobretudo para palavras estrangeiras. Aprenda ア〜ノ do mesmo jeito que aprendeu あ〜の: mesma pronúncia, forma diferente.",
      exemplos: [["ア イ ウ エ オ", "a i u e o", "mesma pronúncia de あいうえお"], ["カ キ ク ケ コ", "ka ki ku ke ko", ""], ["コーヒー", "kōhī", "café"], ["ノート", "nōto", "caderno"]],
      exercicio: { pergunta: "Leia コーヒー e ノート sem consultar.", resposta: "コーヒー = kōhī (café) · ノート = nōto (caderno)" }
    },
    zh: {
      titulo: "HSK1 L4: 的, 呢, 谁",
      explicacao: "的 marca posse (como \"de\" em \"o livro de Ana\"); 呢 devolve uma pergunta de forma curta (\"e você?\"); 谁 pergunta \"quem\".",
      exemplos: [["这是我的书", "zhè shì wǒ de shū", "este é o meu livro"], ["我很好，你呢？", "wǒ hěn hǎo, nǐ ne", "estou bem, e você?"], ["谁是你的朋友？", "shéi shì nǐ de péngyou", "quem é seu amigo?"]],
      exercicio: { pergunta: "Traduza \"Este é o livro dele\" usando 的.", resposta: "这是他的书 zhè shì tā de shū" }
    },
    en: {
      titulo: "Pitch pessoal de 1 minuto",
      explicacao: "Estrutura simples pra se apresentar sem travar: nome, origem, ocupação, um fato interessante. Ter essa estrutura pronta evita o branco que todo iniciante tem quando alguém pergunta \"tell me about yourself\".",
      exemplos: [["Hi, I'm ___.", "nome", ""], ["I'm from ___.", "origem", ""], ["I work as ___.", "ocupação", ""], ["I'm currently learning 4 languages at once.", "fato interessante", "gancho de conversa"]],
      exercicio: { pergunta: "Grave seu pitch de 1 minuto seguindo a estrutura.", resposta: "Guarde a gravação — ela entra no seu diagnóstico de erros do dia 22." }
    }
  },

  16: {
    jp: {
      titulo: "Katakana: ハ a ン",
      explicacao: "Continuação do katakana. Muitas palavras de origem estrangeira usam essas kana — hotel, restaurante e outras importações do inglês, francês etc.",
      exemplos: [["ハ ヒ フ ヘ ホ", "ha hi fu he ho", ""], ["マ ミ ム メ モ / ヤ ユ ヨ / ラ リ ル レ ロ / ワ ヲ ン", "", "resto do katakana"], ["ホテル", "hoteru", "hotel"], ["レストラン", "resutoran", "restaurante"]],
      exercicio: { pergunta: "Leia ホテル e レストラン sem consultar.", resposta: "ホテル = hoteru (hotel) · レストラン = resutoran (restaurante)" }
    },
    zh: {
      titulo: "HSK1 L5: números até 99, 几, 岁",
      explicacao: "几岁 pergunta a idade de criança (número pequeno esperado); 多大 pergunta a idade de adulto — usar o errado soa estranho, mesmo sendo compreendido.",
      exemplos: [["你几岁？", "nǐ jǐ suì", "quantos anos? (criança)"], ["你多大？", "nǐ duō dà", "quantos anos? (adulto)"], ["我二十五岁", "wǒ èrshíwǔ suì", "tenho 25 anos"]],
      exercicio: { pergunta: "Escreva sua idade em chinês.", resposta: "我 + [número] + 岁 — por exemplo, 我三十岁 wǒ sānshí suì (tenho 30 anos)." }
    },
    en: {
      titulo: "Verbos de estado × ação: I think / I'm thinking",
      explicacao: "Verbos de estado (think, love, know, want, have — no sentido de opinião/posse) normalmente não usam -ing. Mas alguns, como think e have, mudam de sentido quando usados no -ing: viram uma ação em processo, não um estado.",
      exemplos: [["I think it's good.", "opinião", "acho que é bom"], ["I'm thinking about it.", "processo ativo", "estou pensando nisso"], ["I have a car.", "posse (estado)", "tenho um carro"], ["I'm having lunch.", "ação", "estou almoçando"]],
      exercicio: { pergunta: "Escolha a forma certa: \"I (think/am thinking) you're right\" e \"Wait, I (think/am thinking) about the answer\".", resposta: "\"I think you're right\" (opinião) · \"Wait, I'm thinking about the answer\" (processo)" }
    }
  },

  17: {
    jp: {
      titulo: "Katakana: dakuten e combinações estrangeiras",
      explicacao: "Katakana também usa dakuten (ダ ヂ ヅ デ ド) e tem combinações extras — como ティ, ファ, ディ — criadas só pra representar sons estrangeiros que não existem no japonês nativo.",
      exemplos: [["パーティー", "pātī", "festa"], ["ファイル", "fairu", "arquivo"], ["ディズニー", "dizunī", "Disney"]],
      exercicio: { pergunta: "Leia パーティー e ファイル.", resposta: "パーティー = pātī (festa) · ファイル = fairu (arquivo)" }
    },
    zh: {
      titulo: "HSK1 L6: 会, 怎么",
      explicacao: "会 indica habilidade aprendida (saber fazer algo, como falar um idioma ou nadar); 怎么 pergunta \"como\".",
      exemplos: [["我会说中文", "wǒ huì shuō Zhōngwén", "eu sei falar chinês"], ["这个怎么说？", "zhège zěnme shuō", "como se diz isso?"]],
      exercicio: { pergunta: "Traduza \"Eu sei nadar\" usando 会.", resposta: "我会游泳 wǒ huì yóuyǒng" }
    },
    en: {
      titulo: "Descrever sua empresa em 2 minutos",
      explicacao: "Frases-modelo pra apresentar o que você faz profissionalmente sem enrolar: o que a empresa faz, quem são os clientes, qual seu papel.",
      exemplos: [["We provide ___.", "o que a empresa oferece", ""], ["Our clients are ___.", "quem são os clientes", ""], ["My role is to ___.", "seu papel", ""]],
      exercicio: { pergunta: "Grave 2 minutos descrevendo sua empresa ou projeto usando as 3 frases-modelo.", resposta: "Revise se usou presente simples corretamente (we provide, não we are providing, pra fatos permanentes)." }
    }
  },

  18: {
    jp: {
      titulo: "Vogal longa em katakana: パン, ボタン, コーヒー",
      explicacao: "No katakana, o traço ー (não uma vogal repetida) marca o alongamento — diferente do hiragana, que repete a vogal. コーヒー tem o \"o\" alongado pelo ー, não por um お extra.",
      exemplos: [["パン", "pan", "pão"], ["ボタン", "botan", "botão"], ["コーヒー", "kōhī", "café"]],
      exercicio: { pergunta: "Escreva パン, ボタン e コーヒー 3 vezes cada.", resposta: "Confira se o ー ficou no lugar certo em コーヒー (depois do コ e depois do ヒ)." }
    },
    zh: {
      titulo: "Radicais simplificados: 讠, 钅, 饣",
      explicacao: "Esses três radicais são versões simplificadas de caracteres completos e aparecem em muitas palavras: 讠 vem de 言 (fala), 钅 vem de 金 (metal), 饣 vem de 食 (comida).",
      exemplos: [["说 = 讠 + 兑", "shuō", "falar (radical fala)"], ["钱 = 钅 + 戋", "qián", "dinheiro (radical metal)"], ["饭 = 饣 + 反", "fàn", "arroz/refeição (radical comida)"]],
      exercicio: { pergunta: "Qual radical aparece em 谢, 银 e 饿?", resposta: "谢 = 讠 (fala) · 银 = 钅 (metal, \"prata\") · 饿 = 饣 (comida, \"faminto\")" }
    },
    en: {
      titulo: "Perguntas indiretas: Could you tell me where…?",
      explicacao: "Perguntas indiretas soam mais educadas. A pegadinha: dentro da pergunta indireta, a ordem das palavras fica como afirmação (sujeito antes do verbo), sem a inversão da pergunta direta.",
      exemplos: [["Where is it?", "direta", "onde está?"], ["Could you tell me where it is?", "indireta", "poderia me dizer onde está?"], ["What time is it?", "direta", "que horas são?"], ["Do you know what time it is?", "indireta", "sabe que horas são?"]],
      exercicio: { pergunta: "Transforme \"Where is the bathroom?\" numa pergunta indireta educada.", resposta: "\"Could you tell me where the bathroom is?\"" }
    }
  },

  19: {
    jp: {
      titulo: "Genki L1: X は Y です, か, の",
      explicacao: "は marca o tópico da frase (lê-se \"wa\" quando é partícula — a exceção que os dias 3 e 5 avisaram). です é o \"ser/estar\" educado. か no final vira pergunta. の marca posse, como o \"de\" do português invertido.",
      exemplos: [["これはペンです。", "kore wa pen desu", "isto é uma caneta"], ["あなたは学生ですか。", "anata wa gakusei desu ka", "você é estudante?"], ["私の本", "watashi no hon", "meu livro (livro de mim)"]],
      exercicio: { pergunta: "Monte a frase \"Isto é [seu nome]\" no padrão これは X です.", resposta: "これは[seu nome]です。 — por exemplo, これはビニです。" }
    },
    zh: {
      titulo: "HSK1 L7: datas — 月, 号, 星期",
      explicacao: "Em chinês, a data vai do maior pro menor: ano, mês, dia (o oposto da ordem falada em português). 月 = mês, 号 = dia (falado; 日 é a forma escrita), 星期 = dia da semana.",
      exemplos: [["今天几月几号？", "jīntiān jǐ yuè jǐ hào", "que dia é hoje?"], ["今天是十月一号", "jīntiān shì shí yuè yī hào", "hoje é 1º de outubro"], ["星期一", "xīngqīyī", "segunda-feira"]],
      exercicio: { pergunta: "Escreva a data de hoje em chinês.", resposta: "今天是 [mês]月[dia]号 — por exemplo, 今天是九月二十八号 (hoje é 28 de setembro)." }
    },
    en: {
      titulo: "Small talk: 10 perguntas abertas + follow-ups",
      explicacao: "Perguntas abertas (que não se respondem com sim/não) mantêm a conversa viva. O segredo do small talk fluente é sempre ter um follow-up pronto pra puxar mais assunto da resposta da outra pessoa.",
      exemplos: [["What do you do?", "pergunta aberta", "o que você faz?"], ["How long have you been doing that?", "follow-up", "há quanto tempo?"], ["Where are you from?", "pergunta aberta", "de onde você é?"], ["What's it like there?", "follow-up", "como é aí?"]],
      exercicio: { pergunta: "Escreva 3 perguntas abertas + 1 follow-up pra cada, pra puxar assunto com um estrangeiro.", resposta: "Exemplo: \"What do you do?\" → \"What's the most interesting part of your job?\"" }
    }
  },

  20: { revisao: {
    titulo: "Checkpoint dia 20 — Consolidação",
    itens: [
      { lang: "jp", texto: "Leia 30 palavras em katakana — procure em cardápios ou embalagens de marcas conhecidas online." },
      { lang: "zh", texto: "Shadowing das lições HSK1 L4–7 (dias 15, 17 e 19)." },
      { lang: "en", texto: "Escreva um diário de 5 frases sobre a semana." }
    ],
    exercicio: { pergunta: "Você já consegue ler katakana tão rápido quanto hiragana?", resposta: "Se não, dedique 5 minutos extras por dia — katakana costuma atrasar por ser menos praticado." }
  } },

  21: { revisao: {
    titulo: "Teste da semana 3",
    itens: [
      { lang: "jp", texto: "Leia katakana completo em menos de 3 minutos + recite o diálogo do Genki L1 de memória." },
      { lang: "zh", texto: "Ditado dos diálogos HSK1 L4–7." },
      { lang: "en", texto: "Grave-se 2 minutos falando livremente sobre seu dia." }
    ],
    exercicio: { pergunta: "No diálogo do Genki L1, você lembrou de usar は como \"wa\"?", resposta: "Esse é o erro mais comum da semana — reforce a partícula は no Anki se ainda travar." }
  } },

  22: {
    jp: {
      titulo: "Genki L2: これ/それ/あれ/どれ",
      explicacao: "Os quatro pronomes de \"isto/isso/aquilo/qual\" seguem a distância: これ é perto de quem fala, それ é perto de quem ouve, あれ é longe dos dois, どれ pergunta \"qual dos vários\".",
      exemplos: [["これは何ですか。", "kore wa nan desu ka", "o que é isto?"], ["それは本です。", "sore wa hon desu", "isso é um livro"], ["あれは何ですか。", "are wa nan desu ka", "o que é aquilo (longe)?"]],
      exercicio: { pergunta: "Complete: \"___は私の電話です\" (isto é meu telefone).", resposta: "これは私の電話です。" }
    },
    zh: {
      titulo: "HSK1 L8: 想, 多少, 块",
      explicacao: "想 expressa vontade/intenção (\"quero fazer algo\"); 多少钱 pergunta o preço; 块 é a unidade coloquial de dinheiro (equivalente a \"real\" ou \"conto\").",
      exemplos: [["我想买这个", "wǒ xiǎng mǎi zhège", "eu quero comprar isto"], ["多少钱？", "duōshao qián", "quanto custa?"], ["三十块", "sānshí kuài", "30 (reais/iuanes)"]],
      exercicio: { pergunta: "Pergunte o preço de algo em chinês.", resposta: "这个多少钱？ zhège duōshao qián? (quanto custa isto?)" }
    },
    en: {
      titulo: "Diagnóstico: texto de 200 palavras",
      explicacao: "Hoje não tem gramática nova — é dia de avaliação. Escreva um texto de 200 palavras em inglês sobre a sua semana, sem se preocupar em ficar perfeito. Amanhã você vai mapear os erros mais recorrentes.",
      exemplos: [["My week", "tema sugerido", "conte o que fez nos últimos 7 dias"]],
      exercicio: { pergunta: "Escreva o texto de 200 palavras agora e guarde.", resposta: "Cole no Claude pedindo pra listar só os 3 erros que mais se repetem, sem corrigir tudo de uma vez." }
    }
  },

  23: {
    jp: {
      titulo: "Genki L2: この/その/あの, ここ/そこ/あそこ",
      explicacao: "これ/それ/あれ ficam sozinhos (\"isto\"); この/その/あの sempre vêm antes de um substantivo (\"este livro\"). ここ/そこ/あそこ são \"aqui/aí/lá\", mesma lógica de distância.",
      exemplos: [["この本", "kono hon", "este livro"], ["この靴は誰のですか。", "kono kutsu wa dare no desu ka", "de quem são estes sapatos?"], ["手洗いはあそこです。", "tearai wa asoko desu", "o banheiro é ali"]],
      exercicio: { pergunta: "Traduza \"este livro\" — usa これ ou この?", resposta: "この本 (kono hon) — この vem sempre colado a um substantivo; これ fica sozinho." }
    },
    zh: {
      titulo: "HSK1 L9: 在 + lugar, 哪儿",
      explicacao: "在 indica localização, seguido do lugar. 哪儿 pergunta \"onde\". A ordem é sujeito + 在 + lugar (diferente do português, que costuma inverter).",
      exemplos: [["你在哪儿？", "nǐ zài nǎr", "onde você está?"], ["我在家", "wǒ zài jiā", "estou em casa"], ["书在桌子上", "shū zài zhuōzi shàng", "o livro está na mesa"]],
      exercicio: { pergunta: "Diga onde você está agora, em chinês, usando 在.", resposta: "我在 + [lugar] — por exemplo, 我在家 (estou em casa) ou 我在办公室 (estou no escritório)." }
    },
    en: {
      titulo: "Estudar seus erros mais frequentes",
      explicacao: "Volte ao texto de 200 palavras do dia 22 e identifique os 3 erros que mais se repetem — geralmente são preposições, tempo verbal ou artigos. Focar em poucos erros recorrentes rende mais que corrigir tudo de uma vez.",
      exemplos: [["preposições", "erro comum", "in/on/at, depend on, married to"], ["tempos verbais", "erro comum", "past simple × present perfect"], ["artigos", "erro comum", "a/an/the ausentes ou sobrando"]],
      exercicio: { pergunta: "Liste seus 3 erros mais recorrentes no texto do dia 22 e a correção certa de cada um.", resposta: "Guarde essa lista — ela volta no dia 25, quando você reescreve o texto." }
    }
  },

  24: {
    jp: {
      titulo: "Genki L2: だれの, も, じゃないです",
      explicacao: "誰の pergunta de quem é algo. も troca uma partícula por \"também\". じゃないです nega o です (\"não é\").",
      exemplos: [["これは誰のペンですか。", "kore wa dare no pen desu ka", "de quem é esta caneta?"], ["私も学生です。", "watashi mo gakusei desu", "eu também sou estudante"], ["これは本じゃないです。", "kore wa hon ja nai desu", "isto não é um livro"]],
      exercicio: { pergunta: "Negue a frase これは猫です (isto é um gato).", resposta: "これは猫じゃないです。 (isto não é um gato)" }
    },
    zh: {
      titulo: "HSK1 L10: 有, 能, 请",
      explicacao: "有 indica posse (\"ter\"); 能 indica capacidade/permissão (\"poder\"); 请 antes de um verbo é um pedido educado (\"por favor, faça X\").",
      exemplos: [["我有一只猫", "wǒ yǒu yì zhī māo", "eu tenho um gato"], ["我能帮你吗？", "wǒ néng bāng nǐ ma", "posso te ajudar?"], ["请坐", "qǐng zuò", "por favor, sente-se"]],
      exercicio: { pergunta: "Peça educadamente para alguém sentar, em chinês.", resposta: "请坐 (qǐng zuò)" }
    },
    en: {
      titulo: "Preposições fixas: depend on, married to, arrive in/at",
      explicacao: "Algumas combinações de verbo/adjetivo + preposição são fixas e não seguem lógica traduzível do português: depend ON (não \"of\"), married TO, good AT (não \"in\"). arrive IN para cidades/países, arrive AT para um lugar específico (aeroporto, prédio).",
      exemplos: [["It depends on the weather.", "depend on", "depende do tempo"], ["She's married to a doctor.", "married to", "casada com um médico"], ["We arrived at the airport.", "arrive at", "chegamos no aeroporto"], ["I'm good at math.", "good at", "sou bom em matemática"]],
      exercicio: { pergunta: "Complete: \"I'm good ___ math\" e \"He arrived ___ Tokyo yesterday\".", resposta: "\"I'm good at math\" · \"He arrived in Tokyo yesterday\"" }
    }
  },

  25: {
    jp: {
      titulo: "Genki L2: preços com 円, 百, 千",
      explicacao: "円 é a unidade de dinheiro (iene). Alguns números mudam de som em composição: 百 (hyaku) vira びゃく/ぴゃく em certas combinações, como 三百 (sanbyaku, 300).",
      exemplos: [["百円", "hyaku en", "100 ienes"], ["三百円", "sanbyaku en", "300 ienes (muda o som)"], ["千円", "sen en", "1000 ienes"]],
      exercicio: { pergunta: "Leia em voz alta: 二百円 e 千円.", resposta: "二百円 = nihyaku en (200 ienes) · 千円 = sen en (1000 ienes)" }
    },
    zh: {
      titulo: "Escrita à mão: caracteres do mês",
      explicacao: "Dia de reforçar a escrita manual dos caracteres de tempo já usados: 月 (mês/lua), 日 (dia/sol), 年 (ano), 星期 (semana).",
      exemplos: [["月", "yuè", "mês / lua"], ["日", "rì", "dia / sol"], ["年", "nián", "ano"]],
      exercicio: { pergunta: "Escreva à mão 10 vezes cada: 月, 日, 年, 星期.", resposta: "Confira a ordem dos traços num app como Pleco antes de repetir — escrever errado repetidamente fixa o erro." }
    },
    en: {
      titulo: "Reescrever o texto do dia 22 sem os erros",
      explicacao: "Pegue a lista de 3 erros recorrentes do dia 23 e reescreva o texto de 200 palavras do dia 22, corrigindo especificamente esses padrões.",
      exemplos: [["texto original", "dia 22", "200 palavras com erros"], ["lista de erros", "dia 23", "3 padrões recorrentes"]],
      exercicio: { pergunta: "Reescreva o texto do dia 22 corrigindo os 3 erros identificados.", resposta: "Cole a versão nova no Claude e peça pra confirmar se os 3 padrões sumiram." }
    }
  },

  26: {
    jp: {
      titulo: "Genki L2: diálogo de memória",
      explicacao: "Dia de memorização, sem gramática nova: decore o diálogo completo do Genki L2 (ou monte um equivalente com これ/それ/あれ, この/その/あの e preços) e recite sem olhar.",
      exemplos: [["A: これは何ですか。", "kore wa nan desu ka", "o que é isto?"], ["B: それはカメラです。", "sore wa kamera desu", "isso é uma câmera"], ["A: いくらですか。", "ikura desu ka", "quanto custa?"]],
      exercicio: { pergunta: "Decore e recite um diálogo curto usando これ/それ e preço, sem olhar.", resposta: "Grave-se recitando — se travar, é sinal de que ainda está traduzindo mentalmente, não memorizou." }
    },
    zh: {
      titulo: "HSK1 L11: horas — 点, 分, 前",
      explicacao: "点 marca a hora, 分 os minutos, e 以前 (ou só 前) indica \"atrás\"/\"antes\". A estrutura de horas em chinês é direta: número + 点 + número + 分.",
      exemplos: [["现在几点？", "xiànzài jǐ diǎn", "que horas são?"], ["三点半", "sān diǎn bàn", "3:30"], ["十分钟以前", "shí fēnzhōng yǐqián", "10 minutos atrás"]],
      exercicio: { pergunta: "Diga que horas são agora, em chinês.", resposta: "现在 + [hora]点[minuto]分 — por exemplo, 现在八点十五分 (são 8:15)." }
    },
    en: {
      titulo: "E-mail profissional curto",
      explicacao: "Estrutura de 4 partes pra e-mails curtos e eficazes: saudação, propósito em 1 frase, pedido claro, fechamento educado. Evita o e-mail longo e confuso que brasileiro tende a escrever em inglês.",
      exemplos: [["Hi [name],", "saudação", ""], ["I'm writing to ask if we could reschedule our meeting.", "propósito + pedido", ""], ["Would Thursday at 3pm work for you?", "pedido específico", ""], ["Best, [name]", "fechamento", ""]],
      exercicio: { pergunta: "Escreva um e-mail de 4 linhas pedindo para remarcar uma reunião.", resposta: "Confira se tem: saudação, propósito claro, pedido específico com data/hora, fechamento." }
    }
  },

  27: { revisao: {
    titulo: "Checkpoint dia 27 — Consolidação",
    itens: [
      { lang: "jp", texto: "Faça os exercícios do workbook do Genki L1–2 (ou revise os padrões これ/それ/あれ, この/その/あの e です/じゃないです)." },
      { lang: "zh", texto: "Shadowing das lições HSK1 L8–11 (dias 22, 24, 26)." },
      { lang: "en", texto: "Diário de 5 frases + uma conversa curta (com o Claude ou no italki) usando o e-mail e small talk da semana." }
    ],
    exercicio: { pergunta: "Você já monta frases com これ/それ/あれ sem pausar pra pensar qual usar?", resposta: "Se ainda hesita, o critério é sempre distância: perto de mim / perto de você / longe dos dois." }
  } },

  28: { revisao: {
    titulo: "Teste do mês 1",
    itens: [
      { lang: "jp", texto: "Teste completo: hiragana + katakana + Genki L1–2 (partículas は/の/も, これ/それ/あれ, です/じゃないです)." },
      { lang: "zh", texto: "Revisão de HSK1 L1–11 completo + ditado." },
      { lang: "en", texto: "Gravação de 3 minutos falando livremente — compare com as gravações dos dias 7 e 14." }
    ],
    exercicio: { pergunta: "Dos 3 idiomas, qual precisou de mais revisão neste teste do mês?", resposta: "Dedique os próximos dias de Anki priorizando esse idioma antes de entrar nas 10 palavras novas/dia da semana 5." }
  } },

  29: {
    jp: {
      titulo: "Genki L3: verbos em ます, grupos ru e u",
      explicacao: "ます é a forma educada dos verbos. Verbos \"ru\" trocam só o る final por ます (食べる→食べます). Verbos \"u\" trocam a última sílaba pela versão em \"i\" e acrescentam ます (飲む→飲みます, 行く→行きます).",
      exemplos: [["食べる → 食べます", "taberu → tabemasu", "comer (verbo ru)"], ["飲む → 飲みます", "nomu → nomimasu", "beber (verbo u)"], ["行く → 行きます", "iku → ikimasu", "ir (verbo u)"], ["見る → 見ます", "miru → mimasu", "ver (verbo ru)"]],
      exercicio: { pergunta: "Conjugue 飲む e 見る na forma ます.", resposta: "飲む → 飲みます (nomimasu) · 見る → 見ます (mimasu)" }
    },
    zh: {
      titulo: "HSK1 L12: 怎么样, 太…了",
      explicacao: "怎么样 pergunta opinião (\"que tal?\"). 太…了 intensifica um adjetivo, geralmente com sentido de exagero (\"demais\").",
      exemplos: [["这个怎么样？", "zhège zěnmeyàng", "que tal isso?"], ["太贵了！", "tài guì le", "caro demais!"], ["太好了！", "tài hǎo le", "ótimo demais! (também usado como \"que bom!\")"]],
      exercicio: { pergunta: "Reclame que algo está \"caro demais\", em chinês.", resposta: "太贵了！tài guì le!" }
    },
    en: {
      titulo: "Narrativas: past simple × past continuous",
      explicacao: "Past simple conta uma ação completa. Past continuous descreve uma ação em andamento no passado, geralmente interrompida por outra ação (no past simple). O padrão clássico: \"was/were + -ing\" + \"when\" + past simple.",
      exemplos: [["I was walking home when it started to rain.", "continuous + simple", "eu estava indo pra casa quando começou a chover"], ["She was cooking dinner when the phone rang.", "continuous + simple", "ela estava cozinhando quando o telefone tocou"]],
      exercicio: { pergunta: "Complete: \"I ___ (sleep, continuous) when the alarm ___ (ring, simple)\".", resposta: "\"I was sleeping when the alarm rang.\"" }
    }
  },

  30: {
    jp: {
      titulo: "Genki L3: partículas で, に, へ, を",
      explicacao: "で marca onde a ação acontece (図書館で勉強します, estudo NA biblioteca). に marca destino ou horário (7時に起きます, acordo ÀS 7). へ marca direção, movimento em direção a um lugar (学校へ行きます, vou PARA a escola). を marca o objeto direto do verbo (水を飲みます, bebo água).",
      exemplos: [["図書館で勉強します。", "toshokan de benkyō shimasu", "estudo na biblioteca"], ["7時に起きます。", "shichiji ni okimasu", "acordo às 7"], ["学校へ行きます。", "gakkō e ikimasu", "vou para a escola"], ["水を飲みます。", "mizu o nomimasu", "bebo água"]],
      exercicio: { pergunta: "Complete: 私は学校___行きます (para a escola) e 図書館___勉強します (na biblioteca).", resposta: "私は学校へ行きます。 図書館で勉強します。" }
    },
    zh: {
      titulo: "HSK1 L13: 在…呢 (ação em progresso)",
      explicacao: "在 antes do verbo, com 呢 no final, indica uma ação acontecendo agora — o equivalente ao gerúndio do português (\"estou fazendo\").",
      exemplos: [["我在吃饭呢", "wǒ zài chīfàn ne", "estou comendo agora"], ["她在看书呢", "tā zài kànshū ne", "ela está lendo agora"]],
      exercicio: { pergunta: "Diga \"estou estudando chinês agora\" usando 在…呢.", resposta: "我在学中文呢 wǒ zài xué Zhōngwén ne" }
    },
    en: {
      titulo: "Past perfect: o que já tinha acontecido antes",
      explicacao: "Past perfect (had + particípio) marca uma ação concluída antes de outro ponto no passado. Usado pra deixar claro a ordem de dois eventos passados quando não é óbvia pela narrativa.",
      exemplos: [["By the time I got home, they had already left.", "had left = antes", "quando cheguei em casa, eles já tinham saído"], ["She had never seen snow before that trip.", "had seen = antes", "ela nunca tinha visto neve antes dessa viagem"]],
      exercicio: { pergunta: "Complete: \"When I arrived, the movie ___ (already/start)\".", resposta: "\"When I arrived, the movie had already started.\"" }
    }
  }

};
