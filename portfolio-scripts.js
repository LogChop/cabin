document.addEventListener("DOMContentLoaded", function() {
    const backHomeButton = document.querySelector(".back-home");

    backHomeButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});