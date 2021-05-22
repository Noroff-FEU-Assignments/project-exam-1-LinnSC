const url = "https://linnc.no/concreteDesign/wp-json/wp/v2/posts/200?_embed";

const errorMessageContainer = document.querySelector(".about-container");

const headerImg = document.querySelector(".header-img");

const h1 = document.querySelector(".header-container");

const aboutContainer = document.querySelector(".about-container");

const errorContainer = document.querySelector(".error-message-container");
const loader = document.querySelector(".loader");

async function getPost() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    loader.style.display = "none";

    headerImg.innerHTML += `<img src="${results._embedded["wp:featuredmedia"][0].source_url}" alt="${results._embedded["wp:featuredmedia"][0].alt_text}">`;

    h1.innerHTML += `<h1>${results.title.rendered}</h1>`;

    aboutContainer.innerHTML += `<div class="blog-text">${results.content.rendered}</div>`;
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occured", error);
  }
}

// modal

getPost().then(() => {
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modalImg");

  const images = document.querySelectorAll(".modal-image");

  for (let i = 0; i < images.length; i++) {
    console.log(images[i]);

    images[i].onclick = function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    };

    document.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
