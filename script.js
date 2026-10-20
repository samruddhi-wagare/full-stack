/* ===== EDIT THIS: your content ===== */
const C = {
  code: "150926",
  memories: [
    {
      e: "💬",
      d: "23 july 2026-[3:33]-15 aug 2026",
      img: "images/memory1.png",
      blur: true,
      t: "From late-night conversations that brought us closer to the moment we finally said those three words— everything between us felt even more beautiful❤️.",
    },

    {
      e: "💌",
      img: "images/memory2.jpeg",
      blur: true,
      d: "15 sept 2026 ",
      t: "Our first face-to-face meeting, our first “I love you,” and the first time our hand  s found each other. 🫶"
    },
    {
      e: "🏍️",
      img: "images/memory3.jpeg",
      blur: true,
      d: "16 Sept 2026",
      t: "Our first long ride, our first hug, our first kiss — little firsts that became unforgettable pieces of our story.",
    },

    {
      e: "🫶",
      img: "images/memory4.jpeg",
      blur: true,
      d: "17,18 sept 2026 ",
      t: "All those days we spent together, doing nothing extraordinary yet somehow making every moment feel special.",
    },
    {
      e: "✨",
      img: "images/memory5.png",
      blur: true,
      t: "Every tiny moment, every smile, every silly conversation — the little things that quietly became my favorite memories of us.",
    },
  ],
gallery: [
 { s: "images/img1.jpeg", t: "A moment we never had, but somehow feels real", n: "A little dream of us ✨❤️" },
{ s: "images/img13.jpeg", t: "If dreams could turn into memories", n: "I’d choose us, every time 🤍" },
{ s: "images/img3.jpeg", t: "And then, we finally met", n: "The beginning of our real memories ❤️" },
{ s: "images/img9.jpeg", t: "The day the picture became a memory", n: "One of my favorite days with you 🫶" },
{ s: "images/img12.jpeg", t: "Where our little memories began", n: "A moment I’ll always keep close 🤍" },
],
  letters: [
    "My dearest, on this special day I want you to know that every moment I've spent with you has been the greatest gift of my life.",
"Shonuuuuu You’re such a wonderful, responsible, and caring person. ❤️ The way you respect everyone and do everything you can for your family makes me admire you even more. I love you, your personality, and the way you think. 🥹❤️ Please never change these beautiful things about yourself. 🫶🏻✨",
    "Thank you for always being there, for understanding me, supporting me, and making my life a little more beautiful. ❤️Happy Birthday to the one I want beside me, always and forever. 🫶✨",
  ],
  songs: [
    {
      n: "Abhi Na Jao Chhod Kar",
      a: "Asha Bhosle, Mohammed Rafi",
      src: "music/abhi%20na%20jao%20chodkar.mp3",
    },
    {
      n: "Tere Paas Main",
      a: "A. R. Rahman,Deepali Sahay ",
      src: "music/tere%20paas%20main.mp3",
    },
    {
      n: "Ye Shaam Mastani",
      a: "Kishore Kumar,R. D. Burman",
      src: "music/ye%20shaam%20mastani.mp3",
    },
  ],
  gifts: [
    { e: "🎀", ok: 1, top: "💐", t: "You found a box full of love, hugs, and birthday kisses ❤️" },
    { e: "📦", ok: 0 },
    { e: "🧸", ok: 1, top: "🧸", t: "Your own pocket-sized hug, whenever you need one 🤗" },
    { e: "🎁", ok: 0 },
    { e: "💝", ok: 1, top: "💌", t: "A little love note that says: you are my favourite makadaaaa 🙈" },
  ],
};
/* ==================================== */

const $ = (id) => document.getElementById(id),
  md = $("md"),
  mb = $("mb");
const introAudio = new Audio("music/happybirthday.mp3.webm");
introAudio.preload = "auto";
introAudio.load();
const backgroundAudio = new Audio(
  "music/bgmusic.mp3",
);
backgroundAudio.preload = "auto";
backgroundAudio.loop = true;
backgroundAudio.volume = 0.2;
const cakeAudio = new Audio("music/music1..mp3");
cakeAudio.preload = "auto";
cakeAudio.loop = true;
const backgroundMusicToggle = $("bgMusicToggle");
let memoryMusicStarted = false;
let cakeMusicStarted = false;
let backgroundMusicRequested = false;
let backgroundMusicManuallyPaused = false;
let favoriteSessionActive = false;
let resumeBackgroundAfterFavorite = false;
const show = (h) => {
  mb.innerHTML = h;
  const bx = document.querySelector(".box");
  bx.classList.toggle("gift-box", !!mb.querySelector(".gift-result"));
  bx.classList.toggle("photo-box", !!mb.querySelector(".pz"));
  md.classList.add("on");
};

