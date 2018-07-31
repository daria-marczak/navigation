const mobileBtn = document.querySelector(".mobile-btn");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

mobileBtn.addEventListener("click", () => {
  menu.className += " open";
  overlay.className += " open";
});

closeBtn.addEventListener("click", () => {
  menu.className = "menu";
  overlay.className = "overlay";
});

window.addEventListener("click", (event) => {
  if(event.target === overlay){
    menu.className = "menu";
    overlay.className = "overlay";
  }
});