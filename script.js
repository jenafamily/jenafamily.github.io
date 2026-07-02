const WEDDING_CONFIG = {
  groomName: "ଶ୍ରୀ ଓଁ ପ୍ରକାଶ ବେହେରା",
  brideName: "ଶ୍ରୀମତୀ ସୁହାସିନୀ ବେହେରା",
  coupleShort: "ସାଦର ନିମନ୍ତ୍ରଣୀ",
  coupleFull: "ଓଁ ପ୍ରକାଶ ଓ ସୁହାସିନୀ",
  weddingDate: "2026-12-15T19:30:00+05:30",
  weddingDateText: "ତାରିଖ : ୧୫ ଡିସେମ୍ବର ୨୦୨୬",
  venueName: "ଶୁଭ ମଣ୍ଡପ",
  venueAddress: "ଗ୍ରାମ/ସହର, ଜିଲ୍ଲା, ଓଡିଶା",
  mapQuery: "Shree Jagannath Temple Puri Odisha",
  phones: ["9438059638", "8114991718"],
  whatsappNumber: "919438059638",
  whatsappMessage: "ଶୁଭ ବିବାହ ନିମନ୍ତ୍ରଣ ପାଇଁ ଧନ୍ୟବାଦ।",
  musicSrc: "assets/wedding-music.mp3",
  weddingHashtag: "#ShubhaVivaha2026",
  dressCode: "ପାରମ୍ପାରିକ ଓଡ଼ିଆ ପୋଷାକ / ଏଥନିକ୍ ଓଆର୍",
  events: [
    { icon: "🎻", title: "ନିର୍ବନ୍ଧ", time: "ସନ୍ଧ୍ୟା ୬:୦୦" },
    { icon: "🥭", title: "ହଳଦୀ", time: "ସକାଳ ୧୦:୦୦" },
    { icon: "💒", title: "ବିବାହ", time: "ରାତି ୭:୩୦" },
    { icon: "🍲", title: "ପ୍ରୀତି ଭୋଜି", time: "ରାତି ୮:୩୦" }
  ]
};

window.WEDDING_CONFIG = WEDDING_CONFIG;

const odiaDigits = new Intl.NumberFormat("or-IN", { maximumFractionDigits: 0 });

function formatOdia(value) {
  return odiaDigits.format(Math.max(0, Math.floor(value)));
}

function applyConfigText() {
  document.querySelectorAll("[data-field]").forEach((element) => {
    const key = element.dataset.field;
    if (WEDDING_CONFIG[key]) {
      element.textContent = WEDDING_CONFIG[key];
    }
  });

  const timeline = document.getElementById("eventTimeline");
  timeline.innerHTML = WEDDING_CONFIG.events.map((event) => `
    <div class="event">
      <span class="event-icon" aria-hidden="true">${event.icon}</span>
      <p><strong>${event.title}</strong><span>${event.time}</span></p>
    </div>
  `).join("");

  const phoneList = document.getElementById("phoneList");
  phoneList.innerHTML = WEDDING_CONFIG.phones.map((phone) => `<span>☎ ${phone}</span>`).join("");

  const firstPhone = WEDDING_CONFIG.phones[0] || "";
  document.getElementById("callBtn").href = firstPhone ? `tel:${firstPhone}` : "#";

  const message = encodeURIComponent(WEDDING_CONFIG.whatsappMessage);
  document.getElementById("whatsappBtn").href = `https://wa.me/${WEDDING_CONFIG.whatsappNumber}?text=${message}`;

  const mapQuery = encodeURIComponent(WEDDING_CONFIG.mapQuery || WEDDING_CONFIG.venueAddress);
  document.getElementById("mapFrame").src = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  document.getElementById("navigateBtn").href = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
}

