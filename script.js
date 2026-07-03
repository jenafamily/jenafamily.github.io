const WEDDING_CONFIG = {
  groomName: "ଓମ ପ୍ରକାଶ (ରିଙ୍କୁ)",
  brideName: "ମମତାରାଣୀ (ମାମା)",
  coupleShort: "ସାଦର ନିମନ୍ତ୍ରଣ",
  coupleFull: "ରିଙ୍କୁ ଓ ମାମା",
  weddingDate: "2026-07-16T19:30:00+05:30",
  weddingDateText: "ତାରିଖ : ୧୬ ଜୁଲାଇ ୨୦୨୬",
  venueName: "ଶ୍ରୀକୃଷ୍ଣ ମଣ୍ଡପ",
  venueAddress: "ଶ୍ରୀକୃଷ୍ଣ ମଣ୍ଡପ, ଛେନାପଦୀ ଛକ, ବଉଳା ରୋଡ",
  venueCity: "କେନ୍ଦୁଝର",
  venueState: "ଓଡ଼ିଶା",
  venuePin: "758022",
  venuePhone: "+91 94380859638",
  venueLandmark: "ଶ୍ରୀକୃଷ୍ଣ ମଣ୍ଡପ, ଛେନାପଦୀ ଛକ",
  mapQuery: "56JJ+62X, Chhenapadi, Odisha 758083",
  phones: ["9438059638", "9090000370"],
  whatsappNumber: "919438059638",
  whatsappMessage: "ଶୁଭ ବିବାହ ନିମନ୍ତ୍ରଣ ପାଇଁ ଧନ୍ୟବାଦ।",
  musicSrc: "assets/music.mp3",
  weddingHashtag: "#ShubhaVivaha2026",
  dressCode: "ପାରମ୍ପାରିକ ଓଡ଼ିଆ ପୋଷାକ / ଏଥନିକ୍ ଓଆର୍",
  events: [
    // You can use either emoji OR image URL for icon:
    // Example with image: { icon: "assets/mehendi-icon.png", title: "ମେହେନ୍ଦୀ", date: "୧୫ ଜୁଲାଇ", time: "ସନ୍ଧ୍ୟା ୬:୦୦" }
    { icon: "assets/mehendi.png", title: "ମେହେନ୍ଦି ", date: "୧୫ ଜୁଲାଇ", time: "ସନ୍ଧ୍ୟା ୬:୦୦" },
    { icon: "assets/haldi.webp", title: "ହଳଦୀ", date: "୧୬ ଜୁଲାଇ", time: "ସକାଳ ୧୦:୦୦" },
    { icon: "assets/wedding.png", title: "ବିବାହ (Wedding)", date: "୧୬ ଜୁଲାଇ", time: "ରାତ୍ରି ବିବାହ " },
    { icon: "assets/reception.png", title: "ପ୍ରୀତି ଭୋଜନ (Reception)", date: "୧୯ ଜୁଲାଇ", time: "ସନ୍ଧ୍ୟା ୭ ଘଟିକା" }
  ],
  // Photo/Image Configuration - replace these with your actual image paths!
  images: {
    envelopePhoto: "assets/opening-card-reference.png", // Photo on the closed envelope
    openedInvitePhoto: "assets/opened-card-reference.png", // Photo on the opened invitation
    groomPhoto: "assets/om.png", // Groom's portrait photo
    bridePhoto: "assets/reference-wedding.png" // Bride's portrait photo
  },
  // Google Calendar Events
  marriageEvent: {
    title: "ଶୁଭ ବିବାହ - Marriage of ଓମ ପ୍ରକାଶ & ସମମତାରାଣୀ",
    startDateTime: "2026-07-16T19:30:00+05:30",
    endDateTime: "2026-07-16T22:30:00+05:30",
    location: "ସୁଲଣ, ଗଛେନପଦୀ ଛକ, ବଉଳା ରୋଡ, କେନ୍ଦୁଝର, ଓଡ଼ିଶା",
    description: "Join us to celebrate the wedding of ଓମ ପ୍ରକାଶ & ସମମତାରାଣୀ"
  },
  receptionEvent: {
    title: "Wedding Reception - ଓମ ପ୍ରକାଶ & ସମମତାରାଣୀ",
    startDateTime: "2026-07-19T18:00:00+05:30",
    endDateTime: "2026-07-17T21:00:00+05:30",
    location: "ଶ୍ରୀକୃଷ୍ଣ ମଣ୍ଡପ, ଗଛେନପଦୀ ଛକ, ବଉଳା ରୋଡ, କେନ୍ଦୁଝର, ଓଡ଼ିଶା",
    description: "Join us for the wedding reception of ଓମ ପ୍ରକାଶ & ସମମତାରାଣୀ"
  }
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

  // Apply images from config
  const envelopePhotoEl = document.getElementById("envelope-photo");
  if (envelopePhotoEl && WEDDING_CONFIG.images?.envelopePhoto) {
    envelopePhotoEl.src = WEDDING_CONFIG.images.envelopePhoto;
  }

  const openedPhotoEl = document.getElementById("opened-photo");
  if (openedPhotoEl && WEDDING_CONFIG.images?.openedInvitePhoto) {
    openedPhotoEl.src = WEDDING_CONFIG.images.openedInvitePhoto;
  }

  const groomPhotoEl = document.getElementById("groom-photo");
  if (groomPhotoEl && WEDDING_CONFIG.images?.groomPhoto) {
    groomPhotoEl.src = WEDDING_CONFIG.images.groomPhoto;
  }

  const bridePhotoEl = document.getElementById("bride-photo");
  if (bridePhotoEl && WEDDING_CONFIG.images?.bridePhoto) {
    bridePhotoEl.src = WEDDING_CONFIG.images.bridePhoto;
  }

  const timeline = document.getElementById("eventTimeline");
  timeline.innerHTML = WEDDING_CONFIG.events.map((event) => `
    <div class="event">
      <span class="event-icon" aria-hidden="true">
        ${event.icon.includes('.') || event.icon.startsWith('http') 
          ? `<img src="${event.icon}" alt="${event.title}" class="event-icon-img">` 
          : event.icon}
      </span>
      <p>
        <strong>${event.title}</strong>
        ${event.date ? `<span class="event-date">${event.date}</span>` : ''}
        <span>${event.time}</span>
      </p>
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

  // Try both possible filenames in case of typo
  audio.src = WEDDING_CONFIG.musicSrc;
  audio.loop = true;
  audio.volume = 0.7; // Set default volume to 70%
  audio.preload = "auto";

  let isPlaying = false;

  // Function to try playing audio
  const tryPlay = async () => {
    if (isPlaying) return;
    try {
      await audio.play();
      isPlaying = true;
      toggle.textContent = "🔇";
      status.textContent = "Playing";
    } catch (error) {
      // Autoplay failed - wait for user interaction
      isPlaying = false;
      toggle.textContent = "🔊";
      status.textContent = "Tap to play";
    }
  };

  // Try autoplay immediately
  tryPlay();

  // Try autoplay after loading screen is hidden
  const checkLoadingScreen = setInterval(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen && loadingScreen.classList.contains('hidden')) {
      clearInterval(checkLoadingScreen);
      tryPlay();
    }
  }, 100);

  // Try autoplay on any user interaction
  const handleInteraction = async () => {
    if (!isPlaying) {
      await tryPlay();
    }
    // Remove listeners after first success
    if (isPlaying) {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    }
  };

  document.addEventListener("click", handleInteraction);
  document.addEventListener("touchstart", handleInteraction);
  document.addEventListener("scroll", handleInteraction);
  document.addEventListener("keydown", handleInteraction);

  toggle.addEventListener("click", async (e) => {
    e.stopPropagation(); // Prevent double interaction
    if (audio.paused) {
      try {
        await audio.play();
        isPlaying = true;
        toggle.textContent = "🔇";
        status.textContent = "Playing";
      } catch (error) {
        status.textContent = "Add music file";
      }
    } else {
      audio.pause();
      isPlaying = false;
      toggle.textContent = "🔊";
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
  setupCalendarModal();
});

// Setup Calendar Modal
function setupCalendarModal() {
  const modal = document.getElementById('calendarModal');
  const openBtn = document.getElementById('openCalendarModal');
  const closeBtn = document.getElementById('closeCalendarModal');
  const marriageBtn = document.getElementById('marriageCalendarBtn');
  const receptionBtn = document.getElementById('receptionCalendarBtn');
  const blessingCard = document.querySelector('.blessing-card');

  // Display dates in modal
  document.getElementById('weddingDateDisplay').textContent = WEDDING_CONFIG.weddingDateText;
  // For reception, let's assume it's next day - we can add to config if needed
  document.getElementById('receptionDateDisplay').textContent = WEDDING_CONFIG.weddingDateText;

  // Setup Google Calendar links
  setupCalendarLinks(marriageBtn, receptionBtn);

  // Open modal when button is clicked
  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Open modal automatically when blessing card is in view
  const modalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Only auto-open once
        if (!modal.dataset.opened) {
          setTimeout(() => {
            modal.classList.add('active');
            modal.dataset.opened = 'true';
          }, 500);
        }
      }
    });
  }, { threshold: 0.5 });

  if (blessingCard) {
    modalObserver.observe(blessingCard);
  }
}

// Setup Google Calendar Links
function setupCalendarLinks(marriageBtn, receptionBtn) {
  const formatDateForCalendar = (dateStr) => {
    // Parse date from config (ISO format)
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}T${hours}${minutes}00`;
  };

  const addHours = (dateStr, hours) => {
    const date = new Date(dateStr);
    date.setHours(date.getHours() + hours);
    return date.toISOString();
  };

  // Marriage event
  const weddingStart = formatDateForCalendar(WEDDING_CONFIG.marriageEvent.startDateTime);
  const weddingEnd = formatDateForCalendar(WEDDING_CONFIG.marriageEvent.endDateTime);
  const weddingUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(WEDDING_CONFIG.marriageEvent.title)}&dates=${weddingStart}/${weddingEnd}&details=${encodeURIComponent(WEDDING_CONFIG.marriageEvent.description)}&location=${encodeURIComponent(WEDDING_CONFIG.marriageEvent.location)}&sf=true&output=xml`;
  marriageBtn.href = weddingUrl;

  // Reception event (let's make it next day for demo)
  const receptionStart = formatDateForCalendar(WEDDING_CONFIG.receptionEvent.startDateTime);
  const receptionEnd = formatDateForCalendar(WEDDING_CONFIG.receptionEvent.endDateTime);
  const receptionUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(WEDDING_CONFIG.receptionEvent.title)}&dates=${receptionStart}/${receptionEnd}&details=${encodeURIComponent(WEDDING_CONFIG.receptionEvent.description)}&location=${encodeURIComponent(WEDDING_CONFIG.receptionEvent.location)}&sf=true&output=xml`;
  receptionBtn.href = receptionUrl;
}

// Hide loading screen when page is fully loaded
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      // After transition completes, set display: none
      setTimeout(() => {
        loadingScreen.classList.add('hidden-after-transition');
      }, 800); // Match transition duration
    }
  }, 1500); // Keep loader visible for at least 1.5 seconds for better UX
});
