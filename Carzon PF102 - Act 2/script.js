let mouseBox = document.getElementById("mouseBox");
let keyBox = document.getElementById("keyBox");
let hoverText = document.getElementById("hoverText");
let clickedBox = document.getElementById("clickedBox");
let btn = document.getElementById("btn");

document.addEventListener("mousemove", function (event) {
    mouseBox.textContent = "x: " + event.clientX + ", y: " + event.clientY;
});

btn.addEventListener("mouseover", function () {
    hoverText.textContent = "You hovered the button.";
    clickedBox.textContent = "";
});

btn.addEventListener("click", function () {
    clickedBox.textContent = "You clicked the button.";
    hoverText.textContent = "";
});

document.addEventListener("keydown", function (event) {
    keyBox.textContent = "Pressed: " + event.key;
});