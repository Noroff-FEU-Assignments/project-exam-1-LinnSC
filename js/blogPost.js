const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

if (id === null) {
  location.href = "/";
}

const url =
  "https://linnc.no/concreteDesign/wp-json/wp/v2/posts/" + id + "?_embed";

const errorMessageContainer = document.querySelector(".blog-textarea");

const loader = document.querySelector(".loader-container");

const buttonContainer = document.querySelector(".back-button");

const headerImg = document.querySelector(".header-img");

const headerInfo = document.querySelector(".blog-header");

const textArea = document.querySelector(".blog-textarea");

const imageArea = document.querySelector(".blog-img-container");

async function getPost() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    const formateDate = new Date(results.date).toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    loader.innerHTML = `<div></div`;

    headerImg.innerHTML += `<img src="${results._embedded["wp:featuredmedia"][0].source_url}" alt="${results._embedded["wp:featuredmedia"][0].alt_text}">`;

    headerInfo.innerHTML += `
                                <h1>${results.title.rendered}</h1>
                                <p class="date">${formateDate}</p>`;

    textArea.innerHTML += `<div class="blog-text">${results.content.rendered}</div>`;

    imageArea.innerHTML += `<div class="blog-img">${results.content.rendered}</div>`;

    buttonContainer.innerHTML += `<a class="small-btn" href="blog.html">
                                    <div class="smallbtn-square"></div>
                                    <div class="smallbtn-text">Back</div>
                                </a>`;
  } catch (error) {
    console.log(error);
    errorMessageContainer.innerHTML = errorMessage("An error occured", error);
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
