const errorMessageContainer = document.querySelector(".about-index");

const aboutInfo = document.querySelector(".about-index");

const categoryContainer = document.querySelector(".categories-container");

const categoryUrl = "https://linnc.no/concreteDesign/wp-json/wp/v2/categories/";

async function getCategory() {
  try {
    const response = await fetch(categoryUrl);
    const category = await response.json();
    console.log(category);

    categoryContainer.innerHTML += `<figure class="category-card">
                                          <a href="html/categories.html?id=${category[0].id}">
                                            <img
                                              class="category-img"
                                              src="images/categories/interior-category.jpg"
                                              alt="Green plant"
                                            />
                                            <div class="category-info">
                                              <h4>${category[0].name}</h4>
                                            </div>
                                          </a>
                                        </figure>
                                        <figure class="category-card">
                                          <a href="html/categories.html?id=${category[1].id}">
                                            <img
                                              class="category-img"
                                              src="images/categories/livingspace-category.jpg"
                                              alt="Green plant"
                                            />
                                            <div class="category-info">
                                              <h4>${category[1].name}</h4>
                                            </div>
                                          </a>
                                        </figure>
                                        <figure class="category-card">
                                          <a href="html/categories.html?id=${category[2].id}">
                                            <img
                                              class="category-img"
                                              src="images/categories/plant-category.jpg"
                                              alt="Green plant"
                                            />
                                            <div class="category-info">
                                              <h4>${category[2].name}</h4>
                                            </div>
                                          </a>
                                        </figure>`;
  } catch (error) {
    console.log(error);
    categoryContainer.innerHTML = errorMessage(
      "Something went wrong :(",
      error
    );
  }
}

getCategory();

// Carousel

const carouselWrap = document.querySelector(".carousel-slider");

const arrowRight = document.querySelector(".right-btn");

const arrowLeft = document.querySelector(".left-btn");

let slideStart = 0;

arrowRight.addEventListener("click", () => {
  slideStart = slideStart < 7 ? slideStart + 1 : 7;

  carouselWrap.style.transform = "translate(" + slideStart * -12.5 + "%)";

  if (slideStart === "translate(" + slideStart * -100 + "%)") {
    carouselWrap.style.transform = "translate(0%)";
  }
});

arrowLeft.addEventListener("click", () => {
  slideStart = slideStart > 0 ? slideStart - 1 : 0;

  carouselWrap.style.transform = "translate(" + slideStart * -12.5 + "%)";
});

// Call posts

const carouselContainer = document.querySelector(".carousel-container");

const loader = document.querySelector(".loader");

const showArrows = document.querySelector(".arrow-container");

const slide = document.querySelector(".carousel-slider");

const url =
  "https://linnc.no/concreteDesign/wp-json/wp/v2/posts?per_page=100&_embed";

async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    loader.style.display = "none";
    showArrows.style.display = "block";

    posts(results);
  } catch (error) {
    console.log(error);
    carouselContainer.innerHTML = errorMessage("An error occured", error);
  }
}

function posts(results) {
  for (let i = 0; i < 9; i++) {
    const formateDate = new Date(results[i].date).toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    if (results[i].id === 200) {
      slide.innerHTML += "";
    } else
      slide.innerHTML += `<a href="html/blog-post.html?id=${results[i].id}">
                            <figure class="blogPost-card">
                              <img
                                class="post-img"
                                src="${results[i]._embedded["wp:featuredmedia"][0].source_url}"
                                alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"
                              />
                              <div class="post-info">
                              <h2>${results[i].title.rendered}</h2>
                              <p>${formateDate}</p>
                              </div>
                            </figure>
                          </a>`;
  }
}

getPosts();
