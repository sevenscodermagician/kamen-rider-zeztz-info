fetch("blog.json")
  .then(response => response.json())
  .then(posts => {
    const blogContainer = document.getElementById("blog");

    function parseDate(dateStr) {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month - 1, day);
    }

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Filter and sort posts by date
    const visiblePosts = posts
      .filter(post => {
        if (!post.date) return true;
        const postDate = parseDate(post.date);
        return postDate <= todayStart;
      })
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    // Pagination variables
    const postsPerPage = 5;
    let currentPage = 1;
    const totalPages = Math.ceil(visiblePosts.length / postsPerPage);

    function renderPosts(page) {
      blogContainer.innerHTML = "";
      const start = (page - 1) * postsPerPage;
      const end = start + postsPerPage;
      const postsToShow = visiblePosts.slice(start, end);

      postsToShow.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("blog-post");

        let imagesHTML = "";
        if (post.images && post.images.length > 0) {
          imagesHTML = `
            <div class="blog-images">
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

      renderPagination();
    }

    function renderPagination() {
      const pagination = document.createElement("div");
      pagination.style.margin = "20px 0";
      pagination.style.textAlign = "center";

      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.classList.add("button");
        btn.style.margin = "0 5px";
        if (i === currentPage) btn.style.backgroundColor = "#00cc66";

        btn.addEventListener("click", () => {
          currentPage = i;
          renderPosts(currentPage);
        });

        pagination.appendChild(btn);
      }

      blogContainer.appendChild(pagination);
    }

    renderPosts(currentPage);

  })
  .catch(error => {
    console.error("Error loading blog:", error);
  });
