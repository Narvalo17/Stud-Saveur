
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".food-card");

    cards.forEach(card => {
        const button = document.createElement("button");
        button.innerText = "Voir Plus";
        button.classList.add("view-more-btn");
        card.appendChild(button);

        button.addEventListener("click", function () {
            const description = card.querySelector(".description");
            if (description) {
                description.classList.toggle("show");
            }
        });

        card.addEventListener("click", function () {
            const description = card.querySelector(".description");
            if (description) {
                description.classList.toggle("show");
            }
        });
    });
});
