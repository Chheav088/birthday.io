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

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  noClicks++;
  const x = (Math.random() - 0.5) * 160;
  const y = (Math.random() - 0.5) * 90;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.textContent = noPhrases[noClicks % noPhrases.length];
  yesBtn.style.transform = `scale(${Math.min(1 + noClicks * 0.08, 1.45)})`;
}

yesBtn.addEventListener("click", () => {
  if (typeof launchConfetti === "function") {
    launchConfetti();
  }
  window.location.assign("surprise.html");
});