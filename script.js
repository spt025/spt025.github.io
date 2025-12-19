// --- PART 1: MATRIX RAIN EFFECT ---
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(1);

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// --- PART 2: TYPEWRITER EFFECT ---
const textToType = [
    "Initializing connection...",
    "Loading profile data...",
    "Name: Suhrud Thakkar",
    "Role: Senior Software Engineer",
    "Stack: Swift, SwiftUI, JavaScript, Python, C++, Rust, Java, R",
    "Status: Ready to code.",
    " ",
    "Website under construction..." // You can add logic for this later
];

const typingElement = document.getElementById('typing-text');
let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (lineIndex < textToType.length) {
        if (charIndex < textToType[lineIndex].length) {
            typingElement.innerHTML += textToType[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Typing speed
        } else {
            typingElement.innerHTML += "<br>"; // New line
            charIndex = 0;
            lineIndex++;
            setTimeout(typeWriter, 500); // Pause between lines
        }
    }
}

// Start typing after a short delay
setTimeout(typeWriter, 1000);

// Handle window resize for the matrix background
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
