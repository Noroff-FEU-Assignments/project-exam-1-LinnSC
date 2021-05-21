/* <div class="about-index">
<h1>concrete Design</h1>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
  erat, sed diam.
</p>
<div class="center">
  <a class="button more-btn" href="html/about.html">Read more</a>
</div>
</div> */

const url = "https://linnc.no/concreteDesign/wp-json/wp/v2/posts/200?_embed";

const errorMessageContainer = document.querySelector(".about-index");

// const loader = document.querySelector(".loader-container");

// const headerImg = document.querySelector(".header-img");

// const h1 = document.querySelector(".header-container");

const aboutInfo = document.querySelector(".about-index");

async function getInfo() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    aboutInfo.innerHTML += `<div class="index-info">
                                <h1>concrete Design</h1>
                                <p>${results.excerpt.rendered}</p>
                            </div>`;
  } catch (error) {
    console.log(error);
    errorMessageContainer.innerHTML = errorMessage("An error occured", error);
  }
}

getInfo();

const categoryCard = document.querySelector(".category-card");

const categoryUrl = "https://linnc.no/concreteDesign/wp-json/wp/v2/categories/";

async function getCategory() {
  try {
    const response = await fetch(categoryUrl);
    const category = await response.json();
    console.log(category);

    for (let i = 0; i < category.length; i++) {
      if (category[i].id === 1) {
        categoryCard.innerHTML += "";
      } else
        categoryCard.innerHTML += `<a href="html/categories.html?id=2">
                                  <img
                                    class="category-img"
                                    src="images/categories/plant-category.jpg"
                                    alt="Green plant"
                                  />
                                  <div class="category-container">
                                    <h4>${category[i].name}</h4>
                                  </div>
                                </a>`;
    }
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = errorMessage("An error occured", error);
  }
}

getCategory();