function setupEnvelope() {
  const opener = document.getElementById("openEnvelope");
  const invite = document.getElementById("openInvite");

  opener.addEventListener("click", () => {
    if (opener.classList.contains("opened")) {
      return;
    }

    opener.classList.add("opened");
    document.body.classList.add("opening-now", "invite-preview");

    setTimeout(() => {
      invite.classList.add("visible");
    }, 320);

    setTimeout(() => {
      document.body.classList.remove("invite-locked", "opening-now");
    }, 1700);
  });

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("invite-preview");
      document.body.classList.add("details-mode");
      const target = document.querySelector(button.dataset.scroll);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center"
        });
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.45) {
      document.body.classList.remove("invite-preview");
      document.body.classList.add("details-mode");
    }
  }, { passive: true });
}

function setupCountdown() {
  const target = new Date(WEDDING_CONFIG.weddingDate).getTime();
  const daysEl = document.getElementById("countDays");
  const hoursEl = document.getElementById("countHours");
  const minutesEl = document.getElementById("countMinutes");
  const secondsEl = document.getElementById("countSeconds");

  function update() {
    const distance = target - Date.now();
    if (Number.isNaN(target) || distance <= 0) {
      daysEl.textContent = "୦";
      hoursEl.textContent = "୦";
      minutesEl.textContent = "୦";
      secondsEl.textContent = "୦";
      document.querySelector(".date-line").textContent = "ଶୁଭ ବିବାହ ସମ୍ପନ୍ନ ହୋଇଛି";
      return;
    }

    const seconds = Math.floor(distance / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    daysEl.textContent = formatOdia(days);
    hoursEl.textContent = formatOdia(hours);
    minutesEl.textContent = formatOdia(minutes);
    secondsEl.textContent = formatOdia(remainingSeconds);
  }

  update();
  setInterval(update, 1000);
}

function setupPetals() {
  const layer = document.getElementById("petalLayer");
  const count = window.matchMedia("(max-width: 520px)").matches ? 20 : 36;

  for (let index = 0; index < count; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * -12}s`;
    petal.style.setProperty("--fall-duration", `${7 + Math.random() * 8}s`);
    petal.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
    petal.style.transform = `rotate(${Math.random() * 180}deg)`;
    layer.appendChild(petal);
  }
}

function setupReveal() {
  const cards = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  cards.forEach((card) => observer.observe(card));
}

function setupMusic() {
  const audio = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");
  const status = document.getElementById("musicStatus");

  audio.src = WEDDING_CONFIG.musicSrc;

  toggle.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        toggle.textContent = "Ⅱ";
        status.textContent = "Playing";
      } catch (error) {
        status.textContent = "Add music file";
      }
    } else {
      audio.pause();
      toggle.textContent = "♫";
      status.textContent = "Paused";
    }
  });
}

function setupShare() {
  const shareBtn = document.getElementById("shareBtn");
  shareBtn.addEventListener("click", async () => {
    const shareData = {
      title: "ଶୁଭ ବିବାହ",
      text: `${WEDDING_CONFIG.coupleFull} - ${WEDDING_CONFIG.weddingDateText}`,
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    try {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      shareBtn.textContent = "ଲିଙ୍କ କପି ହେଲା";
    } catch (error) {
      shareBtn.textContent = "ସେୟାର ଉପଲବ୍ଧ ନାହିଁ";
    }

    setTimeout(() => {
      shareBtn.textContent = "⌯ ନିମନ୍ତ୍ରଣ ସେୟାର କରନ୍ତୁ";
    }, 1800);
  });
}

function setupHashtag() {
  const hashtagBox = document.querySelector(".hashtag-box");
  if (hashtagBox) {
    hashtagBox.addEventListener("click", async () => {
      const originalText = hashtagBox.textContent;
      try {
        await navigator.clipboard.writeText(originalText);
        hashtagBox.textContent = "✅ କପି ହେଲା!";
        
        setTimeout(() => {
          hashtagBox.textContent = originalText;
        }, 2000);
      } catch (error) {
        hashtagBox.textContent = "❌ କପି କରିପାରିଲା ନାହିଁ";
        setTimeout(() => {
          hashtagBox.textContent = originalText;
        }, 2000);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfigText();
  setupEnvelope();
  setupCountdown();
  setupPetals();
  setupReveal();
  setupMusic();
  setupShare();
  setupHashtag();
});
