let count = 3;
const counter = document.getElementById("count");
const interval = setInterval(() => {
  count--;
  counter.textContent = count;
  if (count === 0) {
    clearInterval(interval);
    window.location.href = "login.html";
  }
}, 1000);
