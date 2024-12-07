document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date("2022-01-01T00:00:00"); // Substitua pela data que vocês começaram a namorar
    const timeTogetherElement = document.getElementById("time-together");

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        timeTogetherElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    setInterval(updateCounter, 1000);

    // Chuva de emojis
    const emojiRain = document.querySelector(".emoji-rain");
    const emojis = ["❤️", "💫", "🌹", "💕", "🌟"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "absolute";
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = "-10vh";
        emoji.style.fontSize = `${Math.random() * 2 + 1}rem`;
        emoji.style.animation = "fall 5s linear infinite";
        emojiRain.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    setInterval(createEmoji, 300);
});
