document.addEventListener("DOMContentLoaded", () => {
    const numRainDrops = 50; // Number of raindrops
    const body = document.body;

    for (let i = 0; i < numRainDrops; i++) {
        let rainDrop = document.createElement("div");
        rainDrop.classList.add("rain");
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random fall duration between 3s and 5s
        body.appendChild(rainDrop);
    }
});
