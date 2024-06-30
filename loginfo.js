// script.js

document.addEventListener("DOMContentLoaded", function() {
    const goHomeLink = document.querySelector(".go-home");
    goHomeLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "index.html";
    });
});