// script.js
console.log("SE1 Git Laboratory loaded");

const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  }
  return "Good evening";
}

button.addEventListener("click", function () {
  message.textContent = getGreeting() + "! Welcome to my Git laboratory project.";
});
