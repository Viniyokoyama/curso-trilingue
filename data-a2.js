// Nível A2 (≈ JLPT N5–N4 · HSK 2–3). Formato descrito em data-fundamentos.js.
window.TRILHA = window.TRILHA || [];

window.TRILHA.push({
  id: "a2",
  nivel: "A2 · Básico",
  descricao: "O dia a dia completo: gostos, desejos, passado, futuro, comparação, compras, cidade, viagem e trabalho.",
  unidades: [
    { titulo: "Corpo", itens: [
      ["cabeça","head","頭","あたま","atama","头","tóu"],
      ["olho","eye","目","め","me","眼睛","yǎnjing"],
      ["boca","mouth","口","くち","kuchi","嘴","zuǐ"],
      ["mão","hand","手","て","te","手","shǒu"],
      ["pé, perna","foot, leg","足","あし","ashi","脚","jiǎo"],
    ], nota: {
      jp: "足 cobre pé e perna. 口 é um desenho de boca aberta; 目 um olho de pé.",
      zh: "脚 jiǎo é o pé; perna é 腿 tuǐ. 口 kǒu também é boca, mas só em compostos (人口, população)."
    } },
    { titulo: "Sentimentos", itens: [
      ["feliz","happy","嬉しい","うれしい","ureshii","高兴","gāoxìng"],
      ["triste","sad","悲しい","かなしい","kanashii","难过","nánguò"],
      ["cansado","tired","疲れた","つかれた","tsukareta","累","lèi"],
      ["gostar","like","好き","すき","suki","喜欢","xǐhuan"],
      ["amar","love","愛する","あいする","aisuru","爱","ài"],
    ], nota: {
      jp: "好き é um adjetivo (\"querido, agradável\"), não um verbo: o que se gosta leva が. 大好き = adorar.\n\n愛する é forte e literário. Para \"eu te amo\" o japonês quase sempre usa 大好き.",
      zh: "爱 ài é bem usado (我爱你, 我爱中国菜). 喜欢 é \"gostar\"."
    } },
    { titulo: "Como você está?", itens: [
      ["Estou feliz.","I am happy.","嬉しい|です。","うれしいです。","ureshii desu","我|很|高兴。","wǒ hěn gāoxìng"],
      ["Hoje estou cansado.","I'm tired today.","今日|は|疲れました。","きょうはつかれました。","kyō wa tsukaremashita","我|今天|很|累。","wǒ jīntiān hěn lèi"],
      ["Estou com dor de cabeça.","I have a headache.","頭|が|痛い|です。","あたまがいたいです。","atama ga itai desu","我|头|疼。","wǒ tóu téng"],
      ["Eu gosto de você.","I like you.","あなた|が|好き|です。","あなたがすきです。","anata ga suki desu","我|喜欢|你。","wǒ xǐhuan nǐ"],
      ["Por que você está triste?","Why are you sad?","どうして|悲しい|の|です|か。","どうしてかなしいのですか。","dōshite kanashii no desu ka","你|为什么|难过？","nǐ wèishénme nánguò"],
    ], nota: {
      en: "Sentimentos usam to be: I am happy, she is tired. Dor: I have a headache / My head hurts.",
      jp: "疲れました (no passado) é o jeito normal de dizer \"estou cansado\": o cansaço já aconteceu.\n\n〜のですか pede explicação: \"por que é que…?\"",
      zh: "Tempo (今天) vem antes do verbo/adjetivo, depois do sujeito ou no começo da frase: 我今天很累 / 今天我很累."
    } },
    { titulo: "Tempo livre", itens: [
      ["filme","movie","映画","えいが","eiga","电影","diànyǐng"],
      ["música","music","音楽","おんがく","ongaku","音乐","yīnyuè"],
      ["esporte","sports","スポーツ","スポーツ","supōtsu","运动","yùndòng"],
      ["foto","photo","写真","しゃしん","shashin","照片","zhàopiàn"],
      ["hobby","hobby","趣味","しゅみ","shumi","爱好","àihào"],
    ] },
    { titulo: "Bebidas", itens: [
      ["café","coffee","コーヒー","コーヒー","kōhī","咖啡","kāfēi"],
      ["leite","milk","牛乳","ぎゅうにゅう","gyūnyū","牛奶","niúnǎi"],
      ["cerveja","beer","ビール","ビール","bīru","啤酒","píjiǔ"],
      ["suco","juice","ジュース","ジュース","jūsu","果汁","guǒzhī"],
      ["vinho","wine","ワイン","ワイン","wain","葡萄酒","pútaojiǔ"],
    ] },
    { titulo: "Gostos", itens: [
      ["Eu gosto de café.","I like coffee.","コーヒー|が|好き|です。","コーヒーがすきです。","kōhī ga suki desu","我|喜欢|咖啡。","wǒ xǐhuan kāfēi"],
      ["Eu não gosto de peixe.","I don't like fish.","魚|が|好き|じゃ|ありません。","さかながすきじゃありません。","sakana ga suki ja arimasen","我|不|喜欢|鱼。","wǒ bù xǐhuan yú"],
      ["Do que você gosta?","What do you like?","何|が|好き|です|か。","なにがすきですか。","nani ga suki desu ka","你|喜欢|什么？","nǐ xǐhuan shénme"],
      ["Eu adoro ler livros.","I love reading books.","本|を|読む|の|が|大好き|です。","ほんをよむのがだいすきです。","hon o yomu no ga daisuki desu","我|很|喜欢|看书。","wǒ hěn xǐhuan kàn shū"],
      ["Meu hobby é música.","My hobby is music.","趣味|は|音楽|です。","しゅみはおんがくです。","shumi wa ongaku desu","我|的|爱好|是|音乐。","wǒ de àihào shì yīnyuè"],
    ], nota: {
      en: "like / love + -ing para atividades: I love reading. I like playing soccer.",
      jp: "X が好きです = gosto de X.\nPara atividades, transforme o verbo em substantivo com の: 読む → 読むの (o ato de ler) → 本を読むのが好きです.",
      zh: "喜欢 + substantivo ou + verbo direto: 喜欢咖啡, 喜欢看书. Nada muda na forma do verbo."
    } },
    { titulo: "Frutas", itens: [
      ["maçã","apple","りんご","りんご","ringo","苹果","píngguǒ"],
      ["banana","banana","バナナ","バナナ","banana","香蕉","xiāngjiāo"],
      ["laranja","orange","オレンジ","オレンジ","orenji","橙子","chéngzi"],
      ["morango","strawberry","いちご","いちご","ichigo","草莓","cǎoméi"],
      ["fruta","fruit","果物","くだもの","kudamono","水果","shuǐguǒ"],
    ] },
    { titulo: "Querer fazer", itens: [
      ["Eu quero comer ramen.","I want to eat ramen.","ラーメン|を|食べ|たい|です。","ラーメンをたべたいです。","rāmen o tabetai desu","我|想|吃|拉面。","wǒ xiǎng chī lāmiàn"],
      ["Eu quero ir ao Japão.","I want to go to Japan.","日本|に|行き|たい|です。","にほんにいきたいです。","Nihon ni ikitai desu","我|想|去|日本。","wǒ xiǎng qù Rìběn"],
      ["O que você quer fazer?","What do you want to do?","何|を|し|たい|です|か。","なにをしたいですか。","nani o shitai desu ka","你|想|做|什么？","nǐ xiǎng zuò shénme"],
      ["Eu não quero ir.","I don't want to go.","行き|たく|ない|です。","いきたくないです。","ikitaku nai desu","我|不|想|去。","wǒ bù xiǎng qù"],
      ["Eu quero um carro novo.","I want a new car.","新しい|車|が|欲しい|です。","あたらしいくるまがほしいです。","atarashii kuruma ga hoshii desu","我|想|要|一|辆|新|车。","wǒ xiǎng yào yí liàng xīn chē"],
    ], nota: {
      en: "want + to + verbo: I want to go. want + coisa: I want a car. Negativo: I don't want to go.",
      jp: "Querer FAZER: tire o ます e ponha たい. 食べます → 食べたい, 行きます → 行きたい. Negativo: たくない.\nQuerer uma COISA: X が欲しい.",
      zh: "想 xiǎng + verbo = querer fazer (suave). 要 yào + verbo = vou/preciso (mais decidido). 想要 + coisa = querer algo."
    } },
    { titulo: "No restaurante", itens: [
      ["Mesa para dois, por favor.","A table for two, please.","二人|です。","ふたりです。","futari desu","两|位。","liǎng wèi"],
      ["Água, por favor.","Water, please.","水|を|ください。","みずをください。","mizu o kudasai","请|给|我|水。","qǐng gěi wǒ shuǐ"],
      ["Eu quero este.","I'd like this one.","これ|を|ください。","これをください。","kore o kudasai","我|要|这个。","wǒ yào zhège"],
      ["Está delicioso.","It's delicious.","おいしい|です。","おいしいです。","oishii desu","很|好吃。","hěn hǎochī"],
      ["A conta, por favor.","The check, please.","お会計|を|お願い|します。","おかいけいをおねがいします。","okaikei o onegai shimasu","买单。","mǎidān"],
    ], nota: {
      en: "I'd like… (= I would like) é a forma educada de pedir. Can I have…? também funciona.",
      jp: "X をください = \"me dê X, por favor\". No restaurante japonês você diz quantas pessoas são ao entrar: 二人です.\n\nいただきます antes de comer, ごちそうさまでした depois.",
      zh: "位 wèi é o classificador educado para pessoas. 买单 mǎidān ou 结账 jiézhàng para pedir a conta."
    } },
    { titulo: "Rotina", itens: [
      ["dormir","sleep","寝る","ねる","neru","睡觉","shuìjiào"],
      ["trabalhar","work","働く","はたらく","hataraku","工作","gōngzuò"],
      ["estudar","study","勉強する","べんきょうする","benkyō suru","学习","xuéxí"],
      ["esperar","wait","待つ","まつ","matsu","等","děng"],
      ["abrir","open","開ける","あける","akeru","开","kāi"],
    ] },
    { titulo: "Contar a rotina", itens: [
      ["Eu acordo às sete.","I wake up at seven.","七時|に|起きます。","しちじにおきます。","shichiji ni okimasu","我|七|点|起床。","wǒ qī diǎn qǐchuáng"],
      ["Eu tomo café da manhã.","I eat breakfast.","朝ご飯|を|食べます。","あさごはんをたべます。","asagohan o tabemasu","我|吃|早饭。","wǒ chī zǎofàn"],
      ["Vou para a empresa de trem.","I go to the office by train.","電車|で|会社|に|行きます。","でんしゃでかいしゃにいきます。","densha de kaisha ni ikimasu","我|坐|火车|去|公司。","wǒ zuò huǒchē qù gōngsī"],
      ["Trabalho das nove às seis.","I work from nine to six.","九時|から|六時|まで|働きます。","くじからろくじまではたらきます。","kuji kara rokuji made hatarakimasu","我|从|九|点|工作|到|六|点。","wǒ cóng jiǔ diǎn gōngzuò dào liù diǎn"],
      ["Durmo às onze da noite.","I go to bed at eleven p.m.","夜|十一時|に|寝ます。","よるじゅういちじにねます。","yoru jūichiji ni nemasu","我|晚上|十一|点|睡觉。","wǒ wǎnshang shíyī diǎn shuìjiào"],
    ], nota: {
      en: "Rotina usa o presente simples. by + transporte: by train, by bus (mas on foot). from… to… = das… às…",
      jp: "で marca o meio (電車で, de trem). から = desde / a partir de, まで = até.",
      zh: "坐 + veículo = ir de. 从…到… = de… até…. O horário vem antes do verbo."
    } },
    { titulo: "Roupas", itens: [
      ["roupa","clothes","服","ふく","fuku","衣服","yīfu"],
      ["camisa","shirt","シャツ","シャツ","shatsu","衬衫","chènshān"],
      ["calça","pants","ズボン","ズボン","zubon","裤子","kùzi"],
      ["sapato","shoes","靴","くつ","kutsu","鞋","xié"],
      ["chapéu, boné","hat, cap","帽子","ぼうし","bōshi","帽子","màozi"],
    ], nota: {
      jp: "O verbo de \"vestir\" muda com a parte do corpo: 着る kiru (tronco: camisa), はく haku (pernas e pés: calça, sapato), かぶる kaburu (cabeça: chapéu).",
      zh: "穿 chuān serve para roupa e sapato; 戴 dài para chapéu, óculos e acessórios."
    } },
    { titulo: "Casa", itens: [
      ["quarto","room","部屋","へや","heya","房间","fángjiān"],
      ["cozinha","kitchen","台所","だいどころ","daidokoro","厨房","chúfáng"],
      ["porta","door","ドア","ドア","doa","门","mén"],
      ["janela","window","窓","まど","mado","窗户","chuānghu"],
      ["cama","bed","ベッド","ベッド","beddo","床","chuáng"],
    ], nota: { jp: "Armadilha: em japonês 床 (yuka) é o chão; em chinês 床 chuáng é a cama." } },
    { titulo: "Animais", itens: [
      ["cachorro","dog","犬","いぬ","inu","狗","gǒu"],
      ["gato","cat","猫","ねこ","neko","猫","māo"],
      ["pássaro","bird","鳥","とり","tori","鸟","niǎo"],
      ["cavalo","horse","馬","うま","uma","马","mǎ"],
      ["vaca","cow","牛","うし","ushi","牛","niú"],
    ] },
    { titulo: "Onde está?", itens: [
      ["O livro está na mesa.","The book is on the desk.","本|は|机|の|上|に|あります。","ほんはつくえのうえにあります。","hon wa tsukue no ue ni arimasu","书|在|桌子|上。","shū zài zhuōzi shang"],
      ["O gato está debaixo da cama.","The cat is under the bed.","猫|は|ベッド|の|下|に|います。","ねこはベッドのしたにいます。","neko wa beddo no shita ni imasu","猫|在|床|下面。","māo zài chuáng xiàmian"],
      ["Onde você mora?","Where do you live?","どこ|に|住んで|います|か。","どこにすんでいますか。","doko ni sunde imasu ka","你|住|在|哪里？","nǐ zhù zài nǎlǐ"],
      ["Eu moro em São Paulo.","I live in São Paulo.","サンパウロ|に|住んで|います。","サンパウロにすんでいます。","Sanpauro ni sunde imasu","我|住|在|圣保罗。","wǒ zhù zài Shèngbǎoluó"],
      ["A loja fica ao lado da estação.","The store is next to the station.","店|は|駅|の|隣|に|あります。","みせはえきのとなりにあります。","mise wa eki no tonari ni arimasu","商店|在|车站|旁边。","shāngdiàn zài chēzhàn pángbiān"],
    ], nota: {
      en: "on (em cima de), under (debaixo), in (dentro), next to (ao lado de), in front of (na frente de), behind (atrás).",
      jp: "Posição = referência + の + posição + に: 机の上に (em cima da mesa), ベッドの下に (debaixo da cama), 駅の隣に (ao lado da estação). 前 mae frente, 後ろ ushiro atrás, 中 naka dentro.",
      zh: "Posição vem depois do lugar: 桌子上 (mesa-em cima), 床下面 (cama-embaixo), 车站旁边 (estação-ao lado). 前面 frente, 后面 atrás, 里面 dentro."
    } },
    { titulo: "Descrever coisas II", itens: [
      ["quente (clima)","hot","暑い","あつい","atsui","热","rè"],
      ["frio (clima)","cold","寒い","さむい","samui","冷","lěng"],
      ["caro","expensive","高い","たかい","takai","贵","guì"],
      ["barato","cheap","安い","やすい","yasui","便宜","piányi"],
      ["difícil","difficult","難しい","むずかしい","muzukashii","难","nán"],
    ], nota: { jp: "高い também é \"alto\". Para coisas quentes ao toque (café), use 熱い atsui (mesmo som, kanji diferente); para coisas frias ao toque, 冷たい tsumetai." } },
    { titulo: "Descrever coisas III", itens: [
      ["bonito","beautiful","きれい","きれい","kirei","漂亮","piàoliang"],
      ["interessante","interesting","面白い","おもしろい","omoshiroi","有意思","yǒu yìsi"],
      ["fácil","easy","簡単","かんたん","kantan","容易","róngyì"],
      ["rápido","fast","速い","はやい","hayai","快","kuài"],
      ["lento","slow","遅い","おそい","osoi","慢","màn"],
    ], nota: { jp: "きれい e 簡単 são adjetivos な: antes de substantivo levam な (きれいな花, uma flor bonita), e o negativo é じゃありません, não くない. きれい também quer dizer \"limpo\"." } },
    { titulo: "Comparar", itens: [
      ["A China é maior que o Japão.","China is bigger than Japan.","中国|は|日本|より|大きい|です。","ちゅうごくはにほんよりおおきいです。","Chūgoku wa Nihon yori ōkii desu","中国|比|日本|大。","Zhōngguó bǐ Rìběn dà"],
      ["Hoje está mais quente que ontem.","Today is hotter than yesterday.","今日|は|昨日|より|暑い|です。","きょうはきのうよりあついです。","kyō wa kinō yori atsui desu","今天|比|昨天|热。","jīntiān bǐ zuótiān rè"],
      ["Qual é o mais barato?","Which one is the cheapest?","どれ|が|一番|安い|です|か。","どれがいちばんやすいですか。","dore ga ichiban yasui desu ka","哪个|最|便宜？","nǎge zuì piányi"],
      ["O trem é mais rápido que o ônibus.","The train is faster than the bus.","電車|は|バス|より|速い|です。","でんしゃはバスよりはやいです。","densha wa basu yori hayai desu","火车|比|公交车|快。","huǒchē bǐ gōngjiāochē kuài"],
      ["Japonês é tão difícil quanto chinês.","Japanese is as difficult as Chinese.","日本語|は|中国語|と|同じ|くらい|難しい|です。","にほんごはちゅうごくごとおなじくらいむずかしいです。","nihongo wa chūgokugo to onaji kurai muzukashii desu","日语|和|中文|一样|难。","Rìyǔ hé Zhōngwén yíyàng nán"],
    ], nota: {
      en: "Adjetivo curto: -er than / the -est (bigger than, the cheapest). Adjetivo longo: more … than / the most (more difficult). Igualdade: as … as.",
      jp: "A より B = \"mais que B\": 中国は日本より大きい. Superlativo: 一番 ichiban (número um) + adjetivo. Igualdade: と同じくらい.",
      zh: "A 比 B + adjetivo, sem 很: 中国比日本大. Superlativo: 最 zuì. Igualdade: A 和 B 一样 + adjetivo."
    } },
    { titulo: "Na cidade", itens: [
      ["hospital","hospital","病院","びょういん","byōin","医院","yīyuàn"],
      ["restaurante","restaurant","レストラン","レストラン","resutoran","餐厅","cāntīng"],
      ["banheiro","restroom","トイレ","トイレ","toire","厕所","cèsuǒ"],
      ["rua, caminho","street, road","道","みち","michi","路","lù"],
      ["hotel","hotel","ホテル","ホテル","hoteru","酒店","jiǔdiàn"],
    ], nota: { zh: "Em lugares mais formais, banheiro é 洗手间 xǐshǒujiān (sala de lavar as mãos)." } },
    { titulo: "Direções", itens: [
      ["direita","right","右","みぎ","migi","右边","yòubian"],
      ["esquerda","left","左","ひだり","hidari","左边","zuǒbian"],
      ["em frente","straight ahead","まっすぐ","まっすぐ","massugu","一直","yìzhí"],
      ["perto","near","近い","ちかい","chikai","近","jìn"],
      ["longe","far","遠い","とおい","tōi","远","yuǎn"],
    ] },
    { titulo: "Pedir direção", itens: [
      ["Onde fica o banheiro?","Where is the restroom?","トイレ|は|どこ|です|か。","トイレはどこですか。","toire wa doko desu ka","厕所|在|哪里？","cèsuǒ zài nǎlǐ"],
      ["Com licença, como chego ao museu?","Excuse me, how do I get to the museum?","すみません、|博物館|に|は|どう|行けば|いい|です|か。","すみません、はくぶつかんにはどういけばいいですか。","sumimasen, hakubutsukan ni wa dō ikeba ii desu ka","请问，|博物馆|怎么|走？","qǐngwèn, bówùguǎn zěnme zǒu"],
      ["Siga em frente.","Go straight ahead.","まっすぐ|行って|ください。","まっすぐいってください。","massugu itte kudasai","一直|往|前|走。","yìzhí wǎng qián zǒu"],
      ["Vire à direita.","Turn right.","右|に|曲がって|ください。","みぎにまがってください。","migi ni magatte kudasai","往|右|转。","wǎng yòu zhuǎn"],
      ["É longe daqui?","Is it far from here?","ここ|から|遠い|です|か。","ここからとおいですか。","koko kara tōi desu ka","离|这里|远|吗？","lí zhèlǐ yuǎn ma"],
    ], nota: {
      en: "How do I get to…? é a pergunta padrão. Respostas: go straight, turn left/right, it's on the corner.",
      jp: "〜て + ください = \"faça, por favor\". 行きます → 行って, 曲がります → 曲がって.",
      zh: "请问 qǐngwèn (\"com licença, posso perguntar\") abre qualquer pergunta a um desconhecido. 离 lí = distância de: 离这里远吗?"
    } },
    { titulo: "Tempo II", itens: [
      ["ontem","yesterday","昨日","きのう","kinō","昨天","zuótiān"],
      ["semana passada","last week","先週","せんしゅう","senshū","上个星期","shàng ge xīngqī"],
      ["semana que vem","next week","来週","らいしゅう","raishū","下个星期","xià ge xīngqī"],
      ["sempre","always","いつも","いつも","itsumo","总是","zǒngshì"],
      ["às vezes","sometimes","時々","ときどき","tokidoki","有时候","yǒu shíhou"],
    ], nota: {
      jp: "先 = antes, 来 = que vem. Vale para semana, mês e ano: 先月 mês passado, 来年 ano que vem.",
      zh: "上 = anterior, 下 = seguinte: 上个月 mês passado, 下个月 mês que vem. Para o ano: 去年 e 明年."
    } },
    { titulo: "Passado", itens: [
      ["Ontem eu comi sushi.","I ate sushi yesterday.","昨日|寿司|を|食べました。","きのうすしをたべました。","kinō sushi o tabemashita","我|昨天|吃|了|寿司。","wǒ zuótiān chī le shòusī"],
      ["Semana passada eu fui a Tóquio.","Last week I went to Tokyo.","先週|東京|に|行きました。","せんしゅうとうきょうにいきました。","senshū Tōkyō ni ikimashita","上个星期|我|去|了|东京。","shàng ge xīngqī wǒ qù le Dōngjīng"],
      ["Eu não vi o filme.","I didn't see the movie.","映画|を|見ませんでした。","えいがをみませんでした。","eiga o mimasen deshita","我|没|看|那|部|电影。","wǒ méi kàn nà bù diànyǐng"],
      ["Você comprou o livro?","Did you buy the book?","本|を|買いました|か。","ほんをかいましたか。","hon o kaimashita ka","你|买|了|那|本|书|吗？","nǐ mǎi le nà běn shū ma"],
      ["Foi muito divertido.","It was a lot of fun.","とても|楽しかった|です。","とてもたのしかったです。","totemo tanoshikatta desu","非常|好玩。","fēicháng hǎowán"],
    ], nota: {
      en: "Passado regular: -ed (worked, played). Muitos verbos comuns são irregulares: eat → ate, go → went, see → saw, buy → bought, be → was/were.\nNegativo e pergunta usam did + verbo normal: I didn't see. Did you buy?",
      jp: "ます → ました (passado), ません → ませんでした (passado negativo).\nAdjetivos い: 楽しい → 楽しかった (foi divertido).",
      zh: "O verbo não muda. 了 le depois do verbo indica ação concluída: 吃了.\nNegativo do passado: 没 méi + verbo, sem 了: 我没看. Nunca 不 para passado."
    } },
    { titulo: "Planos", itens: [
      ["Amanhã vou ao cinema.","Tomorrow I'm going to the movies.","明日|映画館|に|行きます。","あしたえいがかんにいきます。","ashita eigakan ni ikimasu","明天|我|去|看|电影。","míngtiān wǒ qù kàn diànyǐng"],
      ["No fim de semana vou viajar.","I'm going to travel on the weekend.","週末|に|旅行|します。","しゅうまつにりょこうします。","shūmatsu ni ryokō shimasu","周末|我|要|去|旅行。","zhōumò wǒ yào qù lǚxíng"],
      ["O que você vai fazer amanhã?","What are you going to do tomorrow?","明日|何|を|します|か。","あしたなにをしますか。","ashita nani o shimasu ka","你|明天|要|做|什么？","nǐ míngtiān yào zuò shénme"],
      ["Vou encontrar um amigo.","I'm going to meet a friend.","友達|に|会います。","ともだちにあいます。","tomodachi ni aimasu","我|要|见|一个|朋友。","wǒ yào jiàn yí ge péngyou"],
      ["Vou estudar à noite.","I'm going to study tonight.","夜|勉強|します。","よるべんきょうします。","yoru benkyō shimasu","我|晚上|要|学习。","wǒ wǎnshang yào xuéxí"],
    ], nota: {
      en: "Planos: be going to + verbo (I'm going to travel). Decisões na hora: will (I'll call you).",
      jp: "O japonês não tem futuro: a forma ます vale para presente e futuro. A palavra de tempo (明日) resolve.\n\n会う (encontrar alguém) usa に: 友達に会います.",
      zh: "要 yào + verbo marca intenção ou futuro próximo. 会 huì + verbo = vai (previsão): 明天会下雨 (amanhã vai chover)."
    } },
    { titulo: "Clima", itens: [
      ["tempo (clima)","weather","天気","てんき","tenki","天气","tiānqì"],
      ["neve","snow","雪","ゆき","yuki","雪","xuě"],
      ["vento","wind","風","かぜ","kaze","风","fēng"],
      ["nuvem","cloud","雲","くも","kumo","云","yún"],
      ["tempo bom, ensolarado","sunny","晴れ","はれ","hare","晴天","qíngtiān"],
    ] },
    { titulo: "Acontecendo agora", itens: [
      ["Estou estudando agora.","I'm studying now.","今|勉強|して|います。","いまべんきょうしています。","ima benkyō shite imasu","我|在|学习。","wǒ zài xuéxí"],
      ["Está chovendo.","It's raining.","雨|が|降って|います。","あめがふっています。","ame ga futte imasu","正在|下雨。","zhèngzài xià yǔ"],
      ["O que você está fazendo?","What are you doing?","何|を|して|います|か。","なにをしていますか。","nani o shite imasu ka","你|在|做|什么？","nǐ zài zuò shénme"],
      ["Ele está comendo.","He is eating.","彼|は|食べて|います。","かれはたべています。","kare wa tabete imasu","他|在|吃饭。","tā zài chīfàn"],
      ["Estou esperando o ônibus.","I'm waiting for the bus.","バス|を|待って|います。","バスをまっています。","basu o matte imasu","我|在|等|公交车。","wǒ zài děng gōngjiāochē"],
    ], nota: {
      en: "be + verbo-ing: I am studying, it is raining, what are you doing?",
      jp: "Forma て + います = \"estar fazendo\". A forma て é a mais importante do japonês:\n食べる → 食べて\n待つ → 待って, 降る → 降って\n飲む → 飲んで, 読む → 読んで\n書く → 書いて\nする → して, 来る → 来て, 行く → 行って (exceção)",
      zh: "在 zài (ou 正在 zhèngzài) antes do verbo = estar fazendo agora: 我在学习."
    } },
    { titulo: "Comunicar", itens: [
      ["ler","read","読む","よむ","yomu","读","dú"],
      ["escrever","write","書く","かく","kaku","写","xiě"],
      ["ouvir, perguntar","listen, ask","聞く","きく","kiku","听","tīng"],
      ["falar","speak","話す","はなす","hanasu","说话","shuōhuà"],
      ["comprar","buy","買う","かう","kau","买","mǎi"],
    ], nota: {
      jp: "聞く é ouvir e também perguntar.",
      zh: "Para \"ler um livro\" o normal é 看书 kàn shū; 读 dú é ler em voz alta ou estudar. Comprar 买 mǎi (3º tom) × vender 卖 mài (4º tom): o tom decide."
    } },
    { titulo: "Poder e conseguir", itens: [
      ["Eu sei nadar.","I can swim.","泳げます。","およげます。","oyogemasu","我|会|游泳。","wǒ huì yóuyǒng"],
      ["Não consigo dormir.","I can't sleep.","眠れません。","ねむれません。","nemuremasen","我|睡|不|着。","wǒ shuì bu zháo"],
      ["Posso entrar?","May I come in?","入って|も|いい|です|か。","はいってもいいですか。","haitte mo ii desu ka","我|可以|进来|吗？","wǒ kěyǐ jìnlai ma"],
      ["Pode me ajudar?","Can you help me?","手伝って|もらえます|か。","てつだってもらえますか。","tetsudatte moraemasu ka","你|能|帮|我|吗？","nǐ néng bāng wǒ ma"],
      ["Pode tirar uma foto nossa?","Could you take a picture of us?","写真|を|撮って|もらえます|か。","しゃしんをとってもらえますか。","shashin o totte moraemasu ka","你|能|帮|我们|拍|张|照|吗？","nǐ néng bāng wǒmen pāi zhāng zhào ma"],
    ], nota: {
      en: "can = poder/conseguir/saber fazer. could = forma educada (Could you…?). may = pedir permissão com educação.",
      jp: "Forma potencial: 泳ぐ → 泳げる (conseguir nadar), 眠る → 眠れる, 食べる → 食べられる.\nPermissão: 〜てもいいですか (posso…?).\nPedido: 〜てもらえますか (você poderia…?).",
      zh: "Três \"poder\" diferentes:\n会 huì = saber (habilidade aprendida): 我会游泳.\n能 néng = conseguir / ter condições: 你能帮我吗?\n可以 kěyǐ = ter permissão: 我可以进来吗?"
    } },
    { titulo: "Trabalho", itens: [
      ["trabalho, emprego","job, work","仕事","しごと","shigoto","工作","gōngzuò"],
      ["reunião","meeting","会議","かいぎ","kaigi","会议","huìyì"],
      ["chefe","boss","上司","じょうし","jōshi","老板","lǎobǎn"],
      ["colega de trabalho","coworker","同僚","どうりょう","dōryō","同事","tóngshì"],
      ["e-mail","email","メール","メール","mēru","邮件","yóujiàn"],
    ] },
    { titulo: "Profissões", itens: [
      ["médico","doctor","医者","いしゃ","isha","医生","yīshēng"],
      ["professor","teacher","先生","せんせい","sensei","老师","lǎoshī"],
      ["engenheiro","engineer","エンジニア","エンジニア","enjinia","工程师","gōngchéngshī"],
      ["funcionário de empresa","office worker","会社員","かいしゃいん","kaishain","公司职员","gōngsī zhíyuán"],
      ["cozinheiro","cook, chef","料理人","りょうりにん","ryōrinin","厨师","chúshī"],
    ], nota: { jp: "先生 também é usado como título para médicos, advogados e professores: 田中先生." } },
    { titulo: "Viagem", itens: [
      ["passaporte","passport","パスポート","パスポート","pasupōto","护照","hùzhào"],
      ["aeroporto","airport","空港","くうこう","kūkō","机场","jīchǎng"],
      ["passagem, bilhete","ticket","切符","きっぷ","kippu","票","piào"],
      ["mala","suitcase","スーツケース","スーツケース","sūtsukēsu","行李箱","xínglixiāng"],
      ["viagem","trip, travel","旅行","りょこう","ryokō","旅行","lǚxíng"],
    ] },
    { titulo: "No hotel", itens: [
      ["Tenho uma reserva.","I have a reservation.","予約|して|います。","よやくしています。","yoyaku shite imasu","我|有|预订。","wǒ yǒu yùdìng"],
      ["Qual é a senha do Wi-Fi?","What's the Wi-Fi password?","Wi-Fi|の|パスワード|は|何|です|か。","ワイファイのパスワードはなんですか。","waifai no pasuwādo wa nan desu ka","Wi-Fi|密码|是|多少？","Wi-Fi mìmǎ shì duōshao"],
      ["A que horas é o check-out?","What time is check-out?","チェックアウト|は|何時|です|か。","チェックアウトはなんじですか。","chekkuauto wa nanji desu ka","几|点|退房？","jǐ diǎn tuìfáng"],
      ["O ar-condicionado não funciona.","The air conditioner doesn't work.","エアコン|が|壊れて|います。","エアコンがこわれています。","eakon ga kowarete imasu","空调|坏|了。","kōngtiáo huài le"],
      ["Pode guardar minha bagagem?","Could you keep my luggage?","荷物|を|預かって|もらえます|か。","にもつをあずかってもらえますか。","nimotsu o azukatte moraemasu ka","可以|帮|我|寄存|行李|吗？","kěyǐ bāng wǒ jìcún xíngli ma"],
    ] },
    { titulo: "Conversar", itens: [
      ["Você tem tempo agora?","Do you have time now?","今|時間|あります|か。","いまじかんありますか。","ima jikan arimasu ka","你|现在|有|时间|吗？","nǐ xiànzài yǒu shíjiān ma"],
      ["Vamos tomar um café?","Shall we get a coffee?","コーヒー|でも|飲みません|か。","コーヒーでものみませんか。","kōhī demo nomimasen ka","我们|去|喝|咖啡|吧？","wǒmen qù hē kāfēi ba"],
      ["Eu acho que sim.","I think so.","そう|思います。","そうおもいます。","sō omoimasu","我|觉得|是。","wǒ juéde shì"],
      ["Eu gosto de aprender línguas.","I like learning languages.","言葉|を|勉強|する|の|が|好き|です。","ことばをべんきょうするのがすきです。","kotoba o benkyō suru no ga suki desu","我|喜欢|学|语言。","wǒ xǐhuan xué yǔyán"],
      ["Foi um prazer conversar com você.","It was nice talking to you.","話せて|楽しかった|です。","はなせてたのしかったです。","hanasete tanoshikatta desu","很|高兴|和|你|聊天。","hěn gāoxìng hé nǐ liáotiān"],
    ], nota: {
      en: "Shall we…? / Let's… para convidar. Do you want to…? é mais casual.",
      jp: "Convite educado: 〜ませんか (não quer…?). でも = \"um café ou algo assim\", deixa o convite mais leve.",
      zh: "吧 ba no fim transforma a frase em sugestão: 我们去吧 (vamos lá)."
    } },
  ]
});
