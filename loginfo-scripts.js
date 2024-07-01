document.addEventListener("DOMContentLoaded", function() {
    const backHomeButton = document.querySelector(".back-home");
    const hideFireButton = document.querySelector(".hide-fire");
    const infoText = document.querySelector(".info-text");
    const funFactElement = document.getElementById("fun-fact");

    backHomeButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    hideFireButton.addEventListener("click", () => {
        infoText.classList.toggle("hidden-fire");
        hideFireButton.textContent = infoText.classList.contains("hidden-fire") ? "Show Fire" : "Hide Fire";
    });

    // Fun facts array
    const funFacts = [
        "Recently I've been loving the Souls' Franchise. Will play Dark Souls 3 next.",
        "This line changes every time you refresh",
        "I want a cat... :(",
        "The game that I've put the most amount of hours is probably Minecraft",
        "The first ever game that I played was Angry Birds",
        "My favourite anime series is probably Attack on Titan. And my favourite genre being Mystery",
        "I used to love drawing Pokémon as a kid.",
        "Pokémon is amazing! Play it if you haven't, I'd recommend to start with Pokémon Fire Red or Emerald.",
        "In my free time, I watch cat videos"
    ];

    // Function to get a random fun fact
    function getRandomFunFact() {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        return "Fun fact: " + funFacts[randomIndex];
    }

    // Set a random fun fact
    funFactElement.textContent = getRandomFunFact();
});