// PERSONALIZE THESE VALUES
const BIRTHDAY_NAME = "beautiful soul";
const LETTER_MESSAGE = "Happy birthday! I hope this new chapter brings you peaceful days, beautiful surprises, and countless reasons to smile. May you always find kindness in unexpected places, courage when things feel difficult, and people who make you feel appreciated. Keep being your wonderful self. You deserve a life filled with warmth, laughter, and love.";
const birthdayNameElement = document.getElementById("birthday-name");
if (birthdayNameElement) birthdayNameElement.textContent = BIRTHDAY_NAME;
const letterMessageElement = document.getElementById("letter-message");
if (letterMessageElement) letterMessageElement.textContent = LETTER_MESSAGE;
const screens = [...document.querySelectorAll(".screen")];
function showScreen(id) { screens.forEach(s => s.classList.toggle("active", s.id === id)); window.scrollTo({ top: 0, behavior: "smooth" }); if (id === "home") startFloatingHearts(); if (id === "final") confetti(65); }
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => showScreen(b.dataset.go)));
// Music begins only after the visitor presses the button (browser autoplay policy).
const audio = document.getElementById("birthday-audio");
const musicButton = document.getElementById("music-button");
const musicLabel = document.getElementById("music-label");

if (audio && musicButton && musicLabel) {
  musicButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        musicButton.classList.add("playing");
        musicLabel.textContent = "Pause music";
      } catch {
        musicButton.classList.remove("playing");
        musicLabel.textContent = "Play music";
        alert("Add an MP3 named your-song.mp3 inside the music folder.");
      }
    } else {
      audio.pause();
      musicButton.classList.remove("playing");
      musicLabel.textContent = "Play music";
    }
  });

  audio.addEventListener("ended", () => {
    musicButton.classList.remove("playing");
    musicLabel.textContent = "Play music";
  });
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
let noClicks = 0;
const noPhrases = [
  "Are you sure? 🥺",
  "Think again! 🎂",
  "Nice try! 😜",
  "Click Yes instead! 💖",
  "You can't escape! 🎉"
];

// Floating hearts on the home page.
let heartInterval;
function startFloatingHearts() {
  if (heartInterval) return;
  const layer = document.getElementById("effects");
  heartInterval = setInterval(() => {
    if (!document.getElementById("home").classList.contains("active")) return;
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = Math.random() > .5 ? "♡" : "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 17) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 9500);
  }, 700);
}
function confetti(count = 45) {
  const colors = ["#e9a2b8", "#f5d3a6", "#c8b2df", "#f7c9d5", "#fff0d8"];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("i");
    p.className = "confetti";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDelay = Math.random() * .8 + "s";
    p.style.animationDuration = (2 + Math.random() * 2) + "s";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }
}

// Birthday cake: blow out and relight the candles.
const cakeStage = document.querySelector(".cake-stage");
const wish = document.getElementById("wish-message");
const blow = document.getElementById("blow-button");
const relight = document.getElementById("relight-button");
if (cakeStage && wish && blow && relight) {
  blow.addEventListener("click", () => {
    cakeStage.classList.add("blown");
    wish.textContent = "Your wish has been sent to the universe. May it come true! ♡";
    blow.hidden = true; relight.hidden = false; confetti(80);
  });
  relight.addEventListener("click", () => {
    cakeStage.classList.remove("blown");
    wish.textContent = "Close your eyes and think of something wonderful...";
    blow.hidden = false; relight.hidden = true;
  });
}

// Photo gallery lightbox. Missing images show placeholders and won't open.
const lightbox = document.getElementById("lightbox");
const largePhoto = document.getElementById("lightbox-image");
if (lightbox && largePhoto) {
  document.querySelectorAll(".photo-card").forEach(card => {
    const img = card.querySelector("img");
    img.addEventListener("error", () => { img.style.display = "none"; card.querySelector(".placeholder").style.display = "grid"; });
    card.addEventListener("click", () => {
      if (!img.complete || img.naturalWidth === 0) return;
      largePhoto.src = img.src;
      document.getElementById("lightbox-caption").textContent = card.dataset.caption || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
  function closeLightbox() {
    lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true"); largePhoto.src = "";
  }
  const lightboxClose = document.getElementById("lightbox-close");
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
}
