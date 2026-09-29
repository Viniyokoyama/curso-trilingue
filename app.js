(() => {
  "use strict";

  const $app = document.getElementById("app");
  const $user = document.getElementById("user");

  // ---------- línguas ----------
  const LANGS = {
    en: { nome: "Inglês", flag: "EN", voz: "en-US", attr: "en" },
    jp: { nome: "Japonês", flag: "日", voz: "ja-JP", attr: "ja" },
    zh: { nome: "Chinês", flag: "中", voz: "zh-CN", attr: "zh-CN" },
  };

  // Achata a trilha: cada unidade ganha um id estável ("n0u3") e cada nível uma revisão no final.
  const UNITS = [];
  window.TRILHA.forEach((nivel, n) => {
    const doNivel = [];
    nivel.unidades.forEach((u, i) => {
      const itens = u.itens.map(r => ({ pt: r[0], en: r[1], jk: r[2], jkana: r[3], jr: r[4], zh: r[5], py: r[6] }));
      const unit = { id: `n${n}u${i}`, nivel: n, titulo: u.titulo, itens };
      UNITS.push(unit);
      doNivel.push(unit);
    });
    UNITS.push({
      id: `n${n}rev`, nivel: n, titulo: `Revisão do ${nivel.nivel.toLowerCase()}`, revisao: true,
      itens: doNivel.flatMap(u => u.itens),
    });
  });
  const ALL_ITEMS = UNITS.filter(u => !u.revisao).flatMap(u => u.itens);

  // Como um item aparece em cada língua.
  function view(item, lang) {
    if (lang === "en") return { main: item.en, sub: "", fala: item.en };
    if (lang === "jp") {
      const sub = item.jk === item.jkana ? item.jr : `${item.jkana} · ${item.jr}`;
      return { main: item.jk, sub, fala: item.jkana };
    }
    return { main: item.zh, sub: item.py, fala: item.zh };
  }

  // ---------- utilidades ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);

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

  let voices = [];
  function loadVoices() { try { voices = speechSynthesis.getVoices(); } catch { voices = []; } }
  if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function speak(text, lang) {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANGS[lang].voz;
    const v = voices.find(v => v.lang.replace("_", "-").startsWith(u.lang)) || voices.find(v => v.lang.startsWith(u.lang.slice(0, 2)));
    if (v) u.voice = v;
    u.rate = 0.85;
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
  const isDone = (lang, unit) => !!progressOf(lang)[unit.id];
  function isOpen(lang, idx) {
    if (idx === 0) return true;
    return isDone(lang, UNITS[idx - 1]);
  }

  // ---------- estado de navegação ----------
  let lang = "en";
  let lesson = null;

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
    const prog = progressOf(lang);
    const feitas = UNITS.filter(u => prog[u.id]).length;
    let html = `
      <nav class="langs" aria-label="Língua">
        ${Object.entries(LANGS).map(([k, l]) => {
          const n = UNITS.filter(u => progressOf(k)[u.id]).length;
          return `<button class="lang ${k === lang ? "on" : ""}" data-act="lang" data-lang="${k}" aria-pressed="${k === lang}">
            <span class="flag" lang="${l.attr}">${l.flag}</span><span>${l.nome}</span><small>${n}/${UNITS.length}</small></button>`;
        }).join("")}
      </nav>
      <div class="bar" aria-label="Progresso"><i style="width:${(feitas / UNITS.length) * 100}%"></i></div>`;

    let nextFound = false;
    window.TRILHA.forEach((nivel, n) => {
      html += `<section class="level"><h2>${esc(nivel.nivel)}</h2><p class="muted">${esc(nivel.descricao)}</p><ol class="path">`;
      UNITS.forEach((u, idx) => {
        if (u.nivel !== n) return;
        const done = prog[u.id];
        const open = isOpen(lang, idx);
        const next = open && !done && !nextFound;
        if (next) nextFound = true;
        const cls = done ? "done" : next ? "next" : open ? "open" : "locked";
        const stars = done ? "★".repeat(done) + "☆".repeat(3 - done) : "";
        const preview = u.revisao ? `${u.itens.length} palavras misturadas` : u.itens.map(i => i.pt).join(", ");
        html += `<li class="node ${cls} ${u.revisao ? "rev" : ""}">
          <button data-act="start" data-idx="${idx}" ${open ? "" : "disabled"}>
            <span class="dot">${done ? "✓" : u.revisao ? "↻" : open ? "▶" : "🔒"}</span>
            <span class="txt"><b>${esc(u.titulo)}</b><small>${esc(preview)}</small></span>
            <span class="stars" aria-label="${done || 0} estrelas">${stars}</span>
          </button></li>`;
      });
      html += `</ol></section>`;
    });
    $app.innerHTML = html;
    const nx = $app.querySelector(".node.next");
    if (nx) nx.scrollIntoView({ block: "center" });
  }

  // ---------- aula ----------
  // Aula normal: palavra 1 → exercícios da palavra 1 → palavra 2 → exercícios da palavra 2 … → todas juntas.
  // Revisão de nível: só a etapa "todas juntas", com 12 itens sorteados.
  function startLesson(idx) {
    const unit = UNITS[idx];
    const steps = [];
    if (unit.revisao) {
      steps.push({ t: "intro-rev" });
      pick(unit.itens, 12).forEach(w => steps.push({ t: "quiz", w, modo: randomMode(), fase: "final" }));
    } else {
      unit.itens.forEach((w, i) => {
        steps.push({ t: "learn", w, n: i + 1 });
        steps.push({ t: "quiz", w, modo: "reconhecer", fase: "palavra" });
        steps.push({ t: "quiz", w, modo: "produzir", fase: "palavra" });
      });
      steps.push({ t: "all" });
      // Duas rodadas com todas as palavras, cada rodada num tipo de exercício diferente por palavra.
      const modos = new Map(unit.itens.map(w => [w, randomMode()]));
      shuffle(unit.itens).forEach(w => steps.push({ t: "quiz", w, modo: modos.get(w), fase: "final" }));
      shuffle(unit.itens).forEach(w => steps.push({ t: "quiz", w, modo: randomMode(modos.get(w)), fase: "final" }));
    }
    lesson = { idx, unit, steps, pos: 0, erros: 0, answered: null };
    render();
  }
  const randomMode = (exceto) => pick(["reconhecer", "produzir", "ouvir"].filter(m => m !== exceto), 1)[0];

  // Três alternativas erradas, de preferência da mesma unidade, sem nada que se confunda com a certa
  // (mesmo significado, mesma escrita ou mesmo som — ex.: 他 e 她 soam iguais).
  function distractors(w, n) {
    const vw = view(w, lang);
    const ok = x => { const vx = view(x, lang); return x.pt !== w.pt && vx.main !== vw.main && vx.fala !== vw.fala; };
    const out = [];
    const add = list => { for (const x of shuffle(list)) { if (out.length >= n) break; if (ok(x) && !out.some(o => o.pt === x.pt || view(o, lang).fala === view(x, lang).fala)) out.push(x); } };
    add(lesson.unit.itens.filter(x => x !== w));
    const i = ALL_ITEMS.indexOf(w);
    add(ALL_ITEMS.slice(Math.max(0, i - 15), i + 15));
    add(ALL_ITEMS);
    return out;
  }

  function renderLesson() {
    const L = lesson;
    const step = L.steps[L.pos];
    const pct = (L.pos / L.steps.length) * 100;
    const head = `
      <div class="lesson-top">
        <button class="link" data-act="quit" aria-label="Sair da aula">✕</button>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <span class="muted small">${esc(L.unit.titulo)}</span>
      </div>`;
    if (!step) return renderResult(head);
    if (step.t === "learn") return renderLearn(head, step);
    if (step.t === "all" || step.t === "intro-rev") return renderAll(head, step);
    return renderQuiz(head, step);
  }

  function wordBlock(w, big = true) {
    const v = view(w, lang);
    return `<div class="word ${big ? "big" : ""}" lang="${LANGS[lang].attr}">
      <button class="say" data-act="say" data-text="${esc(v.fala)}" aria-label="Ouvir">🔊</button>
      <span class="main">${esc(v.main)}</span>
      ${v.sub ? `<span class="sub">${esc(v.sub)}</span>` : ""}
    </div>`;
  }

  function renderLearn(head, step) {
    const total = lesson.unit.itens.length;
    $app.innerHTML = `${head}
      <section class="card stage">
        <p class="kicker">Palavra nova ${step.n} de ${total}</p>
        ${wordBlock(step.w)}
        <p class="meaning">${esc(step.w.pt)}</p>
        <p class="muted small">Toque em 🔊 e repita em voz alta duas vezes.</p>
        <button class="btn primary" data-act="next">Entendi, vamos praticar</button>
      </section>`;
    speak(view(step.w, lang).fala, lang);
  }

  function renderAll(head, step) {
    const rev = step.t === "intro-rev";
    const itens = rev ? [] : lesson.unit.itens;
    $app.innerHTML = `${head}
      <section class="card stage">
        <p class="kicker">${rev ? "Revisão" : "Agora todas juntas"}</p>
        <h2>${rev ? "Palavras do nível inteiro, misturadas" : "Revise as palavras antes do exercício final"}</h2>
        ${itens.length ? `<ul class="recap">${itens.map(w => `<li>${wordBlock(w, false)}<span>${esc(w.pt)}</span></li>`).join("")}</ul>` : ""}
        <button class="btn primary" data-act="next">Começar exercício</button>
      </section>`;
  }

  function renderQuiz(head, step) {
    const w = step.w;
    if (!step.opcoes) step.opcoes = shuffle([w, ...distractors(w, 3)]);
    const v = view(w, lang);
    let prompt;
    if (step.modo === "reconhecer") prompt = `<p class="kicker">O que significa?</p>${wordBlock(w)}`;
    else if (step.modo === "produzir") prompt = `<p class="kicker">Como se diz em ${LANGS[lang].nome.toLowerCase()}?</p><p class="meaning big">${esc(w.pt)}</p>`;
    else prompt = `<p class="kicker">Ouça e escolha o que você ouviu</p><button class="say huge" data-act="say" data-text="${esc(v.fala)}" aria-label="Ouvir de novo">🔊</button>`;

    const ans = lesson.answered;
    const opts = step.opcoes.map((o, i) => {
      let cls = "";
      if (ans) cls = o === w ? "right" : i === ans.i ? "wrong" : "dim";
      let label;
      if (step.modo === "reconhecer") label = `<span>${esc(o.pt)}</span>`;
      else { const ov = view(o, lang); label = `<span class="main" lang="${LANGS[lang].attr}">${esc(ov.main)}</span>${ov.sub ? `<small>${esc(ov.sub)}</small>` : ""}`; }
      return `<button class="opt ${cls}" data-act="answer" data-i="${i}" ${ans ? "disabled" : ""}>${label}</button>`;
    }).join("");

    const fb = !ans ? "" : ans.ok
      ? `<div class="feedback ok"><b>Isso!</b> <button class="btn primary" data-act="next">Continuar</button></div>`
      : `<div class="feedback no"><div><b>Resposta certa:</b> ${esc(v.main)}${v.sub ? ` (${esc(v.sub)})` : ""} = ${esc(w.pt)}</div>
          <button class="btn primary" data-act="next">${step.fase === "palavra" ? "Tentar de novo" : "Continuar"}</button></div>`;

    $app.innerHTML = `${head}
      <section class="card stage">
        ${prompt}
        <div class="opts ${step.modo === "reconhecer" ? "" : "target"}">${opts}</div>
        ${fb}
      </section>`;
    if (step.modo === "ouvir" && !ans) speak(v.fala, lang);
  }

  function answer(i) {
    const step = lesson.steps[lesson.pos];
    const ok = step.opcoes[i] === step.w;
    lesson.answered = { i, ok };
    if (!ok) {
      lesson.erros++;
      // Na fase de uma palavra, repete o mesmo exercício; na fase final, a palavra volta no fim da fila.
      if (step.fase === "final") lesson.steps.push({ t: "quiz", w: step.w, modo: step.modo, fase: "final" });
    }
    if (ok) speak(view(step.w, lang).fala, lang);
    renderLesson();
  }

  function next() {
    const step = lesson.steps[lesson.pos];
    const ans = lesson.answered;
    lesson.answered = null;
    if (step && step.t === "quiz" && ans && !ans.ok && step.fase === "palavra") {
      step.opcoes = null; // embaralha de novo e repete
    } else {
      lesson.pos++;
    }
    renderLesson();
  }

  function renderResult(head) {
    const e = lesson.erros;
    const stars = e === 0 ? 3 : e <= 2 ? 2 : 1;
    const prog = progressOf(lang);
    prog[lesson.unit.id] = Math.max(prog[lesson.unit.id] || 0, stars);
    persist();
    const nextIdx = lesson.idx + 1 < UNITS.length ? lesson.idx + 1 : null;
    $app.innerHTML = `${head.replace(/width:[\d.]+%/, "width:100%")}
      <section class="card stage">
        <p class="kicker">Unidade concluída</p>
        <p class="stars huge">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</p>
        <h2>${esc(lesson.unit.titulo)}</h2>
        <p class="muted">${e === 0 ? "Sem nenhum erro." : `${e} erro${e > 1 ? "s" : ""} no caminho. Refaça quando quiser para ganhar 3 estrelas.`}</p>
        <div class="row">
          <button class="btn" data-act="quit">Voltar à trilha</button>
          ${nextIdx !== null ? `<button class="btn primary" data-act="start" data-idx="${nextIdx}">Próxima unidade</button>` : ""}
        </div>
      </section>`;
  }

  // ---------- eventos ----------
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const act = b.dataset.act;
    if (act === "pick") {
      const k = b.dataset.key;
      const form = document.getElementById("login-form");
      form.nome.value = users[k].nome;
      form.pin.focus();
    } else if (act === "logout") {
      current = null; lesson = null; save(CURRENT_KEY, null); render();
    } else if (act === "lang") {
      lang = b.dataset.lang; me().lang = lang; persist(); render();
    } else if (act === "start") {
      startLesson(Number(b.dataset.idx));
    } else if (act === "quit") {
      lesson = null; render();
    } else if (act === "say") {
      speak(b.dataset.text, lang);
    } else if (act === "answer") {
      answer(Number(b.dataset.i));
    } else if (act === "next") {
      next();
    }
  });

  document.addEventListener("keydown", e => {
    if (!lesson || e.target.tagName === "INPUT") return;
    const step = lesson.steps[lesson.pos];
    if (!step) return;
    if (step.t === "quiz" && !lesson.answered && /^[1-4]$/.test(e.key)) answer(Number(e.key) - 1);
    else if (e.key === "Enter" && (step.t !== "quiz" || lesson.answered)) { e.preventDefault(); next(); }
  });

  if (current) lang = me().lang || "en";
  render();
})();
