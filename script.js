// script.js
console.log("SE1 Git Laboratory loaded");

const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Welcome to my Git laboratory project!";
});
