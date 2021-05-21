const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://linnc.no/concreteDesign/wp-json/wp/v2/posts/?categories=" +
  id +
  "&_embed";

if (id === null) {
  location.href = "/";
}

const postContainer = document.querySelector(".blogPost-container");

const buttonContainer = document.querySelector(".button-container");

const moreButton = document.querySelector(".more-button");

const titleContainer = document.querySelector(".title");

async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    postContainer.innerHTML = "";
    posts(results);
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = errorMessage("An error occured", error);
  }
}

getPosts();

function posts(results) {
  for (let i = 0; i < results.length; i++) {
    const formateDate = new Date(results[i].date).toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    postContainer.innerHTML += `<figure class="blogPost-card">
                                      <a href="blog-post.html?id=${results[i].id}">
                                          <img class="post-img" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"/>
                                          <div class="post-info">
                                              <h2>${results[i].title.rendered}</h2>
                                              <p>${formateDate}</p>
                                          </div>
                                      </a>
                                  </figure>`;
  }
}

const categoryUrl =
  "https://linnc.no/concreteDesign/wp-json/wp/v2/categories/" +
  id +
  "?per_page=100";

async function getCategory() {
  try {
    const response = await fetch(categoryUrl);
    const category = await response.json();
    console.log(category);

    const categoryHeader = document.querySelector(".header-img");

    const title = document.querySelector(".title");

    title.innerHTML = `concreteDesign | ${category.name} posts`;

    categoryHeader.innerHTML += `<h1>${category.name} posts</h1>`;
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = errorMessage("An error occured", error);
  }
}

getCategory();
