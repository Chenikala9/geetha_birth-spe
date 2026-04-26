const openBtn = document.getElementById("openBtn");
const main = document.getElementById("main");
const card = document.getElementById("card");

const voice = document.getElementById("voice");
const music = document.getElementById("music");

const cake = document.getElementById("cake");
const finalText = document.getElementById("finalText");

// Start
openBtn.addEventListener("click", () => {
  card.style.display = "none";
  main.style.display = "block";

  animateName("Hi Geetha ❤️");

  // Play voice first
  voice.play().then(() => {
    voice.onended = () => {
      music.volume = 0.4;
      music.play();
    };
  }).catch(() => {
    music.play();
  });

  startChat();
  startHearts();
});

// Name animation
function animateName(text) {
  const el = document.getElementById("nameAnimation");
  el.innerHTML = "";

  text.split("").forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = 0;
    span.style.marginRight = "2px";
    el.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
      span.style.color = "#ff4da6";
      span.style.textShadow = "0 0 10px pink";
    }, i * 150);
  });
}

// Chat
function startChat() {
  const chat = document.getElementById("chatContainer");

  const messages = [
    { text: "Hey Geetha ❤️", type: "sent" },
    { text: "Hmm? 😄", type: "received" },
    { text: "Do you know what today is? 🎂", type: "sent" },
    { text: "My birthday 😜", type: "received" },
    { text: "Happy 17th Birthday 💖", type: "sent" },
    { text: "Thank you ❤️", type: "received" },
    { text: "I miss you…", type: "sent" },
    { text: "I miss you too 😢", type: "received" },
    { text: "You mean everything to me 💕", type: "sent" }
  ];

  let i = 0;

  function show() {
    if (i >= messages.length) return;

    const msg = document.createElement("div");
    msg.className = "message " + messages[i].type;

    let text = messages[i].text;
    let j = 0;

    function type() {
      if (j < text.length) {
        msg.textContent += text[j];
        j++;
        setTimeout(type, 30);
      }
    }

    chat.appendChild(msg);
    type();

    i++;
    setTimeout(show, 1500);
  }

  show();
}

// Hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "0";
    heart.style.animation = "floatUp 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 800);
}

// Cake click
cake.addEventListener("click", () => {
  document.body.style.background =
    "radial-gradient(circle, #ff9a9e, #fad0c4)";
  finalText.style.display = "block";
});
