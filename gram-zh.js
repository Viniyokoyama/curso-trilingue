// Aulas de gramática — chinês (mandarim). Formato descrito em gram-en.js.
// Exemplos: [frase em hanzi, pinyin, tradução]
window.GRAMATICA = window.GRAMATICA || {};
window.GRAMATICA.zh = {
  fund: [
    {
      titulo: "Tons: a melodia que muda o significado",
      objetivo: "Ouvir e produzir os 4 tons e o tom neutro, e aplicar as mudanças de tom mais comuns.",
      secoes: [
        { t: "Por que os tons importam", texto: "No mandarim, cada sílaba tem uma melodia fixa. Trocar o tom é trocar a palavra, assim como trocar uma vogal em português (pato × peto). mā (mãe) e mǎ (cavalo) são palavras diferentes.",
          exemplos: [["妈", "mā", "mãe"], ["麻", "má", "cânhamo"], ["马", "mǎ", "cavalo"], ["骂", "mà", "xingar"]] },
        { t: "Os 4 tons + neutro", texto: "Imagine sua voz numa escala de 1 (grave) a 5 (agudo).",
          tabela: [["Tom", "Marca", "Curva", "Como pensar"], ["1º", "ā", "5→5", "nota alta e reta, cantando"], ["2º", "á", "3→5", "sobe, como \"hein?\""], ["3º", "ǎ", "2→1→4", "desce grave (quase sempre só desce)"], ["4º", "à", "5→1", "cai forte, como uma ordem"], ["neutro", "a", "curto", "leve e rápido"]] },
        { t: "Regra 1: dois 3º tons seguidos", texto: "O primeiro vira 2º tom. A escrita não muda, só a fala.",
          exemplos: [["你好", "nǐ hǎo → ní hǎo", "olá"], ["很好", "hěn hǎo → hén hǎo", "muito bem"]] },
        { t: "Regra 2: 不 e 一", texto: "不 bù vira bú antes de 4º tom. 一 yī vira yí antes de 4º tom e yì antes dos outros. (Neste curso o pinyin já vem com a mudança aplicada.)",
          exemplos: [["不是", "bú shì", "não é"], ["一个", "yí ge", "um (objeto)"], ["一起", "yìqǐ", "junto"]] },
      ],
      erros: ["Falar tudo no mesmo tom, como em português.", "Exagerar o 3º tom completo em toda frase: no meio da fala ele só desce.", "Ignorar o tom e se preocupar só com as consoantes."],
      pratica: [
        { p: "Como se fala 你好 de verdade?", r: "ní hǎo (3º + 3º → 2º + 3º)." },
        { p: "不 antes de 去 (qù) fica como?", r: "bú qù (qù é 4º tom)." },
        { p: "一 antes de 天 (tiān) fica como?", r: "yì tiān." },
      ],
    },
    {
      titulo: "Caracteres: como são montados",
      objetivo: "Entender radicais e componentes para memorizar caracteres com mais facilidade.",
      secoes: [
        { t: "Não é um desenho aleatório", texto: "A maioria dos caracteres tem duas partes: um RADICAL que dá a pista do significado e um componente que dá a pista do SOM.\n妈 (mā, mãe) = 女 (mulher, significado) + 马 (mǎ, som).",
          exemplos: [["妈", "mā", "mãe = 女 mulher + 马 som ma"], ["吗", "ma", "partícula = 口 boca + 马 som ma"]] },
        { t: "Radicais que valem ouro", texto: "Aprenda estes e você vai reconhecer o tema de centenas de caracteres.",
          tabela: [["Radical", "Sentido", "Exemplos"], ["氵", "água", "河 rio, 海 mar, 洗 lavar"], ["口", "boca", "吃 comer, 喝 beber, 叫 chamar"], ["亻", "pessoa", "你 você, 他 ele, 住 morar"], ["讠", "fala", "说 falar, 语 língua, 请 pedir"], ["扌", "mão", "打 bater, 找 procurar, 拿 pegar"], ["木", "árvore", "树 árvore, 林 bosque"]] },
        { t: "Simplificado × tradicional", texto: "A China continental usa os caracteres simplificados (este curso). Taiwan e Hong Kong usam os tradicionais: 说/說, 书/書. Quem aprende um lê o outro com algum treino." },
      ],
      erros: ["Tentar decorar caracteres como desenhos inteiros, sem ver as partes.", "Achar que o componente de som dá sempre o som exato: ele dá uma pista, às vezes com outro tom."],
      pratica: [
        { p: "Qual o radical de 喝 (beber) e por que faz sentido?", r: "口 (boca): bebe-se com a boca." },
        { p: "O que 氵 indica em 洗 (lavar)?", r: "Água." },
      ],
    },
  ],
  a1: [
    {
      titulo: "A frase básica: sujeito + verbo + objeto",
      objetivo: "Montar frases com a ordem do português e entender por que o chinês é \"fácil\" nisso.",
      secoes: [
        { t: "Mesma ordem do português", texto: "Sujeito – verbo – objeto, como em português. E a melhor notícia: o verbo NUNCA muda. Não há conjugação por pessoa nem por tempo.",
          exemplos: [["我吃米饭。", "wǒ chī mǐfàn", "Eu como arroz."], ["他吃米饭。", "tā chī mǐfàn", "Ele come arroz."], ["我们吃米饭。", "wǒmen chī mǐfàn", "Nós comemos arroz."]] },
        { t: "Pronomes e plural", texto: "我 eu, 你 você, 他 ele, 她 ela, 它 isso (coisa/animal). Plural: acrescente 们 (我们, 你们, 他们). Forma respeitosa: 您.",
          tabela: [["Singular", "Plural"], ["我 wǒ", "我们 wǒmen"], ["你 nǐ", "你们 nǐmen"], ["他 / 她 tā", "他们 / 她们 tāmen"]] },
        { t: "Tempo antes do verbo", texto: "Como o verbo não muda, a palavra de tempo (hoje, amanhã, às 7) resolve. Ela vem antes do verbo: depois do sujeito ou no começo.",
          exemplos: [["我明天去北京。", "wǒ míngtiān qù Běijīng", "Amanhã vou a Pequim."], ["明天我去北京。", "míngtiān wǒ qù Běijīng", "Amanhã vou a Pequim."]] },
        { t: "Negação com 不", texto: "不 bù antes do verbo nega o presente e o futuro (e hábitos).",
          exemplos: [["我不喝咖啡。", "wǒ bù hē kāfēi", "Não tomo café."]] },
      ],
      erros: ["Colocar o tempo no fim como em português: 我去北京明天 soa errado.", "Tentar conjugar: não existe \"他吃了是\" para ele come."],
      pratica: [
        { p: "Traduza: \"Ela não come carne.\"", r: "她不吃肉。(tā bù chī ròu)" },
        { p: "Traduza: \"Hoje nós vamos à escola.\"", r: "今天我们去学校。/ 我们今天去学校。" },
      ],
    },
    {
      titulo: "是, 很 e 在: ser, estar e ficar",
      objetivo: "Não confundir as três formas de \"ser/estar\" que o português junta.",
      secoes: [
        { t: "是: ser + substantivo", texto: "是 liga duas coisas iguais: X é Y (profissão, nacionalidade, identidade). Negativo: 不是.",
          exemplos: [["我是学生。", "wǒ shì xuésheng", "Sou estudante."], ["他不是老师。", "tā bú shì lǎoshī", "Ele não é professor."]] },
        { t: "很 + adjetivo (sem 是!)", texto: "Com adjetivos o chinês NÃO usa 是. Usa 很 hěn, que aqui quase não significa \"muito\": é uma ponte. Sem 很 a frase soa como comparação.",
          exemplos: [["她很高。", "tā hěn gāo", "Ela é alta."], ["今天很热。", "jīntiān hěn rè", "Hoje está quente."], ["我不忙。", "wǒ bù máng", "Não estou ocupado. (na negativa, sem 很)"]] },
        { t: "在: estar em (lugar)", texto: "Para localização use 在 zài: X 在 lugar.",
          exemplos: [["我在家。", "wǒ zài jiā", "Estou em casa."], ["书在桌子上。", "shū zài zhuōzi shang", "O livro está na mesa."]] },
      ],
      erros: ["\"我是很高\" → 我很高 (adjetivo sem 是).", "\"我是在家\" → 我在家.", "\"我很学生\" → 我是学生."],
      pratica: [
        { p: "Traduza: \"O chinês é difícil.\"", r: "中文很难。(Zhōngwén hěn nán)" },
        { p: "Traduza: \"Minha mãe está na empresa.\"", r: "我妈妈在公司。" },
        { p: "是, 很 ou 在? 他 ___ 巴西人.", r: "是 (substantivo)." },
      ],
    },
    {
      titulo: "Perguntas: 吗, palavras de pergunta e A-não-A",
      objetivo: "Fazer qualquer pergunta sem mudar a ordem da frase.",
      secoes: [
        { t: "Sim/não com 吗", texto: "Pegue uma afirmação e ponha 吗 no fim. Pronto.",
          exemplos: [["你是中国人吗？", "nǐ shì Zhōngguórén ma", "Você é chinês?"], ["你喝茶吗？", "nǐ hē chá ma", "Você toma chá?"]] },
        { t: "Palavras de pergunta ficam no lugar da resposta", texto: "O chinês não move a palavra de pergunta para o início. Ela fica exatamente onde a resposta estaria. E aí NÃO se usa 吗.",
          tabela: [["Pergunta", "Resposta"], ["你叫什么？ (Como você se chama?)", "我叫安娜。"], ["你去哪里？ (Aonde você vai?)", "我去学校。"], ["谁是老师？ (Quem é o professor?)", "他是老师。"]] },
        { t: "A-não-A", texto: "Repita o verbo com 不 no meio: 是不是, 去不去, 好不好. É uma pergunta de sim/não mais direta, também sem 吗.",
          exemplos: [["你去不去？", "nǐ qù bu qù", "Você vai ou não?"], ["好不好？", "hǎo bu hǎo", "Pode ser? / Tudo bem?"]] },
        { t: "Respondendo", texto: "Não existe um \"sim\" universal: repita o verbo. 你去吗？→ 去 (sim) / 不去 (não).",
          exemplos: [["你有时间吗？ — 有。", "nǐ yǒu shíjiān ma? — yǒu", "Você tem tempo? — Tenho."]] },
      ],
      erros: ["\"你去哪里吗？\" → sem 吗 quando já tem palavra de pergunta.", "Colocar a palavra de pergunta no começo: \"什么你吃？\" → 你吃什么？"],
      pratica: [
        { p: "Pergunte: \"O que é isto?\"", r: "这是什么？(zhè shì shénme)" },
        { p: "Transforme em A-não-A: 你喜欢吗？", r: "你喜不喜欢？(ou 你喜欢不喜欢？)" },
      ],
    },
    {
      titulo: "Números, classificadores e 的",
      objetivo: "Contar coisas corretamente e indicar posse.",
      secoes: [
        { t: "Classificadores: obrigatórios", texto: "Entre o número (ou 这/那) e o substantivo vem SEMPRE um classificador, como em \"três folhas de papel\". 个 ge é o genérico; na dúvida, use-o.",
          tabela: [["Classificador", "Para", "Exemplo"], ["个 ge", "geral, pessoas", "一个人 uma pessoa"], ["本 běn", "livros", "两本书 dois livros"], ["只 zhī", "animais", "三只猫 três gatos"], ["杯 bēi", "copos, xícaras", "一杯咖啡 um café"], ["辆 liàng", "veículos", "一辆车 um carro"], ["张 zhāng", "coisas planas", "一张纸 uma folha"]] },
        { t: "二 × 两", texto: "二 èr para contar e em números (二十, 第二). 两 liǎng antes de classificador: 两个人 (duas pessoas).",
          exemplos: [["两杯茶", "liǎng bēi chá", "dois chás"]] },
        { t: "的: posse e descrição", texto: "A 的 B = B de A. 我的书 = meu livro. Com família e pessoas próximas, o 的 costuma cair: 我妈妈, 我家.",
          exemplos: [["我的手机", "wǒ de shǒujī", "meu celular"], ["老师的书", "lǎoshī de shū", "o livro do professor"], ["我朋友", "wǒ péngyou", "meu amigo"]] },
      ],
      erros: ["\"三书\" → 三本书 (falta o classificador).", "\"二个人\" → 两个人.", "Colocar o dono depois: 书的我 = \"eu do livro\"."],
      pratica: [
        { p: "Diga: \"três gatos\"", r: "三只猫 (sān zhī māo)." },
        { p: "Diga: \"este livro\"", r: "这本书 (zhè běn shū)." },
      ],
    },
  ],
  a2: [
    {
      titulo: "了: ação concluída e mudança",
      objetivo: "Falar do passado sem conjugar e entender os dois usos de 了.",
      secoes: [
        { t: "了 depois do verbo: aconteceu", texto: "了 logo depois do verbo indica que a ação foi concluída. Não é exatamente \"passado\": é \"completo\".",
          exemplos: [["我吃了饭。", "wǒ chī le fàn", "Comi (a refeição)."], ["我买了两本书。", "wǒ mǎi le liǎng běn shū", "Comprei dois livros."]] },
        { t: "了 no fim: mudança de situação", texto: "了 no fim da frase indica que algo mudou, que agora é diferente.",
          exemplos: [["下雨了。", "xià yǔ le", "Começou a chover."], ["我饿了。", "wǒ è le", "Fiquei com fome."], ["他二十岁了。", "tā èrshí suì le", "Ele já tem 20 anos."]] },
        { t: "Negativa: 没, sem 了", texto: "Para dizer que algo NÃO aconteceu, use 没 (méi) antes do verbo e tire o 了. Nunca 不 para o passado.",
          exemplos: [["我没吃饭。", "wǒ méi chī fàn", "Não comi."], ["他没来。", "tā méi lái", "Ele não veio."]] },
        { t: "Pergunta", texto: "Acrescente 吗, ou use 没有 no fim.",
          exemplos: [["你吃了吗？", "nǐ chī le ma", "Você comeu?"], ["你吃了没有？", "nǐ chī le méiyǒu", "Você comeu ou não?"]] },
      ],
      erros: ["\"我没吃了\" → 我没吃 (sem 了 na negativa).", "\"我不去了昨天\" → 昨天我没去.", "Colocar 了 em hábitos: 我每天喝了茶 → 我每天喝茶."],
      pratica: [
        { p: "Diga: \"Ontem eu vi um filme.\"", r: "我昨天看了一部电影。(wǒ zuótiān kàn le yí bù diànyǐng)" },
        { p: "Negue: 他来了。", r: "他没来。" },
      ],
    },
    {
      titulo: "在, 过 e 着: aspectos do verbo",
      objetivo: "Dizer que algo está acontecendo, que você já fez alguma vez e descrever estados.",
      secoes: [
        { t: "在 / 正在: acontecendo agora", texto: "在 (ou 正在, mais enfático) antes do verbo = estar fazendo. Pode terminar com 呢.",
          exemplos: [["我在学习。", "wǒ zài xuéxí", "Estou estudando."], ["他正在吃饭呢。", "tā zhèngzài chīfàn ne", "Ele está comendo agora."]] },
        { t: "过: já fiz alguma vez", texto: "过 guo depois do verbo = experiência (\"já fui\", \"já comi\"). Negativa: 没 + verbo + 过.",
          exemplos: [["我去过中国。", "wǒ qù guo Zhōngguó", "Já fui à China."], ["我没吃过寿司。", "wǒ méi chī guo shòusī", "Nunca comi sushi."], ["你去过日本吗？", "nǐ qù guo Rìběn ma", "Você já foi ao Japão?"]] },
        { t: "着: estado contínuo", texto: "着 zhe descreve um estado que continua: porta aberta, luz acesa, alguém sentado.",
          exemplos: [["门开着。", "mén kāi zhe", "A porta está aberta."], ["他穿着红衣服。", "tā chuān zhe hóng yīfu", "Ele está de roupa vermelha."]] },
      ],
      erros: ["Confundir 了 (fiz, naquela ocasião) com 过 (já fiz alguma vez na vida).", "\"我没去过了\" → 我没去过."],
      pratica: [
        { p: "Diga: \"Nunca fui a Pequim.\"", r: "我没去过北京。" },
        { p: "Diga: \"O que você está fazendo?\"", r: "你在做什么？(nǐ zài zuò shénme)" },
      ],
    },
    {
      titulo: "Querer, poder e comparar",
      objetivo: "Usar 想, 要, 会, 能, 可以 e a estrutura 比.",
      secoes: [
        { t: "想 e 要", texto: "想 + verbo = gostaria de, quero (suave). 要 + verbo = vou, preciso, quero (decidido). 要 + coisa = quero isto.",
          exemplos: [["我想去日本。", "wǒ xiǎng qù Rìběn", "Quero ir ao Japão."], ["我要这个。", "wǒ yào zhège", "Quero este."]] },
        { t: "Três \"poder\"", texto: "O português tem um \"poder\"; o chinês tem três.",
          tabela: [["Palavra", "Sentido", "Exemplo"], ["会 huì", "saber (habilidade aprendida)", "我会游泳。Sei nadar."], ["能 néng", "conseguir, ter condições", "我今天不能来。Hoje não posso vir."], ["可以 kěyǐ", "ter permissão", "我可以进来吗？Posso entrar?"]] },
        { t: "Comparar com 比", texto: "A 比 B + adjetivo. SEM 很! Para \"muito mais\": adjetivo + 多了 / 得多. Igualdade: A 和 B 一样 + adjetivo. Superlativo: 最.",
          exemplos: [["他比我高。", "tā bǐ wǒ gāo", "Ele é mais alto que eu."], ["今天比昨天冷多了。", "jīntiān bǐ zuótiān lěng duō le", "Hoje está muito mais frio que ontem."], ["这个最便宜。", "zhège zuì piányi", "Este é o mais barato."]] },
      ],
      erros: ["\"他比我很高\" → 他比我高 (sem 很).", "\"我会去\" para permissão → 我可以去吗？", "Negar o 比 com 不比 muda o sentido; para \"não é tão… quanto\" use 没有: 他没有我高."],
      pratica: [
        { p: "会, 能 ou 可以? 我 ___ 说中文。(sei falar)", r: "会." },
        { p: "Diga: \"O trem é mais rápido que o ônibus.\"", r: "火车比公交车快。" },
      ],
    },
  ],
  b1: [
    {
      titulo: "Complementos de resultado e de grau",
      objetivo: "Dizer se a ação deu certo e avaliar como foi feita.",
      secoes: [
        { t: "Resultado: verbo + resultado", texto: "O chinês separa a ação do resultado. 看 (olhar) + 懂 (entender) = 看懂 (ler e entender). 找 (procurar) + 到 (chegar) = 找到 (achar).",
          tabela: [["Composto", "Sentido"], ["听懂", "ouvir e entender"], ["找到", "procurar e achar"], ["做完", "terminar de fazer"], ["看见", "ver (enxergar)"], ["学会", "aprender (dominar)"]] },
        { t: "Possível ou não: 得 / 不 no meio", texto: "Coloque 得 (consigo) ou 不 (não consigo) entre o verbo e o resultado.",
          exemplos: [["我听得懂。", "wǒ tīng de dǒng", "Consigo entender (ouvindo)."], ["我听不懂。", "wǒ tīng bu dǒng", "Não entendo (o que ouço)."], ["我睡不着。", "wǒ shuì bu zháo", "Não consigo dormir."]] },
        { t: "Grau: verbo + 得 + avaliação", texto: "Para avaliar COMO algo é feito: verbo + 得 + adjetivo. Com objeto, repita o verbo.",
          exemplos: [["你说得很好。", "nǐ shuō de hěn hǎo", "Você fala muito bem."], ["他跑得很快。", "tā pǎo de hěn kuài", "Ele corre rápido."], ["她说中文说得很流利。", "tā shuō Zhōngwén shuō de hěn liúlì", "Ela fala chinês com fluência."]] },
      ],
      erros: ["\"我不听懂\" → 我听不懂.", "\"他很快跑\" → 他跑得很快.", "Confundir 得 (de) com 的 (de): mesma leitura, funções diferentes."],
      pratica: [
        { p: "Diga: \"Não achei minhas chaves.\"", r: "我没找到我的钥匙。" },
        { p: "Diga: \"Você cozinha muito bem.\"", r: "你做饭做得很好。" },
      ],
    },
    {
      titulo: "把 e 被: quem faz o quê com o quê",
      objetivo: "Usar as duas estruturas que reorganizam a frase em volta do objeto.",
      secoes: [
        { t: "把: fazer algo COM o objeto", texto: "Sujeito + 把 + objeto + verbo + resultado. Usado quando você manipula algo e há um resultado (pôr, fechar, terminar). O verbo não pode ficar sozinho.",
          exemplos: [["请把门关上。", "qǐng bǎ mén guān shang", "Por favor, feche a porta."], ["我把作业做完了。", "wǒ bǎ zuòyè zuò wán le", "Terminei a lição de casa."], ["把书放在桌子上。", "bǎ shū fàng zài zhuōzi shang", "Ponha o livro na mesa."]] },
        { t: "被: passiva (geralmente ruim)", texto: "Objeto + 被 + (quem fez) + verbo + resultado. Costuma indicar algo negativo ou fora de controle.",
          exemplos: [["我的手机被偷了。", "wǒ de shǒujī bèi tōu le", "Meu celular foi roubado."], ["他被老板批评了。", "tā bèi lǎobǎn pīpíng le", "Ele levou bronca do chefe."]] },
      ],
      erros: ["\"我把书看\" → falta resultado: 我把书看完了.", "Usar 把 com verbos sem ação física/resultado: 我把他喜欢 está errado."],
      pratica: [
        { p: "Reescreva com 把: 我吃完了苹果。", r: "我把苹果吃完了。" },
        { p: "Diga: \"Minha bicicleta foi roubada.\"", r: "我的自行车被偷了。" },
      ],
    },
    {
      titulo: "Conectores em par",
      objetivo: "Ligar ideias como um falante fluente, com as duplas fixas do chinês.",
      secoes: [
        { t: "Pares que andam juntos", texto: "O chinês costuma marcar as DUAS partes de uma relação lógica.",
          tabela: [["Par", "Sentido", "Exemplo"], ["因为…所以…", "porque… por isso…", "因为下雨，所以我没去。"], ["虽然…但是…", "embora… mas…", "虽然很累，但是很开心。"], ["如果…就…", "se… então…", "如果有时间，我就去。"], ["不但…而且…", "não só… como também…", "不但便宜，而且好吃。"], ["一边…一边…", "enquanto", "一边听音乐一边学习。"], ["越…越…", "quanto mais… mais…", "越学越有意思。"], ["一…就…", "assim que…", "我一到家就睡觉了。"]] },
        { t: "Posição do 就 e do 也", texto: "就, 也, 还, 都 são advérbios: vão DEPOIS do sujeito e ANTES do verbo.",
          exemplos: [["如果你去，我也去。", "rúguǒ nǐ qù, wǒ yě qù", "Se você for, eu também vou."]] },
      ],
      erros: ["\"虽然…可是…\" está certo; \"虽然…所以…\" não.", "Colocar 就 antes do sujeito: 如果下雨，就我不去 → 我就不去."],
      pratica: [
        { p: "Complete: 虽然很贵，___ 我还是买了。", r: "但是 (dànshì)." },
        { p: "Diga: \"Quanto mais pratico, melhor fico.\"", r: "我越练习越好。" },
      ],
    },
  ],
  b2: [
    {
      titulo: "是…的 e complementos de direção",
      objetivo: "Destacar quando/onde/como algo aconteceu e descrever movimentos.",
      secoes: [
        { t: "是…的: destacando detalhes do passado", texto: "Para uma ação que já se sabe que aconteceu, 是…的 destaca QUANDO, ONDE, COMO ou COM QUEM.",
          exemplos: [["你是什么时候来的？", "nǐ shì shénme shíhou lái de", "Quando foi que você chegou?"], ["我是坐飞机来的。", "wǒ shì zuò fēijī lái de", "Vim de avião."], ["这是在中国买的。", "zhè shì zài Zhōngguó mǎi de", "Isto foi comprado na China."]] },
        { t: "Direção: 来 e 去", texto: "Verbo + 来 = em direção a quem fala. Verbo + 去 = para longe. Combinam com 上 (subir), 下 (descer), 进 (entrar), 出 (sair), 回 (voltar), 起 (levantar).",
          exemplos: [["进来吧。", "jìn lai ba", "Entre (para cá)."], ["他跑出去了。", "tā pǎo chuqu le", "Ele saiu correndo."], ["站起来。", "zhàn qilai", "Levante-se."]] },
        { t: "Sentidos figurados", texto: "起来 = começar ou avaliar (看起来 parece); 下去 = continuar; 出来 = descobrir/reconhecer.",
          exemplos: [["你看起来很累。", "nǐ kàn qilai hěn lèi", "Você parece cansado."], ["说下去。", "shuō xiaqu", "Continue falando."], ["我认出来了。", "wǒ rèn chulai le", "Reconheci."]] },
      ],
      erros: ["Usar 是…的 para planos futuros: ele só vale para o passado.", "Trocar 来 e 去 sem pensar em quem fala."],
      pratica: [
        { p: "Pergunte: \"Com quem você veio?\"", r: "你是跟谁来的？" },
        { p: "Diga: \"Parece gostoso.\"", r: "看起来很好吃。" },
      ],
    },
    {
      titulo: "Registro formal e escrito",
      objetivo: "Reconhecer e usar o vocabulário do chinês escrito, de notícias e do trabalho.",
      secoes: [
        { t: "Fala × escrita", texto: "O chinês escrito formal troca palavras do dia a dia por equivalentes mais curtos e clássicos.",
          tabela: [["Falado", "Escrito/formal", "Sentido"], ["因为", "由于", "devido a"], ["所以", "因此", "portanto"], ["但是", "然而", "no entanto"], ["如果", "如 / 若", "caso"], ["在…的时候", "…时", "quando"], ["没有", "未", "não (ainda)"]] },
        { t: "Cortesia profissional", texto: "您 com clientes e superiores; 请 antes de pedidos; 贵 para o que é da outra pessoa (贵公司 sua empresa); 麻烦您 = desculpe o incômodo.",
          exemplos: [["麻烦您再说一遍。", "máfan nín zài shuō yí biàn", "Desculpe, poderia repetir?"], ["如有问题，请随时联系我。", "rú yǒu wèntí, qǐng suíshí liánxì wǒ", "Qualquer dúvida, fico à disposição."]] },
      ],
      erros: ["Usar 你 com cliente em contexto formal: prefira 您.", "Misturar registro: 由于 numa conversa casual soa artificial."],
      pratica: [
        { p: "Versão formal de 但是", r: "然而 (rán'ér)." },
        { p: "Como se refere à empresa do cliente?", r: "贵公司 (guì gōngsī)." },
      ],
    },
  ],
  c1: [
    {
      titulo: "成语: as expressões de quatro caracteres",
      objetivo: "Entender e usar os chengyu, marca de quem domina o chinês.",
      secoes: [
        { t: "O que são", texto: "Expressões fixas de 4 caracteres, muitas vindas de histórias antigas. Condensam uma ideia inteira e aparecem em textos, discursos e conversas de gente escolarizada.",
          tabela: [["成语", "Pinyin", "Sentido"], ["一举两得", "yì jǔ liǎng dé", "matar dois coelhos com uma cajadada só"], ["马马虎虎", "mǎmahūhū", "mais ou menos, descuidado"], ["入乡随俗", "rù xiāng suí sú", "em Roma, faça como os romanos"], ["半途而废", "bàn tú ér fèi", "desistir no meio do caminho"], ["画蛇添足", "huà shé tiān zú", "estragar por exagero (pôr pé em cobra)"]] },
        { t: "Como usar", texto: "Funcionam como verbo, adjetivo ou frase inteira. Não exagere: um bem colocado impressiona; muitos soam pedantes.",
          exemplos: [["学习不能半途而废。", "xuéxí bù néng bàn tú ér fèi", "Não se pode desistir dos estudos no meio."], ["这样做一举两得。", "zhèyàng zuò yì jǔ liǎng dé", "Fazendo assim, resolve duas coisas de uma vez."]] },
      ],
      erros: ["Trocar um caractere: chengyu são fixos.", "Traduzir palavra por palavra: 画蛇添足 não tem nada a ver com cobras na prática."],
      pratica: [
        { p: "O que significa 入乡随俗?", r: "Adaptar-se aos costumes do lugar (em Roma, faça como os romanos)." },
        { p: "Qual chengyu usar para \"desistir no meio\"?", r: "半途而废 (bàn tú ér fèi)." },
      ],
    },
    {
      titulo: "Ênfase e nuance: 连…都, 才, 就, partículas finais",
      objetivo: "Soar natural: dar ênfase e mostrar atitude com pequenas palavras.",
      secoes: [
        { t: "连…都/也: até, nem mesmo", texto: "Destaca algo extremo.",
          exemplos: [["他连饭都没吃。", "tā lián fàn dōu méi chī", "Ele nem comeu."], ["连孩子都知道。", "lián háizi dōu zhīdào", "Até criança sabe."]] },
        { t: "才 × 就", texto: "Os dois dizem \"então\", mas com atitudes opostas: 就 = cedo, fácil, rápido; 才 = tarde, difícil, só então.",
          exemplos: [["他八点就来了。", "tā bā diǎn jiù lái le", "Ele chegou já às oito (cedo)."], ["他十点才来。", "tā shí diǎn cái lái", "Ele só chegou às dez (tarde)."]] },
        { t: "Partículas finais", texto: "Mudam o tom da frase inteira.",
          tabela: [["Partícula", "Efeito", "Exemplo"], ["吧 ba", "sugestão, suposição", "走吧。Vamos."], ["呢 ne", "\"e…?\", continuidade", "你呢？E você?"], ["啊 a", "ênfase, emoção", "好啊！Ótimo!"], ["嘛 ma", "\"é óbvio\"", "别急嘛。Calma, ué."]] },
      ],
      erros: ["Usar 才 com 了: 他十点才来了 → 他十点才来.", "Abusar de 啊 em contexto formal."],
      pratica: [
        { p: "Diga: \"Ele nem me ligou.\"", r: "他连电话都没给我打。" },
        { p: "Diga que o filme só acabou à meia-noite.", r: "电影十二点才结束。" },
      ],
    },
  ],
};
