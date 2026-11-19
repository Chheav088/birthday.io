// Change this to your own six-digit password.
const SECRET_CODE = "111125";
let code = "";
const pin = document.getElementById("pin");
const hint = document.getElementById("hint");
function updatePin() { pin.textContent = Array.from({length:6}, (_, i) => i < code.length ? "●" : "○").join("　"); }
document.getElementById("keypad").addEventListener("click", (event) => {
  const key = event.target.dataset.key; if (!key) return;
  if (key === "clear") code = code.slice(0, -1);
  else if (key === "enter") { if (code === SECRET_CODE) { window.location.href = "login.html"; return; } hint.textContent = "That code isn't quite right. Try again ♡"; code = ""; }
  else if (code.length < 6) code += key; updatePin();
});
document.addEventListener("keydown", (event) => { if (/^[0-9]$/.test(event.key) && code.length < 6) code += event.key; else if (event.key === "Backspace") code = code.slice(0,-1); else if (event.key === "Enter") document.querySelector('[data-key="enter"]').click(); updatePin(); });
