fetch("blog.json")
  .then(response => response.json())
  .then(posts => {
    const blogContainer = document.getElementById("blog");

    function parseDate(dateStr) {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month - 1, day);
    }

    posts.sort((a, b) => parseDate(b.date) - parseDate(a.date));

    posts.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("blog-post");

      let imagesHTML = "";
      if (post.images && post.images.length > 0) {
        imagesHTML = `
          <div class="blog-images-vertical">
            ${post.images.map(img => `<img src="${img}" alt="">`).join("")}
          </div>
        `;
      }

      div.innerHTML = `
        <h2>${post.title}</h2>
        <small>${post.date}</small>
        <p>${post.content}</p>
        ${imagesHTML}
      `;

      blogContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error loading blog:", error);
  });
