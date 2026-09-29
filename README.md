# Trilha Trilíngue

Inglês, japonês e chinês do básico ao avançado, **uma palavra de cada vez**.

## Como funciona

- **Login simples**: nome + PIN de 4 números. Cada conta tem a sua própria trilha nas três línguas. O progresso fica salvo no navegador deste aparelho.
- **Uma língua por vez**: escolha Inglês, Japonês ou Chinês no topo. Cada língua tem o seu próprio progresso na mesma trilha.
- **Cada unidade** tem 5 palavras (ou frases, no nível avançado):
  1. palavra 1 → exercícios da palavra 1
  2. palavra 2 → exercícios da palavra 2
  3. … até a palavra 5
  4. todas juntas → exercício final misturado (significado, escrever e ouvir). Errou, a palavra volta no fim.
- **Níveis**: Básico (20 unidades, 100 palavras), Intermediário (8 unidades) e Avançado (6 unidades de frases). Cada nível termina com uma revisão, e cada unidade libera a próxima.
- Toque em 🔊 para ouvir a pronúncia. No teclado: 1–4 respondem, Enter avança.

## Onde editar o conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `data-trilha.js` | Níveis, unidades e palavras (PT, EN, JP escrita/kana/romaji, ZH hanzi/pinyin) |
| `app.js` | Login, trilha e aulas |
| `styles.css` | Visual |

Site estático: sem build, sem dependências. Publicado pela Vercel a cada commit.
