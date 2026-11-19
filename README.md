# Romantic Birthday Surprise — Complete Project

A responsive birthday website built with HTML, CSS and vanilla JavaScript. No framework, database, or build step is required.

## Run in VS Code
1. Extract this ZIP.
2. Open the `birthday_romantic_rebuild` folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code **Live Server** extension.
4. Enter the default code: **0905**.

## Project structure
```text
birthday_romantic_rebuild/
├── index.html
├── css/style.css
├── js/script.js
├── images/          (put your photos here)
├── music/           (put your MP3 here)
└── README.md
```

## Personalize
At the top of `js/surprise.js`, edit:
```js
const SECRET_CODE = "0905";
const BIRTHDAY_NAME = "beautiful soul";
const LETTER_MESSAGE = "Write your own birthday letter here.";
```
Use exactly four digits for the secret code.

## Add gallery photos
Copy your own pictures into `images/` and name them:
- `memory-1.jpg`
- `memory-2.jpg`
- `memory-3.jpg`
- `memory-4.jpg`

The page displays decorative placeholders until you add photos. To use PNG or WebP files, update the image paths in `index.html`.

## Add music
Add an MP3 file you have permission to use into `music/` and name it `your-song.mp3`. Then click **Play music** on the website. Browsers do not allow sound to autoplay before a visitor interacts with the page.

## Included features
- Four-digit welcome lock screen
- Romantic pastel responsive design
- Four-photo gallery with click-to-enlarge lightbox
- User-controlled background music
- Floating hearts and confetti
- Interactive birthday cake: blow out and relight candles
- Personalized greeting and birthday letter
- Replay experience

## Note about the lock screen
This is a playful front-end password gate, not secure authentication. The code is visible in browser source, so do not use it to protect private information.


**Password page:** change `SECRET_CODE` in `js/password.js` (default `0905`). The password is a fun front-end gate, not strong security.
