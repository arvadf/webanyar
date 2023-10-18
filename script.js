// script.js
const movingText = document.querySelector(".moving-text");

function changeText() {
    movingText.textContent = "Jelajahi dunia kucing bersama saya!";
}

setInterval(changeText, 3000);
changeText();
