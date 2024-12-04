// dark mode toggle
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

// typewriter effect
const aText = new Array(
    "Hi, I'm Christopher, a Software Developer and Tableau Data Specialist with 2 years experience in (web dev, data analysis / visualization, devops, AWS, documentation, etc). Free software enthusiast, and avid video game player."
);
const iSpeed = 20; // time delay of print out
const iIndex = 0; // start printing array at this position
const iArrLength = aText[0].length; // the length of the text array
const iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialize text position
let sContents = ""; // initialize contents variable
let iRow; // initialize current row
let blinking = true; // toggle state for blinking cursor

function typewriter() {
    sContents = " ";
    iRow = Math.max(0, iIndex - iScrollAt);
    let destination = document.getElementById("typed-text");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br />";
    }
    destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

function blinkCursor() {
    if (!blinking) return; // Stop blinking if blinking is false
    let destination = document.getElementById("typed-text");
    if (destination.innerHTML.endsWith("_")) {
        destination.innerHTML = destination.innerHTML.slice(0, -1) + " ";
    } else {
        destination.innerHTML = destination.innerHTML.trim() + "_";
    }
    setTimeout(blinkCursor, 500); //blinking speed in ms
}

typewriter(); // Start typewriter effect
blinkCursor(); // Start blinking effect

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
