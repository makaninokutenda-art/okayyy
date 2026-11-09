
// CHANGE THESE SETTINGS
const girlfriendName = "Chelsea";
const yourName = "Ishaan";

// Create floating hearts
const heartContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["💗", "💕", "💖", "💘", "🌸"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

// Page navigation
function nextPage(number) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + number).classList.add("active");
}

// Update names
document.querySelector("#page1 h1").textContent =
    `Hiiii, ${girlfriendName}!`;

document.querySelector("#page2 .letter strong").textContent =
    `Your favourite person, ${yourName} 💕`;

// NO button response
function sayNo() {
    const messages = [
        "Are you sure? 🥺",
        "Think about it again! 💗",
        "Pretty please? 🥹",
        "Go back and press YES! 💕"
    ];

    const message = document.getElementById("noMessage");

    message.textContent =
        messages[Math.floor(Math.random() * messages.length)];
}

// YES button animation
let yesClicked = false;

function sayYes() {
    if (yesClicked) return;

    yesClicked = true;

    const yesButton = document.getElementById("yesBtn");
    const noButton = document.getElementById("noBtn");

    noButton.style.display = "none";

    let scale = 1;

    const grow = setInterval(() => {
        scale += 0.55;
        yesButton.style.transform = `scale(${scale})`;

        if (scale >= 8) {
            clearInterval(grow);

            explodeHearts();
            
            setTimeout(() => {
                nextPage(4);

                setTimeout(() => {
                    nextPage(5);
                }, 2500);

            }, 700);
        }
    }, 180);
}

// Heart explosion
function explodeHearts() {
    const emojis = ["💗", "💖", "💕", "💘", "🌸", "✨"];

    for (let i = 0; i < 45; i++) {
        const particle = document.createElement("div");

        particle.className = "explosion";
        particle.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.fontSize = (20 + Math.random() * 30) + "px";

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1500);
    }
}
