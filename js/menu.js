const hamburgerMenu = document.querySelector(".hamburger-menu");

const navBar = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("change");
});

document.addEventListener("click", function (event) {
  if (event.target.closest(".nav-bar")) return;

  navBar.classList.remove("change");
});

const navContainer = document.querySelector(".logoMenu-Container");

function navScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 50) {
    navContainer.classList.add("scrollHeader");
  } else {
    navContainer.classList.remove("scrollHeader");
  }
}

window.onscroll = navScroll;
