document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner toutes les cartes
    const cards = document.querySelectorAll(".a, .b, .c,.d, .e, .f,.g, .l");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            // Vérifier si la carte est déjà ouverte
            const isOpen = card.classList.contains("open");

            // Fermer toutes les cartes
            cards.forEach(c => {
                c.classList.remove("open");
                c.querySelector(".description").classList.remove("visible");
            });

            // Si la carte cliquée n'était pas ouverte, on l'ouvre
            if (!isOpen) {
                card.classList.add("open");
                card.querySelector(".description").classList.add("visible");
            }
        });
    });
});
