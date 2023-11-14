document.addEventListener("DOMContentLoaded", function () {
    const conversationContainer = document.getElementById("conversation-container");
    const optionsContainer = document.getElementById("options-container");
    const resetIcon = document.getElementById("reset-icon");
    const ellipsisContainer = document.getElementById("ellipsis-container");

    // Liste des questions possibles
    const questions = ["Question 1", "Question 2", "Question 3"];
    
    // Événement clic sur les options
    optionsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("option")) {
            displayResponse(event.target.textContent);
            event.target.classList.add("clicked");
            event.target.style.pointerEvents = "none"; // Désactive le clic après sélection
        }
    });

    // Événement clic sur les points de suspension (retour à la conversation précédente)
    ellipsisContainer.addEventListener("click", function () {
        clearResponse();
        optionsContainer.querySelectorAll(".option").forEach(option => {
            option.classList.remove("clicked");
            option.style.pointerEvents = "auto"; // Réactive les clics
        });
    });

    // Événement clic sur l'icône de réinitialisation
    resetIcon.addEventListener("click", function () {
        clearConversation();
    });

    // Fonction pour afficher la réponse dans l'animation
    function displayResponse(answer) {
        const responseElement = document.createElement("div");
        responseElement.classList.add("response");
        responseElement.textContent = answer;
        conversationContainer.appendChild(responseElement);
        conversationContainer.scrollTop = conversationContainer.scrollHeight; // Fait défiler vers le bas
    }

    // Fonction pour effacer la réponse actuelle
    function clearResponse() {
        const responses = document.querySelectorAll(".response");
        responses[responses.length - 1].classList.add("fade-out");
        setTimeout(() => {
            responses[responses.length - 1].remove();
        }, 500); // Temps de l'animation fade-out
    }

    // Fonction pour réinitialiser toute la conversation
    function clearConversation() {
        conversationContainer.innerHTML = "";
        optionsContainer.querySelectorAll(".option").forEach(option => {
            option.classList.remove("clicked");
            option.style.pointerEvents = "auto";
        });
    }
});