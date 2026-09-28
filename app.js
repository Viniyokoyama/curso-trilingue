(function () {
  "use strict";

  var app = document.getElementById("app");
  var toastEl = document.getElementById("toast");
  var TOTAL = 365;
  var ZERO = [13, 26, 39, 50, 51, 52];
  var VOICE = { en: "en-US", jp: "ja-JP", zh: "zh-CN", es: "es-ES" };
  var LANG_NAME = { en: "inglês", jp: "japonês", zh: "chinês", es: "espanhol" };

  // ---------- armazenamento ----------
  var LS = {
    get: function (k, d) {
      try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { toast("Não foi possível salvar neste navegador."); }
    }
  };

  var state = {
    start: LS.get("ct_start", null),
    mode: LS.get("ct_mode", "nucleo"),
    log: LS.get("ct_log", {}),
    aulas: LS.get("ct_aulas", {}),
    xp: LS.get("ct_xp", 0),
    viewDay: null,
    planFilter: 0,
    vocabWeek: 0,
    vocabQ: "",
    training: false
  };

  function save() {
    LS.set("ct_start", state.start);
    LS.set("ct_mode", state.mode);
    LS.set("ct_log", state.log);
    LS.set("ct_aulas", state.aulas);
    LS.set("ct_xp", state.xp);
  }

  // ---------- utilidades ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }
  function isoToday() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function parseDate(s) { var p = s.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function todayDate() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
  function realDay() {
    if (!state.start) return null;
    return Math.round((todayDate() - parseDate(state.start)) / 86400000) + 1;
  }
  function dateOfDay(n) { var d = parseDate(state.start); d.setDate(d.getDate() + n - 1); return d; }
  function fmtDate(d) { return d.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }); }
  function weekOf(n) { return Math.ceil(n / 7); }
  function dowOf(n) { return ((n - 1) % 7) + 1; }
  function fmtMin(m) {
    var h = Math.floor(m / 60), r = m % 60;
    return (h ? h + " h" : "") + (h && r ? " " : "") + (r ? r + " min" : "");
  }
  function download(name, text, type) {
    var blob = new Blob([text], { type: type });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
  }

  // ---------- voz ----------
  var voices = [];
  function loadVoices() { if ("speechSynthesis" in window) voices = speechSynthesis.getVoices(); }
  if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function speak(text, lang) {
    if (!("speechSynthesis" in window)) { toast("Este navegador não tem síntese de voz."); return; }
    var target = VOICE[lang];
    var norm = function (v) { return (v.lang || "").replace("_", "-").toLowerCase(); };
    var exact = voices.find(function (v) { return norm(v) === target.toLowerCase(); });
    var near = voices.find(function (v) { return norm(v).indexOf(target.slice(0, 2).toLowerCase()) === 0; });
    var u = new SpeechSynthesisUtterance(String(text).split(",")[0]);
    u.lang = target;
    u.rate = 0.85;
    if (exact || near) u.voice = exact || near;
    else if (voices.length) toast("Sem voz em " + LANG_NAME[lang] + " instalada neste aparelho.");
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  // ---------- blocos do dia ----------
  function blocksFor(n) {
    var w = weekOf(n), d = dowOf(n), T = state.mode === "turbo";
    var W = WEEKS[w - 1];
    var anki = { id: "anki", t: "Revisão Anki", m: T ? 50 : 40, x: "Deck da quadra e decks de gramática. Nada de conteúdo novo antes de zerar." };
    var list;
    if (n <= 30) {
      var D = DAYS[n - 1];
      list = [anki];
      if (d <= 5) list.push({ id: "novas", t: "Palavras novas da quadra", m: T ? 30 : 20, x: "Falar em voz alta nas 4 línguas, escrever cada caractere 3 vezes, ler a ponte." });
      list.push(
        { id: "jp", t: "Japonês", m: T ? 100 : 40, x: D[2], lang: "jp" },
        { id: "zh", t: "Chinês", m: T ? 100 : 40, x: D[3], lang: "zh" },
        { id: "en", t: "Inglês", m: T ? 60 : 40, x: D[4], lang: "en" }
      );
      return list;
    }
    if (d === 6) {
      return [
        anki,
        { id: "diario", t: "Diário nas 4 línguas", m: T ? 60 : 40, x: "5 a 10 frases em cada língua sobre a semana. Cole no Claude para corrigir." },
        { id: "conversa", t: "Conversa da semana", m: T ? 60 : 30, x: "Rodízio desta semana: " + ["japonês", "chinês", "inglês"][w % 3] + ". Com o Claude ou no italki." },
        { id: "livre", t: "Leitura ou vídeo livre", m: T ? 60 : 30, x: "Qualquer conteúdo nas línguas do curso, sem obrigação de entender tudo." }
      ];
    }
    if (d === 7) {
      return [
        anki,
        { id: "teste", t: "Teste da semana", m: 30, x: "Peça ao Claude o teste da semana " + w + ": 20 conceitos nas 4 línguas, ditado, 5 frases para traduzir e 1 min de fala gravada." },
        { id: "livre", t: "Imersão livre", m: T ? 120 : 30, x: "Série, música ou podcast. Descanso ativo." }
      ];
    }
    list = [anki];
    if (W[2] > 0) list.push({ id: "novas", t: "Palavras novas da quadra", m: T ? 30 : 20, x: W[1] + ": " + W[2] + " conceitos. Falar nas 4 línguas e escrever os caracteres." });
    list.push(
      { id: "jp", t: "Japonês", m: T ? 100 : 40, x: W[3], lang: "jp" },
      { id: "zh", t: "Chinês", m: T ? 100 : 40, x: W[4], lang: "zh" },
      { id: "en", t: "Inglês", m: T ? 60 : (w <= 8 ? 40 : 30), x: W[5], lang: "en" }
    );
    if (w >= 9) list.push({ id: "es", t: "Espanhol", m: T ? 20 : 10, x: W[6], lang: "es" });
    return list;
  }

  function dayState(n) {
    var got = state.log[n] || [];
    if (!got.length) return "none";
    var ids = blocksFor(n).map(function (b) { return b.id; });
    return ids.every(function (id) { return got.indexOf(id) >= 0; }) ? "done" : "partial";
  }

  function streak() {
    var r = realDay();
    if (!r || r < 1) return 0;
    var n = clamp(r, 1, TOTAL), s = 0;
    if (dayState(n) !== "done") n -= 1;
    while (n >= 1 && dayState(n) === "done") { s++; n--; }
    return s;
  }

  function roleOf(n) {
    var w = weekOf(n), d = dowOf(n);
    if (d === 6) return "Consolidação, sem palavras novas";
    if (d === 7) return "Teste da semana e descanso ativo";
    if (ZERO.indexOf(w) >= 0) return "Semana de checkpoint, sem palavras novas";
    return "Conteúdo novo";
  }

  // ---------- componentes ----------
  function qcard(v) {
    return '<article class="qcard">' +
      '<div class="q-pt"><span class="q-n">Conceito ' + v[0] + "</span><strong>" + esc(v[1]) + '</strong><p class="q-ponte">' + esc(v[9]) + "</p></div>" +
      '<button class="q-cell en" data-say="' + esc(v[2]) + '" data-lang="en" aria-label="Ouvir em inglês: ' + esc(v[2]) + '"><span class="q-lab">EN</span><span class="q-main">' + esc(v[2]) + "</span></button>" +
      '<button class="q-cell jp" data-say="' + esc(v[4]) + '" data-lang="jp" aria-label="Ouvir em japonês: ' + esc(v[5]) + '"><span class="q-lab">JP</span><span class="q-main" lang="ja">' + esc(v[3]) + '</span><span class="q-sub"><span lang="ja">' + esc(v[4]) + "</span> " + esc(v[5]) + "</span></button>" +
      '<button class="q-cell zh" data-say="' + esc(v[6]) + '" data-lang="zh" aria-label="Ouvir em chinês: ' + esc(v[7]) + '"><span class="q-lab">ZH</span><span class="q-main" lang="zh-CN">' + esc(v[6]) + '</span><span class="q-sub">' + esc(v[7]) + "</span></button>" +
      '<button class="q-cell es" data-say="' + esc(v[8]) + '" data-lang="es" aria-label="Ouvir em espanhol: ' + esc(v[8]) + '"><span class="q-lab">ES</span><span class="q-main">' + esc(v[8]) + "</span></button>" +
      "</article>";
  }

  // ---------- aula guiada ----------
  var LICOES_LANG_LAB = { jp: "Japonês", zh: "Chinês", en: "Inglês", es: "Espanhol" };
  function lexCard(lang, L) {
    return '<article class="lex ' + lang + '">' +
      '<h3>' + esc(LICOES_LANG_LAB[lang]) + '<span>' + esc(L.titulo) + "</span></h3>" +
      '<p class="lex-exp">' + esc(L.explicacao) + "</p>" +
      '<ul class="lex-ex">' + L.exemplos.map(function (ex) {
        return '<li><button class="lex-say" data-say="' + esc(ex[0]) + '" data-lang="' + lang + '"><span class="lex-t" lang="' + (lang === "jp" ? "ja" : lang === "zh" ? "zh-CN" : "en") + '">' + esc(ex[0]) + "</span>" +
          (ex[1] ? '<span class="lex-r">' + esc(ex[1]) + "</span>" : "") +
          (ex[2] ? '<span class="lex-p">' + esc(ex[2]) + "</span>" : "") + "</button></li>";
      }).join("") + "</ul>" +
      '<details class="lex-q"><summary>Exercício — ' + esc(L.exercicio.pergunta) + '</summary><p class="lex-a">' + esc(L.exercicio.resposta) + "</p></details>" +
      "</article>";
  }
  function revisaoCard(R) {
    return '<article class="lex revisao">' +
      "<h3>" + esc(R.titulo) + "</h3>" +
      '<ul class="lex-itens">' + R.itens.map(function (it) {
        return '<li><span class="lex-tag ' + it.lang + '">' + esc(LICOES_LANG_LAB[it.lang]) + "</span>" + esc(it.texto) + "</li>";
      }).join("") + "</ul>" +
      '<details class="lex-q"><summary>Autoavaliação — ' + esc(R.exercicio.pergunta) + '</summary><p class="lex-a">' + esc(R.exercicio.resposta) + "</p></details>" +
      "</article>";
  }
  function lessonPanel(n) {
    var L = LICOES[n];
    if (!L) return "";
    var body;
    if (L.revisao) {
      body = revisaoCard(L.revisao);
    } else {
      body = ["jp", "zh", "en"].filter(function (k) { return L[k]; }).map(function (k) { return lexCard(k, L[k]); }).join("");
    }
    return '<details class="panel mat"><summary><h2>Material de consulta</h2><span>A teoria de hoje, para reler quando quiser</span></summary>' +
      '<div class="lex-grid">' + body + "</div></details>";
  }

  // ---------- aula interativa ----------
  var CJK = /[぀-ヿ㐀-鿿]/;
  var CJK_RUN = /[぀-ヿ㐀-鿿々]+/g;
  var VLANGS = ["en", "jp", "zh", "es"];
  var SPK = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
  var PRAISE = ["Isso!", "Correto!", "Mandou bem!", "Perfeito!", "Exato!"];

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }
  function langAttr(s, lang) { return CJK.test(s) ? ' lang="' + (lang === "zh" ? "zh-CN" : "ja") + '"' : ""; }

  function vText(v, lang) {
    if (lang === "en") return { label: v[2], say: v[2] };
    if (lang === "es") return { label: v[8], say: v[8] };
    if (lang === "jp") return { label: v[3], sub: v[3] === v[4] ? v[5] : v[4] + " · " + v[5], say: v[4] };
    return { label: v[6], sub: v[7], say: v[6] };
  }
  function sayOf(ex, lang) {
    if (lang === "en") return ex[0];
    var s = (ex[0].match(CJK_RUN) || []).join(" ");
    if (!s) s = ((ex[2] || "").match(CJK_RUN) || []).join(" ");
    return s;
  }

  function vocabQ(v, type, lang) {
    var key = function (x) { return type === "b" ? x[1] : vText(x, lang).label; };
    var seen = {}, others = [];
    seen[key(v)] = 1; seen["pt" + v[1]] = 1;
    shuffle(VOCAB).some(function (x) {
      if (seen[key(x)] || seen["pt" + x[1]]) return false;
      seen[key(x)] = 1; seen["pt" + x[1]] = 1; others.push(x);
      return others.length >= 3;
    });
    var me = vText(v, lang);
    var opts = [v].concat(others).map(function (x, i) {
      if (type === "b") return { label: x[1], ok: i === 0 };
      var t = vText(x, lang);
      return { label: t.label, sub: t.sub, lang: lang, ok: i === 0 };
    });
    var q = { kind: "q", lang: lang, opts: shuffle(opts), e: v[9] ? "Ponte: " + v[9] : "", say: me.say, sayLang: lang };
    if (type === "a") { q.q = "Como se diz em " + LANG_NAME[lang] + "?"; q.t = v[1]; q.hideSay = true; }
    else if (type === "b") { q.q = "O que significa?"; q.t = me.label; q.tSub = me.sub; q.tLang = lang; q.auto = true; }
    else { q.q = "Toque no que você ouviu"; q.listen = true; q.auto = true; }
    q.answer = type === "b" ? v[1] : me.label + (me.sub ? " (" + me.sub + ")" : "");
    return q;
  }

  function quizQ(item, lang) {
    var t = item[1] || "", say = "";
    if (t && t.indexOf("→") < 0 && t.indexOf("___") < 0) say = lang === "en" ? t : (t.match(CJK_RUN) || []).join(" ");
    return {
      kind: "q", lang: lang, q: item[0], t: t, tLang: lang, say: say, sayLang: lang,
      hideSay: /lê|som|soa|tônica|pronuncia/i.test(item[0]),
      opts: shuffle(item[2].map(function (o, i) { return { label: o, lang: lang, ok: i === 0 }; })),
      e: item[3] || "", answer: item[2][0]
    };
  }

  function quadraOf(n) {
    if (n > 28) return [];
    var w = weekOf(n), d = dowOf(n);
    if (d <= 5) { var i0 = (w - 1) * 25 + (d - 1) * 5; return VOCAB.slice(i0, i0 + 5); }
    return VOCAB.slice((w - 1) * 25, w * 25);
  }

  function buildSession(n) {
    var L = LICOES[n], Q = QUIZ[n] || {}, steps = [];
    var quad = quadraOf(n);
    if (L && !L.revisao) {
      var first = [], last = [];
      if (quad.length) {
        steps.push({ kind: "words", items: quad });
        quad.forEach(function (v) {
          first.push(vocabQ(v, "a", rnd(VLANGS)));
          last.push(vocabQ(v, rnd(["b", "c"]), rnd(VLANGS)));
        });
        steps = steps.concat(shuffle(first));
      } else {
        shuffle(VOCAB).slice(0, 6).forEach(function (v) { last.push(vocabQ(v, rnd(["a", "b", "c"]), rnd(VLANGS))); });
      }
      ["jp", "zh", "en"].forEach(function (k) {
        if (!L[k]) return;
        steps.push({ kind: "teoria", lang: k, L: L[k] });
        (Q[k] || []).forEach(function (it) { steps.push(quizQ(it, k)); });
      });
      return { title: "Aula do dia " + n, steps: steps.concat(shuffle(last)) };
    }
    var rev = !!(L && L.revisao), w = weekOf(n), pool = [];
    var from = rev ? (w - 1) * 7 + 1 : 1, to = rev ? n - 1 : 30;
    for (var i = from; i <= to; i++) {
      if (!QUIZ[i]) continue;
      ["jp", "zh", "en"].forEach(function (k) { (QUIZ[i][k] || []).forEach(function (it) { pool.push([it, k]); }); });
    }
    var qs = shuffle(pool).slice(0, rev ? 10 : 8).map(function (p) { return quizQ(p[0], p[1]); });
    shuffle(rev ? quad : VOCAB).slice(0, 6).forEach(function (v) { qs.push(vocabQ(v, rnd(["a", "b", "c"]), rnd(VLANGS))); });
    if (rev) steps.push({ kind: "revisao", R: L.revisao });
    return { title: rev ? L.revisao.titulo : "Treino de revisão", steps: steps.concat(shuffle(qs)) };
  }

  var actx = null;
  function beep(kind) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var notes = kind === "end" ? [523, 659, 784, 1047] : kind === "ok" ? [659, 880] : [220, 175];
      notes.forEach(function (f, i) {
        var o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + i * 0.09;
        o.type = kind === "bad" ? "square" : "sine";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(kind === "bad" ? 0.04 : 0.12, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
        o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + 0.18);
      });
    } catch (e) { /* sem áudio: segue sem som */ }
  }

  var LX = null, lsEl = null;

  function openLesson(n) {
    var s = buildSession(n);
    LX = {
      n: n, title: s.title, queue: s.steps, i: 0, xp: 0, first: 0, streak: 0, phase: "idle", sel: -1, t0: Date.now(),
      total: s.steps.filter(function (x) { return x.kind === "q"; }).length
    };
    lsEl = document.createElement("div");
    lsEl.className = "ls";
    lsEl.setAttribute("role", "dialog");
    lsEl.setAttribute("aria-modal", "true");
    lsEl.setAttribute("aria-label", s.title);
    lsEl.addEventListener("click", lsClick);
    document.body.appendChild(lsEl);
    document.body.classList.add("ls-open");
    lsRender();
  }

  function closeLesson() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (lsEl) lsEl.remove();
    lsEl = null; LX = null;
    document.body.classList.remove("ls-open");
  }

  function sayBtn(text, lang, cls, label) {
    return '<button class="' + cls + '" data-l="say" data-say="' + esc(text) + '" data-lang="' + lang + '" aria-label="' + (label || "Ouvir") + '">' + SPK + "</button>";
  }

  function lsBody(st) {
    var S = LX;
    if (st.kind === "words") {
      return '<p class="ls-k">Palavras novas</p><h2 class="ls-h">Ouça cada uma e repita em voz alta</h2><div class="ls-words">' +
        st.items.map(function (v) {
          return '<div class="ls-word"><strong>' + esc(v[1]) + "</strong>" + VLANGS.map(function (l) {
            var t = vText(v, l);
            return '<button class="ls-w ' + l + '" data-l="say" data-say="' + esc(t.say) + '" data-lang="' + l + '"><span class="ls-lab">' + l.toUpperCase() + "</span>" +
              "<span" + langAttr(t.label, l) + ">" + esc(t.label) + "</span>" + (t.sub ? "<small>" + esc(t.sub) + "</small>" : "") + "</button>";
          }).join("") + (v[9] ? '<p class="ls-ponte">' + esc(v[9]) + "</p>" : "") + "</div>";
        }).join("") + "</div>";
    }
    if (st.kind === "teoria") {
      var L = st.L;
      return '<p class="ls-k ' + st.lang + '">' + LICOES_LANG_LAB[st.lang] + " · teoria</p><h2 class=\"ls-h\">" + esc(L.titulo) + "</h2>" +
        '<p class="ls-exp">' + esc(L.explicacao) + '</p><ul class="ls-exs">' + L.exemplos.map(function (ex) {
          var s = sayOf(ex, st.lang);
          return '<li><button class="ls-ex" data-l="say" data-say="' + esc(s) + '" data-lang="' + st.lang + '"' + (s ? "" : " disabled") + ">" + (s ? SPK : "") +
            "<span><b" + langAttr(ex[0], st.lang) + ">" + esc(ex[0]) + "</b>" + (ex[1] ? "<small>" + esc(ex[1]) + "</small>" : "") + "</span>" +
            (ex[2] ? "<em>" + esc(ex[2]) + "</em>" : "") + "</button></li>";
        }).join("") + "</ul>";
    }
    if (st.kind === "revisao") {
      return '<p class="ls-k">Revisão</p><h2 class="ls-h">' + esc(st.R.titulo) + '</h2><ul class="ls-rev">' + st.R.itens.map(function (it) {
        return '<li><span class="lex-tag ' + it.lang + '">' + LICOES_LANG_LAB[it.lang] + "</span>" + esc(it.texto) + "</li>";
      }).join("") + '</ul><p class="ls-exp">Primeiro, um treino rápido com o que você viu na semana. Depois, faça as tarefas acima.</p>';
    }
    var prompt = "";
    var showSay = st.say && (!st.hideSay || S.phase !== "idle");
    if (st.listen) prompt = '<div class="ls-listen">' + sayBtn(st.say, st.sayLang, "ls-bigspk", "Ouvir de novo") + "<span>Toque para ouvir de novo</span></div>";
    else if (st.t) {
      prompt = '<div class="ls-prompt">' + (showSay ? sayBtn(st.say, st.sayLang, "ls-spk") : "") +
        '<span class="ls-t"' + langAttr(st.t, st.tLang) + ">" + esc(st.t) + "</span>" + (st.tSub ? "<small>" + esc(st.tSub) + "</small>" : "") + "</div>";
    }
    return '<p class="ls-k ' + st.lang + '">' + LICOES_LANG_LAB[st.lang] + '</p><h2 class="ls-h">' + esc(st.q) + "</h2>" + prompt +
      '<div class="ls-opts">' + st.opts.map(function (o, i) {
        var cls = "ls-opt";
        if (S.phase !== "idle") { if (o.ok) cls += " is-ok"; else if (i === S.sel) cls += " is-bad"; else cls += " is-off"; }
        else if (i === S.sel) cls += " is-sel";
        return '<button class="' + cls + '" data-l="opt" data-i="' + i + '"' + (S.phase !== "idle" ? " disabled" : "") + ' aria-pressed="' + (i === S.sel) + '">' +
          "<kbd>" + (i + 1) + "</kbd><span><span" + langAttr(o.label, o.lang) + ">" + esc(o.label) + "</span>" + (o.sub ? "<small>" + esc(o.sub) + "</small>" : "") + "</span></button>";
      }).join("") + "</div>";
  }

  function lsEnd() {
    var S = LX, acc = S.total ? Math.round((S.first / S.total) * 100) : 100;
    var mins = Math.max(1, Math.round((Date.now() - S.t0) / 60000));
    S.acc = acc;
    var msg = acc === 100 ? "Nenhum erro. Impecável." :
      acc >= 80 ? "Muito bom. Os erros de hoje já voltaram uma vez; o Anki cuida do resto." :
      "Vale refazer amanhã antes da aula nova: os pontos que você errou precisam de mais uma passada.";
    return '<div class="ls-end"><p class="ls-k">' + esc(S.title) + '</p><h2 class="ls-h ls-big">Aula concluída!</h2>' +
      '<div class="ls-stats"><div><b>' + S.xp + "</b><span>XP</span></div><div><b>" + acc + "%</b><span>de acerto de primeira</span></div>" +
      "<div><b>" + mins + " min</b><span>de aula</span></div></div><p class=\"ls-exp\">" + msg + "</p></div>";
  }

  function lsRender() {
    var S = LX, st = S.queue[S.i];
    var pct = Math.round((S.i / S.queue.length) * 100);
    var top = '<header class="ls-top"><button class="ls-x" data-l="close" aria-label="Sair da aula">×</button>' +
      '<div class="ls-bar" role="progressbar" aria-label="Progresso da aula" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div>' +
      '<span class="ls-xp">' + S.xp + " XP</span></header>";
    var body, foot;
    if (!st) {
      body = lsEnd();
      foot = '<footer class="ls-foot"><div class="ls-fb"></div><button class="ls-btn" data-l="finish">Concluir</button></footer>';
    } else if (st.kind !== "q") {
      body = lsBody(st);
      foot = '<footer class="ls-foot"><div class="ls-fb"></div><button class="ls-btn" data-l="next">' + (st.kind === "teoria" ? "Praticar" : "Continuar") + "</button></footer>";
    } else {
      body = lsBody(st);
      if (S.phase === "idle") {
        foot = '<footer class="ls-foot"><div class="ls-fb"></div><button class="ls-btn" data-l="check"' + (S.sel < 0 ? " disabled" : "") + ">Verificar</button></footer>";
      } else if (S.phase === "ok") {
        foot = '<footer class="ls-foot ok" role="status"><div class="ls-fb"><strong>' + (S.streak >= 3 ? S.streak + " seguidas!" : rnd(PRAISE)) + "</strong>" +
          (st.e ? "<p>" + esc(st.e) + "</p>" : "") + '</div><button class="ls-btn" data-l="next">Continuar</button></footer>';
      } else {
        foot = '<footer class="ls-foot bad" role="status"><div class="ls-fb"><strong>Resposta certa: <span' + langAttr(st.answer, st.lang) + ">" + esc(st.answer) + "</span></strong>" +
          (st.e ? "<p>" + esc(st.e) + "</p>" : "") + '<p class="ls-again">Essa volta no fim da aula.</p></div><button class="ls-btn" data-l="next">Continuar</button></footer>';
      }
    }
    lsEl.innerHTML = top + '<div class="ls-body"><div class="ls-in">' + body + "</div></div>" + foot;
    if (st && st.kind === "q" && S.phase === "idle" && st.auto && !st.played) {
      st.played = true;
      setTimeout(function () { if (LX && LX.queue[LX.i] === st) speak(st.say, st.sayLang); }, 250);
    }
  }

  function lsCheck() {
    var S = LX, st = S.queue[S.i];
    if (!st || st.kind !== "q" || S.sel < 0 || S.phase !== "idle") return;
    st.tries = (st.tries || 0) + 1;
    if (st.opts[S.sel].ok) {
      S.streak++;
      S.xp += st.tries === 1 ? 10 : 5;
      if (st.tries === 1) S.first++;
      S.phase = "ok";
      beep("ok");
      if (st.say && (st.hideSay || !st.auto)) setTimeout(function () { speak(st.say, st.sayLang); }, 300);
    } else {
      S.streak = 0;
      S.phase = "bad";
      beep("bad");
      S.queue.push(Object.assign({}, st, { opts: shuffle(st.opts), played: false }));
    }
    lsRender();
  }

  function lsNext() {
    var S = LX;
    S.i++; S.phase = "idle"; S.sel = -1;
    if (S.i >= S.queue.length) beep("end");
    lsRender();
    var b = lsEl.querySelector(".ls-body");
    if (b) b.scrollTop = 0;
  }

  function lsFinish() {
    var S = LX, prev = state.aulas[S.n] || { xp: 0, acc: 0, vezes: 0 };
    state.aulas[S.n] = { xp: Math.max(prev.xp, S.xp), acc: Math.max(prev.acc, S.acc || 0), vezes: prev.vezes + 1 };
    state.xp += S.xp;
    if (blocksFor(S.n).some(function (b) { return b.id === "novas"; })) {
      var arr = state.log[S.n] || [];
      if (arr.indexOf("novas") < 0) state.log[S.n] = arr.concat("novas");
    }
    save();
    closeLesson();
    rerender();
    toast("+" + S.xp + " XP. Aula salva.");
  }

  function lsClick(e) {
    var t = e.target.closest("[data-l]");
    if (!t || !LX) return;
    var a = t.dataset.l;
    if (a === "say") { if (t.dataset.say) speak(t.dataset.say, t.dataset.lang); return; }
    if (a === "close") {
      if (LX.i >= LX.queue.length || confirm("Sair da aula? O progresso desta aula não será salvo.")) closeLesson();
      return;
    }
    if (a === "opt") { if (LX.phase === "idle") { LX.sel = Number(t.dataset.i); lsRender(); } return; }
    if (a === "check") { lsCheck(); return; }
    if (a === "next") { lsNext(); return; }
    if (a === "finish") lsFinish();
  }

  document.addEventListener("keydown", function (e) {
    if (!LX) return;
    var st = LX.queue[LX.i];
    if (e.key === "Escape") { lsEl.querySelector('[data-l="close"]').click(); return; }
    if (st && st.kind === "q" && LX.phase === "idle" && /^[1-4]$/.test(e.key) && st.opts[Number(e.key) - 1]) {
      LX.sel = Number(e.key) - 1; lsRender(); return;
    }
    if (e.key === "Enter") {
      var b = lsEl.querySelector(".ls-btn:not([disabled])");
      if (b) { e.preventDefault(); b.click(); }
    }
  });

  function heroAula(n) {
    var L = LICOES[n], a = state.aulas[n], s = buildSession(n);
    var nq = s.steps.filter(function (x) { return x.kind === "q"; }).length;
    var nt = s.steps.filter(function (x) { return x.kind === "teoria"; }).length;
    var mins = Math.round(nq * 0.5 + nt * 3 + 2);
    var kicker, topics;
    if (L && !L.revisao) {
      kicker = "Aula guiada";
      topics = '<ul class="hero-top">' + ["jp", "zh", "en"].filter(function (k) { return L[k]; }).map(function (k) {
        return '<li><span class="lex-tag ' + k + '">' + LICOES_LANG_LAB[k] + "</span>" + esc(L[k].titulo) + "</li>";
      }).join("") + "</ul>";
    } else if (L) {
      kicker = "Revisão da semana";
      topics = '<p class="hero-p">Questões de tudo o que você viu nos últimos dias, misturadas nas três línguas e no vocabulário.</p>';
    } else {
      kicker = "Treino";
      topics = '<p class="hero-p">A aula guiada deste dia ainda não foi escrita. Enquanto isso, treine com questões do mês 1.</p>';
    }
    return '<section class="hero' + (a ? " is-done" : "") + '"><div class="hero-txt"><p class="hero-k">' + kicker + "</p>" +
      "<h2>" + esc(s.title) + "</h2>" + topics +
      '<p class="hero-meta">' + nq + " exercícios · cerca de " + mins + " min" +
      (a ? ' · <b>Feita' + (a.vezes > 1 ? " " + a.vezes + " vezes" : "") + ", melhor acerto " + a.acc + "%</b>" : "") + "</p></div>" +
      '<button class="hero-btn" data-act="aula">' + (a ? "Refazer aula" : "Começar aula") + "</button></section>";
  }

  // ---------- telas ----------
  function renderSetup() {
    app.innerHTML =
      '<section class="setup">' +
      '<div class="glyphs" aria-hidden="true"><span>water</span><span lang="ja">水</span><span lang="zh-CN">水</span><span>agua</span></div>' +
      "<h1>Um ano, quatro línguas, uma palavra de cada vez.</h1>" +
      "<p>Cada conceito novo entra no mesmo dia em inglês, japonês, chinês e espanhol. Escolha o dia 1 e o site monta o seu estudo de cada dia.</p>" +
      '<div class="setup-row"><label class="field">Dia 1 do curso<input type="date" id="startInput" value="' + isoToday() + '"></label>' +
      '<button class="btn primary" data-act="start">Começar o curso</button></div>' +
      '<p class="hint">O progresso fica salvo neste navegador. Já tem um backup? <label class="link">Importar progresso<input type="file" accept="application/json" data-import hidden></label></p>' +
      "</section>";
  }

  function renderHoje() {
    if (!state.start) { renderSetup(); return; }
    var real = realDay();
    var n = state.viewDay || clamp(real, 1, TOTAL);
    var w = weekOf(n), d = dowOf(n), W = WEEKS[w - 1];
    var notice = "";
    if (real < 1) notice = "O curso começa em " + (1 - real) + (1 - real === 1 ? " dia" : " dias") + ". Dá para adiantar a leitura do dia 1.";
    else if (real > TOTAL) notice = "Os 365 dias acabaram. Compare suas gravações finais com as do dia 7.";
    else if (n !== real) notice = "Você está vendo o dia " + n + '. <button class="link" data-act="today">Voltar para hoje, dia ' + real + "</button>";

    var head =
      '<section class="day-head">' +
      "<div>" +
      '<p class="day-date">' + esc(cap(fmtDate(dateOfDay(n)))) + "</p>" +
      '<h1 class="day-num">Dia ' + n + "<small>de 365</small></h1>" +
      '<p class="day-meta">Semana ' + w + ", dia " + d + " de 7. " + roleOf(n) + ".</p>" +
      "</div>" +
      '<div class="day-tools">' +
      '<div class="day-nav"><button data-act="prev" aria-label="Dia anterior"' + (n <= 1 ? " disabled" : "") + ">‹</button>" +
      '<button data-act="next" aria-label="Próximo dia"' + (n >= TOTAL ? " disabled" : "") + ">›</button></div>" +
      '<div class="seg" role="group" aria-label="Modo de estudo">' +
      '<button data-mode="nucleo" aria-pressed="' + (state.mode === "nucleo") + '">Núcleo, 3 h</button>' +
      '<button data-mode="turbo" aria-pressed="' + (state.mode === "turbo") + '">Turbo, 6 h</button>' +
      "</div></div></section>";

    var quadra = "";
    if (n <= 28 && d <= 5) {
      var i0 = (w - 1) * 25 + (d - 1) * 5;
      quadra = '<section class="panel"><div class="panel-head"><h2>Quadra do dia</h2><p>Toque numa língua para ouvir a pronúncia.</p></div>' +
        '<div class="qlist">' + VOCAB.slice(i0, i0 + 5).map(qcard).join("") + "</div></section>";
    } else if (d <= 5 && W[2] > 0) {
      quadra = '<section class="panel"><div class="panel-head"><h2>Quadra da semana</h2></div>' +
        '<p class="notice">' + esc(W[1]) + ": " + W[2] + " conceitos novos por dia útil. Peça ao Claude o CSV da semana " + w + " e importe no Anki.</p></section>";
    }

    var aula = lessonPanel(n);

    var bl = blocksFor(n), got = state.log[n] || [];
    var total = bl.reduce(function (a, b) { return a + b.m; }, 0);
    var blocks = '<section class="panel"><div class="panel-head"><h2>Plano do dia</h2><p>' + fmtMin(total) + " no modo " + (state.mode === "turbo" ? "Turbo" : "Núcleo") + ". Marque cada bloco ao terminar.</p></div>" +
      '<ul class="blocks">' + bl.map(function (b) {
        var on = got.indexOf(b.id) >= 0;
        return '<li class="block ' + (b.lang || "") + (on ? " is-done" : "") + '"><label>' +
          '<input type="checkbox" data-block="' + b.id + '" data-day="' + n + '"' + (on ? " checked" : "") + ">" +
          '<span><span class="b-title"><span>' + esc(b.t) + '</span><span class="b-min">' + b.m + " min</span></span>" +
          '<span class="b-desc">' + esc(b.x) + "</span></span></label></li>";
      }).join("") + "</ul></section>";

    var done = 0, cells = "";
    for (var i = 1; i <= TOTAL; i++) {
      var st = dayState(i);
      if (st === "done") done++;
      var cls = st === "done" ? "done" : st === "partial" ? "partial" : (real && i < real ? "missed" : "");
      if (ZERO.indexOf(weekOf(i)) >= 0) cls += " cp";
      if (i === real) cls += " today";
      if (i === n && n !== real) cls += " viewing";
      cells += '<button class="' + cls + '" data-goto="' + i + '" title="Dia ' + i + ", semana " + weekOf(i) + '" aria-label="Dia ' + i + '"></button>';
    }
    var year = '<section class="panel"><div class="panel-head"><h2>O ano</h2><p>Cada quadrado é um dia. Toque para abrir.</p></div>' +
      '<div class="stats"><div class="stat"><b>' + done + '</b><span>dias concluídos</span></div>' +
      '<div class="stat"><b>' + streak() + '</b><span>dias seguidos</span></div>' +
      '<div class="stat"><b>' + Math.round((done / TOTAL) * 100) + '%</b><span>do ano</span></div>' +
      '<div class="stat"><b>' + state.xp + '</b><span>XP total</span></div></div>' +
      '<div class="year-wrap"><div class="year">' + cells + "</div></div>" +
      '<div class="legend"><span><i style="background:var(--done)"></i>Concluído</span><span><i style="background:var(--partial)"></i>Parcial</span>' +
      '<span><i style="background:var(--missed)"></i>Passou sem registro</span><span><i style="background:var(--future);box-shadow:inset 0 0 0 1.5px var(--zh)"></i>Semana de checkpoint</span></div></section>';

    var settings = '<details class="settings"><summary>Ajustes e backup</summary>' +
      '<div class="set-row"><label class="field">Dia 1 do curso<input type="date" id="startEdit" value="' + esc(state.start) + '"></label>' +
      '<button class="btn" data-act="savestart">Salvar data</button></div>' +
      '<div class="set-row"><button class="btn" data-act="export">Exportar progresso</button>' +
      '<label class="btn">Importar progresso<input type="file" accept="application/json" data-import hidden></label>' +
      '<button class="btn" data-act="reset">Apagar progresso</button></div>' +
      '<p class="hint" style="margin-top:12px">O progresso fica neste navegador. Para usar no celular e no computador, exporte num e importe no outro.</p></details>';

    app.innerHTML = head + (notice ? '<p class="notice">' + notice + "</p>" : "") + heroAula(n) + quadra + blocks + aula + year + settings;
  }

  function renderMetodo() {
    var html = md(METODO_MD);
    var heads = (METODO_MD.match(/^## .+$/gm) || []).map(function (h) { var t = h.slice(3); return '<a href="#metodo/' + slug(t) + '">' + esc(t) + "</a>"; });
    app.innerHTML = '<header class="page-head"><h1>Método</h1><p>Como o ano funciona: metas, as pontes entre as línguas, o dia-padrão, o Anki e as regras para não quebrar a sequência.</p></header>' +
      '<nav class="toc" aria-label="Seções do método">' + heads.join("") + "</nav>" +
      '<article class="doc">' + html + "</article>";
  }

  function renderPlano() {
    var real = realDay();
    var cw = real && real >= 1 && real <= TOTAL ? weekOf(real) : null;
    var f = state.planFilter;
    var tris = f ? [TRIMESTRES[f - 1]] : TRIMESTRES;
    var filt = '<div class="filters"><div class="seg" role="group" aria-label="Filtrar trimestre">' +
      ["Ano todo", "T1", "T2", "T3", "T4"].map(function (t, i) { return '<button data-tri="' + i + '" aria-pressed="' + (f === i) + '">' + t + "</button>"; }).join("") +
      "</div>" + (cw ? '<span class="hint">Você está na semana ' + cw + ".</span>" : "") + "</div>";
    var body = tris.map(function (T) {
      var rows = WEEKS.filter(function (r) { return r[0] >= T.de && r[0] <= T.ate; }).map(function (r) {
        var cls = (r[0] === cw ? "current " : "") + (r[2] === 0 ? "cp" : "");
        return '<tr class="' + cls + '"><td class="wk">S' + r[0] + "<small>" + (r[2] ? r[2] + " novos/dia" : "sem novos") + "</small></td>" +
          "<td>" + esc(r[1]) + "</td><td>" + esc(r[3]) + "</td><td>" + esc(r[4]) + "</td><td>" + esc(r[5]) + "</td><td>" + esc(r[6]) + "</td></tr>";
      }).join("");
      return '<section class="tri"><h2>' + T.nome + ", semanas " + T.de + " a " + T.ate + '</h2><p class="tri-lead">' + esc(T.lead) + "</p>" +
        '<div class="tw"><table><thead><tr><th>Semana</th><th>Quadra</th><th class="jp">Japonês</th><th class="zh">Chinês</th><th class="en">Inglês</th><th class="es">Espanhol</th></tr></thead><tbody>' + rows + "</tbody></table></div></section>";
    }).join("");
    app.innerHTML = '<header class="page-head"><h1>Plano de 52 semanas</h1><p>Dias 1 a 5 de cada semana trazem conteúdo novo, o dia 6 consolida e o dia 7 testa. A coluna Quadra diz o tema dos conceitos que entram nas 4 línguas.</p></header>' + filt + body;
  }

  function renderMes1() {
    var real = realDay();
    var rows = DAYS.map(function (r) {
      return '<tr class="' + (r[0] === real ? "current" : "") + '"><td class="wk">D' + r[0] + "<small>S" + weekOf(r[0]) + "</small></td><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + "</td><td>" + esc(r[3]) + "</td><td>" + esc(r[4]) + "</td></tr>";
    }).join("");
    app.innerHTML = '<header class="page-head"><h1>Mês 1, dia a dia</h1><p>No mês 1 o espanhol aparece só no verso dos cartões, para leitura passiva. O bloco próprio começa na semana 9.</p></header>' +
      '<div class="tw"><table><thead><tr><th>Dia</th><th>Quadra</th><th class="jp">Japonês</th><th class="zh">Chinês</th><th class="en">Inglês</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<p class="hint" style="margin-top:16px">Dias 24 e 25: em japonês os dias da semana seguem os planetas, e o espanhol também. 火曜日 é o dia de Marte, como martes; 水曜日 é Mercúrio, como miércoles; 金曜日 é Vênus, como viernes.</p>';
  }

  function vocabList() {
    var q = state.vocabQ.trim().toLowerCase();
    return VOCAB.filter(function (v) {
      return (!state.vocabWeek || Math.ceil(v[0] / 25) === state.vocabWeek) && (!q || v.join(" ").toLowerCase().indexOf(q) >= 0);
    });
  }
  function vocabRows() {
    var list = vocabList();
    if (!list.length) return '<tr><td colspan="7">Nenhum conceito encontrado. Tente outra palavra ou limpe a busca.</td></tr>';
    return list.map(function (v) {
      return "<tr><td>" + v[0] + "</td><td><strong>" + esc(v[1]) + "</strong></td>" +
        '<td><button class="vcell ans" data-say="' + esc(v[2]) + '" data-lang="en"><span class="big" style="font-size:16px">' + esc(v[2]) + "</span></button></td>" +
        '<td><button class="vcell ans" data-say="' + esc(v[4]) + '" data-lang="jp"><span class="big" lang="ja">' + esc(v[3]) + '</span><small><span lang="ja">' + esc(v[4]) + "</span> " + esc(v[5]) + "</small></button></td>" +
        '<td><button class="vcell ans" data-say="' + esc(v[6]) + '" data-lang="zh"><span class="big" lang="zh-CN">' + esc(v[6]) + "</span><small>" + esc(v[7]) + "</small></button></td>" +
        '<td><button class="vcell ans" data-say="' + esc(v[8]) + '" data-lang="es"><span class="big" style="font-size:16px">' + esc(v[8]) + "</span></button></td>" +
        '<td class="ponte">' + esc(v[9]) + "</td></tr>";
    }).join("");
  }
  function renderVocab() {
    app.innerHTML = '<header class="page-head"><h1>Vocabulário do mês 1</h1><p>100 conceitos, 5 por dia útil, cada um nas 4 línguas. Toque numa palavra para ouvir. No modo treino as respostas ficam borradas até você tocar.</p></header>' +
      '<div class="filters">' +
      '<label class="field">Semana<select id="vWeek"><option value="0">Todas</option><option value="1">Semana 1</option><option value="2">Semana 2</option><option value="3">Semana 3</option><option value="4">Semana 4</option></select></label>' +
      '<label class="field">Buscar<input type="search" id="vQ" placeholder="água, 水, shuǐ…" value="' + esc(state.vocabQ) + '"></label>' +
      '<button class="btn" data-act="training" aria-pressed="' + state.training + '">' + (state.training ? "Mostrar respostas" : "Modo treino") + "</button>" +
      '<button class="btn primary" data-act="csv">Baixar CSV para o Anki</button>' +
      "</div>" +
      '<div class="tw' + (state.training ? " training" : "") + '" id="vWrap"><table><thead><tr><th>#</th><th>PT</th><th class="en">Inglês</th><th class="jp">Japonês</th><th class="zh">Chinês</th><th class="es">Espanhol</th><th>Ponte</th></tr></thead><tbody id="vBody">' + vocabRows() + "</tbody></table></div>" +
      '<p class="hint" style="margin-top:16px">Para importar: no Anki, crie um tipo de nota chamado Quadra com os campos PT, EN, JP_kanji, JP_kana, JP_romaji, ZH_hanzi, ZH_pinyin, ES e Ponte. Depois use Arquivo, Importar e escolha o CSV.</p>';
    document.getElementById("vWeek").value = String(state.vocabWeek);
  }

  function csvExport() {
    var list = VOCAB.filter(function (v) { return !state.vocabWeek || Math.ceil(v[0] / 25) === state.vocabWeek; });
    var q = function (s) { s = String(s); return /[;"\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    var lines = [
      "#separator:Semicolon",
      "#html:false",
      "#columns:PT;EN;JP_kanji;JP_kana;JP_romaji;ZH_hanzi;ZH_pinyin;ES;Ponte;Tags",
      "#tags column:10"
    ];
    list.forEach(function (v) {
      lines.push([v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], "quadra semana" + Math.ceil(v[0] / 25)].map(q).join(";"));
    });
    download(state.vocabWeek ? "quadra-semana-" + state.vocabWeek + ".csv" : "quadra-mes-1.csv", lines.join("\n"), "text/csv;charset=utf-8");
    toast("CSV baixado com " + list.length + " conceitos.");
  }

  // ---------- markdown mínimo ----------
  function slug(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function md(src) {
    var lines = src.trim().split("\n"), html = "", i = 0;
    var isBlock = function (l) { return /^(## |\| |- |\d+\. )/.test(l); };
    var cells = function (r) { return r.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); }); };
    while (i < lines.length) {
      var l = lines[i];
      if (!l.trim()) { i++; continue; }
      if (l.indexOf("## ") === 0) { var t = l.slice(3); html += '<h2 id="' + slug(t) + '">' + inline(t) + "</h2>"; i++; continue; }
      if (l.indexOf("| ") === 0) {
        var rows = [];
        while (i < lines.length && lines[i].indexOf("|") === 0) { rows.push(lines[i]); i++; }
        var head = cells(rows[0]), body = rows.slice(2).map(cells);
        html += '<div class="tw"><table><thead><tr>' + head.map(function (h) { return "<th>" + inline(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          body.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
        continue;
      }
      if (/^\d+\. /.test(l) || l.indexOf("- ") === 0) {
        var ordered = /^\d+\. /.test(l), items = [];
        while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i]) : lines[i].indexOf("- ") === 0)) {
          items.push(lines[i].replace(/^(\d+\. |- )/, ""));
          i++;
        }
        var tag = ordered ? "ol" : "ul";
        html += "<" + tag + ">" + items.map(function (it) { return "<li>" + inline(it) + "</li>"; }).join("") + "</" + tag + ">";
        continue;
      }
      var p = [];
      while (i < lines.length && lines[i].trim() && !isBlock(lines[i])) { p.push(lines[i]); i++; }
      html += "<p>" + inline(p.join(" ")) + "</p>";
    }
    return html;
  }

  // ---------- rotas ----------
  var VIEWS = { hoje: renderHoje, metodo: renderMetodo, plano: renderPlano, mes1: renderMes1, vocab: renderVocab };
  function route() {
    var raw = (location.hash || "#hoje").slice(1).split("/");
    var view = VIEWS[raw[0]] ? raw[0] : "hoje";
    document.querySelectorAll(".tabs a").forEach(function (a) {
      if (a.dataset.view === view) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    VIEWS[view]();
    if (raw[1]) {
      var el = document.getElementById(raw[1]);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  function rerender() { var y = window.scrollY; route(); window.scrollTo(0, y); }

  // ---------- eventos ----------
  app.addEventListener("click", function (e) {
    var t = e.target.closest("[data-act],[data-mode],[data-say],[data-goto],[data-tri]");
    if (!t) return;

    if (t.dataset.say !== undefined) {
      if (state.training && t.classList.contains("ans") && !t.classList.contains("shown")) { t.classList.add("shown"); return; }
      speak(t.dataset.say, t.dataset.lang);
      return;
    }
    if (t.dataset.mode) { state.mode = t.dataset.mode; save(); rerender(); return; }
    if (t.dataset.goto) { state.viewDay = Number(t.dataset.goto); rerender(); window.scrollTo({ top: 0 }); return; }
    if (t.dataset.tri !== undefined) { state.planFilter = Number(t.dataset.tri); rerender(); return; }

    var act = t.dataset.act;
    var real = realDay();
    var cur = state.viewDay || clamp(real || 1, 1, TOTAL);
    if (act === "start") {
      var v = document.getElementById("startInput").value;
      if (!v) { toast("Escolha a data do dia 1."); return; }
      state.start = v; state.viewDay = null; save(); route(); toast("Curso iniciado. Bons estudos.");
    } else if (act === "prev") { state.viewDay = clamp(cur - 1, 1, TOTAL); rerender(); }
    else if (act === "next") { state.viewDay = clamp(cur + 1, 1, TOTAL); rerender(); }
    else if (act === "today") { state.viewDay = null; rerender(); }
    else if (act === "aula") { openLesson(cur); }
    else if (act === "savestart") {
      var nv = document.getElementById("startEdit").value;
      if (!nv) { toast("Escolha uma data válida."); return; }
      state.start = nv; state.viewDay = null; save(); rerender(); toast("Data do dia 1 salva.");
    } else if (act === "export") {
      download("progresso-curso-trilingue.json", JSON.stringify({ start: state.start, mode: state.mode, log: state.log, aulas: state.aulas, xp: state.xp }, null, 2), "application/json");
      toast("Progresso exportado.");
    } else if (act === "reset") {
      if (confirm("Apagar todo o progresso marcado, aulas e XP? A data do dia 1 continua.")) { state.log = {}; state.aulas = {}; state.xp = 0; save(); rerender(); toast("Progresso apagado."); }
    } else if (act === "training") {
      state.training = !state.training; renderVocab();
    } else if (act === "csv") { csvExport(); }
  });

  app.addEventListener("change", function (e) {
    var t = e.target;
    if (t.dataset.block) {
      var n = Number(t.dataset.day), arr = (state.log[n] || []).slice();
      var idx = arr.indexOf(t.dataset.block);
      if (t.checked && idx < 0) arr.push(t.dataset.block);
      if (!t.checked && idx >= 0) arr.splice(idx, 1);
      if (arr.length) state.log[n] = arr; else delete state.log[n];
      save();
      var was = dayState(n);
      rerender();
      if (t.checked && was === "done") toast("Dia " + n + " concluído.");
      return;
    }
    if (t.hasAttribute("data-import") && t.files && t.files[0]) {
      var r = new FileReader();
      r.onload = function () {
        try {
          var data = JSON.parse(r.result);
          if (!data || typeof data.log !== "object") throw new Error("formato");
          state.start = data.start || state.start;
          state.mode = data.mode === "turbo" ? "turbo" : "nucleo";
          state.log = data.log;
          if (data.aulas && typeof data.aulas === "object") state.aulas = data.aulas;
          if (typeof data.xp === "number") state.xp = data.xp;
          state.viewDay = null;
          save(); route(); toast("Progresso importado.");
        } catch (err) { toast("Arquivo inválido: use um backup exportado por este site."); }
      };
      r.readAsText(t.files[0]);
      return;
    }
    if (t.id === "vWeek") {
      state.vocabWeek = Number(t.value);
      document.getElementById("vBody").innerHTML = vocabRows();
    }
  });

  app.addEventListener("input", function (e) {
    if (e.target.id === "vQ") {
      state.vocabQ = e.target.value;
      document.getElementById("vBody").innerHTML = vocabRows();
    }
  });

  window.addEventListener("hashchange", route);
  route();
})();
