// script.js

document.addEventListener('DOMContentLoaded', function() {
    const landingText = document.querySelector('.landing-text h1');
    
    // Initially hide the text to prepare for the typewriter animation
    landingText.style.visibility = 'hidden';

    setTimeout(() => {
        // Make the text visible and start the typewriter animation
        landingText.style.visibility = 'visible';
    }, 100); // Delay slightly to ensure CSS is applied
    
    // ARIA dropdown support
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', (event) => {
            event.preventDefault();
            const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
            button.setAttribute('aria-expanded', !isExpanded);
            content.style.display = !isExpanded ? 'block' : 'none';
        });

        button.addEventListener('blur', () => {
            button.setAttribute('aria-expanded', 'false');
            content.style.display = 'none';
        });
    });
});