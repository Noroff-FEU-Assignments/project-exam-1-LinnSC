const url = "https://linnc.no/concreteDesign/wp-json/wp/v2/posts/200?_embed";

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
