const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileMenu = document.querySelector("#mobileMenu");
const body = document.body;
menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.add("hidden");
  mobileMenu.classList.remove("translate-x-[100%]");
});
closeIcon.addEventListener("click", (e) => {
  menuIcon.classList.remove("hidden");
  mobileMenu.classList.add("translate-x-[100%]");
});
