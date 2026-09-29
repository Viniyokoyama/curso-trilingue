// Formato de todos os arquivos data-*.js
// Nível: { id, nivel, descricao, unidades: [...] }
// Unidade: { titulo, itens, nota?: { en, jp, zh }, so?: "en" | "jp" | "zh", tipo?: "leitura" }
//   so      → a unidade só aparece na trilha dessa língua
//   leitura → exercício de ler símbolos (kana): o "significado" é a leitura em romaji
// Item: [português, inglês, japonês (escrita), japonês (kana), romaji, chinês (hanzi), pinyin]
//   Em frases, "|" separa os blocos do japonês e do chinês para o exercício de montar a frase.
//   O inglês é separado pelos espaços.
window.TRILHA = window.TRILHA || [];

(() => {
  const K = s => s.split(" ").map(p => { const [c, r] = p.split("="); return [r, "", c, c, r, "", ""]; });

  window.TRILHA.push({
    id: "fund",
    nivel: "Fundamentos",
    descricao: "Sons e escrita antes das palavras: hiragana e katakana no japonês, tons e pinyin no chinês, os sons que mais enganam no inglês.",
    unidades: [
      // ---------- Japonês: hiragana ----------
      { so: "jp", tipo: "leitura", titulo: "Hiragana: vogais", itens: K("あ=a い=i う=u え=e お=o"),
        nota: { jp: "O japonês usa três escritas juntas: hiragana (palavras japonesas e gramática), katakana (palavras estrangeiras) e kanji (caracteres que carregam o significado). Tudo começa pelo hiragana: cada símbolo tem sempre o mesmo som, sem exceção.\n\nAs 5 vogais são curtas e puras, como em português: a, i, u, e, o. O u é dito sem arredondar os lábios." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha K", itens: K("か=ka き=ki く=ku け=ke こ=ko"),
        nota: { jp: "Cada linha junta uma consoante com as 5 vogais, sempre na ordem a-i-u-e-o. Decore a ordem: ela é a do dicionário japonês." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha S", itens: K("さ=sa し=shi す=su せ=se そ=so"),
        nota: { jp: "Atenção: し é \"shi\", não \"si\". O som \"si\" não existe no japonês. O す no fim das palavras quase some: です soa como \"dess\"." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha T", itens: K("た=ta ち=chi つ=tsu て=te と=to"),
        nota: { jp: "Duas leituras irregulares: ち = \"chi\" (como tchi) e つ = \"tsu\". O て soa \"te\", nunca \"tchi\" como no português do Rio." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha N", itens: K("な=na に=ni ぬ=nu ね=ne の=no"),
        nota: { jp: "Linha regular. の é uma das palavras mais usadas do japonês: liga dois substantivos, como o \"de\" em \"livro do Vini\"." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha H", itens: K("は=ha ひ=hi ふ=fu へ=he ほ=ho"),
        nota: { jp: "ふ fica entre f e h: sopre sem encostar os dentes no lábio. O h é aspirado, como no inglês \"house\", nunca como o r de \"rato\".\n\nQuando は e へ são partículas (gramática), lêem-se \"wa\" e \"e\". Você vai ver isso já nas primeiras frases." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha M", itens: K("ま=ma み=mi む=mu め=me も=mo") },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: Y e W", itens: [...K("や=ya ゆ=yu よ=yo わ=wa"), ["o (wo)", "", "を", "を", "o", "", ""]],
        nota: { jp: "A linha Y só tem 3 sons (ya, yu, yo). を só aparece como partícula de objeto. No romaji às vezes aparece como \"wo\", mas hoje se pronuncia igual a お: \"o\"." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: linha R", itens: K("ら=ra り=ri る=ru れ=re ろ=ro"),
        nota: { jp: "O r japonês é sempre um toque leve da língua, como o r de \"caro\" ou \"para\". Nunca o r forte de \"rato\"." } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: ん e sons com ゛", itens: K("ん=n が=ga ざ=za だ=da ば=ba"),
        nota: { jp: "ん é o único som que é só consoante.\n\nOs dois risquinhos ゛(dakuten) deixam o som \"sonoro\": k→g, s→z, t→d, h→b. Então か ka → が ga, さ sa → ざ za, た ta → だ da, は ha → ば ba. Vale para a linha inteira: ぎ gi, ず zu, で de, ぼ bo…" } },
      { so: "jp", tipo: "leitura", titulo: "Hiragana: combinações", itens: K("ぱ=pa きゃ=kya しゅ=shu ちょ=cho りょ=ryo"),
        nota: { jp: "A bolinha ゜(handakuten) transforma h em p: は ha → ぱ pa.\n\nUm や, ゆ, よ pequeno depois de uma sílaba com i forma um som só: き ki + ゃ = きゃ kya.\n\nUm っ pequeno dobra a consoante seguinte, com uma pausa curta: きって kitte (selo)." } },
      { so: "jp", titulo: "Primeiras palavras em hiragana", itens: [
        ["gato", "cat", "ねこ", "ねこ", "neko", "", ""],
        ["cachorro", "dog", "いぬ", "いぬ", "inu", "", ""],
        ["cerejeira", "cherry blossom", "さくら", "さくら", "sakura", "", ""],
        ["sushi", "sushi", "すし", "すし", "sushi", "", ""],
        ["rosto", "face", "かお", "かお", "kao", "", ""],
      ], nota: { jp: "Hora de ler palavras inteiras. Leia sílaba por sílaba em voz alta e depois junte. Toque no 🔊 para comparar." } },

      // ---------- Japonês: katakana ----------
      { so: "jp", tipo: "leitura", titulo: "Katakana: vogais", itens: K("ア=a イ=i ウ=u エ=e オ=o"),
        nota: { jp: "O katakana tem os mesmos sons do hiragana, com traços retos. Serve para palavras estrangeiras (コーヒー kōhī, café), nomes de fora (ブラジル Burajiru, Brasil) e ênfase." } },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha K", itens: K("カ=ka キ=ki ク=ku ケ=ke コ=ko") },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha S", itens: K("サ=sa シ=shi ス=su セ=se ソ=so"),
        nota: { jp: "Cuidado com シ shi e ツ tsu (próxima unidade): em シ os traços curtos são quase horizontais e o longo sobe de baixo. Em ツ os traços curtos ficam em pé e o longo desce de cima." } },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha T", itens: K("タ=ta チ=chi ツ=tsu テ=te ト=to") },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha N", itens: K("ナ=na ニ=ni ヌ=nu ネ=ne ノ=no") },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha H", itens: K("ハ=ha ヒ=hi フ=fu ヘ=he ホ=ho"),
        nota: { jp: "ヘ katakana e へ hiragana são praticamente iguais." } },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha M", itens: K("マ=ma ミ=mi ム=mu メ=me モ=mo") },
      { so: "jp", tipo: "leitura", titulo: "Katakana: Y, W e ン", itens: K("ヤ=ya ユ=yu ヨ=yo ワ=wa ン=n"),
        nota: { jp: "Mesma confusão de シ/ツ acontece com ン n e ソ so: em ン o traço longo sobe de baixo, em ソ desce de cima." } },
      { so: "jp", tipo: "leitura", titulo: "Katakana: linha R", itens: K("ラ=ra リ=ri ル=ru レ=re ロ=ro") },
      { so: "jp", titulo: "Palavras em katakana", itens: [
        ["café", "coffee", "コーヒー", "コーヒー", "kōhī", "", ""],
        ["televisão", "television", "テレビ", "テレビ", "terebi", "", ""],
        ["câmera", "camera", "カメラ", "カメラ", "kamera", "", ""],
        ["pão", "bread", "パン", "パン", "pan", "", ""],
        ["sorvete", "ice cream", "アイスクリーム", "アイスクリーム", "aisukurīmu", "", ""],
      ], nota: { jp: "O traço ー alonga a vogal anterior: コーヒー é ko-o-hi-i. No romaji isso aparece como ō, ī. Os sinais ゛ e ゜ funcionam igual ao hiragana: パ pa, ビ bi." } },

      // ---------- Chinês: tons e pinyin ----------
      { so: "zh", titulo: "Os 4 tons", itens: [
        ["mãe", "mother", "", "", "", "妈", "mā"],
        ["cânhamo", "hemp", "", "", "", "麻", "má"],
        ["cavalo", "horse", "", "", "", "马", "mǎ"],
        ["xingar", "to scold", "", "", "", "骂", "mà"],
        ["partícula de pergunta", "question particle", "", "", "", "吗", "ma"],
      ], nota: { zh: "No mandarim, a mesma sílaba muda de significado conforme o tom. Tente imitar cada um:\n\n1º tom (mā): alto e reto, como cantar uma nota longa.\n2º tom (má): sobe, como \"hein?\".\n3º tom (mǎ): desce baixo e sobe um pouco, como \"hmmm\" de dúvida.\n4º tom (mà): cai forte e rápido, como uma ordem: \"Para!\".\nTom neutro (ma): curto e leve, sem marca.\n\nO pinyin é a escrita do som com letras latinas. A marca em cima da vogal indica o tom." } },
      { so: "zh", titulo: "Tons em palavras", itens: [
        ["olá", "hello", "", "", "", "你好", "nǐ hǎo"],
        ["obrigado", "thank you", "", "", "", "谢谢", "xièxie"],
        ["China", "China", "", "", "", "中国", "Zhōngguó"],
        ["estudante", "student", "", "", "", "学生", "xuésheng"],
        ["professor", "teacher", "", "", "", "老师", "lǎoshī"],
      ], nota: { zh: "Regra mais importante de mudança de tom: dois 3º tons seguidos → o primeiro vira 2º. Escreve-se nǐ hǎo, mas fala-se \"ní hǎo\".\n\nNo 谢谢 xièxie a segunda sílaba fica neutra, curta." } },
      { so: "zh", titulo: "zh, ch, sh, r", itens: [
        ["meio, centro", "middle", "", "", "", "中", "zhōng"],
        ["comer", "eat", "", "", "", "吃", "chī"],
        ["ser", "to be", "", "", "", "是", "shì"],
        ["pessoa", "person", "", "", "", "人", "rén"],
        ["quente", "hot", "", "", "", "热", "rè"],
      ], nota: { zh: "Sons retroflexos: a ponta da língua sobe e se curva para trás, perto do céu da boca.\n\nzh ≈ \"dj\" com a língua curvada. ch ≈ \"tch\" com ar. sh ≈ \"x\" de \"xícara\" com a língua curvada. r fica entre o r inglês e o j de \"já\".\n\nDepois de zh, ch, sh e r, o i não é \"i\": é só um zumbido da consoante (shì ≈ \"shr\")." } },
      { so: "zh", titulo: "j, q, x", itens: [
        ["casa, família", "home, family", "", "", "", "家", "jiā"],
        ["ir", "go", "", "", "", "去", "qù"],
        ["pequeno", "small", "", "", "", "小", "xiǎo"],
        ["nove", "nine", "", "", "", "九", "jiǔ"],
        ["por favor, convidar", "please, invite", "", "", "", "请", "qǐng"],
      ], nota: { zh: "Sons palatais, com a língua reta encostada atrás dos dentes de baixo e o sorriso aberto.\n\nj ≈ \"dj\" suave. q ≈ \"tch\" com bastante ar (nunca \"k\"!). x ≈ \"x\" sorrindo, entre \"s\" e \"x\".\n\nDepois de j, q, x, o u é na verdade ü: qù soa \"tchü\"." } },
      { so: "zh", titulo: "z, c, s e ü", itens: [
        ["caractere", "character", "", "", "", "字", "zì"],
        ["prato (comida), verdura", "dish, vegetable", "", "", "", "菜", "cài"],
        ["quatro", "four", "", "", "", "四", "sì"],
        ["mulher", "woman", "", "", "", "女", "nǚ"],
        ["verde", "green", "", "", "", "绿", "lǜ"],
      ], nota: { zh: "z ≈ \"dz\". c ≈ \"ts\" com bastante ar (nunca \"k\" nem \"s\"). s = \"s\".\n\nü: faça biquinho de \"u\" e diga \"i\". Aparece com os dois pontinhos só depois de n e l (nǚ, lǜ)." } },
      { so: "zh", titulo: "不 e 一 mudam de tom", itens: [
        ["não está certo", "not right", "", "", "", "不对", "bú duì"],
        ["ruim (não bom)", "not good", "", "", "", "不好", "bù hǎo"],
        ["um (de algo)", "one (of something)", "", "", "", "一个", "yí ge"],
        ["junto", "together", "", "", "", "一起", "yìqǐ"],
        ["um dia", "one day", "", "", "", "一天", "yì tiān"],
      ], nota: { zh: "不 bù vira bú antes de 4º tom: 不对 bú duì, 不是 bú shì.\n\n一 yī vira yí antes de 4º tom (一个 yí ge) e yì antes dos outros tons (一起 yìqǐ, 一天 yì tiān). Sozinho ou contando (一、二、三) fica yī." } },

      // ---------- Inglês: sons ----------
      { so: "en", titulo: "O som do TH", itens: [
        ["pensar", "think", "", "", "", "", ""],
        ["três", "three", "", "", "", "", ""],
        ["obrigado", "thank you", "", "", "", "", ""],
        ["isto", "this", "", "", "", "", ""],
        ["aquilo", "that", "", "", "", "", ""],
      ], nota: { en: "O TH não existe em português. Ponha a ponta da língua entre os dentes e sopre.\n\nTH surdo (só ar): think, three, thank. Não é \"t\" nem \"f\".\nTH sonoro (com vibração, como um \"d\" soprado): this, that, the, mother." } },
      { so: "en", titulo: "Vogais curtas e longas", itens: [
        ["navio", "ship", "", "", "", "", ""],
        ["ovelha", "sheep", "", "", "", "", ""],
        ["sentar", "sit", "", "", "", "", ""],
        ["assento", "seat", "", "", "", "", ""],
        ["cheio", "full", "", "", "", "", ""],
      ], nota: { en: "Em inglês, a duração e a abertura da vogal mudam a palavra.\n\ni curto (ship, sit): relaxado, quase um \"ê\" fechado e rápido.\ni longo (sheep, seat): \"iii\" esticado, com sorriso.\n\nO mesmo vale para full (u curto) × fool (u longo)." } },
      { so: "en", titulo: "Final -ed", itens: [
        ["trabalhou", "worked", "", "", "", "", ""],
        ["jogou", "played", "", "", "", "", ""],
        ["quis", "wanted", "", "", "", "", ""],
        ["precisou", "needed", "", "", "", "", ""],
        ["assistiu", "watched", "", "", "", "", ""],
      ], nota: { en: "O -ed do passado tem 3 sons e quase nunca é \"ed\":\n\n/t/ depois de sons surdos (k, p, s, ch, sh, f): worked = \"workt\", watched = \"watcht\".\n/d/ depois de sons sonoros e vogais: played = \"playd\".\n/id/ só depois de t ou d: wanted, needed." } },
      { so: "en", titulo: "Consoantes finais e o H", itens: [
        ["quente", "hot", "", "", "", "", ""],
        ["chapéu", "hat", "", "", "", "", ""],
        ["xícara", "cup", "", "", "", "", ""],
        ["grande", "big", "", "", "", "", ""],
        ["casa", "house", "", "", "", "", ""],
      ], nota: { en: "Dois hábitos do português para abandonar:\n\n1. Não acrescente \"i\" no fim: big, não \"bigui\". cup, não \"cupi\". A palavra termina seca na consoante.\n2. O H inicial é só um sopro (hot, house, hat). Não é o \"r\" de \"rato\" e não é mudo." } },
      { so: "en", titulo: "Letras mudas", itens: [
        ["faca", "knife", "", "", "", "", ""],
        ["escrever", "write", "", "", "", "", ""],
        ["ilha", "island", "", "", "", "", ""],
        ["hora", "hour", "", "", "", "", ""],
        ["quarta-feira", "Wednesday", "", "", "", "", ""],
      ], nota: { en: "Em inglês, a escrita nem sempre bate com o som. Estas letras não são pronunciadas: o k de knife (\"naif\"), o w de write (\"rait\"), o s de island (\"ailand\"), o h de hour (\"auer\") e o primeiro d de Wednesday (\"uensdei\").\n\nSempre toque no 🔊 antes de confiar na leitura." } },
    ]
  });
})();
