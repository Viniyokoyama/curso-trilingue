# Curso Trilíngue 365

Site pessoal do curso de 365 dias: inglês, japonês, chinês e espanhol, com cada palavra nova entrando nas quatro línguas ao mesmo tempo.

## O que tem no site

- **Hoje**: o dia do curso calculado a partir da data de início, a quadra do dia com pronúncia (toque na palavra), o plano de blocos nos modos Núcleo (3 h) e Turbo (6 h), check de cada bloco e o mapa dos 365 dias.
- **Método**: metas, as 4 pontes entre as línguas, armadilhas, dia-padrão, Anki, materiais e checkpoints.
- **52 semanas**: o plano do ano, com filtro por trimestre e a semana atual destacada.
- **Mês 1**: os 30 primeiros dias, dia a dia.
- **Vocabulário**: os 100 conceitos do mês 1, busca, modo treino e botão que baixa o CSV pronto para o Anki.

O progresso fica no `localStorage` do navegador. Para usar em mais de um aparelho, use **Exportar progresso** num e **Importar progresso** no outro (em Hoje, Ajustes e backup).

## Colocar no ar (GitHub + Vercel, sem terminal)

1. Entre em [github.com/new](https://github.com/new), dono `viniyokoyamac`, nome `curso-trilingue`, e crie o repositório.
2. Na página do repositório vazio, clique em **uploading an existing file**, arraste todos os arquivos desta pasta (não a pasta nem o zip) e clique em **Commit changes**.
3. Entre em [vercel.com/new](https://vercel.com/new), escolha **Import Git Repository**, selecione `curso-trilingue`, deixe o preset **Other** e clique em **Deploy**.
4. Pronto: o site fica em algo como `curso-trilingue.vercel.app`. Todo commit novo no GitHub publica sozinho.

## Com terminal

```bash
cd curso-trilingue
git init && git add . && git commit -m "Curso Trilíngue 365"
gh repo create viniyokoyamac/curso-trilingue --public --source=. --push
npx vercel --prod
```

## Onde editar o conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `data-metodo.js` | Texto da aba Método, em markdown |
| `data-plano.js` | As 52 semanas, os trimestres e os 30 dias do mês 1 |
| `data-vocab.js` | Os conceitos da quadra; novas semanas entram aqui |
| `data-licoes.js` | A teoria de cada dia: explicação e exemplos por língua |
| `data-quiz.js` | As questões de múltipla escolha de cada dia (a primeira opção é a certa) |
| `app.js` | Lógica do site |
| `styles.css` | Visual |

Site estático: sem build, sem dependências.