// floating hearts
setInterval(() => {
  const h = document.createElement("i");
  h.textContent = ["♥", "💗", "✨"][(Math.random() * 3) | 0];
  h.style.left = Math.random() * 100 + "%";
  h.style.fontSize = 10 + Math.random() * 16 + "px";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  $("hearts").append(h);
  setTimeout(() => h.remove(), 12000);
}, 700);

// falling hearts (date page + intro)
function heartRain(layer, o) {
  const { every = 380, sizes = [12, 32], life = [7, 13], alpha = [0.55, 0.95],
    set = ["❤️", "💗", "💖", "💕", "🩷", "✨"], alive } = o;
  const r = (a, b) => a + Math.random() * (b - a);
  const spawn = (pre) => {
    const h = document.createElement("i");
    h.className = "rain";
    h.textContent = set[(Math.random() * set.length) | 0];
    h.style.left = r(0, 100) + "%";
    h.style.fontSize = r(...sizes) + "px";
    const d = r(...life);
    h.style.animationDuration = d + "s";
    if (pre) h.style.animationDelay = -r(0, d * 0.9) + "s";
    h.style.setProperty("--sw", r(-45, 45) + "px");
    h.style.setProperty("--rot", r(-70, 70) + "deg");
    h.style.setProperty("--o", r(...alpha).toFixed(2));
    layer.append(h);
    setTimeout(() => h.remove(), d * 1000 + 300);
  };
  const t = setInterval(() => {
    if (alive()) spawn();
    else { clearInterval(t); layer.remove(); }
  }, every);
  for (let i = 0; i < 12; i++) spawn(true);
}

