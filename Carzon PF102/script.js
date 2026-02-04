let mouse = document.getElementById("mouse");
let key = document.getElementById("key");
let button = document.getElementById("btn");

document.addEventListener("keydown", function (event) {
    key.innerHTML = "Pressed Key: <strong>" + event.key + "</strong>";
});