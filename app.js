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
      '<div class="stat"><b>' + Math.round((done / TOTAL) * 100) + '%</b><span>do ano</span></div></div>' +
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

    app.innerHTML = head + (notice ? '<p class="notice">' + notice + "</p>" : "") + quadra + blocks + year + settings;
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
    else if (act === "savestart") {
      var nv = document.getElementById("startEdit").value;
      if (!nv) { toast("Escolha uma data válida."); return; }
      state.start = nv; state.viewDay = null; save(); rerender(); toast("Data do dia 1 salva.");
    } else if (act === "export") {
      download("progresso-curso-trilingue.json", JSON.stringify({ start: state.start, mode: state.mode, log: state.log }, null, 2), "application/json");
      toast("Progresso exportado.");
    } else if (act === "reset") {
      if (confirm("Apagar todo o progresso marcado? A data do dia 1 continua.")) { state.log = {}; save(); rerender(); toast("Progresso apagado."); }
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
