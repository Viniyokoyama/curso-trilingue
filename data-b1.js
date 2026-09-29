// Nível B1 (≈ JLPT N4–N3 · HSK 3–4). Formato descrito em data-fundamentos.js.
window.TRILHA = window.TRILHA || [];

window.TRILHA.push({
  id: "b1",
  nivel: "B1 · Intermediário",
  descricao: "Você passa a se virar sozinho: explicar motivos, dar opinião, falar de saúde, fazer compras, contar o que aconteceu e ligar frases.",
  unidades: [
    { titulo: "Frequência", itens: [
      ["geralmente","usually","たいてい","たいてい","taitei","通常","tōngcháng"],
      ["frequentemente","often","よく","よく","yoku","经常","jīngcháng"],
      ["raramente","rarely","めったに","めったに","mettani","很少","hěn shǎo"],
      ["nunca","never","一度も","いちども","ichido mo","从来不","cónglái bù"],
      ["todo dia","every day","毎日","まいにち","mainichi","每天","měitiān"],
    ], nota: {
      en: "Advérbios de frequência vão antes do verbo principal (I usually walk) e depois do to be (I am always late).",
      jp: "めったに e 一度も só aparecem com verbo negativo: めったに行きません (raramente vou), 一度も行ったことがありません (nunca fui).",
      zh: "很少 + verbo = raramente. 从来不 = nunca (hábito); 从来没 + verbo + 过 = nunca fiz (experiência)."
    } },
    { titulo: "Conectivos", itens: [
      ["mas","but","でも","でも","demo","但是","dànshì"],
      ["porque","because","から","から","kara","因为","yīnwèi"],
      ["então, por isso","so","だから","だから","dakara","所以","suǒyǐ"],
      ["também","also, too","も","も","mo","也","yě"],
      ["ainda","still","まだ","まだ","mada","还","hái"],
    ], nota: {
      jp: "から vem DEPOIS do motivo: 雨だから (porque chove). でも e だから começam frase.\nも substitui は ou が: 私も (eu também).",
      zh: "因为…所以… costumam vir em par: 因为下雨，所以我没去. 也 sempre antes do verbo: 我也去 (eu também vou)."
    } },
    { titulo: "Por quê? Porque…", itens: [
      ["Por que você estuda japonês?","Why do you study Japanese?","どうして|日本語|を|勉強|して|います|か。","どうしてにほんごをべんきょうしていますか。","dōshite nihongo o benkyō shite imasu ka","你|为什么|学|日语？","nǐ wèishénme xué Rìyǔ"],
      ["Porque eu gosto de anime.","Because I like anime.","アニメ|が|好き|だ|から|です。","アニメがすきだからです。","anime ga suki da kara desu","因为|我|喜欢|动漫。","yīnwèi wǒ xǐhuan dòngmàn"],
      ["Não fui porque estava doente.","I didn't go because I was sick.","病気|だった|から、|行きませんでした。","びょうきだったから、いきませんでした。","byōki datta kara, ikimasen deshita","因为|我|生病|了，|所以|没|去。","yīnwèi wǒ shēngbìng le, suǒyǐ méi qù"],
      ["Trabalhei muito, por isso estou cansado.","I worked a lot, so I'm tired.","たくさん|働いた|ので、|疲れました。","たくさんはたらいたので、つかれました。","takusan hataraita node, tsukaremashita","我|工作|了|很|多，|所以|很|累。","wǒ gōngzuò le hěn duō, suǒyǐ hěn lèi"],
      ["Estava chovendo, então fiquei em casa.","It was raining, so I stayed home.","雨|だった|ので、|家|に|いました。","あめだったので、いえにいました。","ame datta node, ie ni imashita","下雨|了，|所以|我|待|在|家里。","xià yǔ le, suǒyǐ wǒ dāi zài jiā li"],
    ], nota: {
      en: "because + motivo; so + consequência. Why…? → Because…",
      jp: "から e ので = porque. ので é mais suave e educado (bom para desculpas); から é mais direto.\nAntes deles vem a forma simples: 好きだ, 病気だった, 働いた.",
      zh: "因为 (porque) + 所以 (por isso). Em respostas curtas basta 因为…."
    } },
    { titulo: "Saúde", itens: [
      ["doença, doente","illness, sick","病気","びょうき","byōki","生病","shēngbìng"],
      ["febre","fever","熱","ねつ","netsu","发烧","fāshāo"],
      ["remédio","medicine","薬","くすり","kusuri","药","yào"],
      ["dor","pain","痛み","いたみ","itami","疼","téng"],
      ["resfriado","cold (illness)","風邪","かぜ","kaze","感冒","gǎnmào"],
    ], nota: {
      jp: "風邪 (resfriado) e 風 (vento) lêem-se かぜ. \"Pegar resfriado\" = 風邪を引く. Tomar remédio = 薬を飲む (\"beber\" o remédio).",
      zh: "Tomar remédio = 吃药 chī yào (\"comer\" o remédio)."
    } },
    { titulo: "No médico", itens: [
      ["Estou com febre desde ontem.","I've had a fever since yesterday.","昨日|から|熱|が|あります。","きのうからねつがあります。","kinō kara netsu ga arimasu","我|从|昨天|开始|发烧。","wǒ cóng zuótiān kāishǐ fāshāo"],
      ["Estou resfriado.","I have a cold.","風邪|を|引きました。","かぜをひきました。","kaze o hikimashita","我|感冒|了。","wǒ gǎnmào le"],
      ["Onde dói?","Where does it hurt?","どこ|が|痛い|です|か。","どこがいたいですか。","doko ga itai desu ka","哪里|疼？","nǎlǐ téng"],
      ["Tome este remédio três vezes por dia.","Take this medicine three times a day.","この|薬|を|一日|三回|飲んで|ください。","このくすりをいちにちさんかいのんでください。","kono kusuri o ichinichi sankai nonde kudasai","这个|药|一天|吃|三|次。","zhège yào yì tiān chī sān cì"],
      ["Melhoras!","Get well soon!","お大事に。","おだいじに。","odaiji ni","早日|康复！","zǎorì kāngfù"],
    ], nota: {
      en: "have / have had + sintoma: I have a fever. I've had a cough since Monday (desde segunda). since + ponto no tempo, for + duração.",
      jp: "〜回 kai = vezes. 一日三回 = três vezes por dia.",
      zh: "次 cì = vezes, depois do verbo: 吃三次. 从…开始 = desde…."
    } },
    { titulo: "Emoções II", itens: [
      ["preocupado","worried","心配","しんぱい","shinpai","担心","dānxīn"],
      ["bravo","angry","怒っている","おこっている","okotte iru","生气","shēngqì"],
      ["surpreso","surprised","驚いた","おどろいた","odoroita","吃惊","chījīng"],
      ["com medo","scared","怖い","こわい","kowai","害怕","hàipà"],
      ["nervoso","nervous","緊張している","きんちょうしている","kinchō shite iru","紧张","jǐnzhāng"],
    ] },
    { titulo: "Verbos da mente", itens: [
      ["pensar, achar","think","思う","おもう","omou","想","xiǎng"],
      ["decidir","decide","決める","きめる","kimeru","决定","juédìng"],
      ["lembrar","remember","覚える","おぼえる","oboeru","记得","jìde"],
      ["esquecer","forget","忘れる","わすれる","wasureru","忘记","wàngjì"],
      ["tentar","try","やってみる","やってみる","yatte miru","试","shì"],
    ], nota: {
      jp: "覚える é memorizar e também lembrar de algo que se aprendeu. 〜てみる = fazer para ver como é: 食べてみる (experimentar comer).",
      zh: "想 xiǎng é pensar, querer e sentir saudade (想家, saudade de casa). 试试 shìshi = dar uma tentada."
    } },
    { titulo: "Obrigação", itens: [
      ["Preciso trabalhar amanhã.","I have to work tomorrow.","明日|働かなければ|なりません。","あしたはたらかなければなりません。","ashita hatarakanakereba narimasen","我|明天|得|上班。","wǒ míngtiān děi shàngbān"],
      ["Você não precisa vir.","You don't have to come.","来なくて|も|いい|です。","こなくてもいいです。","konakute mo ii desu","你|不用|来。","nǐ búyòng lái"],
      ["É proibido fumar aqui.","You can't smoke here.","ここ|で|たばこ|を|吸って|は|いけません。","ここでたばこをすってはいけません。","koko de tabako o sutte wa ikemasen","这里|不能|抽烟。","zhèlǐ bù néng chōuyān"],
      ["Você deveria descansar.","You should rest.","休んだ|ほう|が|いい|です。","やすんだほうがいいです。","yasunda hō ga ii desu","你|应该|休息。","nǐ yīnggāi xiūxi"],
      ["Tenho que ir embora.","I have to go.","もう|行かなきゃ。","もういかなきゃ。","mō ikanakya","我|得|走|了。","wǒ děi zǒu le"],
    ], nota: {
      en: "have to = ter que. don't have to = não precisa (opcional). must not / can't = proibido. should = deveria (conselho).",
      jp: "Obrigação: 〜なければなりません (formal) ou 〜なきゃ (fala). Não precisa: 〜なくてもいい. Proibido: 〜てはいけません. Conselho: 〜たほうがいい (\"é melhor fazer\").",
      zh: "得 děi = ter que (fala). 不用 búyòng = não precisa. 不能 = não pode. 应该 yīnggāi = deveria."
    } },
    { titulo: "Verbos de mudança", itens: [
      ["começar","start","始める","はじめる","hajimeru","开始","kāishǐ"],
      ["terminar","finish, end","終わる","おわる","owaru","结束","jiéshù"],
      ["mudar","change","変える","かえる","kaeru","改变","gǎibiàn"],
      ["perder","lose","失くす","なくす","nakusu","丢","diū"],
      ["encontrar, achar","find","見つける","みつける","mitsukeru","找到","zhǎodào"],
    ], nota: {
      jp: "Muitos verbos japoneses vêm em pares: um com objeto (始める, começar algo) e outro sem (始まる, algo começa). 会議を始める × 会議が始まる.",
      zh: "找 zhǎo = procurar; 找到 = procurar e conseguir = achar. 到 no fim indica que a ação teve resultado."
    } },
    { titulo: "Experiências e planos", itens: [
      ["Eu quero viajar para o Japão.","I want to travel to Japan.","日本|に|旅行|したい|です。","にほんにりょこうしたいです。","Nihon ni ryokō shitai desu","我|想|去|日本|旅行。","wǒ xiǎng qù Rìběn lǚxíng"],
      ["Eu já fui à China.","I have been to China.","中国|に|行った|こと|が|あります。","ちゅうごくにいったことがあります。","Chūgoku ni itta koto ga arimasu","我|去|过|中国。","wǒ qù guo Zhōngguó"],
      ["Você já foi ao Japão?","Have you ever been to Japan?","日本|に|行った|こと|が|あります|か。","にほんにいったことがありますか。","Nihon ni itta koto ga arimasu ka","你|去|过|日本|吗？","nǐ qù guo Rìběn ma"],
      ["Estudo chinês há um ano.","I have been studying Chinese for a year.","一年間|中国語|を|勉強|して|います。","いちねんかんちゅうごくごをべんきょうしています。","ichinenkan chūgokugo o benkyō shite imasu","我|学|中文|学|了|一|年|了。","wǒ xué Zhōngwén xué le yì nián le"],
      ["Estou pensando em mudar de emprego.","I'm thinking about changing jobs.","転職|しよう|と|思って|います。","てんしょくしようとおもっています。","tenshoku shiyō to omotte imasu","我|在|考虑|换|工作。","wǒ zài kǎolǜ huàn gōngzuò"],
    ], nota: {
      en: "Present perfect (have + particípio) para experiência sem data: I have been to China. Have you ever…? Com data use o passado: I went to China in 2020.\nhave been + -ing para algo que começou no passado e continua: I have been studying for a year.",
      jp: "Experiência: verbo no passado simples + ことがあります: 行ったことがあります (já fui).\nIntenção: forma volitiva + と思っています: しよう (vou fazer) → しようと思っています.",
      zh: "过 guo depois do verbo = já fez alguma vez: 我去过中国. Negativo: 没去过.\nDuração: verbo + 了 + tempo + 了 = há quanto tempo (e continua)."
    } },
    { titulo: "Condicional", itens: [
      ["Se chover, eu fico em casa.","If it rains, I'll stay home.","雨|が|降ったら、|家|に|います。","あめがふったら、いえにいます。","ame ga futtara, ie ni imasu","如果|下雨，|我|就|待|在|家。","rúguǒ xià yǔ, wǒ jiù dāi zài jiā"],
      ["Se eu tiver tempo, eu vou.","If I have time, I'll go.","時間|が|あったら、|行きます。","じかんがあったら、いきます。","jikan ga attara, ikimasu","如果|有|时间，|我|就|去。","rúguǒ yǒu shíjiān, wǒ jiù qù"],
      ["Se não entender, me pergunte.","If you don't understand, ask me.","わからなかったら、|聞いて|ください。","わからなかったら、きいてください。","wakaranakattara, kiite kudasai","如果|不|懂，|就|问|我。","rúguǒ bù dǒng, jiù wèn wǒ"],
      ["Quando chegar, me ligue.","Call me when you arrive.","着いたら、|電話|して|ください。","ついたら、でんわしてください。","tsuitara, denwa shite kudasai","到|了|就|给|我|打|电话。","dào le jiù gěi wǒ dǎ diànhuà"],
      ["Se for barato, eu compro.","If it's cheap, I'll buy it.","安かったら、|買います。","やすかったら、かいます。","yasukattara, kaimasu","如果|便宜，|我|就|买。","rúguǒ piányi, wǒ jiù mǎi"],
    ], nota: {
      en: "If + presente, will + verbo: If it rains, I'll stay home. Nunca \"If it will rain\".",
      jp: "〜たら (passado + ら) = \"se / quando\": 降った → 降ったら, あった → あったら, 安かった → 安かったら. É o condicional mais versátil.",
      zh: "如果 rúguǒ … 就 jiù … = se… então…. Na fala, 如果 some muitas vezes, mas o 就 fica."
    } },
    { titulo: "Dar opinião", itens: [
      ["Acho que vai chover amanhã.","I think it will rain tomorrow.","明日|は|雨|が|降る|と|思います。","あしたはあめがふるとおもいます。","ashita wa ame ga furu to omoimasu","我|觉得|明天|会|下雨。","wǒ juéde míngtiān huì xià yǔ"],
      ["Na minha opinião, é caro demais.","In my opinion, it's too expensive.","私|の|意見|で|は、|高すぎます。","わたしのいけんでは、たかすぎます。","watashi no iken de wa, takasugimasu","我|认为|太|贵|了。","wǒ rènwéi tài guì le"],
      ["Eu concordo.","I agree.","賛成|です。","さんせいです。","sansei desu","我|同意。","wǒ tóngyì"],
      ["Eu não concordo com você.","I don't agree with you.","あなた|の|意見|に|は|反対|です。","あなたのいけんにははんたいです。","anata no iken ni wa hantai desu","我|不|同意|你|的|看法。","wǒ bù tóngyì nǐ de kànfǎ"],
      ["Depende.","It depends.","場合|に|よります。","ばあいによります。","baai ni yorimasu","看|情况。","kàn qíngkuàng"],
    ], nota: {
      en: "I think (that)… / In my opinion… / I agree / I disagree. Para suavizar: I'm not sure, but…",
      jp: "Forma simples + と思います = \"acho que…\". É a estrutura de opinião mais usada. Discordar de frente é raro; prefira ちょっと違うと思います (acho que é um pouco diferente).",
      zh: "觉得 juéde (achar, sentir) é informal; 认为 rènwéi é mais formal e firme."
    } },
    { titulo: "Tecnologia", itens: [
      ["celular","smartphone","スマホ","スマホ","sumaho","手机","shǒujī"],
      ["internet","internet","インターネット","インターネット","intānetto","网络","wǎngluò"],
      ["senha","password","パスワード","パスワード","pasuwādo","密码","mìmǎ"],
      ["aplicativo","app","アプリ","アプリ","apuri","应用","yìngyòng"],
      ["mensagem","message","メッセージ","メッセージ","messēji","消息","xiāoxi"],
    ] },
    { titulo: "Descrever pessoas", itens: [
      ["Ela é alta e tem cabelo comprido.","She is tall and has long hair.","彼女|は|背|が|高くて、|髪|が|長い|です。","かのじょはせがたかくて、かみがながいです。","kanojo wa se ga takakute, kami ga nagai desu","她|个子|很|高，|头发|很|长。","tā gèzi hěn gāo, tóufa hěn cháng"],
      ["Ele é muito gentil.","He is very kind.","彼|は|とても|優しい|です。","かれはとてもやさしいです。","kare wa totemo yasashii desu","他|很|善良。","tā hěn shànliáng"],
      ["Meu irmão usa óculos.","My brother wears glasses.","兄|は|眼鏡|を|かけて|います。","あにはめがねをかけています。","ani wa megane o kakete imasu","我|哥哥|戴|眼镜。","wǒ gēge dài yǎnjìng"],
      ["Você parece cansado.","You look tired.","疲れて|いる|よう|です|ね。","つかれているようですね。","tsukarete iru yō desu ne","你|看起来|很|累。","nǐ kàn qǐlai hěn lèi"],
      ["Ele é mais velho que eu.","He is older than me.","彼|は|私|より|年上|です。","かれはわたしよりとしうえです。","kare wa watashi yori toshiue desu","他|比|我|大。","tā bǐ wǒ dà"],
    ], nota: {
      en: "look + adjetivo = parecer: You look tired. has/have + característica: She has long hair.",
      jp: "X は Y が Z: 彼女は背が高い = \"ela, a altura é alta\". Estrutura típica para descrever partes de alguém.\n〜ようです = parece que.",
      zh: "看起来 kàn qǐlai = parece (pela aparência). 比我大 = mais velho que eu (大 = grande/velho em idade)."
    } },
    { titulo: "Compras", itens: [
      ["preço","price","値段","ねだん","nedan","价格","jiàgé"],
      ["desconto","discount","割引","わりびき","waribiki","折扣","zhékòu"],
      ["cartão de crédito","credit card","クレジットカード","クレジットカード","kurejitto kādo","信用卡","xìnyòngkǎ"],
      ["troco","change (money)","おつり","おつり","otsuri","找零","zhǎolíng"],
      ["recibo","receipt","レシート","レシート","reshīto","收据","shōujù"],
    ] },
    { titulo: "Fazendo compras", itens: [
      ["Posso experimentar?","Can I try it on?","試着|して|も|いい|です|か。","しちゃくしてもいいですか。","shichaku shite mo ii desu ka","我|可以|试|一下|吗？","wǒ kěyǐ shì yíxià ma"],
      ["Tem um tamanho maior?","Do you have a bigger size?","もっと|大きい|サイズ|は|あります|か。","もっとおおきいサイズはありますか。","motto ōkii saizu wa arimasu ka","有|大|一点|的|吗？","yǒu dà yìdiǎn de ma"],
      ["Pode dar um desconto?","Can you give me a discount?","安く|して|もらえます|か。","やすくしてもらえますか。","yasuku shite moraemasu ka","能|便宜|一点|吗？","néng piányi yìdiǎn ma"],
      ["Aceita cartão?","Do you take cards?","カード|で|払えます|か。","カードではらえますか。","kādo de haraemasu ka","可以|刷卡|吗？","kěyǐ shuākǎ ma"],
      ["Só estou olhando.","I'm just looking.","見て|いる|だけ|です。","みているだけです。","mite iru dake desu","我|只是|看看。","wǒ zhǐshì kànkan"],
    ], nota: {
      jp: "だけ = só, apenas. 安くする = \"tornar barato\": 安く + する.",
      zh: "Verbo repetido (看看, 试试) ou verbo + 一下 = fazer rapidinho, sem compromisso."
    } },
    { titulo: "Ideias abstratas", itens: [
      ["problema","problem","問題","もんだい","mondai","问题","wèntí"],
      ["ideia","idea","アイデア","アイデア","aidea","主意","zhǔyi"],
      ["motivo","reason","理由","りゆう","riyū","原因","yuányīn"],
      ["opinião","opinion","意見","いけん","iken","意见","yìjiàn"],
      ["experiência","experience","経験","けいけん","keiken","经验","jīngyàn"],
    ], nota: { zh: "问题 é \"problema\" e também \"pergunta\". 意见 muitas vezes quer dizer \"crítica, objeção\"." } },
    { titulo: "Frases que descrevem", itens: [
      ["O livro que comprei ontem é interessante.","The book I bought yesterday is interesting.","昨日|買った|本|は|面白い|です。","きのうかったほんはおもしろいです。","kinō katta hon wa omoshiroi desu","我|昨天|买|的|书|很|有意思。","wǒ zuótiān mǎi de shū hěn yǒu yìsi"],
      ["A pessoa que mora ali é médica.","The person who lives there is a doctor.","あそこ|に|住んで|いる|人|は|医者|です。","あそこにすんでいるひとはいしゃです。","asoko ni sunde iru hito wa isha desu","住|在|那里|的|人|是|医生。","zhù zài nàlǐ de rén shì yīshēng"],
      ["Este é o restaurante onde comemos.","This is the restaurant where we ate.","ここ|は|私たち|が|食べた|レストラン|です。","ここはわたしたちがたべたレストランです。","koko wa watashitachi ga tabeta resutoran desu","这|是|我们|吃饭|的|餐厅。","zhè shì wǒmen chīfàn de cāntīng"],
      ["O filme que eu vi foi bom.","The movie I saw was good.","私|が|見た|映画|は|よかった|です。","わたしがみたえいがはよかったです。","watashi ga mita eiga wa yokatta desu","我|看|的|电影|很|好看。","wǒ kàn de diànyǐng hěn hǎokàn"],
      ["A mulher de óculos é minha professora.","The woman with glasses is my teacher.","眼鏡|を|かけた|女性|は|私|の|先生|です。","めがねをかけたじょせいはわたしのせんせいです。","megane o kaketa josei wa watashi no sensei desu","戴|眼镜|的|女人|是|我|的|老师。","dài yǎnjìng de nǚrén shì wǒ de lǎoshī"],
    ], nota: {
      en: "who (pessoas), which/that (coisas), where (lugares). O that pode sumir quando é objeto: The book (that) I bought.",
      jp: "Não existe \"que\": a frase inteira vem ANTES do substantivo, na forma simples. 昨日買った + 本 = \"o ontem-comprado livro\".",
      zh: "A frase descritiva vem antes do substantivo e termina em 的: 我昨天买的 + 书."
    } },
    { titulo: "Ao telefone", itens: [
      ["Alô?","Hello?","もしもし。","もしもし。","moshimoshi","喂？","wéi"],
      ["Quem está falando?","Who's calling?","どちら|様|です|か。","どちらさまですか。","dochira-sama desu ka","请问|您|是|哪|位？","qǐngwèn nín shì nǎ wèi"],
      ["Ligo de volta mais tarde.","I'll call you back later.","後で|また|電話|します。","あとでまたでんわします。","ato de mata denwa shimasu","我|等|一会儿|再|打|给|你。","wǒ děng yíhuìr zài dǎ gěi nǐ"],
      ["Posso deixar um recado?","Can I leave a message?","伝言|を|お願い|できます|か。","でんごんをおねがいできますか。","dengon o onegai dekimasu ka","我|可以|留|个|言|吗？","wǒ kěyǐ liú ge yán ma"],
      ["A ligação está ruim.","The connection is bad.","電波|が|悪い|です。","でんぱがわるいです。","denpa ga warui desu","信号|不|好。","xìnhào bù hǎo"],
    ] },
    { titulo: "Natureza II", itens: [
      ["mar","sea","海","うみ","umi","海","hǎi"],
      ["praia","beach","浜辺","はまべ","hamabe","海滩","hǎitān"],
      ["flor","flower","花","はな","hana","花","huā"],
      ["floresta","forest","森","もり","mori","森林","sēnlín"],
      ["ilha","island","島","しま","shima","岛","dǎo"],
    ] },
    { titulo: "Contar uma história", itens: [
      ["Primeiro, acordei cedo.","First, I woke up early.","まず、|早く|起きました。","まず、はやくおきました。","mazu, hayaku okimashita","首先，|我|很|早|起床|了。","shǒuxiān, wǒ hěn zǎo qǐchuáng le"],
      ["Depois, tomei banho.","Then I took a shower.","それから、|シャワー|を|浴びました。","それから、シャワーをあびました。","sorekara, shawā o abimashita","然后，|我|洗|了|澡。","ránhòu, wǒ xǐ le zǎo"],
      ["Antes de sair, tomei café.","Before leaving, I had coffee.","出かける|前|に、|コーヒー|を|飲みました。","でかけるまえに、コーヒーをのみました。","dekakeru mae ni, kōhī o nomimashita","出门|前，|我|喝|了|咖啡。","chūmén qián, wǒ hē le kāfēi"],
      ["Depois do trabalho, fui ao mercado.","After work, I went to the supermarket.","仕事|の|後|で、|スーパー|に|行きました。","しごとのあとで、スーパーにいきました。","shigoto no ato de, sūpā ni ikimashita","下班|后，|我|去|了|超市。","xiàbān hòu, wǒ qù le chāoshì"],
      ["No fim, cheguei em casa às dez.","In the end, I got home at ten.","最後|に、|十時|に|家|に|帰りました。","さいごに、じゅうじにいえにかえりました。","saigo ni, jūji ni ie ni kaerimashita","最后，|我|十|点|到|家。","zuìhòu, wǒ shí diǎn dào jiā"],
    ], nota: {
      en: "first, then, after that, before + -ing, finally. Tudo no passado simples.",
      jp: "Verbo de dicionário + 前に = antes de fazer. Substantivo + の後で = depois de. まず → それから → 最後に.",
      zh: "首先 → 然后 → 最后. …前 = antes de, …后 = depois de, sempre depois da ação: 出门前, 下班后."
    } },
    { titulo: "Pedidos educados", itens: [
      ["Poderia abrir a janela?","Could you open the window?","窓|を|開けて|いただけます|か。","まどをあけていただけますか。","mado o akete itadakemasu ka","能|请|你|开|一下|窗户|吗？","néng qǐng nǐ kāi yíxià chuānghu ma"],
      ["Posso me sentar aqui?","May I sit here?","ここ|に|座って|も|いい|です|か。","ここにすわってもいいですか。","koko ni suwatte mo ii desu ka","我|可以|坐|这儿|吗？","wǒ kěyǐ zuò zhèr ma"],
      ["Desculpe incomodar.","Sorry to bother you.","お邪魔|して|すみません。","おじゃましてすみません。","ojama shite sumimasen","不好意思，|打扰|了。","bù hǎoyìsi, dǎrǎo le"],
      ["Muito obrigado pela ajuda.","Thank you very much for your help.","手伝って|くれて、|本当に|ありがとう|ございます。","てつだってくれて、ほんとうにありがとうございます。","tetsudatte kurete, hontō ni arigatō gozaimasu","非常|感谢|你|的|帮助。","fēicháng gǎnxiè nǐ de bāngzhù"],
      ["Não se preocupe.","Don't worry about it.","気|に|しないで|ください。","きにしないでください。","ki ni shinaide kudasai","别|担心。","bié dānxīn"],
    ], nota: {
      en: "Could you…? / Would you mind + -ing? (Would you mind opening the window?) são as formas mais educadas.",
      jp: "Escala de educação: 開けて (informal) → 開けてください → 開けてもらえますか → 開けていただけますか (bem educado).\n〜てくれて ありがとう = obrigado por fazer….",
      zh: "别 bié + verbo = não faça (pedido): 别担心. 打扰了 = \"desculpe o incômodo\"."
    } },
  ]
});