// red heart pops in + a burst of small hearts
function popHeart() {
  const hh = $("hh"), L = $("introHearts");
  hh.classList.add("on");
  const b = hh.getBoundingClientRect(), cx = b.left + b.width / 2, cy = b.top + b.height / 2;
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("i"), a = (i / 16) * Math.PI * 2 + Math.random() * 0.4,
      d = 70 + Math.random() * 90;
    p.textContent = ["❤️", "💗", "💖", "✨"][i % 4];
    p.style.cssText = `position:absolute;left:${cx}px;top:${cy}px;font-style:normal;margin:-8px 0 0 -8px;font-size:${10 + Math.random() * 12}px`;
    L.append(p);
    p.animate(
      [
        { transform: "translate(0,0) scale(.3)", opacity: 1 },
        { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d - 20}px) scale(1.1)`, opacity: 0 },
      ],
      { duration: 1300 + Math.random() * 500, easing: "cubic-bezier(.15,.7,.3,1)" },
    ).onfinish = () => p.remove();
  }
}

heartRain($("lockHearts"), { alive: () => $("lock").style.display !== "none" });

// lock
const cd = $("code"),
  ins = [];
for (let i = 0; i < 6; i++) {
  const n = document.createElement("input");
  n.maxLength = 1;
  n.inputMode = "numeric";
  n.oninput = () => {
    n.value = n.value.replace(/\D/, "");
    if (n.value && ins[i + 1]) ins[i + 1].focus();
    chk();
  };
  n.onkeydown = (e) => {
    if (e.key === "Backspace" && !n.value && ins[i - 1]) ins[i - 1].focus();
  };
  ins.push(n);
  cd.append(n);
}
function chk() {
  const v = ins.map((x) => x.value).join("");
  if (v.length < 6) return;
  if (v === C.code) {
    $("lock").style.display = "none";
    intro();
  } else {
    cd.classList.add("shake");
    $("hint").textContent =
      "😤 How could you possibly forget the day we first met? 😒❤️ I know you’re not actually forgetting it 😏❤️Now come on…👀💕Try again… and this time, use your heart. 🥹💕🤦‍♀️❤️ ";
    setTimeout(() => {
      cd.classList.remove("shake");
      ins.forEach((x) => (x.value = ""));
      ins[0].focus();
    }, 450);
  }
}
let started = false;
function intro() {
  if (started) return;
  started = true;
  const introDuration = 18000;
  const fadeDuration = 900;
  const introStartedAt = performance.now();
  $("load").style.display = "flex";
  heartRain($("introHearts"), {
    every: 520, sizes: [10, 22], alpha: [0.35, 0.7], set: ["❤️", "💗", "💖", "💕"],
    alive: () => $("load").style.display !== "none",
  });
  introAudio.currentTime = 0;
  introAudio.loop = false;
  introAudio.play().catch((error) => {
    console.error("Could not play the intro soundtrack:", error);
  });
  setTimeout(() => introAudio.pause(), introDuration);
  const cv = $("stars"),
    x = cv.getContext("2d");
  cv.width = innerWidth;
  cv.height = innerHeight;
  const S = Array.from({ length: 180 }, () => ({
    x: Math.random() * cv.width,
    y: Math.random() * cv.height,
    r: Math.random() * 1.8 + 0.4,
    p: Math.random() * 6.28,
    v: Math.random() * 2.5 + 1.2,
  }));
  (function draw(t) {
    x.clearRect(0, 0, cv.width, cv.height);
    S.forEach((s) => {
      const a = Math.max(0, Math.sin((t / 1000) * s.v + s.p));
      x.globalAlpha = 0.08 + 0.92 * a * a;
      x.fillStyle = "#fff";
      x.shadowColor = "#fff";
      x.shadowBlur = s.r * 5 * a;
      x.beginPath();
      x.arc(s.x, s.y, s.r * (0.7 + 0.5 * a), 0, 7);
      x.fill();
    });
    x.shadowBlur = 0;
    if ($("load").style.display !== "none") requestAnimationFrame(draw);
  })(0);
  const L = [
      "Someone special is here… ✨",
      "Gathering our sweetest memories… ♡",
      "Preparing something made with all my love… 🌻",
      "Tonight, the stars shine a little brighter… because it's your day. ✨",
    ],
    ps = [...document.querySelectorAll("#load p")];
  const greeting = "HAPPY BIRTHDAY, Siddddddddd";
  const typingUnits =
    L.reduce((total, text) => total + text.length * 35, 0) +
    greeting.length * 80;
  const holdDuration = 3200; // time the red heart stays before fading
  const typingDuration = introDuration - fadeDuration - holdDuration;
  const segments = [
    ...L.map((text, i) => ({ el: ps[i], text, pace: 35 })),
    { el: $("htt"), text: greeting, pace: 80 },
  ];
  let offset = 0;
  const timedSegments = segments.map(({ el, text, pace }) => {
    const duration = (text.length * pace * typingDuration) / typingUnits;
    const segment = { el, text, start: offset, duration };
    offset += duration;
    return segment;
  });
  let faded = false, hearted = false;
  const animation = setInterval(() => {
    const elapsed = performance.now() - introStartedAt;
    for (const segment of timedSegments) {
      const progress = Math.max(
        0,
        Math.min((elapsed - segment.start) / segment.duration, 1),
      );
      segment.el.textContent = segment.text.slice(
        0,
        Math.floor(progress * segment.text.length),
      );
    }
    if (!hearted && elapsed >= typingDuration) {
      hearted = true;
      popHeart();
    }
    if (!faded && elapsed >= typingDuration + holdDuration) {
      faded = true;
      $("load").style.transition = `opacity ${fadeDuration}ms`;
      $("load").style.opacity = 0;
      clearInterval(animation);
    }
  }, 30);
  setTimeout(() => {
    introAudio.pause();
    $("load").style.display = "none";
    $("main").style.display = "block";
    obs();
    startBackgroundMusic();
  }, introDuration);
}

function obs() {
  const o = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
    { threshold: 0.15 },
  );
  document.querySelectorAll("h2,.sub,.player,.cake").forEach((e) => {
    e.classList.add("rv");
    o.observe(e);
  });
}

// balloons
$("bals").innerHTML = C.memories
  .map((m, i) => `<div class="bal" data-i="${i}">${m.e}</div>`)
  .join("");

$("bals").onclick = (e) => {
  const b = e.target.closest(".bal");
  if (!b) return;
  const m = C.memories[b.dataset.i];
  const pic = m.img
    ? `<img class="memory-photo${m.blur ? " blurred" : ""}" src="${m.img}" alt="" draggable="false">`
    : `<div class="ph"><div style="font-size:2.6rem">${m.e}</div></div>`;
  show(`<div class="memory-card">${pic}${m.d ? `<div class="memory-when s">${m.d}</div>` : ""}<p class="s" style="font-size:1.4rem">${m.t}</p></div>`);
};
function ring3d(el, items, capEl) {
  const len = items.length,
    N = len * Math.max(1, Math.ceil(8 / len)), // repeat photos so the ring has at least 8 cards
    step = 360 / N,
    W = Math.min(innerWidth * 0.55, 230),
R = W * 1.55, // bigger ring = cards no longer touch each other
    AUTO = true; // set false to stop the slow auto-rotation
  el.style.setProperty("--w", W + "px");
  const pic = (o) => (o.s ? `<img src="${o.s}" draggable="false">` : `<div class="ph">📷</div>`);
  el.innerHTML = `<div class="ring">${Array.from({ length: N }, (_, i) => {
    const o = items[i % len];
    return `<div class="rc" data-i="${i}" style="transform:rotateY(${i * step}deg) translateZ(${R}px)">${pic(o)}<p>${o.t || ""}</p></div>`;
  }).join("")}</div>`;
  const ring = el.firstChild, cs = [...ring.children];
  let rot = 0, target = 0, drag = false, sx = 0, sr = 0, moved = false, idle = 0, last = -1;
  const norm = (d) => ((((d + 180) % 360) + 360) % 360) - 180;
  if (capEl) capEl.textContent = "Drag to turn the photos ✨";

  const frame = () => {
    if (!drag) rot += (target - rot) * 0.1;
    ring.style.transform = `translateZ(${-R}px) rotateY(${-rot}deg)`;
    cs.forEach((c, i) => {
const t = Math.abs(norm(i * step - rot)) / step; // distance from the front, in card slots
c.style.opacity = t <= 1.2 ? 1 : t >= 2.6 ? 0 : 1 - (t - 1.2) / 1.4;    });
    const k = ((Math.round(rot / step) % N) + N) % N;
    if (k !== last) {
      if (last !== -1 && capEl) capEl.textContent = items[k % len].t || "";
      last = k;
    }
    requestAnimationFrame(frame);
  };
  frame();

  el.onpointerdown = (e) => { drag = true; moved = false; sx = e.clientX; sr = rot; idle = Date.now(); };
  el.onpointermove = (e) => {
    if (!drag) return;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 6) moved = true;
    rot = sr - dx * 0.3;
  };
  addEventListener("pointerup", () => {
    if (!drag) return;
    drag = false;
    idle = Date.now();
    target = Math.round(rot / step) * step;
  });
  el.onclick = (e) => {
    if (moved) return;
    const c = e.target.closest(".rc");
    if (!c) return;
    const i = +c.dataset.i, d = norm(i * step - rot);
    if (Math.abs(d) < step / 2) {
      const o = items[i % len];
      show(`<div class="pz">${pic(o)}${o.n ? `<span class="note">${o.n}</span>` : ""}<p class="s">${o.t || ""}</p></div>`);
    } else target = Math.round((rot + d) / step) * step;
  };
  if (AUTO)
    setInterval(() => {
      if (!drag && Date.now() - idle > 4000) target += step;
    }, 3500);
}
ring3d($("gal"), C.gallery, $("galcap"));
// letters
$("envs").innerHTML = C.letters
  .map((l, i) => `<div class="env" data-i="${i}">Letter #${i + 1}</div>`)
  .join("");

$("envs").onclick = (e) => {
  const v = e.target.closest(".env");
  if (v)
    show(
      `<div class="paper">${C.letters[v.dataset.i]}</div><button class="btn" style="margin-top:1rem" onclick="md.classList.remove('on')">close letter ✕</button>`,
    );
};

// music
let ti = 0;
const au = new Audio();
au.preload = "none";
let loadedSongIndex = -1;
const completedSongs = new Set();

const rl = () => {
  $("tn").textContent = C.songs[ti].n;
  $("ta").textContent = C.songs[ti].a;
  $("pl").innerHTML = C.songs
    .map(
      (s, i) =>
        `<div class="song-row ${i === ti ? "a" : ""}" data-i="${i}"><span class="song-title">${i + 1} &nbsp; ${s.n}${completedSongs.has(i) ? ' <span class="song-complete" aria-label="completed">✓</span>' : ""} — <i>${s.a}</i></span><button class="song-toggle" type="button" data-play="${i}" aria-label="${favoriteSessionActive && i === ti && !au.paused ? "Pause" : "Play"} ${s.n}">${favoriteSessionActive && i === ti && !au.paused ? "⏸" : "▶"}</button></div>`,
    )
    .join("");
};

function setP(p) {
  $("vin").classList.toggle("play", p);
  $("eq").classList.toggle("on", p);
  $("pp").textContent = p ? "⏸" : "▶";
  rl();
}

function updateBackgroundMusicToggle() {
  if (!backgroundMusicToggle) return;
  const playing = !backgroundAudio.paused;
  const label = playing
    ? "♪ Pause background music"
    : favoriteSessionActive && resumeBackgroundAfterFavorite && !backgroundMusicManuallyPaused
      ? "♪ Background music will resume"
      : backgroundMusicRequested
        ? "♪ Resume background music"
        : "♪ Start background music";
  backgroundMusicToggle.textContent = label;
  backgroundMusicToggle.setAttribute("aria-label", label.replace(/^♪ /, ""));
  backgroundMusicToggle.setAttribute("aria-pressed", String(playing));
}

function playBackgroundMusic() {
  if (!backgroundMusicRequested || backgroundMusicManuallyPaused || favoriteSessionActive || cakeMusicStarted) {
    updateBackgroundMusicToggle();
    return;
  }
  backgroundAudio.play()
    .then(updateBackgroundMusicToggle)
    .catch((error) => {
      updateBackgroundMusicToggle();
      console.error("Could not play the background soundtrack:", error);
    });
}

function startBackgroundMusic() {
  if (memoryMusicStarted || cakeMusicStarted) return;
  memoryMusicStarted = true;
  backgroundMusicRequested = true;
  backgroundMusicToggle.classList.add("on");
  playBackgroundMusic();
}

function startCakeMusic() {
  if (cakeMusicStarted) return;
  cakeMusicStarted = true;
  favoriteSessionActive = false;
  resumeBackgroundAfterFavorite = false;
  au.pause();
  setP(false);
  backgroundAudio.pause();
  backgroundMusicToggle.classList.remove("on");
  cakeAudio.play().catch((error) => {
    console.error("Could not play the cake soundtrack:", error);
  });
}

function resumeBackgroundMusic() {
  favoriteSessionActive = false;
  updateBackgroundMusicToggle();
  if (resumeBackgroundAfterFavorite) playBackgroundMusic();
  resumeBackgroundAfterFavorite = false;
}

backgroundMusicToggle.onclick = () => {
  if (!backgroundAudio.paused) {
    backgroundMusicManuallyPaused = true;
    backgroundAudio.pause();
    updateBackgroundMusicToggle();
    return;
  }
  backgroundMusicManuallyPaused = false;
  backgroundMusicRequested = true;
  if (!favoriteSessionActive) playBackgroundMusic();
  else {
    resumeBackgroundAfterFavorite = true;
    updateBackgroundMusicToggle();
  }
};

backgroundAudio.onplay = updateBackgroundMusicToggle;
backgroundAudio.onpause = updateBackgroundMusicToggle;

function playFavorite(index, restart = false) {
  if (cakeMusicStarted) return;
  if (!favoriteSessionActive) {
    resumeBackgroundAfterFavorite =
      backgroundMusicRequested && !backgroundMusicManuallyPaused;
  }
  favoriteSessionActive = true;
  backgroundAudio.pause();

  if (loadedSongIndex !== index || restart) {
    au.pause();
    ti = index;
    loadedSongIndex = index;
    au.src = C.songs[ti].src;
    au.currentTime = 0;
  } else {
    ti = index;
    if (au.ended) au.currentTime = 0;
  }

  rl();
  au.play()
    .then(() => {
      if (favoriteSessionActive && ti === index && !au.paused) setP(true);
    })
    .catch((error) => {
      if (favoriteSessionActive && ti === index) {
        setP(false);
        resumeBackgroundMusic();
      }
      console.error("Could not play the selected soundtrack:", error);
    });
}

function pauseFavorite() {
  au.pause();
  setP(false);
  resumeBackgroundMusic();
}

au.onended = () => {
  completedSongs.add(ti);
  setP(false);
  resumeBackgroundMusic();
};

$("pp").onclick = () => {
  if (favoriteSessionActive && !au.paused) {
    pauseFavorite();
    return;
  }
  playFavorite(ti, loadedSongIndex !== ti || au.ended);
};
$("nx").onclick = () => playFavorite((ti + 1) % C.songs.length, true);
$("pv").onclick = () => playFavorite((ti - 1 + C.songs.length) % C.songs.length, true);
$("pl").onclick = (e) => {
  const playButton = e.target.closest("[data-play]");
  if (playButton) {
    const index = Number(playButton.dataset.play);
    if (favoriteSessionActive && ti === index && !au.paused) pauseFavorite();
    else playFavorite(index, loadedSongIndex !== index || au.ended);
    return;
  }
  const row = e.target.closest("[data-i]");
  if (row) playFavorite(Number(row.dataset.i), true);
};
rl();

// gifts
let gf = 0, allShown = false, wishShown = false;
$("jars").innerHTML = C.gifts
  .map((g, i) => `<div class="jar" data-i="${i}">${g.e}</div>`)
  .join("");

const toast = (m) => {
  const t = document.createElement("div");
  t.textContent = m;
  t.style.cssText =
    'position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#fff;color:#5c1530;padding:.8rem 1.2rem;border-radius:18px;box-shadow:0 8px 24px #0004;z-index:70;font-family:"Dancing Script";font-size:1.2rem;animation:zi .3s';
  document.body.append(t);
  setTimeout(() => t.remove(), 1800);
};

const showAll = () =>
  show(`<div class="gift-result"><div class="gift-result__icons">🎁 💖</div><h2>All Mystery Gifts Found ✨</h2><p>The real gift was always you pillu ❤️</p><button class="btn" onclick="closeMd()">Make a Wish 🎂</button></div>`);

function closeMd() {
  md.classList.remove("on");
  if (gf < 3) return;
  if (!allShown) { allShown = true; setTimeout(showAll, 300); }
  else if (!wishShown) { wishShown = true; step(2); }
}

$("jars").onclick = (e) => {
  const j = e.target.closest(".jar");
  if (!j || j.classList.contains("f")) return;
  const g = C.gifts[j.dataset.i];
  if (!g.ok) {
    j.classList.add("shake");
    setTimeout(() => j.classList.remove("shake"), 400);
    return toast("Common babe 😭 wrong one");
  }
  j.classList.add("f");
  $("gc").textContent = ++gf + "/3 gifts found";
  show(`<div class="gift-result"><div class="gift-result__icons">${g.top}</div><h2>You Found A Mystery Gift ❤️</h2><p>${g.t}</p><div class="gift-result__icons">🎁✨</div><button class="btn" onclick="closeMd()">Opened With Love ✨</button></div>`);
};

// cake
// ---- cake: "Velvet Drip" in SVG · flickering flames · blow out on tap ----
function buildCake() {
  const cyl = (cx, rx, ry, yt, yb) =>
    `M${cx - rx} ${yt}L${cx - rx} ${yb}A${rx} ${ry} 0 0 0 ${cx + rx} ${yb}L${cx + rx} ${yt}Z`;
  const pearls = (cx, rx, ry, y, n, r) => {
    let o = "";
    for (let k = 0; k < n; k++) {
      const t = (Math.PI * (k + 0.5)) / n;
      o += `<circle cx="${(cx - rx * Math.cos(t)).toFixed(1)}" cy="${(y + ry * Math.sin(t)).toFixed(1)}" r="${r}" fill="url(#ck-pearl)"/>`;
    }
    return o;
  };
  const xs = [108, 129, 150, 171, 192],
    cols = ["c1", "c2", "c3", "c2", "c1"],
    base = 166, h = 42, ty = base - h;

  let candles = "";
  xs.forEach((x, i) => {
    const dur = (1.25 + ((i * 37) % 9) / 10).toFixed(2),
      dl = (-(i * 0.55 + 0.2)).toFixed(2);
    candles += `<g class="candle">
      <circle class="glow" cx="${x}" cy="${ty - 14}" r="26" fill="url(#ck-gl)" style="animation-delay:${dl}s"/>
      <rect x="${x - 3.2}" y="${ty}" width="6.4" height="${h + 2}" rx="3.2" fill="url(#ck-${cols[i]})"/>
      <rect x="${x - 0.7}" y="${ty - 4}" width="1.4" height="5" fill="#4a2f2f"/>
      <g transform="translate(${x} ${ty - 3})">
        <g class="flame"><g class="fw" style="animation-duration:${dur}s;animation-delay:${dl}s">
          <path d="M0 0C-6.5-2-7.6-10-2.4-17.2-1-19.2-.2-22 0-26.5 1.2-22 2-19.4 3.4-17.2 7.6-11 6.5-2 0 0Z" fill="url(#ck-fo)"/>
          <g class="fi" style="animation-delay:${dl}s"><path d="M0-1C-3.6-2.5-4.2-8-1.4-12.4-.6-13.8 0-15.6 0-18 .8-15.6 1.4-13.8 2.2-12.4 4.4-8 3.6-2.5 0-1Z" fill="url(#ck-fi)"/></g>
          <ellipse cx="0" cy="-2.6" rx="1.9" ry="2.5" fill="#7fb2ff" opacity=".32"/>
        </g></g>
        <circle class="ember" cx="0" cy="-1" r="1.4" fill="#ff8a2a"/>
      </g>
      <path class="smoke" d="M${x} ${ty - 6}c-4-8 4-14 0-22s4-12 0-20" fill="none" stroke="#efe8e4" stroke-width="2.6" stroke-linecap="round" filter="url(#ck-blur)"/>
      <rect class="hit" x="${x - 10.5}" y="${ty - 36}" width="21" height="${h + 40}" fill="transparent"/>
    </g>`;
  });

  let drips = "";
  [[92,10,22],[108,9,12],[124,11,30],[142,9,14],[158,10,26],[176,9,12],[192,10,20],[204,8,10]].forEach(([x, w, l]) => {
    drips += `<rect x="${x}" y="174" width="${w}" height="${l}" rx="${w / 2}" fill="#f7eddd"/>`;
  });
  let berries = "";
  [[120,172],[136,176],[164,176],[180,172]].forEach(([x, y]) => {
    berries += `<circle cx="${x}" cy="${y}" r="5.6" fill="url(#ck-berry)"/><circle cx="${x - 1.6}" cy="${y - 1.8}" r="1.5" fill="#fff" opacity=".6"/>`;
  });
  const dots = [[104,170],[112,175],[126,168],[141,172],[158,170],[170,174],[186,169],[196,173],[118,166],[181,176]]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1" fill="#d9b676"/>`).join("");

  $("cake").innerHTML = `<svg viewBox="0 80 300 286" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Birthday cake with five candles">
  <defs>
    <radialGradient id="ck-gl" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffc96a" stop-opacity=".55"/><stop offset=".5" stop-color="#ffb347" stop-opacity=".18"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
    <radialGradient id="ck-top" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffcf7a" stop-opacity=".55"/><stop offset="1" stop-color="#ffcf7a" stop-opacity="0"/></radialGradient>
    <linearGradient id="ck-fo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7a18"/><stop offset=".5" stop-color="#ffb93a"/><stop offset="1" stop-color="#ffe390"/></linearGradient>
    <linearGradient id="ck-fi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2a8"/><stop offset="1" stop-color="#ffffff"/></linearGradient>
    <linearGradient id="ck-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3d99a"/><stop offset=".5" stop-color="#c9a36b"/><stop offset="1" stop-color="#9c7640"/></linearGradient>
    <radialGradient id="ck-pearl" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#fff6dc"/><stop offset=".5" stop-color="#d9b676"/><stop offset="1" stop-color="#9c7640"/></radialGradient>
    <linearGradient id="ck-wine" x1="0" x2="1"><stop offset="0" stop-color="#4f1128"/><stop offset=".4" stop-color="#8a2549"/><stop offset=".75" stop-color="#701c3b"/><stop offset="1" stop-color="#4a1126"/></linearGradient>
    <linearGradient id="ck-berry" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8465f"/><stop offset="1" stop-color="#9a1230"/></linearGradient>
    <linearGradient id="ck-c1" x1="0" x2="1"><stop offset="0" stop-color="#e9cfd6"/><stop offset=".5" stop-color="#fff4f6"/><stop offset="1" stop-color="#e2bcc8"/></linearGradient>
    <linearGradient id="ck-c2" x1="0" x2="1"><stop offset="0" stop-color="#e2cfa0"/><stop offset=".5" stop-color="#fbf0d2"/><stop offset="1" stop-color="#d8bd80"/></linearGradient>
    <linearGradient id="ck-c3" x1="0" x2="1"><stop offset="0" stop-color="#d98aa3"/><stop offset=".5" stop-color="#f3b8c9"/><stop offset="1" stop-color="#c26f8c"/></linearGradient>
    <filter id="ck-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#3a0f1f" flood-opacity=".28"/></filter>
    <filter id="ck-soft"><feGaussianBlur stdDeviation="4"/></filter>
    <filter id="ck-blur"><feGaussianBlur stdDeviation="1.1"/></filter>
  </defs>
  <ellipse cx="150" cy="356" rx="54" ry="8" fill="#3a0f1f" opacity=".18" filter="url(#ck-soft)"/>
  <ellipse cx="150" cy="352" rx="50" ry="7" fill="url(#ck-gold)"/>
  <rect x="143" y="324" width="14" height="30" fill="url(#ck-gold)"/>
  <ellipse cx="150" cy="318" rx="126" ry="15" fill="url(#ck-gold)"/>
  <ellipse cx="150" cy="316" rx="118" ry="11.5" fill="#f7eedc"/>
  <g filter="url(#ck-sh)"><path d="${cyl(150, 100, 11, 232, 312)}" fill="url(#ck-wine)"/></g>
  <ellipse cx="150" cy="232" rx="100" ry="11" fill="#9b3158"/>
  ${pearls(150, 100, 11, 312, 20, 3.4)}
  <path d="${cyl(150, 64, 8.5, 168, 232)}" fill="url(#ck-wine)"/>
  ${pearls(150, 64, 8.5, 232, 13, 2.8)}
  <path d="M86 168L86 176A64 8.5 0 0 0 214 176L214 168Z" fill="#f7eddd"/>
  ${drips}
  <ellipse cx="150" cy="168" rx="64" ry="8.5" fill="#fbf4e6"/>
  <ellipse class="topglow" cx="150" cy="167" rx="66" ry="11" fill="url(#ck-top)"/>
  ${candles}
  <g style="pointer-events:none">${berries}<path d="M146 175q4-9 8 0q-4 4-8 0Z" fill="#6b8a4b"/>${dots}</g>
</svg>`;
}
buildCake();

const ck = $("cake");
ck.querySelectorAll(".candle").forEach((c) => {
  c.onclick = () => {
    if (c.classList.contains("off")) return;
    c.classList.add("off");
    if (!ck.querySelector(".candle:not(.off)")) {
      ck.classList.add("allout");
      setTimeout(wishOverlay, 1100);
    }
  };
});

const SH = [
  { s: "images/shayari4.png", t: "" },
  { s: "images/shayari5.png", t: "" },
  { s: "images/shayari1.png", t: "" },
  { s: "images/shayari2.png", t: "" },
  { s: "images/shayari3.png", t: "" },
];
$("scat").innerHTML = SH.map(
  (o, i) =>
    `<div class="pol" data-s="${o.s}" style="--r:${i % 2 ? 3 : -3}deg"><img src="${o.s}" draggable="false">${o.t || ""}</div>`,
).join("");

// drag-to-scroll, same as the gallery
(function () {
  const el = $("scat");
  let d = 0, sx = 0, sl = 0, moved = false;
  el.onpointerdown = (e) => {
    d = 1; moved = false; sx = e.clientX; sl = el.scrollLeft;
    el.style.scrollSnapType = "none";
  };
  addEventListener("pointerup", () => { d = 0; el.style.scrollSnapType = ""; });
  el.onpointermove = (e) => {
    if (!d) return;
    if (Math.abs(e.clientX - sx) > 5) moved = true;
    el.scrollLeft = sl - (e.clientX - sx);
  };
  el.onclick = (e) => {
    if (moved) return;
    const c = e.target.closest(".pol");
    if (c) show(`<img src="${c.dataset.s}" style="border-radius:10px">`);
  };
})();
function step(n) {
  document.querySelectorAll(".step").forEach((section) => section.classList.remove("on"));
  $("s" + n).classList.add("on");
  if (n === 2) startCakeMusic();
  $("fin").scrollIntoView({ behavior: "smooth" });
}
// Show the wish message until the user taps to close it.
document.body.insertAdjacentHTML("beforeend", '<div id="wishOv"></div>');
function wishOverlay() {
  const o = $("wishOv");
  const lines = $("wm").innerHTML.split(/<br\s*\/?>/i);
  o.innerHTML =
    "<div>" +
    lines
      .map((l, k) => `<i style="animation-delay:${k * 0.4}s">${l.trim() || "&nbsp;"}</i>`)
      .join("") +
    `<i class="hint" style="animation-delay:${lines.length * 0.4 + 1}s">tap anywhere to close ♥</i></div>`;
  o.classList.add("on");
  requestAnimationFrame(() => requestAnimationFrame(() => o.classList.add("show")));
  o.onclick = () => {
    o.onclick = null;
    o.classList.remove("show");
    setTimeout(() => o.classList.remove("on"), 900);
  };
}
