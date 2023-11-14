document.addEventListener("DOMContentLoaded", function () {
    const conversationContainer = document.getElementById("conversation-container");
    const optionsContainer = document.getElementById("options-container");
    const resetIcon = document.getElementById("reset-icon");
    const ellipsisContainer = document.getElementById("ellipsis-container");

    const questions = ["Question 1", "Question 2", "Question 3"];

    optionsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("option")) {
            const selectedQuestion = event.target.textContent;
            displayResponse(selectedQuestion); // Appel de la fonction pour afficher la réponse
            event.target.classList.add("clicked");
            event.target.style.pointerEvents = "none";
        }
    });

    ellipsisContainer.addEventListener("click", function () {
        clearResponse();
        optionsContainer.querySelectorAll(".option").forEach(option => {
            option.classList.remove("clicked");
            option.style.pointerEvents = "auto";
        });
    });

    resetIcon.addEventListener("click", function () {
        clearConversation();
    });

    function displayResponse(answer) {
        const responseElement = document.createElement("div");
        responseElement.classList.add("response");
        responseElement.textContent = answer;
        conversationContainer.appendChild(responseElement);
        conversationContainer.scrollTop = conversationContainer.scrollHeight;
    }

    function clearResponse() {
        const responses = document.querySelectorAll(".response");
        responses[responses.length - 1].classList.add("fade-out");
        setTimeout(() => {
            responses[responses.length - 1].remove();
        }, 500);
    }

    function clearConversation() {
        conversationContainer.innerHTML = "";
        optionsContainer.querySelectorAll(".option").forEach(option => {
            option.classList.remove("clicked");
            option.style.pointerEvents = "auto";
        });
    }
});
