// Nível A1 (≈ JLPT N5 · HSK 1–2). Formato descrito em data-fundamentos.js.
window.TRILHA = window.TRILHA || [];

window.TRILHA.push({
  id: "a1",
  nivel: "A1 · Iniciante",
  descricao: "As primeiras 150 palavras e as frases que você monta com elas: apresentar-se, perguntar, contar, dizer as horas e o preço.",
  unidades: [
    { titulo: "Cumprimentos", itens: [
      ["olá","hello","こんにちは","こんにちは","konnichiwa","你好","nǐ hǎo"],
      ["obrigado","thank you","ありがとう","ありがとう","arigatō","谢谢","xièxie"],
      ["desculpe","sorry, excuse me","すみません","すみません","sumimasen","对不起","duìbuqǐ"],
      ["tchau","goodbye","さようなら","さようなら","sayōnara","再见","zàijiàn"],
      ["bom dia","good morning","おはよう","おはよう","ohayō","早上好","zǎoshang hǎo"],
    ], nota: {
      en: "Hello serve para qualquer hora. Entre amigos, hi. Thank you é o obrigado padrão; thanks é mais informal.\n\nSorry é pedir desculpas; excuse me é pedir licença (passar, chamar atenção).",
      jp: "こんにちは é o \"boa tarde/olá\" do dia. De manhã, おはよう (entre amigos) ou おはようございます (educado).\n\nすみません serve para desculpa, licença e até \"obrigado pelo incômodo\". É a palavra mais útil do Japão. さようなら soa como despedida longa; no dia a dia diga じゃあね (tchau!) ou また明日 (até amanhã).",
      zh: "你好 é literalmente \"você bem\". Com alguém mais velho ou importante: 您好 nín hǎo.\n\n对不起 é pedir desculpas de verdade. Para pedir licença ou chamar alguém, use 不好意思 bù hǎoyìsi. 再见 é \"ver de novo\" (再 = de novo, 见 = ver)."
    } },
    { titulo: "Sim, não e por favor", itens: [
      ["sim","yes","はい","はい","hai","是的","shì de"],
      ["não","no","いいえ","いいえ","iie","不是","bú shì"],
      ["por favor","please","お願いします","おねがいします","onegai shimasu","请","qǐng"],
      ["de nada","you're welcome","どういたしまして","どういたしまして","dō itashimashite","不客气","bú kèqi"],
      ["boa noite (ao dormir)","good night","おやすみなさい","おやすみなさい","oyasumi nasai","晚安","wǎn'ān"],
    ], nota: {
      en: "Please costuma ir no fim ou no começo: Water, please. / Please sit down.",
      jp: "はい também quer dizer \"estou ouvindo\", não só \"sim\". いいえ soa forte; na prática o japonês recusa com rodeios, como ちょっと… (\"é que…\").\n\nお願いします é o \"por favor\" ao pedir algo: コーヒー、お願いします.",
      zh: "O chinês não tem um \"sim\" e \"não\" universais: responde-se repetindo o verbo da pergunta. \"É?\" → 是 / 不是. \"Tem?\" → 有 / 没有. \"Quer?\" → 要 / 不要.\n\n请 qǐng vai antes do verbo: 请坐 qǐng zuò (sente-se, por favor)."
    } },
    { titulo: "Números 1 a 5", itens: [
      ["um","one","一","いち","ichi","一","yī"],
      ["dois","two","二","に","ni","二","èr"],
      ["três","three","三","さん","san","三","sān"],
      ["quatro","four","四","よん","yon","四","sì"],
      ["cinco","five","五","ご","go","五","wǔ"],
    ], nota: {
      jp: "Os números japoneses vieram do chinês: compare いち/yī, さん/sān, ご/wǔ. O 4 tem duas leituras: よん e し. し soa como \"morte\" (死), por isso よん é mais usado.",
      zh: "二 èr é o 2 para contar (um, dois, três). Para \"dois de alguma coisa\" usa-se 两 liǎng: 两个人 (duas pessoas)."
    } },
    { titulo: "Números 6 a 10", itens: [
      ["seis","six","六","ろく","roku","六","liù"],
      ["sete","seven","七","なな","nana","七","qī"],
      ["oito","eight","八","はち","hachi","八","bā"],
      ["nove","nine","九","きゅう","kyū","九","jiǔ"],
      ["dez","ten","十","じゅう","jū","十","shí"],
    ], nota: {
      jp: "7 também é しち shichi e 9 também é く ku. Nas horas usa-se しち e く: 七時 shichiji, 九時 kuji.",
      zh: "Os números chineses são totalmente regulares: 十一 = 11 (dez-um), 二十 = 20 (dois-dez), 九十九 = 99."
    } },
    { titulo: "Pessoas", itens: [
      ["pessoa","person","人","ひと","hito","人","rén"],
      ["homem","man","男の人","おとこのひと","otoko no hito","男人","nánrén"],
      ["mulher","woman","女の人","おんなのひと","onna no hito","女人","nǚrén"],
      ["criança","child","子供","こども","kodomo","孩子","háizi"],
      ["amigo","friend","友達","ともだち","tomodachi","朋友","péngyou"],
    ], nota: {
      jp: "人 tem várias leituras: sozinho é ひと hito; depois de país é じん jin (ブラジル人, brasileiro); contando pessoas é にん nin (三人, três pessoas).",
      zh: "人 rén aparece em nacionalidades: 巴西人 Bāxīrén (brasileiro), 中国人 (chinês), 日本人 (japonês)."
    } },
    { titulo: "Pronomes", itens: [
      ["eu","I","私","わたし","watashi","我","wǒ"],
      ["você","you","あなた","あなた","anata","你","nǐ"],
      ["ele","he","彼","かれ","kare","他","tā"],
      ["ela","she","彼女","かのじょ","kanojo","她","tā"],
      ["nós","we","私たち","わたしたち","watashitachi","我们","wǒmen"],
    ], nota: {
      en: "I é sempre maiúsculo. You serve para singular e plural. They = eles/elas.",
      jp: "O japonês omite pronomes sempre que dá. Chamar alguém de あなた soa distante ou íntimo demais (é como esposa chama marido). Use o nome + さん: 田中さん.\n\n彼 e 彼女 também significam \"namorado\" e \"namorada\".",
      zh: "他 (ele) e 她 (ela) têm o mesmo som, tā; só a escrita muda. Plural: acrescente 们 men: 我们 nós, 你们 vocês, 他们 eles.\n\nForma respeitosa de \"você\": 您 nín."
    } },
    { titulo: "Ser: X é Y", itens: [
      ["Eu sou estudante.","I am a student.","私|は|学生|です。","わたしはがくせいです。","watashi wa gakusei desu","我|是|学生。","wǒ shì xuésheng"],
      ["Ela é professora.","She is a teacher.","彼女|は|先生|です。","かのじょはせんせいです。","kanojo wa sensei desu","她|是|老师。","tā shì lǎoshī"],
      ["Você é brasileiro?","Are you Brazilian?","あなた|は|ブラジル人|です|か。","あなたはブラジルじんですか。","anata wa burajiru-jin desu ka","你|是|巴西人|吗？","nǐ shì Bāxīrén ma"],
      ["Sim, sou.","Yes, I am.","はい、|そう|です。","はい、そうです。","hai, sō desu","是，|我|是。","shì, wǒ shì"],
      ["Eu não sou japonês.","I am not Japanese.","私|は|日本人|じゃ|ありません。","わたしはにほんじんじゃありません。","watashi wa nihon-jin ja arimasen","我|不是|日本人。","wǒ bú shì Rìběnrén"],
    ], nota: {
      en: "O verbo to be muda com a pessoa: I am, you are, he/she is, we/they are.\n\nPergunta: inverta. You are → Are you…?\nNegativo: acrescente not. I am not, he is not (isn't), they are not (aren't).\n\nProfissão leva a/an: I am a student, she is a teacher.",
      jp: "A estrutura é X は Y です: \"quanto a X, é Y\".\n\nは é a partícula de tópico e se lê \"wa\". です no fim é o \"é\" educado.\nPergunta: acrescente か no fim, sem mudar a ordem.\nNegativo: じゃありません (ou ではありません, mais formal).\n\nO sujeito cai quando é óbvio: só 学生です já é \"sou estudante\".",
      zh: "A estrutura é X 是 Y. O verbo nunca muda: 我是, 你是, 他是.\n\nPergunta: acrescente 吗 ma no fim.\nNegativo: 不是 bú shì.\n\nNão há artigo: \"um estudante\" é só 学生."
    } },
    { titulo: "Família", itens: [
      ["pai","father","父","ちち","chichi","爸爸","bàba"],
      ["mãe","mother","母","はは","haha","妈妈","māma"],
      ["irmão mais velho","older brother","兄","あに","ani","哥哥","gēge"],
      ["irmã mais velha","older sister","姉","あね","ane","姐姐","jiějie"],
      ["família","family","家族","かぞく","kazoku","家人","jiārén"],
    ], nota: {
      en: "O inglês não separa mais velho e mais novo: brother, sister. Se precisar: older brother, younger sister.",
      jp: "O japonês tem duas palavras para cada parente: uma para a sua família (父 chichi, 母 haha) e outra, respeitosa, para a família dos outros ou para chamar os seus: お父さん otōsan, お母さん okāsan, お兄さん onīsan, お姉さん onēsan.",
      zh: "O chinês separa mais velho e mais novo: 哥哥 irmão mais velho, 弟弟 dìdi irmão mais novo, 姐姐 irmã mais velha, 妹妹 mèimei irmã mais nova."
    } },
    { titulo: "Isto e aquilo", itens: [
      ["isto","this","これ","これ","kore","这个","zhège"],
      ["aquilo","that","あれ","あれ","are","那个","nàge"],
      ["aqui","here","ここ","ここ","koko","这里","zhèlǐ"],
      ["ali, lá","over there","あそこ","あそこ","asoko","那里","nàlǐ"],
      ["qual","which","どれ","どれ","dore","哪个","nǎge"],
    ], nota: {
      en: "this / these = perto de mim. that / those = longe. here = aqui, there = lá.",
      jp: "O japonês tem 3 distâncias, com prefixos fixos:\nこ- perto de mim (これ, ここ)\nそ- perto de você (それ isso, そこ aí)\nあ- longe dos dois (あれ, あそこ)\nど- pergunta (どれ qual, どこ onde)",
      zh: "这 zhè = perto, 那 nà = longe, 哪 nǎ = pergunta. Repare que 那 (4º tom) e 哪 (3º tom) só se diferenciam pelo tom.\n\n个 ge é um classificador genérico: 这个 = \"este (objeto)\"."
    } },
    { titulo: "Objetos", itens: [
      ["livro","book","本","ほん","hon","书","shū"],
      ["telefone","telephone","電話","でんわ","denwa","电话","diànhuà"],
      ["computador","computer","パソコン","パソコン","pasokon","电脑","diànnǎo"],
      ["mesa","table, desk","机","つくえ","tsukue","桌子","zhuōzi"],
      ["carro","car","車","くるま","kuruma","车","chē"],
    ], nota: {
      jp: "パソコン vem de \"personal computer\" encurtado. O japonês adora encurtar palavras estrangeiras.",
      zh: "Armadilhas com o japonês: em chinês 本 běn é o classificador de livros (一本书 um livro) e 机 jī é \"máquina\" (飞机 avião), não mesa."
    } },
    { titulo: "O que é isto?", itens: [
      ["O que é isto?","What is this?","これ|は|何|です|か。","これはなんですか。","kore wa nan desu ka","这|是|什么？","zhè shì shénme"],
      ["Isto é um livro.","This is a book.","これ|は|本|です。","これはほんです。","kore wa hon desu","这|是|书。","zhè shì shū"],
      ["Aquilo é um carro.","That is a car.","あれ|は|車|です。","あれはくるまです。","are wa kuruma desu","那|是|车。","nà shì chē"],
      ["Este é meu telefone.","This is my phone.","これ|は|私|の|電話|です。","これはわたしのでんわです。","kore wa watashi no denwa desu","这|是|我|的|电话。","zhè shì wǒ de diànhuà"],
      ["Qual é o seu?","Which one is yours?","あなた|の|は|どれ|です|か。","あなたのはどれですか。","anata no wa dore desu ka","哪个|是|你|的？","nǎge shì nǐ de"],
    ], nota: {
      en: "A/an antes de coisas contáveis no singular: a book, a car, an apple (an antes de som de vogal).\n\nPossessivos: my, your, his, her, our, their. Pronome sozinho: mine, yours (Which one is yours?).",
      jp: "Pergunta em japonês não muda a ordem: troque a resposta pela palavra de pergunta e ponha か no fim. これは本です → これは何ですか.\n\nの liga dono e coisa: 私の電話 (meu telefone). あなたの sozinho = o seu.",
      zh: "Em chinês também não muda a ordem: a palavra de pergunta fica onde estaria a resposta. 这是书 → 这是什么？ Com 什么 não se usa 吗.\n\n的 de liga dono e coisa: 我的电话 (meu telefone). 你的 sozinho = o seu."
    } },
    { titulo: "Perguntas", itens: [
      ["o quê","what","何","なに","nani","什么","shénme"],
      ["quem","who","誰","だれ","dare","谁","shéi"],
      ["onde","where","どこ","どこ","doko","哪里","nǎlǐ"],
      ["quando","when","いつ","いつ","itsu","什么时候","shénme shíhou"],
      ["por quê","why","なぜ","なぜ","naze","为什么","wèishénme"],
    ], nota: {
      en: "Perguntas com wh- usam do/does quando o verbo não é to be: Where do you live? What does she want?",
      jp: "何 lê-se なん antes de です e de contadores (何ですか, 何時) e なに nos outros casos. No dia a dia, どうして dōshite é mais comum que なぜ para \"por quê\".",
      zh: "谁 também se lê shuí. 为什么 = \"por causa de quê\". 哪里 também aparece como 哪儿 nǎr no norte da China."
    } },
    { titulo: "Lugares", itens: [
      ["casa","house, home","家","いえ","ie","家","jiā"],
      ["escola","school","学校","がっこう","gakkō","学校","xuéxiào"],
      ["loja","shop, store","店","みせ","mise","商店","shāngdiàn"],
      ["empresa","company","会社","かいしゃ","kaisha","公司","gōngsī"],
      ["estação","station","駅","えき","eki","车站","chēzhàn"],
    ], nota: {
      en: "Home é o lar (go home, sem \"to\"); house é o prédio.",
      jp: "学校 é o mesmo composto do chinês 学校: gakkō / xuéxiào. Muitos kanji compostos são iguais nas duas línguas."
    } },
    { titulo: "Onde fica?", itens: [
      ["Onde fica a estação?","Where is the station?","駅|は|どこ|です|か。","えきはどこですか。","eki wa doko desu ka","车站|在|哪里？","chēzhàn zài nǎlǐ"],
      ["A escola fica ali.","The school is over there.","学校|は|あそこ|です。","がっこうはあそこです。","gakkō wa asoko desu","学校|在|那里。","xuéxiào zài nàlǐ"],
      ["Minha casa é aqui.","My house is here.","私|の|家|は|ここ|です。","わたしのいえはここです。","watashi no ie wa koko desu","我|家|在|这里。","wǒ jiā zài zhèlǐ"],
      ["Onde você está agora?","Where are you now?","今|どこ|に|います|か。","いまどこにいますか。","ima doko ni imasu ka","你|现在|在|哪里？","nǐ xiànzài zài nǎlǐ"],
      ["Estou na empresa.","I'm at the office.","会社|に|います。","かいしゃにいます。","kaisha ni imasu","我|在|公司。","wǒ zài gōngsī"],
    ], nota: {
      en: "Where is + coisa? Para lugares: at (at the office, at home), in (in Tokyo), on (on the table).",
      jp: "Para \"onde fica\" basta X は どこですか. Para dizer onde alguém está: lugar + に + います (pessoas e animais) ou あります (coisas).",
      zh: "Localização usa 在 zài (estar em), não 是: 我在公司. Ordem: quem + 在 + lugar."
    } },
    { titulo: "Natureza", itens: [
      ["água","water","水","みず","mizu","水","shuǐ"],
      ["fogo","fire","火","ひ","hi","火","huǒ"],
      ["montanha","mountain","山","やま","yama","山","shān"],
      ["árvore","tree","木","き","ki","树","shù"],
      ["rio","river","川","かわ","kawa","河","hé"],
    ], nota: {
      jp: "Estes kanji são desenhos: 山 três picos, 川 água correndo, 木 árvore com raízes, 火 chamas. Em compostos a leitura muda: 富士山 Fuji-san.",
      zh: "水, 火, 山 são iguais ao japonês. Árvore é 树; 木 mù em chinês é \"madeira\"."
    } },
    { titulo: "Céu e clima", itens: [
      ["sol","sun","太陽","たいよう","taiyō","太阳","tàiyáng"],
      ["lua","moon","月","つき","tsuki","月亮","yuèliang"],
      ["céu","sky","空","そら","sora","天空","tiānkōng"],
      ["chuva","rain","雨","あめ","ame","雨","yǔ"],
      ["terra, solo","earth, soil","土","つち","tsuchi","土","tǔ"],
    ] },
    { titulo: "Comida", itens: [
      ["chá","tea","お茶","おちゃ","ocha","茶","chá"],
      ["arroz, refeição","rice, meal","ご飯","ごはん","gohan","米饭","mǐfàn"],
      ["carne","meat","肉","にく","niku","肉","ròu"],
      ["peixe","fish","魚","さかな","sakana","鱼","yú"],
      ["ovo","egg","卵","たまご","tamago","鸡蛋","jīdàn"],
    ], nota: {
      jp: "お e ご na frente das palavras são prefixos de cortesia: お茶, ご飯. Quase sempre vêm junto.",
      zh: "吃饭 chīfàn (comer arroz) é o jeito normal de dizer \"comer / fazer uma refeição\"."
    } },
    { titulo: "Primeiros verbos", itens: [
      ["comer","eat","食べる","たべる","taberu","吃","chī"],
      ["beber","drink","飲む","のむ","nomu","喝","hē"],
      ["ver, assistir","see, watch","見る","みる","miru","看","kàn"],
      ["ir","go","行く","いく","iku","去","qù"],
      ["vir","come","来る","くる","kuru","来","lái"],
    ], nota: {
      en: "Os verbos quase não mudam: I eat, you eat, we eat. Só a 3ª pessoa do singular ganha -s: he eats, she goes.",
      jp: "Esta é a forma de dicionário (informal). Em frases educadas, os verbos terminam em ます: 食べます, 飲みます, 見ます, 行きます, 来ます (kimasu). A próxima unidade de frases usa essa forma.",
      zh: "Verbos chineses nunca se conjugam: 我吃, 他吃, 我们吃. O tempo vem de palavras como 昨天 (ontem) ou 了."
    } },
    { titulo: "Frases no presente", itens: [
      ["Eu como arroz.","I eat rice.","私|は|ご飯|を|食べます。","わたしはごはんをたべます。","watashi wa gohan o tabemasu","我|吃|米饭。","wǒ chī mǐfàn"],
      ["Eu bebo chá.","I drink tea.","お茶|を|飲みます。","おちゃをのみます。","ocha o nomimasu","我|喝|茶。","wǒ hē chá"],
      ["Ela vai à escola.","She goes to school.","彼女|は|学校|に|行きます。","かのじょはがっこうにいきます。","kanojo wa gakkō ni ikimasu","她|去|学校。","tā qù xuéxiào"],
      ["Ele não come carne.","He doesn't eat meat.","彼|は|肉|を|食べません。","かれはにくをたべません。","kare wa niku o tabemasen","他|不|吃|肉。","tā bù chī ròu"],
      ["Você bebe chá?","Do you drink tea?","お茶|を|飲みます|か。","おちゃをのみますか。","ocha o nomimasu ka","你|喝|茶|吗？","nǐ hē chá ma"],
    ], nota: {
      en: "Presente simples: he/she/it + verbo com -s (she goes, he eats).\nNegativo: don't / doesn't + verbo: He doesn't eat meat (sem -s depois de doesn't).\nPergunta: Do / Does no começo: Do you drink tea? Does she work?",
      jp: "A ordem é Sujeito–Objeto–Verbo: o verbo sempre no fim.\n\nPartículas marcam o papel de cada palavra: を (lê-se o) marca o objeto; に marca o destino.\n\n〜ます afirmativo, 〜ません negativo, 〜ますか pergunta.",
      zh: "A ordem é igual ao português: Sujeito–Verbo–Objeto.\n\n不 bù antes do verbo nega. 吗 ma no fim faz a pergunta. Mais nada muda."
    } },
    { titulo: "Números grandes", itens: [
      ["onze","eleven","十一","じゅういち","jūichi","十一","shíyī"],
      ["vinte","twenty","二十","にじゅう","nijū","二十","èrshí"],
      ["cem","hundred","百","ひゃく","hyaku","百","bǎi"],
      ["mil","thousand","千","せん","sen","千","qiān"],
      ["dez mil","ten thousand","万","まん","man","万","wàn"],
    ], nota: {
      en: "Os números 13 a 19 terminam em -teen (thirteen, fifteen), com a força no final. As dezenas terminam em -ty (thirty, fifty), com a força no começo. Ouça a diferença: fifTEEN × FIFty.",
      jp: "O japonês conta em blocos de 10.000 (万), não de 1.000. 100.000 = 十万 jūman (dez dez-mils). 1 milhão = 百万 hyakuman.\n\nAlgumas leituras mudam: 300 さんびゃく sanbyaku, 600 ろっぴゃく roppyaku, 3000 さんぜん sanzen.",
      zh: "O chinês também conta em blocos de 万: 100.000 = 十万 shí wàn. Na fala: 一百 yìbǎi, 一千 yìqiān (com 一)."
    } },
    { titulo: "Idade e preço", itens: [
      ["Quantos anos você tem?","How old are you?","何歳|です|か。","なんさいですか。","nansai desu ka","你|多大？","nǐ duō dà"],
      ["Tenho vinte anos.","I am twenty years old.","二十歳|です。","はたちです。","hatachi desu","我|二十|岁。","wǒ èrshí suì"],
      ["Quanto custa?","How much is it?","いくら|です|か。","いくらですか。","ikura desu ka","多少|钱？","duōshao qián"],
      ["São cem ienes.","It's one hundred yen.","百円|です。","ひゃくえんです。","hyaku en desu","一百|日元。","yìbǎi rìyuán"],
      ["É caro demais!","It's too expensive!","高すぎます！","たかすぎます！","takasugimasu","太|贵|了！","tài guì le"],
    ], nota: {
      en: "Idade usa to be, não \"ter\": I am twenty (years old). How old…? para idade, How much…? para preço.",
      jp: "Idade: número + 歳 sai. Exceções: 20 anos é はたち hatachi; 1, 8 e 10 mudam o som (いっさい, はっさい, じゅっさい).\n\n〜すぎます = \"demais\": 高すぎます (caro demais).",
      zh: "Idade: número + 岁 suì, sem verbo: 我二十岁. Para criança pergunta-se 你几岁？; para idosos, 您多大年纪？\n\n太…了 = \"demais\": 太贵了."
    } },
    { titulo: "Calendário", itens: [
      ["dia","day","日","ひ","hi","天","tiān"],
      ["mês","month","月","つき","tsuki","月","yuè"],
      ["ano","year","年","とし","toshi","年","nián"],
      ["hoje","today","今日","きょう","kyō","今天","jīntiān"],
      ["amanhã","tomorrow","明日","あした","ashita","明天","míngtiān"],
    ], nota: {
      jp: "Nas datas as leituras mudam: 一月 ichigatsu (janeiro), 二月 nigatsu… 2025年 nisen nijūgo nen.",
      zh: "Os meses são número + 月: 一月 janeiro, 二月 fevereiro… Datas vão do maior para o menor: 2025年3月8日 (ano, mês, dia)."
    } },
    { titulo: "Horas do dia", itens: [
      ["hora (em ponto)","o'clock","時","じ","ji","点","diǎn"],
      ["minuto","minute","分","ふん","fun","分","fēn"],
      ["agora","now","今","いま","ima","现在","xiànzài"],
      ["manhã","morning","朝","あさ","asa","早上","zǎoshang"],
      ["noite","night, evening","夜","よる","yoru","晚上","wǎnshang"],
    ] },
    { titulo: "Que horas são?", itens: [
      ["Que horas são?","What time is it?","今|何時|です|か。","いまなんじですか。","ima nanji desu ka","现在|几|点？","xiànzài jǐ diǎn"],
      ["São três horas.","It's three o'clock.","三時|です。","さんじです。","sanji desu","三|点。","sān diǎn"],
      ["São sete e meia.","It's seven thirty.","七時半|です。","しちじはんです。","shichiji han desu","七|点|半。","qī diǎn bàn"],
      ["Eu acordo às seis.","I wake up at six.","六時|に|起きます。","ろくじにおきます。","rokuji ni okimasu","我|六|点|起床。","wǒ liù diǎn qǐchuáng"],
      ["Até amanhã!","See you tomorrow!","また|明日。","またあした。","mata ashita","明天|见！","míngtiān jiàn"],
    ], nota: {
      en: "Horas: It's three o'clock. It's seven thirty (ou half past seven). Horário de algo: at + hora (at six).",
      jp: "Hora = número + 時 ji. Meia = 半 han. Horário de algo leva に: 六時に起きます. 4 horas é よじ, 7 é しちじ, 9 é くじ.",
      zh: "Hora = número + 点 diǎn. Meia = 半 bàn. Duas horas é 两点 liǎng diǎn. O horário vem antes do verbo: 我六点起床 (eu seis horas acordo)."
    } },
    { titulo: "Dias da semana I", itens: [
      ["domingo","Sunday","日曜日","にちようび","nichiyōbi","星期天","xīngqītiān"],
      ["segunda-feira","Monday","月曜日","げつようび","getsuyōbi","星期一","xīngqīyī"],
      ["terça-feira","Tuesday","火曜日","かようび","kayōbi","星期二","xīngqī'èr"],
      ["quarta-feira","Wednesday","水曜日","すいようび","suiyōbi","星期三","xīngqīsān"],
      ["quinta-feira","Thursday","木曜日","もくようび","mokuyōbi","星期四","xīngqīsì"],
    ], nota: {
      en: "Dias da semana sempre com maiúscula e com on: on Monday, on Sunday.",
      jp: "Os dias japoneses são os astros: 日 sol, 月 lua, 火 fogo (Marte), 水 água (Mercúrio), 木 madeira (Júpiter), 金 metal (Vênus), 土 terra (Saturno).",
      zh: "Os dias chineses são números: 星期 + 1 a 6 (segunda a sábado). Domingo é 星期天 ou 星期日."
    } },
    { titulo: "Semana e dinheiro", itens: [
      ["sexta-feira","Friday","金曜日","きんようび","kin'yōbi","星期五","xīngqīwǔ"],
      ["sábado","Saturday","土曜日","どようび","doyōbi","星期六","xīngqīliù"],
      ["semana","week","週","しゅう","shū","星期","xīngqī"],
      ["fim de semana","weekend","週末","しゅうまつ","shūmatsu","周末","zhōumò"],
      ["dinheiro","money","お金","おかね","okane","钱","qián"],
    ] },
    { titulo: "Descrever coisas", itens: [
      ["grande","big","大きい","おおきい","ōkii","大","dà"],
      ["pequeno","small","小さい","ちいさい","chiisai","小","xiǎo"],
      ["bom","good","いい","いい","ii","好","hǎo"],
      ["novo","new","新しい","あたらしい","atarashii","新","xīn"],
      ["velho (coisa)","old","古い","ふるい","furui","旧","jiù"],
    ] },
    { titulo: "Cores", itens: [
      ["branco","white","白い","しろい","shiroi","白","bái"],
      ["preto","black","黒い","くろい","kuroi","黑","hēi"],
      ["vermelho","red","赤い","あかい","akai","红","hóng"],
      ["azul","blue","青い","あおい","aoi","蓝","lán"],
      ["cor","color","色","いろ","iro","颜色","yánsè"],
    ], nota: {
      jp: "青 aoi cobre azul e também o verde de semáforo e de vegetais (青信号, sinal verde).",
      zh: "Cores como adjetivo costumam levar 色 e 的: 红色的车 (carro vermelho)."
    } },
    { titulo: "Frases descritivas", itens: [
      ["Este livro é novo.","This book is new.","この|本|は|新しい|です。","このほんはあたらしいです。","kono hon wa atarashii desu","这|本|书|很|新。","zhè běn shū hěn xīn"],
      ["O carro é vermelho.","The car is red.","車|は|赤い|です。","くるまはあかいです。","kuruma wa akai desu","车|是|红色|的。","chē shì hóngsè de"],
      ["A casa não é grande.","The house is not big.","家|は|大きく|ない|です。","いえはおおきくないです。","ie wa ōkiku nai desu","房子|不|大。","fángzi bú dà"],
      ["É muito bom!","It's very good!","とても|いい|です！","とてもいいです！","totemo ii desu","非常|好！","fēicháng hǎo"],
      ["Um carro pequeno e branco.","A small white car.","小さくて|白い|車。","ちいさくてしろいくるま。","chiisakute shiroi kuruma","一|辆|白色|的|小|车。","yí liàng báisè de xiǎo chē"],
    ], nota: {
      en: "O adjetivo vem antes do substantivo e nunca vai para o plural: a white car, two white cars.\nCom to be: The car is red.",
      jp: "Adjetivos terminados em い se conjugam sozinhos:\n大きい → 大きくない (não é grande)\n大きい → 大きくて (grande e…)\nいい é irregular: よくない.\n\nこの = \"este\" antes de substantivo (この本). これ fica sozinho.",
      zh: "Com adjetivo não se usa 是: diz-se 书很新, não 书是新. O 很 hěn liga as duas partes e quase não significa \"muito\".\n\n本 e 辆 são classificadores: cada tipo de coisa tem o seu (本 livros, 辆 veículos, 个 genérico)."
    } },
    { titulo: "Verbos do dia a dia", itens: [
      ["fazer","do","する","する","suru","做","zuò"],
      ["dizer","say","言う","いう","iu","说","shuō"],
      ["saber","know","知る","しる","shiru","知道","zhīdao"],
      ["querer","want","欲しい","ほしい","hoshii","要","yào"],
      ["haver, ter","there is, have","ある","ある","aru","有","yǒu"],
    ], nota: {
      jp: "する faz verbos a partir de substantivos: 勉強する (estudar), 料理する (cozinhar).\n\n欲しい é um adjetivo (\"desejável\"): 車が欲しい = quero um carro.\n\nある é \"existir\" para coisas; para seres vivos, いる.",
      zh: "有 yǒu é \"ter\" e \"haver\". O negativo é sempre 没有 méiyǒu, nunca 不有."
    } },
    { titulo: "Ter e haver", itens: [
      ["Eu tenho um carro.","I have a car.","車|を|持って|います。","くるまをもっています。","kuruma o motte imasu","我|有|一|辆|车。","wǒ yǒu yí liàng chē"],
      ["Eu não tenho dinheiro.","I don't have money.","お金|が|ありません。","おかねがありません。","okane ga arimasen","我|没有|钱。","wǒ méiyǒu qián"],
      ["Tem água?","Is there water?","水|は|あります|か。","みずはありますか。","mizu wa arimasu ka","有|水|吗？","yǒu shuǐ ma"],
      ["Tem um gato ali.","There is a cat over there.","あそこ|に|猫|が|います。","あそこにねこがいます。","asoko ni neko ga imasu","那里|有|一|只|猫。","nàlǐ yǒu yì zhī māo"],
      ["Eu tenho dois irmãos.","I have two brothers.","兄弟|が|二人|います。","きょうだいがふたりいます。","kyōdai ga futari imasu","我|有|两|个|兄弟。","wǒ yǒu liǎng ge xiōngdì"],
    ], nota: {
      en: "have / has (he has). There is (singular) / There are (plural) = \"tem, há\": There is a cat. There are two cats.",
      jp: "あります para coisas, います para seres vivos. O que existe leva が: 猫がいます.\n\nPara posse de objetos, 持っています (estou segurando / tenho) é o mais natural.\n\nContar pessoas: 一人 hitori, 二人 futari, 三人 sannin…",
      zh: "有 serve para \"ter\" e \"haver\": 我有车 / 那里有猫. Negativo: 没有.\n\nNúmero + classificador + coisa: 一辆车, 一只猫, 两个兄弟."
    } },
    { titulo: "Transporte", itens: [
      ["ônibus","bus","バス","バス","basu","公交车","gōngjiāochē"],
      ["trem","train","電車","でんしゃ","densha","火车","huǒchē"],
      ["andar (a pé)","walk","歩く","あるく","aruku","走","zǒu"],
      ["correr","run","走る","はしる","hashiru","跑","pǎo"],
      ["avião","airplane","飛行機","ひこうき","hikōki","飞机","fēijī"],
    ], nota: {
      jp: "Armadilha: 走る no japonês é correr; 走 zǒu no chinês é andar.",
      zh: "Armadilha: 走 zǒu é andar; correr é 跑 pǎo. Meio de transporte: 坐 zuò + veículo (坐火车, ir de trem)."
    } },
    { titulo: "Apresentar-se", itens: [
      ["Muito prazer.","Nice to meet you.","はじめまして。","はじめまして。","hajimemashite","很|高兴|认识|你。","hěn gāoxìng rènshi nǐ"],
      ["Meu nome é Ana.","My name is Ana.","私|は|アナ|です。","わたしはアナです。","watashi wa Ana desu","我|叫|安娜。","wǒ jiào Ānnà"],
      ["Eu sou do Brasil.","I'm from Brazil.","ブラジル|から|来ました。","ブラジルからきました。","Burajiru kara kimashita","我|来自|巴西。","wǒ láizì Bāxī"],
      ["Eu trabalho numa empresa.","I work at a company.","会社|で|働いて|います。","かいしゃではたらいています。","kaisha de hataraite imasu","我|在|公司|工作。","wǒ zài gōngsī gōngzuò"],
      ["Como vai você?","How are you?","お元気|です|か。","おげんきですか。","ogenki desu ka","你|好|吗？","nǐ hǎo ma"],
    ], nota: {
      en: "I'm = I am. How are you? → I'm fine, thanks. And you?",
      jp: "Apresentação completa: はじめまして。アナです。ブラジルから来ました。よろしくお願いします。 O よろしくお願いします final (\"conto com você\") é obrigatório.\n\nで marca onde uma ação acontece (会社で働く); に marca onde algo está.",
      zh: "我叫… (me chamo) é o jeito normal de dizer o nome. 你好吗 existe, mas no dia a dia pergunta-se 最近怎么样？ (como andam as coisas?).\n\n在 + lugar + verbo = fazer algo em um lugar."
    } },
    { titulo: "Frases de sobrevivência", itens: [
      ["Eu não entendo.","I don't understand.","わかりません。","わかりません。","wakarimasen","我|不|明白。","wǒ bù míngbai"],
      ["Pode repetir, por favor?","Could you say that again, please?","もう一度|お願いします。","もういちどおねがいします。","mō ichido onegai shimasu","请|再|说|一|遍。","qǐng zài shuō yí biàn"],
      ["Mais devagar, por favor.","More slowly, please.","ゆっくり|お願いします。","ゆっくりおねがいします。","yukkuri onegai shimasu","请|说|慢|一点。","qǐng shuō màn yìdiǎn"],
      ["O que isso significa?","What does this mean?","これ|は|どういう|意味|です|か。","これはどういういみですか。","kore wa dō iu imi desu ka","这|是|什么|意思？","zhè shì shénme yìsi"],
      ["Me ajude, por favor.","Please help me.","助けて|ください。","たすけてください。","tasukete kudasai","请|帮|我。","qǐng bāng wǒ"],
    ], nota: {
      en: "Could you…? é o jeito educado de pedir. Can you…? é mais direto.",
      jp: "〜てください = \"por favor, faça…\": 助けてください, 待ってください (espere).",
      zh: "一点 yìdiǎn depois do adjetivo = \"um pouco mais\": 慢一点 (mais devagar), 大一点 (um pouco maior)."
    } },
  ]
});
