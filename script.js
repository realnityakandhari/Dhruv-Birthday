// Countdown timer logic
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

// Set the target date (January 29, 2024, EST)
const targetDate = new Date("January 29, 2025 00:00:00 EST").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Dhruv's birthday is in ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    messageElement.innerHTML = "🎂 Get ready to celebrate!";
  } else {
    countdownElement.innerHTML = "🎉 Happy Birthday Dhruv! 🎉";
    messageElement.innerHTML = "🎊 Let's celebrate the special day! 🎊";
  }
}

setInterval(updateCountdown, 1000); // Update the countdown every second

// Snowfall effect
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("snowfall-container").appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
for (let i = 0; i < 200; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 1 + 0.5,
  });
}

function drawSnowfall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let flake of snowflakes) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      flake.y = -flake.size;
      flake.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawSnowfall);
}

drawSnowfall();

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
