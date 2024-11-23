// dark mode
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const sunIcon = document.getElementById("theme-icon-sun");
    const moonIcon = document.getElementById("theme-icon-moon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        document.body.classList.add("dark-mode");
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block";
    }

    themeToggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            sunIcon.style.display = "inline-block";
            moonIcon.style.display = "none";
            localStorage.setItem("theme", "light-mode");
        } else {
            document.body.classList.add("dark-mode");
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline-block";
            localStorage.setItem("theme", "dark-mode");
        }
    });
});

// search posts
const searchInput = document.getElementById("search-input");
const postList = document.getElementById("post-list");
const posts = postList.querySelectorAll("li");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    posts.forEach((post) => {
        const postTitle = post.querySelector("a").textContent.toLowerCase();

        if (postTitle.includes(filter)) {
            post.style.display = "";
        } else {
            post.style.display = "none";
        }
    });
});
