const url =
  "https://linnc.no/concreteDesign/wp-json/wp/v2/posts?per_page=100&_embed";

const postContainer = document.querySelector(".blogPost-container");

const buttonContainer = document.querySelector(".button-container");

const moreButton = document.querySelector(".more-button");

const titleContainer = document.querySelector(".title");

const errorContainer = document.querySelector(".error-message-container");
const loader = document.querySelector(".loader");

async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    loader.style.display = "none";
    postContainer.innerHTML = "";

    posts(results);

    moreButton.style.display = "flex";
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage(
      "Sorry, something went wrong.",
      error
    );
  }
}

function posts(results) {
  for (let i = 0; i < 11; i++) {
    const formateDate = new Date(results[i].date).toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    if (results[i].id === 200) {
      postContainer.innerHTML += "";
    } else
      postContainer.innerHTML += `<figure class="blogPost-card">
                                      <a href="blog-post.html?id=${results[i].id}">
                                          <img
                                          class="post-img"
                                          src="${results[i].featured_media_src_url}"
                                          alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"
                                          />
                                          <div class="post-info">
                                          <h2>${results[i].title.rendered}</h2>
                                          <p>${formateDate}</p>
                                          </div>
                                      </a>
                                  </figure>`;
  }
}

getPosts();

moreButton.addEventListener("click", () => {
  async function getPosts() {
    try {
      const response = await fetch(url);
      const results = await response.json();
      console.log(results);

      postContainer.innerHTML = "";
      moreButton.style.display = "none";

      for (let i = 0; i < results.length; i++) {
        const formateDate = new Date(results[i].date).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        if (results[i].id === 200) {
          postContainer.innerHTML += "";
        } else
          postContainer.innerHTML += `<figure class="blogPost-card">
                                              <a href="blog-post.html?id=${results[i].id}">
                                                  <img
                                                  class="post-img"
                                                  src="${results[i]._embedded["wp:featuredmedia"][0].source_url}"
                                                  alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}"
                                                  />
                                                  <div class="post-info">
                                                  <h2>${results[i].title.rendered}</h2>
                                                  <p>${formateDate}</p>
                                                  </div>
                                              </a>
                                          </figure>`;
      }
    } catch (error) {
      console.log(error);
      errorContainer.innerHTML = errorMessage(
        "Sorry, something went wrong.",
        error
      );
    }
  }

  getPosts();
});
