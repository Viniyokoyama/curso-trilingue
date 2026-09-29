# Trilha Trilíngue

Inglês, japonês e chinês dos fundamentos ao C1, **uma palavra de cada vez**, com revisão espaçada.

## Como funciona

- **Login simples**: nome + PIN de 4 números. Cada conta tem a sua trilha nas três línguas. O progresso fica salvo no navegador deste aparelho.
- **Uma língua por vez**: escolha Inglês, Japonês ou Chinês no topo. Cada língua tem o seu progresso.
- **Níveis** (CEFR): Fundamentos → A1 → A2 → B1 → B2 → C1. No japonês o C1 equivale mais ou menos ao JLPT N2; no chinês, ao HSK 5.
  - Fundamentos são próprios de cada língua: hiragana e katakana (japonês), tons e pinyin (chinês), sons difíceis (inglês).
  - Do A1 ao C1: vocabulário por tema e unidades de gramática com frases completas.
- **Cada unidade**: explicação de gramática da língua escolhida → item 1 e seus exercícios → item 2 e seus exercícios → … → todos juntos, em duas rodadas.
- **Exercícios**: significado, escolher a tradução, ouvir, digitar (romaji/kana, pinyin/hanzi, inglês), montar a frase com blocos e falar (reconhecimento de voz, no Chrome).
- **Revisão espaçada**: tudo que você aprende volta para revisão em 1, 2, 4, 7, 14, 30, 60 e 120 dias. Errou, volta para amanhã.
- **Teste para pular nível**: 15 perguntas; com até 3 erros o nível inteiro é liberado.
- **Ajustes**: esconder kana/romaji/pinyin nos exercícios; ligar ou desligar os exercícios de fala.
- No teclado: 1–4 respondem, Enter avança.

## Onde editar o conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `data-fundamentos.js` | Kana, tons, sons do inglês. No topo, a descrição do formato dos dados |
| `data-a1.js` … `data-c1.js` | Um arquivo por nível: unidades, itens e notas de gramática por língua |
| `app.js` | Login, trilha, aulas, exercícios e revisão espaçada |
| `styles.css` | Visual |

Site estático: sem build, sem dependências. Publicado pela Vercel a cada commit.
