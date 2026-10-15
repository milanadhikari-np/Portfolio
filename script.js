
// Typing Animation
const text = "Aspiring AI & Machine Learning Engineer";
const heading = document.querySelector(".home h2");

let index = 0;

heading.textContent = "";

function typeText() {
    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 70);
    }
}

typeText();


// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to my student portfolio!");
});



const categories = ["All", "Web Development", "Programming", "AI & ML"];

categories.forEach(function (category) {
    const button = document.createElement("button");

    button.textContent = category;
    button.className = "filter-btn";

    filterContainer.appendChild(button);

    button.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {
            const cardCategory = card.dataset.category;

            if (category === "All" || cardCategory === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const projectsHeading = document.querySelector(".projects h2");

projectsHeading.insertAdjacentElement("afterend", filterContainer);

filterContainer.querySelector(".filter-btn").classList.add("active");


// Dynamic Copyright Year
const footer = document.querySelector("footer p");

footer.innerHTML = `&copy; ${new Date().getFullYear()} Your Name. All rights reserved.`;
