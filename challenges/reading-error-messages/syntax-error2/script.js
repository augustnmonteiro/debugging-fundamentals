function getRandomColorRGBA() {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min).
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    const a = Math.random().toFixed(2); 
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function setRandomBackground() {
    document.body.style.backgroundColor = getRandomColorRGBA();
}

setInterval(() => {
    setRandomBackground()
} 3000)

window.onload = setRandomBackground;
