// Nível B2 (≈ JLPT N3–N2 · HSK 4–5). Formato descrito em data-fundamentos.js.
window.TRILHA = window.TRILHA || [];

window.TRILHA.push({
  id: "b2",
  nivel: "B2 · Pós-intermediário",
  descricao: "Conversa de adulto: voz passiva, discurso indireto, hipóteses, trabalho, notícias, argumentação e sentimentos com nuance.",
  unidades: [
    { titulo: "Sociedade", itens: [
      ["sociedade","society","社会","しゃかい","shakai","社会","shèhuì"],
      ["economia","economy","経済","けいざい","keizai","经济","jīngjì"],
      ["governo","government","政府","せいふ","seifu","政府","zhèngfǔ"],
      ["cultura","culture","文化","ぶんか","bunka","文化","wénhuà"],
      ["meio ambiente","environment","環境","かんきょう","kankyō","环境","huánjìng"],
    ], nota: {
      jp: "Vocabulário formal japonês vem quase todo do chinês (on'yomi). Compare: 社会 shakai / shèhuì, 文化 bunka / wénhuà, 政府 seifu / zhèngfǔ. Estudar as duas línguas juntas ajuda aqui.",
      zh: "Estes compostos são quase idênticos no japonês. Quem estuda os dois ganha vocabulário em dobro."
    } },
    { titulo: "Pesquisa e análise", itens: [
      ["desenvolvimento","development","発展","はってん","hatten","发展","fāzhǎn"],
      ["pesquisa","research","研究","けんきゅう","kenkyū","研究","yánjiū"],
      ["resultado","result","結果","けっか","kekka","结果","jiéguǒ"],
      ["influência","influence","影響","えいきょう","eikyō","影响","yǐngxiǎng"],
      ["tendência","trend","傾向","けいこう","keikō","趋势","qūshì"],
    ] },
    { titulo: "Verbos para argumentar", itens: [
      ["explicar","explain","説明する","せつめいする","setsumei suru","解释","jiěshì"],
      ["comparar","compare","比べる","くらべる","kuraberu","比较","bǐjiào"],
      ["sugerir","suggest","提案する","ていあんする","teian suru","建议","jiànyì"],
      ["evitar","avoid","避ける","さける","sakeru","避免","bìmiǎn"],
      ["aumentar","increase","増える","ふえる","fueru","增加","zēngjiā"],
    ], nota: { en: "suggest e avoid são seguidos de -ing: I suggest leaving early. Avoid eating late." } },
    { titulo: "Voz passiva", itens: [
      ["Esta casa foi construída há cem anos.","This house was built a hundred years ago.","この|家|は|百年前|に|建てられました。","このいえはひゃくねんまえにたてられました。","kono ie wa hyakunen mae ni tateraremashita","这|座|房子|是|一百|年|前|建|的。","zhè zuò fángzi shì yìbǎi nián qián jiàn de"],
      ["Meu celular foi roubado.","My phone was stolen.","スマホ|を|盗まれました。","スマホをぬすまれました。","sumaho o nusumaremashita","我|的|手机|被|偷|了。","wǒ de shǒujī bèi tōu le"],
      ["Fui elogiado pelo meu chefe.","I was praised by my boss.","上司|に|褒められました。","じょうしにほめられました。","jōshi ni homeraremashita","我|被|老板|表扬|了。","wǒ bèi lǎobǎn biǎoyáng le"],
      ["Esse livro é lido no mundo todo.","That book is read all over the world.","その|本|は|世界中|で|読まれて|います。","そのほんはせかいじゅうでよまれています。","sono hon wa sekaijū de yomarete imasu","那|本|书|在|全|世界|都|有|人|读。","nà běn shū zài quán shìjiè dōu yǒu rén dú"],
      ["Fui pego pela chuva.","I got caught in the rain.","雨|に|降られました。","あめにふられました。","ame ni furaremashita","我|被|雨|淋|了。","wǒ bèi yǔ lín le"],
    ], nota: {
      en: "be + particípio: was built, was stolen, is read. Quem fez vem com by: by my boss.",
      jp: "Passiva: 〜られる / 〜れる. 建てる → 建てられる, 盗む → 盗まれる, 読む → 読まれる.\nO japonês usa a passiva para dizer que algo ruim ACONTECEU COM VOCÊ, mesmo com verbos sem objeto: 雨に降られた = \"a chuva caiu em mim\" (e me atrapalhou).",
      zh: "被 bèi marca a passiva e costuma indicar algo ruim ou fora de controle: 手机被偷了. Para fatos neutros o chinês prefere 是…的 ou a voz ativa."
    } },
    { titulo: "Discurso indireto", itens: [
      ["Ele disse que viria amanhã.","He said he would come tomorrow.","彼|は|明日|来る|と|言いました。","かれはあしたくるといいました。","kare wa ashita kuru to iimashita","他|说|他|明天|会|来。","tā shuō tā míngtiān huì lái"],
      ["Ouvi dizer que ela vai se casar.","I heard she's getting married.","彼女|は|結婚|する|そう|です。","かのじょはけっこんするそうです。","kanojo wa kekkon suru sō desu","听说|她|要|结婚|了。","tīngshuō tā yào jiéhūn le"],
      ["Ela me perguntou se eu estava bem.","She asked me if I was okay.","彼女|は|私|に|大丈夫|か|と|聞きました。","かのじょはわたしにだいじょうぶかとききました。","kanojo wa watashi ni daijōbu ka to kikimashita","她|问|我|好|不|好。","tā wèn wǒ hǎo bu hǎo"],
      ["Não sei se ele vem.","I don't know if he's coming.","彼|が|来る|か|どう|か|分かりません。","かれがくるかどうかわかりません。","kare ga kuru ka dō ka wakarimasen","我|不|知道|他|来|不|来。","wǒ bù zhīdào tā lái bu lái"],
      ["Me disseram para esperar aqui.","They told me to wait here.","ここ|で|待つ|ように|言われました。","ここでまつようにいわれました。","koko de matsu yō ni iwaremashita","他们|让|我|在|这里|等。","tāmen ràng wǒ zài zhèlǐ děng"],
    ], nota: {
      en: "No discurso indireto o tempo recua: \"I will come\" → He said he would come. \"Are you okay?\" → She asked if I was okay. Ordens: told me to + verbo.",
      jp: "と言う / と聞く citam o que foi dito, em forma simples. そうです depois da forma simples = \"ouvi dizer que\". かどうか = \"se… ou não\".",
      zh: "O chinês não muda o tempo verbal. 听说 = ouvi dizer. Pergunta indireta com verbo + 不 + verbo: 来不来 (se vem ou não)."
    } },
    { titulo: "Hipóteses", itens: [
      ["Se eu fosse rico, viajaria pelo mundo.","If I were rich, I would travel around the world.","お金持ち|だったら、|世界中|を|旅行|する|のに。","おかねもちだったら、せかいじゅうをりょこうするのに。","okanemochi dattara, sekaijū o ryokō suru noni","如果|我|有钱，|我|就|去|环游|世界。","rúguǒ wǒ yǒu qián, wǒ jiù qù huányóu shìjiè"],
      ["Se eu tivesse estudado, teria passado.","If I had studied, I would have passed.","勉強|して|いたら、|合格|できた|のに。","べんきょうしていたら、ごうかくできたのに。","benkyō shite itara, gōkaku dekita noni","要是|我|学习|了，|就|能|通过|了。","yàoshi wǒ xuéxí le, jiù néng tōngguò le"],
      ["Queria saber falar chinês.","I wish I could speak Chinese.","中国語|が|話せたら|いい|のに。","ちゅうごくごがはなせたらいいのに。","chūgokugo ga hanasetara ii noni","要是|我|会|说|中文|就|好|了。","yàoshi wǒ huì shuō Zhōngwén jiù hǎo le"],
      ["No seu lugar, eu aceitaria.","If I were you, I would accept.","私|だったら、|受け入れます。","わたしだったら、うけいれます。","watashi dattara, ukeiremasu","如果|我|是|你，|我|会|接受。","rúguǒ wǒ shì nǐ, wǒ huì jiēshòu"],
      ["E se não der certo?","What if it doesn't work out?","もし|うまく|いかなかったら|どう|する？","もしうまくいかなかったらどうする？","moshi umaku ikanakattara dō suru","万一|不|成功|怎么办？","wànyī bù chénggōng zěnme bàn"],
    ], nota: {
      en: "Irreal no presente: If + passado, would + verbo (If I were rich, I would…). No passado: If + had + particípio, would have + particípio. Desejo: I wish I could….",
      jp: "〜のに no fim expressa pena, \"mas não é assim\": 旅行するのに (eu viajaria… pena que não). もし reforça o \"se\".",
      zh: "要是 yàoshi é o \"se\" da fala. …就好了 = \"seria bom se…\" (desejo). 万一 = e se, por acaso (algo ruim)."
    } },
    { titulo: "Reunião de trabalho", itens: [
      ["Vamos começar a reunião.","Let's start the meeting.","会議|を|始めましょう。","かいぎをはじめましょう。","kaigi o hajimemashō","我们|开始|开会|吧。","wǒmen kāishǐ kāihuì ba"],
      ["Qual é o prazo?","What's the deadline?","締め切り|は|いつ|です|か。","しめきりはいつですか。","shimekiri wa itsu desu ka","截止|日期|是|什么|时候？","jiézhǐ rìqī shì shénme shíhou"],
      ["Vou enviar os detalhes por e-mail.","I'll send the details by email.","詳細|は|メール|で|送ります。","しょうさいはメールでおくります。","shōsai wa mēru de okurimasu","我|会|用|邮件|发|详细|信息。","wǒ huì yòng yóujiàn fā xiángxì xìnxī"],
      ["Posso fazer uma pergunta?","May I ask a question?","質問|して|も|よろしい|でしょう|か。","しつもんしてもよろしいでしょうか。","shitsumon shite mo yoroshii deshō ka","我|可以|问|一个|问题|吗？","wǒ kěyǐ wèn yí ge wèntí ma"],
      ["Vamos marcar outra reunião.","Let's schedule another meeting.","また|打ち合わせ|を|設定|しましょう。","またうちあわせをせっていしましょう。","mata uchiawase o settei shimashō","我们|再|约|一|次|会议|吧。","wǒmen zài yuē yí cì huìyì ba"],
    ], nota: {
      jp: "〜ましょう = vamos (fazer). よろしいでしょうか é a versão bem educada de いいですか. 打ち合わせ é a reunião do dia a dia; 会議 é a reunião formal.",
      zh: "开会 kāihuì = fazer reunião (verbo). 约 yuē = marcar (encontro, horário)."
    } },
    { titulo: "Conectivos de argumento", itens: [
      ["além disso","moreover","さらに","さらに","sara ni","而且","érqiě"],
      ["no entanto","however","しかし","しかし","shikashi","然而","rán'ér"],
      ["portanto","therefore","したがって","したがって","shitagatte","因此","yīncǐ"],
      ["por exemplo","for example","例えば","たとえば","tatoeba","比如","bǐrú"],
      ["por outro lado","on the other hand","一方で","いっぽうで","ippō de","另一方面","lìng yì fāngmiàn"],
    ], nota: { en: "however, therefore e moreover começam a frase e levam vírgula: However, it's expensive." } },
    { titulo: "Debater", itens: [
      ["Entendo seu ponto, mas discordo.","I see your point, but I disagree.","おっしゃる|こと|は|分かります|が、|賛成|できません。","おっしゃることはわかりますが、さんせいできません。","ossharu koto wa wakarimasu ga, sansei dekimasen","我|明白|你|的|意思，|但是|我|不|同意。","wǒ míngbai nǐ de yìsi, dànshì wǒ bù tóngyì"],
      ["Há vantagens e desvantagens.","There are advantages and disadvantages.","メリット|と|デメリット|が|あります。","メリットとデメリットがあります。","meritto to demeritto ga arimasu","有|优点|也|有|缺点。","yǒu yōudiǎn yě yǒu quēdiǎn"],
      ["Por exemplo, o transporte público é mais barato.","For example, public transportation is cheaper.","例えば、|公共交通機関|の|ほう|が|安い|です。","たとえば、こうきょうこうつうきかんのほうがやすいです。","tatoeba, kōkyō kōtsū kikan no hō ga yasui desu","比如，|公共|交通|更|便宜。","bǐrú, gōnggòng jiāotōng gèng piányi"],
      ["Não tenho certeza, mas acho que sim.","I'm not sure, but I think so.","確か|では|ありません|が、|そう|思います。","たしかではありませんが、そうおもいます。","tashika de wa arimasen ga, sō omoimasu","我|不|确定，|但|我|觉得|是。","wǒ bú quèdìng, dàn wǒ juéde shì"],
      ["Isso depende do ponto de vista.","That depends on your point of view.","それ|は|見方|に|よります。","それはみかたによります。","sore wa mikata ni yorimasu","这|取决于|你|的|角度。","zhè qǔjuéyú nǐ de jiǎodù"],
    ], nota: {
      jp: "が no meio da frase = \"mas\", mais suave que でも. おっしゃる é o verbo \"dizer\" respeitoso (keigo).",
      zh: "更 gèng = ainda mais (comparação sem 比). 取决于 = depende de."
    } },
    { titulo: "Notícias e sociedade", itens: [
      ["A temperatura sobe a cada ano.","The temperature is rising every year.","気温|が|年々|上がって|います。","きおんがねんねんあがっています。","kion ga nennen agatte imasu","气温|每年|都|在|上升。","qìwēn měinián dōu zài shàngshēng"],
      ["Precisamos reduzir o lixo.","We need to reduce waste.","ごみ|を|減らす|必要|が|あります。","ごみをへらすひつようがあります。","gomi o herasu hitsuyō ga arimasu","我们|需要|减少|垃圾。","wǒmen xūyào jiǎnshǎo lājī"],
      ["Segundo a notícia, a economia está melhorando.","According to the news, the economy is improving.","ニュース|に|よると、|経済|は|良く|なって|いる|そう|です。","ニュースによると、けいざいはよくなっているそうです。","nyūsu ni yoru to, keizai wa yoku natte iru sō desu","据|新闻|报道，|经济|正在|好转。","jù xīnwén bàodào, jīngjì zhèngzài hǎozhuǎn"],
      ["O governo anunciou uma nova lei.","The government announced a new law.","政府|は|新しい|法律|を|発表|しました。","せいふはあたらしいほうりつをはっぴょうしました。","seifu wa atarashii hōritsu o happyō shimashita","政府|宣布|了|一|项|新|法律。","zhèngfǔ xuānbù le yí xiàng xīn fǎlǜ"],
      ["Cada vez mais pessoas trabalham de casa.","More and more people work from home.","在宅|で|働く|人|が|増えて|います。","ざいたくではたらくひとがふえています。","zaitaku de hataraku hito ga fuete imasu","越来越|多|的|人|在|家|工作。","yuè lái yuè duō de rén zài jiā gōngzuò"],
    ], nota: {
      en: "according to = segundo. more and more = cada vez mais.",
      jp: "〜によると…そうです = segundo…, dizem que…. 〜必要があります = é necessário.",
      zh: "越来越 + adjetivo = cada vez mais. 据…报道 = segundo a reportagem de…."
    } },
    { titulo: "Sentimentos com nuance", itens: [
      ["Estou ansioso pela viagem.","I'm looking forward to the trip.","旅行|を|楽しみ|に|して|います。","りょこうをたのしみにしています。","ryokō o tanoshimi ni shite imasu","我|很|期待|这次|旅行。","wǒ hěn qīdài zhè cì lǚxíng"],
      ["Que pena!","What a shame!","残念|です|ね。","ざんねんですね。","zannen desu ne","太|可惜|了！","tài kěxī le"],
      ["Que alívio.","What a relief.","ほっと|しました。","ほっとしました。","hotto shimashita","我|松|了|一口|气。","wǒ sōng le yì kǒu qì"],
      ["Estou com saudade de casa.","I miss home.","家|が|恋しい|です。","いえがこいしいです。","ie ga koishii desu","我|想|家|了。","wǒ xiǎng jiā le"],
      ["Não aguento mais.","I can't take it anymore.","もう|我慢|できません。","もうがまんできません。","mō gaman dekimasen","我|受不了|了。","wǒ shòu bu liǎo le"],
    ], nota: {
      en: "look forward to + -ing / substantivo: I'm looking forward to seeing you. \"Saudade\" não tem tradução exata: I miss you / I miss home.",
      jp: "楽しみにしています é a despedida educada padrão: お会いするのを楽しみにしています (aguardo ansioso o nosso encontro).",
      zh: "想 também é sentir falta: 我想你 (sinto sua falta). 受不了 = não suportar."
    } },
    { titulo: "Tornar-se", itens: [
      ["Meu japonês melhorou.","My Japanese got better.","日本語|が|上手|に|なりました。","にほんごがじょうずになりました。","nihongo ga jōzu ni narimashita","我|的|日语|变|好|了。","wǒ de Rìyǔ biàn hǎo le"],
      ["Quero ser médico.","I want to become a doctor.","医者|に|なりたい|です。","いしゃになりたいです。","isha ni naritai desu","我|想|当|医生。","wǒ xiǎng dāng yīshēng"],
      ["De repente esfriou.","It suddenly got cold.","急に|寒く|なりました。","きゅうにさむくなりました。","kyū ni samuku narimashita","突然|变|冷|了。","tūrán biàn lěng le"],
      ["Passei a gostar de café.","I've come to like coffee.","コーヒー|が|好き|に|なりました。","コーヒーがすきになりました。","kōhī ga suki ni narimashita","我|开始|喜欢|咖啡|了。","wǒ kāishǐ xǐhuan kāfēi le"],
      ["Me acostumei com a vida aqui.","I got used to life here.","ここ|の|生活|に|慣れました。","ここのせいかつになれました。","koko no seikatsu ni naremashita","我|习惯|了|这里|的|生活。","wǒ xíguàn le zhèlǐ de shēnghuó"],
    ], nota: {
      en: "get + adjetivo = ficar (got better, got cold). become = tornar-se. get used to = acostumar-se.",
      jp: "なる = tornar-se. Adjetivo い → く + なる (寒くなる). Adjetivo な e substantivo → に + なる (上手になる, 医者になる).",
      zh: "变 biàn + adjetivo + 了 = ficou. 当 dāng + profissão = trabalhar como / virar. 了 no fim marca a mudança de situação."
    } },
    { titulo: "Frases com duas partes", itens: [
      ["Quanto mais pratico, melhor fico.","The more I practice, the better I get.","練習|すれば|する|ほど|上手|に|なります。","れんしゅうすればするほどじょうずになります。","renshū sureba suru hodo jōzu ni narimasu","我|越|练习|越|好。","wǒ yuè liànxí yuè hǎo"],
      ["Escuto música enquanto estudo.","I listen to music while I study.","音楽|を|聞き|ながら|勉強|します。","おんがくをききながらべんきょうします。","ongaku o kikinagara benkyō shimasu","我|一边|听|音乐|一边|学习。","wǒ yìbiān tīng yīnyuè yìbiān xuéxí"],
      ["Mesmo cansado, fui trabalhar.","Even though I was tired, I went to work.","疲れて|いた|けど、|仕事|に|行きました。","つかれていたけど、しごとにいきました。","tsukarete ita kedo, shigoto ni ikimashita","虽然|很|累，|但|我|还是|去|上班|了。","suīrán hěn lèi, dàn wǒ háishi qù shàngbān le"],
      ["Assim que cheguei, começou a chover.","As soon as I arrived, it started raining.","着いた|とたん、|雨|が|降り出しました。","ついたとたん、あめがふりだしました。","tsuita totan, ame ga furidashimashita","我|一|到，|就|下|起|雨|来|了。","wǒ yí dào, jiù xià qǐ yǔ lái le"],
      ["Não só é barato, como também é gostoso.","It's not only cheap, but also delicious.","安い|だけ|で|なく、|おいしい|です。","やすいだけでなく、おいしいです。","yasui dake de naku, oishii desu","不但|便宜，|而且|好吃。","búdàn piányi, érqiě hǎochī"],
    ], nota: {
      en: "The more… the better. while + -ing / while I study. Even though… (mesmo que). As soon as… Not only… but also….",
      jp: "〜ば〜ほど (quanto mais), 〜ながら (enquanto, mesmo sujeito), 〜けど (mas / embora), 〜たとたん (assim que), 〜だけでなく (não só).",
      zh: "Pares fixos: 越…越… (quanto mais), 一边…一边… (enquanto), 虽然…但是… (embora), 一…就… (assim que), 不但…而且… (não só… como também)."
    } },
    { titulo: "Abstratos II", itens: [
      ["responsabilidade","responsibility","責任","せきにん","sekinin","责任","zérèn"],
      ["oportunidade","opportunity","機会","きかい","kikai","机会","jīhuì"],
      ["objetivo, meta","goal","目標","もくひょう","mokuhyō","目标","mùbiāo"],
      ["solução","solution","解決策","かいけつさく","kaiketsusaku","解决办法","jiějué bànfǎ"],
      ["futuro","future","将来","しょうらい","shōrai","将来","jiānglái"],
    ] },
    { titulo: "E-mail formal", itens: [
      ["Prezado Sr. Tanaka,","Dear Mr. Tanaka,","田中様","たなかさま","Tanaka-sama","尊敬的|田中|先生：","zūnjìng de Tiánzhōng xiānsheng"],
      ["Obrigado pelo seu contato.","Thank you for contacting me.","ご連絡|ありがとう|ございます。","ごれんらくありがとうございます。","gorenraku arigatō gozaimasu","感谢|您|的|来信。","gǎnxiè nín de láixìn"],
      ["Segue o arquivo em anexo.","Please find the file attached.","ファイル|を|添付|いたします。","ファイルをてんぷいたします。","fairu o tenpu itashimasu","附件|是|相关|文件。","fùjiàn shì xiāngguān wénjiàn"],
      ["Aguardo sua resposta.","I look forward to your reply.","ご返信|を|お待ち|して|おります。","ごへんしんをおまちしております。","gohenshin o omachi shite orimasu","期待|您|的|回复。","qīdài nín de huífù"],
      ["Atenciosamente,","Best regards,","よろしく|お願い|いたします。","よろしくおねがいいたします。","yoroshiku onegai itashimasu","此致|敬礼","cǐzhì jìnglǐ"],
    ], nota: {
      en: "Dear + título + sobrenome. Final: Best regards / Kind regards. Evite contrações (I'm, don't) em e-mails formais.",
      jp: "様 sama é o título formal para clientes e desconhecidos. E-mails japoneses fecham quase sempre com よろしくお願いいたします.",
      zh: "尊敬的 + nome + 先生/女士 abre cartas formais. 此致敬礼 é o fecho tradicional de cartas."
    } },
  ]
});
