const hamburgerMenu = document.querySelector(".hamburger-menu");

const navBar = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("change");
});

document.addEventListener("click", function (event) {
  if (event.target.closest(".nav-bar")) return;

  navBar.classList.remove("change");
});
