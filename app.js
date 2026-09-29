(() => {
  "use strict";

  const $app = document.getElementById("app");
  const $user = document.getElementById("user");

  // ---------- línguas ----------
  const LANGS = {
    en: { nome: "Inglês", flag: "EN", voz: "en-US", attr: "en", escrita: "em inglês" },
    jp: { nome: "Japonês", flag: "日", voz: "ja-JP", attr: "ja", escrita: "em romaji ou kana" },
    zh: { nome: "Chinês", flag: "中", voz: "zh-CN", attr: "zh-CN", escrita: "em pinyin (sem tons) ou hanzi" },
  };
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const INTERVALOS = [0, 1, 2, 4, 7, 14, 30, 60, 120]; // dias até a próxima revisão, por caixa

  // ---------- conteúdo ----------
  const clean = s => String(s).replace(/\|/g, "");
  const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const ITEMS = new Map(); // chave → item (o mesmo item em duas unidades vira um só)
  function makeItem(r, leitura) {
    const key = [r[0], r[1], r[2], r[5]].join("¦");
    if (ITEMS.has(key)) return ITEMS.get(key);
    const item = { key, pt: r[0], en: r[1], jk: r[2], jkana: r[3], jr: r[4], zh: r[5], py: r[6], leitura: !!leitura };
    item.frase = !leitura && /[.?!…,:。？！，]$/.test(r[0].trim());
    ITEMS.set(key, item);
    return item;
  }

  const LEVELS = window.TRILHA.map((lv, n) => ({
    id: lv.id, n, nivel: lv.nivel, descricao: lv.descricao,
    unidades: lv.unidades.map(u => ({
      id: `${lv.id}:${slug(u.titulo)}`, titulo: u.titulo, nota: u.nota || {}, so: u.so, tipo: u.tipo, nivel: n,
      itens: u.itens.map(r => makeItem(r, u.tipo === "leitura")),
    })),
  }));

  // Trilha de cada língua: unidades visíveis + uma revisão no fim de cada nível.
  const TRACK = {};
  for (const lang of Object.keys(LANGS)) {
    const levels = [];
    for (const lv of LEVELS) {
      const units = lv.unidades.filter(u => !u.so || u.so === lang);
      if (!units.length) continue;
      const rev = { id: `${lv.id}:revisao`, titulo: `Revisão · ${lv.nivel}`, revisao: true, nivel: lv.n, nota: {},
        itens: units.flatMap(u => u.itens) };
      levels.push({ ...lv, units: [...units, rev] });
    }
    const units = levels.flatMap(l => l.units);
    const pool = [...new Set(units.filter(u => !u.revisao).flatMap(u => u.itens))];
    TRACK[lang] = { levels, units, pool };
  }

  // Como um item aparece em cada língua.
  function view(item, lang) {
    if (lang === "en") return { main: item.en, sub: "", fala: item.en };
    if (lang === "jp") {
      const main = clean(item.jk);
      return { main, sub: main === item.jkana ? item.jr : `${item.jkana} · ${item.jr}`, fala: item.jkana };
    }
    return { main: clean(item.zh), sub: item.py, fala: clean(item.zh) };
  }
  function tokens(item, lang) {
    if (lang === "en") return item.en.split(/\s+/).filter(Boolean);
    return (lang === "jp" ? item.jk : item.zh).split("|").filter(Boolean);
  }
  const kind = item => item.leitura ? "leitura" : item.frase ? "frase" : "palavra";

  // ---------- utilidades ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const pickOne = a => a[Math.floor(Math.random() * a.length)];
  const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
  const paragraphs = t => t.split(/\n\n+/).map(p => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("");

  function load(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* sem armazenamento: segue sem salvar */ }
  }

  // Hash simples para não guardar o PIN em texto puro (não é segurança forte: os dados ficam neste aparelho).
  function hash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m || !n) return m + n;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const similar = (a, b) => (a && b ? 1 - lev(a, b) / Math.max(a.length, b.length) : 0);

  // ---------- comparação de respostas digitadas ou faladas ----------
  const CONTRACOES = { "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are", "he's": "he is", "she's": "she is",
    "it's": "it is", "that's": "that is", "what's": "what is", "there's": "there is", "let's": "let us", "i'd": "i would",
    "i'll": "i will", "you'll": "you will", "i've": "i have", "don't": "do not", "doesn't": "does not", "didn't": "did not",
    "isn't": "is not", "aren't": "are not", "can't": "cannot", "won't": "will not", "wasn't": "was not", "couldn't": "could not" };
  function normLatin(s, lang) {
    s = clean(s).toLowerCase().replace(/[’‘`]/g, "'");
    if (lang === "en") s = s.replace(/[a-z]+'[a-z]+/g, w => CONTRACOES[w] || w).replace(/can not/g, "cannot");
    s = s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
    if (lang === "jp") s = s.replace(/wo/g, "o").replace(/ou/g, "o").replace(/([aeiou])\1+/g, "$1");
    if (lang === "zh") s = s.replace(/v/g, "u");
    return s;
  }
  const normCJK = s => clean(s).normalize("NFC").replace(/[\s、。，．！？!?,.：:「」…~ー\-]/g, "").toLowerCase();

  function alternatives(original) {
    const s = original.replace(/\([^)]*\)/g, "").trim();
    const parts = s.split(/\s+\/\s+/);
    if (!/[.?!…]$/.test(s)) parts.push(...s.split(/,\s*/));
    return [...new Set([original, s, ...parts].map(p => p.trim()).filter(Boolean))];
  }

  // Retorna { ok, quase } para uma resposta digitada.
  function checkTyped(item, lang, text) {
    const latin = [], cjk = [];
    if (lang === "en") latin.push(...alternatives(item.en));
    else if (item.leitura) { latin.push(...alternatives(item.pt)); cjk.push(item.jkana); }
    else if (lang === "jp") { latin.push(item.jr); cjk.push(item.jk, item.jkana); }
    else { latin.push(item.py); cjk.push(item.zh); }
    const tl = normLatin(text, lang), tc = normCJK(text);
    if (tl && latin.some(a => normLatin(a, lang) === tl)) return { ok: true };
    if (tc && cjk.some(a => normCJK(a) === tc)) return { ok: true };
    if (tl.length >= 5 && latin.some(a => lev(normLatin(a, lang), tl) <= 1)) return { ok: true, quase: true };
    return { ok: false };
  }

  function speechScore(item, lang, heard) {
    const alvo = lang === "en" ? [item.en] : lang === "jp" ? [item.jk, item.jkana] : [item.zh];
    return Math.max(...heard.flatMap(h => alvo.map(a => lang === "en" ? similar(normLatin(h, "en"), normLatin(a, "en")) : similar(normCJK(h), normCJK(a)))));
  }

  // ---------- áudio ----------
  let voices = [];
  function loadVoices() { try { voices = speechSynthesis.getVoices(); } catch { voices = []; } }
  if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function speak(text, lang, rate = 0.85) {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANGS[lang].voz;
    const v = voices.find(v => v.lang.replace("_", "-") === u.lang) || voices.find(v => v.lang.startsWith(u.lang.slice(0, 2)));
    if (v) u.voice = v;
    u.rate = rate;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  // ---------- contas ----------
  const USERS_KEY = "trilha.users";
  const CURRENT_KEY = "trilha.current";
  let users = load(USERS_KEY, {});
  let current = load(CURRENT_KEY, null);
  if (current && !users[current]) current = null;

  const me = () => users[current];
  const persist = () => save(USERS_KEY, users);
  const keyOf = nome => nome.trim().toLowerCase();

  function progressOf(lang) {
    const u = me();
    u.progresso = u.progresso || {};
    return (u.progresso[lang] = u.progresso[lang] || {});
  }
  function srsOf(lang) {
    const u = me();
    u.srs = u.srs || {};
    return (u.srs[lang] = u.srs[lang] || {});
  }
  function settings() {
    const u = me();
    u.ajustes = u.ajustes || { apoio: true, fala: !!SR };
    return u.ajustes;
  }
  const dueItems = lang => Object.entries(srsOf(lang)).filter(([k, s]) => s.d <= today() && ITEMS.has(k)).sort((a, b) => a[1].d - b[1].d).map(([k]) => ITEMS.get(k));

  // Uma unidade abre quando a anterior foi feita. Passar no teste de um nível abre o nível inteiro
  // (e todos os anteriores) e a primeira unidade do seguinte.
  function isOpen(lang, idx) {
    const t = TRACK[lang], u = t.units[idx], prog = progressOf(lang);
    if (idx === 0 || prog[t.units[idx - 1].id]) return true;
    const pulo = prog._pulo ?? -1;
    const li = t.levels.findIndex(l => l.units.includes(u));
    return li <= pulo || (li === pulo + 1 && t.levels[li].units[0] === u);
  }

  // ---------- estado de navegação ----------
  let lang = "en";
  let lesson = null;
  let recognizer = null;

  function renderUser() {
    if (!current) { $user.innerHTML = ""; return; }
    $user.innerHTML = `<span class="who">${esc(me().nome)}</span> <button class="link" data-act="logout">Sair</button>`;
  }

  function render() {
    renderUser();
    if (!current) return renderLogin();
    if (lesson) return renderLesson();
    renderTrail();
  }

  // ---------- login ----------
  function renderLogin(msg = "") {
    const nomes = Object.values(users);
    $app.innerHTML = `
      <section class="card login">
        <h1>Entrar</h1>
        <p class="muted">Cada pessoa tem a sua própria trilha em inglês, japonês e chinês.</p>
        ${nomes.length ? `
          <div class="profiles">
            ${nomes.map(u => `<button class="profile" data-act="pick" data-key="${esc(keyOf(u.nome))}">
              <span class="avatar">${esc(u.nome.slice(0, 1).toUpperCase())}</span>${esc(u.nome)}</button>`).join("")}
          </div>` : ""}
        <form id="login-form" autocomplete="off">
          <label>Nome <input name="nome" required maxlength="30" placeholder="Seu nome"></label>
          <label>PIN (4 números) <input name="pin" required inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="••••"></label>
          <p class="error" role="alert">${esc(msg)}</p>
          <button class="btn primary" type="submit">Entrar ou criar conta</button>
        </form>
        <p class="muted small">Se o nome ainda não existe, a conta é criada com esse PIN. O progresso fica salvo neste aparelho.</p>
      </section>`;
    const form = document.getElementById("login-form");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const pin = form.pin.value.trim();
      if (!nome) return renderLogin("Digite um nome.");
      if (!/^\d{4}$/.test(pin)) return renderLogin("O PIN precisa ter 4 números.");
      const k = keyOf(nome);
      if (users[k]) {
        if (users[k].pin !== hash(pin)) return renderLogin(`PIN errado para ${users[k].nome}.`);
      } else {
        users[k] = { nome, pin: hash(pin), progresso: {} };
        persist();
      }
      current = k;
      save(CURRENT_KEY, current);
      lang = me().lang || "en";
      render();
    });
  }

  // ---------- trilha ----------
  function renderTrail() {
    const t = TRACK[lang];
    const prog = progressOf(lang);
    const srs = srsOf(lang);
    const aj = settings();
    const feitas = t.units.filter(u => prog[u.id]).length;
    const due = dueItems(lang).length;
    const aprendidas = Object.keys(srs).length;
    const proxima = Object.values(srs).reduce((m, s) => Math.min(m, s.d), Infinity);

    let html = `
      <nav class="langs" aria-label="Língua">
        ${Object.entries(LANGS).map(([k, l]) => {
          const n = TRACK[k].units.filter(u => progressOf(k)[u.id]).length;
          return `<button class="lang ${k === lang ? "on" : ""}" data-act="lang" data-lang="${k}" aria-pressed="${k === lang}">
            <span class="flag" lang="${l.attr}">${l.flag}</span><span>${l.nome}</span><small>${n}/${TRACK[k].units.length}</small></button>`;
        }).join("")}
      </nav>
      <div class="bar" aria-label="Progresso"><i style="width:${(feitas / t.units.length) * 100}%"></i></div>
      <section class="card review">
        <div>
          <b>${aprendidas} ${aprendidas === 1 ? "item aprendido" : "itens aprendidos"}</b>
          <small class="muted">${due ? `${due} para revisar agora` : aprendidas ? `Nada para revisar agora. Próxima revisão ${proxima - today() <= 1 ? "amanhã" : `em ${proxima - today()} dias`}.` : "Conclua uma unidade para começar a revisar."}</small>
        </div>
        <button class="btn ${due ? "primary" : ""}" data-act="srs" ${due ? "" : "disabled"}>Revisar</button>
      </section>
      <details class="card settings">
        <summary>Ajustes</summary>
        ${lang !== "en" ? `<label><input type="checkbox" data-act="apoio" ${aj.apoio ? "checked" : ""}> Mostrar ${lang === "jp" ? "kana e romaji" : "pinyin"} nos exercícios</label>` : ""}
        <label><input type="checkbox" data-act="fala" ${aj.fala && SR ? "checked" : ""} ${SR ? "" : "disabled"}> Exercícios de fala (microfone)${SR ? "" : " · este navegador não reconhece voz; use o Chrome"}</label>
      </details>`;

    let nextFound = false;
    t.levels.forEach((lv, li) => {
      const locked = lv.units.some(u => !isOpen(lang, t.units.indexOf(u)));
      html += `<section class="level"><h2>${esc(lv.nivel)}</h2><p class="muted">${esc(lv.descricao)}</p>
        ${locked ? `<button class="btn skip" data-act="teste" data-level="${li}">Já sei isso · fazer teste para pular</button>` : ""}
        <ol class="path">`;
      lv.units.forEach(u => {
        const idx = t.units.indexOf(u);
        const done = prog[u.id];
        const open = isOpen(lang, idx);
        const next = open && !done && !nextFound;
        if (next) nextFound = true;
        const cls = done ? "done" : next ? "next" : open ? "open" : "locked";
        const stars = done ? "★".repeat(done) + "☆".repeat(3 - done) : "";
        const preview = u.revisao ? `${u.itens.length} itens do nível, misturados` : u.itens.map(i => i.leitura ? clean(i.jk) : i.pt).join(" · ");
        html += `<li class="node ${cls} ${u.revisao ? "rev" : ""}">
          <button data-act="start" data-idx="${idx}" ${open ? "" : "disabled"}>
            <span class="dot">${done ? "✓" : u.revisao ? "↻" : open ? "▶" : "🔒"}</span>
            <span class="txt"><b>${esc(u.titulo)}</b><small>${esc(preview)}</small></span>
            <span class="stars" aria-label="${done || 0} estrelas">${stars}</span>
          </button></li>`;
      });
      html += `</ol></section>`;
    });

    html += `
      <details class="card about">
        <summary>Como este curso leva à fluência</summary>
        <p><b>Fundamentos → A1 → A2 → B1 → B2 → C1.</b> Os níveis seguem o Quadro Europeu (CEFR). No japonês, o C1 corresponde mais ou menos ao JLPT N2; no chinês, ao HSK 5.</p>
        <p><b>Cada unidade</b> apresenta uma palavra ou frase por vez, pratica cada uma e termina com todas juntas, em cinco tipos de exercício: significado, escolher, ouvir, digitar, montar a frase e falar.</p>
        <p><b>A revisão espaçada</b> traz de volta o que você aprendeu no momento em que você ia esquecer: 1 dia, 2, 4, 7, 14, 30, 60, 120. Quem revisa sempre não perde o que aprendeu.</p>
        <p><b>Fluência de verdade pede conversa.</b> A trilha dá a base de vocabulário, gramática e pronúncia. Junte a ela conversa com nativos (italki, HelloTalk, Tandem), séries com legenda na própria língua e leitura. Fale em voz alta sempre que o exercício mostrar uma frase.</p>
      </details>`;

    $app.innerHTML = html;
    const nx = $app.querySelector(".node.next");
    if (nx) nx.scrollIntoView({ block: "center" });
  }

  // ---------- aulas ----------
  // Tipos de exercício disponíveis para cada item.
  function modesFor(item, fase) {
    const k = kind(item);
    const nTok = tokens(item, lang).length;
    const fala = settings().fala && SR && !(lesson && lesson.semFala);
    if (fase === "palavra") return ["reconhecer", k === "frase" && nTok >= 3 ? "montar" : "produzir"];
    const m = ["reconhecer", "produzir", "ouvir"];
    if (k !== "frase" || lang === "en" || nTok <= 4) m.push("digitar");
    if (k === "frase" && nTok >= 3) m.push("montar");
    if (fala && k !== "leitura") m.push("falar");
    return m;
  }
  const quiz = (w, fase, excluir) => ({ t: "quiz", w, fase, modo: pickOne(modesFor(w, fase).filter(m => m !== excluir)) });

  function startLesson(idx) {
    const unit = TRACK[lang].units[idx];
    lesson = { tipo: unit.revisao ? "revisao" : "unidade", idx, unit, steps: [], pos: 0, erros: 0, answered: null };
    const steps = lesson.steps;
    if (unit.nota[lang]) steps.push({ t: "nota" });
    if (unit.revisao) {
      steps.push({ t: "intro", titulo: "Revisão do nível", texto: "Itens de todas as unidades do nível, misturados. Errou, o item volta no fim." });
      pick(unit.itens, 12).forEach(w => steps.push(quiz(w, "final")));
    } else {
      unit.itens.forEach((w, i) => {
        steps.push({ t: "learn", w, n: i + 1 });
        const [a, b] = modesFor(w, "palavra");
        steps.push({ t: "quiz", w, modo: a, fase: "palavra" }, { t: "quiz", w, modo: b, fase: "palavra" });
      });
      steps.push({ t: "all" });
      // Duas rodadas com todos os itens, cada rodada num tipo de exercício diferente.
      const r1 = shuffle(unit.itens).map(w => quiz(w, "final"));
      const r2 = shuffle(unit.itens).map(w => quiz(w, "final", r1.find(s => s.w === w).modo));
      steps.push(...r1, ...r2);
    }
    render();
  }

  function startSrs() {
    const itens = dueItems(lang).slice(0, 20);
    if (!itens.length) return;
    lesson = { tipo: "srs", unit: { titulo: "Revisão", itens }, steps: [], pos: 0, erros: 0, answered: null };
    lesson.steps.push(...shuffle(itens).map(w => ({ ...quiz(w, "final"), primeira: true })));
    render();
  }

  function startTeste(li) {
    const lv = TRACK[lang].levels[li];
    const itens = [...new Set(lv.units.filter(u => !u.revisao).flatMap(u => u.itens))];
    lesson = { tipo: "teste", li, unit: { titulo: `Teste · ${lv.nivel}`, itens }, steps: [], pos: 0, erros: 0, answered: null };
    lesson.steps.push({ t: "intro", titulo: `Teste para pular: ${lv.nivel}`, texto: "15 perguntas do nível inteiro. Com até 3 erros, o nível todo fica liberado e você pode seguir para o próximo." });
    pick(itens, 15).forEach(w => lesson.steps.push({ ...quiz(w, "final"), teste: true }));
    render();
  }

  // Três alternativas erradas, de preferência da mesma unidade e do mesmo tipo, sem nada que se confunda
  // com a certa (mesmo significado, mesma escrita ou mesmo som — ex.: 他 e 她 soam iguais).
  function distractors(w, n) {
    const vw = view(w, lang);
    const out = [];
    const ok = x => {
      if (x === w || x.pt === w.pt) return false;
      const vx = view(x, lang);
      if (vx.main === vw.main || vx.fala === vw.fala) return false;
      return !out.some(o => o.pt === x.pt || view(o, lang).main === vx.main || view(o, lang).fala === vx.fala);
    };
    const add = list => { for (const x of shuffle(list)) { if (out.length >= n) break; if (ok(x)) out.push(x); } };
    const pool = TRACK[lang].pool;
    const same = x => kind(x) === kind(w);
    add(lesson.unit.itens.filter(same));
    const i = pool.indexOf(w);
    add(pool.slice(Math.max(0, i - 30), i + 30).filter(same));
    add(pool.filter(same));
    add(pool);
    return out;
  }

  function renderLesson() {
    const L = lesson;
    const step = L.steps[L.pos];
    const pct = (L.pos / L.steps.length) * 100;
    const head = `
      <div class="lesson-top">
        <button class="link" data-act="quit" aria-label="Sair da aula">✕</button>
        <div class="bar"><i style="width:${step ? pct : 100}%"></i></div>
        <span class="muted small">${esc(L.unit.titulo)}</span>
      </div>`;
    if (!step) return renderResult(head);
    if (step.t === "nota") return renderNota(head);
    if (step.t === "intro") return renderIntro(head, step);
    if (step.t === "learn") return renderLearn(head, step);
    if (step.t === "all") return renderAll(head);
    return renderQuiz(head, step);
  }

  function wordBlock(w, { big = true, sub = true, som = true } = {}) {
    const v = view(w, lang);
    return `<div class="word ${big ? "big" : ""} ${w.frase ? "frase" : ""}" lang="${LANGS[lang].attr}">
      ${som ? `<button class="say" data-act="say" data-text="${esc(v.fala)}" aria-label="Ouvir">🔊</button>` : ""}
      <span class="main">${esc(v.main)}</span>
      ${sub && v.sub ? `<span class="sub">${esc(v.sub)}</span>` : ""}
    </div>`;
  }

  function renderNota(head) {
    $app.innerHTML = `${head}
      <section class="card stage nota">
        <p class="kicker">Como funciona</p>
        <h2>${esc(lesson.unit.titulo)}</h2>
        <div class="texto">${paragraphs(lesson.unit.nota[lang])}</div>
        <button class="btn primary" data-act="next">Começar</button>
      </section>`;
  }

  function renderIntro(head, step) {
    $app.innerHTML = `${head}
      <section class="card stage">
        <p class="kicker">${esc(step.titulo)}</p>
        <p>${esc(step.texto)}</p>
        <button class="btn primary" data-act="next">Começar</button>
      </section>`;
  }

  function renderLearn(head, step) {
    const w = step.w;
    const total = lesson.unit.itens.length;
    const tipo = w.leitura ? "Símbolo novo" : w.frase ? "Frase nova" : "Palavra nova";
    $app.innerHTML = `${head}
      <section class="card stage">
        <p class="kicker">${tipo} ${step.n} de ${total}</p>
        ${wordBlock(w)}
        <p class="meaning">${w.leitura ? `lê-se <b>${esc(w.pt)}</b>` : esc(w.pt)}</p>
        <div class="row">
          <button class="btn" data-act="slow" data-text="${esc(view(w, lang).fala)}">🐢 Devagar</button>
        </div>
        <p class="muted small">Ouça e repita em voz alta duas vezes.</p>
        <button class="btn primary" data-act="next">Entendi, vamos praticar</button>
      </section>`;
    speak(view(w, lang).fala, lang);
  }

  function renderAll(head) {
    const itens = lesson.unit.itens;
    $app.innerHTML = `${head}
      <section class="card stage">
        <p class="kicker">Agora todos juntos</p>
        <h2>Revise antes do exercício final</h2>
        <ul class="recap">${itens.map(w => `<li>${wordBlock(w, { big: false })}<span>${esc(w.pt)}</span></li>`).join("")}</ul>
        <button class="btn primary" data-act="next">Começar exercício</button>
      </section>`;
  }

  function renderQuiz(head, step) {
    const w = step.w;
    const v = view(w, lang);
    const apoio = settings().apoio && !w.leitura;
    const ans = lesson.answered;
    const L = LANGS[lang].nome.toLowerCase();
    let prompt = "", body = "";

    if (step.modo === "reconhecer") {
      prompt = `<p class="kicker">${w.leitura ? "Como se lê?" : "O que significa?"}</p>${wordBlock(w, { sub: apoio, som: !w.leitura })}`;
    } else if (step.modo === "produzir") {
      prompt = w.leitura
        ? `<p class="kicker">Qual é o símbolo de</p><p class="meaning big">${esc(w.pt)}</p>`
        : `<p class="kicker">Como se diz em ${L}?</p><p class="meaning big">${esc(w.pt)}</p>`;
    } else if (step.modo === "ouvir") {
      prompt = `<p class="kicker">Ouça e escolha o que você ouviu</p>
        <div class="row"><button class="say huge" data-act="say" data-text="${esc(v.fala)}" aria-label="Ouvir de novo">🔊</button>
        <button class="say huge" data-act="slow" data-text="${esc(v.fala)}" aria-label="Ouvir devagar">🐢</button></div>`;
    } else if (step.modo === "digitar") {
      prompt = w.leitura
        ? `<p class="kicker">Digite a leitura em romaji</p>${wordBlock(w, { sub: false, som: false })}`
        : `<p class="kicker">Escreva ${LANGS[lang].escrita}</p><p class="meaning big">${esc(w.pt)}</p>`;
    } else if (step.modo === "montar") {
      prompt = `<p class="kicker">Monte a frase em ${L}</p><p class="meaning big">${esc(w.pt)}</p>`;
    } else if (step.modo === "falar") {
      prompt = `<p class="kicker">Fale em voz alta</p>${wordBlock(w)}<p class="meaning">${esc(w.pt)}</p>`;
    }

    if (["reconhecer", "produzir", "ouvir"].includes(step.modo)) {
      if (!step.opcoes) step.opcoes = shuffle([w, ...distractors(w, 3)]);
      const opts = step.opcoes.map((o, i) => {
        let cls = "";
        if (ans) cls = o === w ? "right" : i === ans.i ? "wrong" : "dim";
        let label;
        if (step.modo === "reconhecer") label = `<span>${esc(o.pt)}</span>`;
        else {
          const ov = view(o, lang);
          label = `<span class="main" lang="${LANGS[lang].attr}">${esc(ov.main)}</span>${apoio && ov.sub ? `<small>${esc(ov.sub)}</small>` : ""}`;
        }
        return `<button class="opt ${cls}" data-act="answer" data-i="${i}" ${ans ? "disabled" : ""}><kbd>${i + 1}</kbd>${label}</button>`;
      }).join("");
      body = `<div class="opts ${step.modo === "reconhecer" ? "" : "target"} ${w.frase ? "frases" : ""}">${opts}</div>`;
    } else if (step.modo === "digitar") {
      body = `<form class="typing" data-form="digitar" autocomplete="off">
        <input name="resposta" ${ans ? "disabled" : ""} value="${ans ? esc(ans.texto) : ""}" autocapitalize="off" spellcheck="false" lang="${LANGS[lang].attr}" aria-label="Sua resposta">
        ${ans ? "" : `<button class="btn primary" type="submit">Verificar</button>`}
      </form>`;
    } else if (step.modo === "montar") {
      if (!step.montar) {
        const tk = tokens(w, lang);
        const extras = [...new Set(lesson.unit.itens.filter(x => x !== w && x.frase).flatMap(x => tokens(x, lang)))].filter(t => !tk.includes(t));
        step.montar = { pool: shuffle([...tk, ...pick(extras, 2)]), built: [] };
      }
      const M = step.montar;
      const sep = lang === "en" ? " " : "";
      body = `
        <div class="built ${ans ? (ans.ok ? "ok" : "no") : ""}" lang="${LANGS[lang].attr}">${M.built.length ? M.built.map((pi, bi) => `<button class="chip" data-act="unbuild" data-b="${bi}" ${ans ? "disabled" : ""}>${esc(M.pool[pi])}</button>`).join(sep ? " " : "") : `<span class="muted small">Toque nos blocos abaixo, na ordem certa</span>`}</div>
        <div class="chips" lang="${LANGS[lang].attr}">${M.pool.map((t, pi) => `<button class="chip" data-act="build" data-p="${pi}" ${M.built.includes(pi) || ans ? "disabled" : ""}>${esc(t)}</button>`).join("")}</div>
        ${ans ? "" : `<button class="btn primary" data-act="checkmontar" ${M.built.length ? "" : "disabled"}>Verificar</button>`}`;
    } else if (step.modo === "falar") {
      const F = step.fala || {};
      body = `
        <div class="row">
          ${ans ? "" : `<button class="btn primary mic ${F.ouvindo ? "on" : ""}" data-act="listen">${F.ouvindo ? "Ouvindo… fale agora" : "🎤 Falar"}</button>
          <button class="btn" data-act="skipfala">Não posso falar agora</button>`}
        </div>
        ${F.ouvido ? `<p class="heard ${ans && ans.ok ? "ok" : ""}">Entendi: “${esc(F.ouvido)}”</p>` : ""}
        ${F.erro ? `<p class="error">${esc(F.erro)}</p>` : ""}`;
    }

    let fb = "";
    if (ans) {
      const correta = w.leitura && step.modo !== "produzir"
        ? `${esc(clean(w.jk))} = ${esc(w.pt)}`
        : `${esc(v.main)}${v.sub && lang !== "en" ? ` <small>(${esc(v.sub)})</small>` : ""} = ${esc(w.pt)}`;
      if (ans.ok) {
        const extra = ans.quase ? `<div>Quase perfeito. A grafia certa é: ${correta}</div>` : ans.pulou ? "" : step.modo === "falar" ? "<div>Pronúncia reconhecida!</div>" : "";
        fb = `<div class="feedback ok"><div><b>${ans.pulou ? "Tudo bem, fica para a próxima." : "Isso!"}</b>${extra}</div><button class="btn primary" data-act="next">Continuar</button></div>`;
      } else {
        fb = `<div class="feedback no"><div><b>Resposta certa:</b> ${correta}</div>
          <button class="btn primary" data-act="next">${step.fase === "palavra" ? "Tentar de novo" : "Continuar"}</button></div>`;
      }
    }

    $app.innerHTML = `${head}<section class="card stage">${prompt}${body}${fb}</section>`;
    if (step.modo === "ouvir" && !ans && !step.tocou) { step.tocou = true; speak(v.fala, lang); }
    if (step.modo === "digitar" && !ans) {
      const input = $app.querySelector("input[name=resposta]");
      if (input) input.focus();
    }
  }

  function setAnswer(ok, extra = {}) {
    const step = lesson.steps[lesson.pos];
    lesson.answered = { ok, ...extra };
    if (!ok) {
      lesson.erros++;
      if (step.fase === "final" && !step.teste) lesson.steps.push({ t: "quiz", w: step.w, fase: "final", modo: step.modo });
    }
    if (lesson.tipo === "srs" && step.primeira) updateSrs(step.w, ok);
    if (ok && !extra.pulou) speak(view(step.w, lang).fala, lang);
    renderLesson();
  }

  function updateSrs(w, ok) {
    const s = srsOf(lang);
    const cur = s[w.key] || { b: 0, d: today() };
    const b = ok ? Math.min(cur.b + 1, INTERVALOS.length - 1) : 1;
    s[w.key] = { b, d: today() + INTERVALOS[b] };
    persist();
  }

  function answerChoice(i) {
    const step = lesson.steps[lesson.pos];
    setAnswer(step.opcoes[i] === step.w, { i });
  }

  function listen() {
    const step = lesson.steps[lesson.pos];
    if (!SR || (step.fala && step.fala.ouvindo)) return;
    step.fala = { ouvindo: true };
    renderLesson();
    try {
      recognizer = new SR();
      recognizer.lang = LANGS[lang].voz;
      recognizer.interimResults = false;
      recognizer.maxAlternatives = 5;
      let got = false;
      const ativo = () => lesson && lesson.steps[lesson.pos] === step && !lesson.answered;
      recognizer.onresult = e => {
        got = true;
        if (!ativo()) return;
        const heard = Array.from(e.results[0]).map(a => a.transcript);
        const score = speechScore(step.w, lang, heard);
        step.fala = { ouvido: heard[0] };
        if (score >= 0.7) setAnswer(true);
        else { step.fala.erro = "Ainda não ficou claro. Ouça de novo no 🔊 e tente outra vez."; renderLesson(); }
      };
      recognizer.onerror = e => {
        got = true;
        if (!ativo() || e.error === "aborted") return;
        step.fala = { erro: e.error === "not-allowed" ? "O microfone está bloqueado. Libere o acesso no navegador ou toque em “Não posso falar agora”." : "Não ouvi nada. Tente de novo." };
        renderLesson();
      };
      recognizer.onend = () => { if (!got && ativo()) { step.fala = { erro: "Não ouvi nada. Tente de novo." }; renderLesson(); } };
      recognizer.start();
    } catch {
      step.fala = { erro: "Não foi possível usar o microfone." };
      renderLesson();
    }
  }

  function next() {
    const step = lesson.steps[lesson.pos];
    const ans = lesson.answered;
    lesson.answered = null;
    if (step && step.t === "quiz" && ans && !ans.ok && step.fase === "palavra") {
      step.opcoes = null; step.montar = null; step.tocou = false; // mesmo exercício, embaralhado de novo
    } else {
      lesson.pos++;
    }
    renderLesson();
  }

  function renderResult(head) {
    const L = lesson;
    const e = L.erros;
    let html;
    if (L.tipo === "teste") {
      const passou = e <= 3;
      if (passou) {
        const prog = progressOf(lang);
        prog._pulo = Math.max(prog._pulo ?? -1, L.li);
        persist();
      }
      html = `<p class="kicker">${passou ? "Aprovado" : "Ainda não"}</p>
        <h2>${esc(L.unit.titulo)}</h2>
        <p class="muted">${e} erro${e === 1 ? "" : "s"} em 15. ${passou ? "O nível está liberado. Faça as unidades que quiser e siga para o próximo." : "Com até 3 erros o nível é liberado. Vale fazer as unidades: elas vão rápido para quem já sabe."}</p>
        <div class="row"><button class="btn primary" data-act="quit">Voltar à trilha</button></div>`;
    } else if (L.tipo === "srs") {
      const total = L.unit.itens.length;
      html = `<p class="kicker">Revisão concluída</p>
        <h2>${total - Math.min(e, total)} de ${total} de primeira</h2>
        <p class="muted">Os itens que você errou voltam amanhã. Os que acertou voltam cada vez mais espaçados.</p>
        <div class="row">
          <button class="btn" data-act="quit">Voltar à trilha</button>
          ${dueItems(lang).length ? `<button class="btn primary" data-act="srs">Revisar mais</button>` : ""}
        </div>`;
    } else {
      const stars = e === 0 ? 3 : e <= 2 ? 2 : 1;
      const prog = progressOf(lang);
      prog[L.unit.id] = Math.max(prog[L.unit.id] || 0, stars);
      const srs = srsOf(lang);
      if (!L.unit.revisao) for (const w of L.unit.itens) if (!srs[w.key]) srs[w.key] = { b: 1, d: today() + 1 };
      persist();
      const units = TRACK[lang].units;
      const nextIdx = L.idx + 1 < units.length ? L.idx + 1 : null;
      html = `<p class="kicker">Unidade concluída</p>
        <p class="stars huge">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</p>
        <h2>${esc(L.unit.titulo)}</h2>
        <p class="muted">${e === 0 ? "Sem nenhum erro." : `${e} erro${e > 1 ? "s" : ""} no caminho. Refaça quando quiser para ganhar 3 estrelas.`}</p>
        <div class="row">
          <button class="btn" data-act="quit">Voltar à trilha</button>
          ${nextIdx !== null ? `<button class="btn primary" data-act="start" data-idx="${nextIdx}">Próxima unidade</button>` : ""}
        </div>`;
    }
    $app.innerHTML = `${head}<section class="card stage">${html}</section>`;
  }

  function stopListening() {
    try { if (recognizer) recognizer.abort(); } catch { /* já parado */ }
    recognizer = null;
  }

  // ---------- eventos ----------
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-act]");
    if (!b || b.disabled) return;
    const act = b.dataset.act;
    const step = lesson && lesson.steps[lesson.pos];
    if (act === "pick") {
      const form = document.getElementById("login-form");
      form.nome.value = users[b.dataset.key].nome;
      form.pin.focus();
    } else if (act === "logout") {
      current = null; lesson = null; save(CURRENT_KEY, null); render();
    } else if (act === "lang") {
      lang = b.dataset.lang; me().lang = lang; persist(); render();
    } else if (act === "apoio" || act === "fala") {
      settings()[act] = b.checked; persist();
    } else if (act === "start") {
      startLesson(Number(b.dataset.idx));
    } else if (act === "srs") {
      startSrs();
    } else if (act === "teste") {
      startTeste(Number(b.dataset.level));
    } else if (act === "quit") {
      stopListening(); lesson = null; render();
    } else if (act === "say") {
      speak(b.dataset.text, lang);
    } else if (act === "slow") {
      speak(b.dataset.text, lang, 0.5);
    } else if (act === "answer") {
      answerChoice(Number(b.dataset.i));
    } else if (act === "build") {
      step.montar.built.push(Number(b.dataset.p)); renderLesson();
    } else if (act === "unbuild") {
      step.montar.built.splice(Number(b.dataset.b), 1); renderLesson();
    } else if (act === "checkmontar") {
      const M = step.montar;
      const sep = lang === "en" ? " " : "";
      setAnswer(M.built.map(pi => M.pool[pi]).join(sep) === tokens(step.w, lang).join(sep));
    } else if (act === "listen") {
      listen();
    } else if (act === "skipfala") {
      stopListening(); lesson.semFala = true; setAnswer(true, { pulou: true });
    } else if (act === "next") {
      stopListening(); next();
    }
  });

  document.addEventListener("submit", e => {
    const form = e.target.closest("[data-form=digitar]");
    if (!form) return;
    e.preventDefault();
    const texto = form.resposta.value.trim();
    if (!texto) return;
    const step = lesson.steps[lesson.pos];
    const r = checkTyped(step.w, lang, texto);
    setAnswer(r.ok, { texto, quase: r.quase });
  });

  document.addEventListener("keydown", e => {
    if (!lesson || e.target.tagName === "INPUT") return;
    const step = lesson.steps[lesson.pos];
    if (!step) return;
    const escolha = step.t === "quiz" && ["reconhecer", "produzir", "ouvir"].includes(step.modo);
    if (escolha && !lesson.answered && /^[1-4]$/.test(e.key)) answerChoice(Number(e.key) - 1);
    else if (e.key === "Enter" && (step.t !== "quiz" || lesson.answered)) { e.preventDefault(); stopListening(); next(); }
  });

  // Só para testes automáticos: expõe a resposta certa quando a página abre com ?debug.
  if (/[?&]debug\b/.test(location.search)) {
    window.__trilha = { step: () => lesson && lesson.steps[lesson.pos], view: w => view(w, lang), tokens: w => tokens(w, lang) };
  }

  if (current) lang = me().lang || "en";
  render();
})();
