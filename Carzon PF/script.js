let upButton = document.getElementById("upButton");
let downButton = document.getElementById("downButton");
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let bluey = document.getElementById("bluey");

let steps = 80;

let x = 0;
let y = 0;

function moveRight() {
    x = x + steps;
    bluey.style.left = `${x}px`;
    bluey.style.transform = "scaleX(1)";
}
rightButton.addEventListener('click', moveRight);

function moveLeft() {
    x = x - steps;
    bluey.style.left = `${x}px`;
    bluey.style.transform = "scaleX(-1)";
}
leftButton.addEventListener('click', moveLeft);

function moveUp() {
    y = y - steps;
    bluey.style.top = `${y}px`;
}
upButton.addEventListener('click', moveUp);

function moveDown() {
    y = y + steps;
    bluey.style.top = `${y}px`;
}
downButton.addEventListener('click', moveDown);