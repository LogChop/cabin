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
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            content.style.display = !isExpanded ? 'block' : 'none';

            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    const otherButton = otherDropdown.querySelector('.dropbtn');
                    const otherContent = otherDropdown.querySelector('.dropdown-content');
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherContent.style.display = 'none';
                }
            });
        });

        // Add touchstart listener to simulate hover on touch devices
        button.addEventListener('touchstart', (event) => {
            event.preventDefault();
            button.classList.add('touch-highlight');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            content.style.display = !isExpanded ? 'block' : 'none';

            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    const otherButton = otherDropdown.querySelector('.dropbtn');
                    const otherContent = otherDropdown.querySelector('.dropdown-content');
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherContent.style.display = 'none';
                }
            });
        });

        // Remove touch-highlight class when touch ends
        button.addEventListener('touchend', (event) => {
            event.preventDefault();
            setTimeout(() => {
                button.classList.remove('touch-highlight');
            }, 300);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                button.setAttribute('aria-expanded', 'false');
                content.style.display = 'none';
            }
        });
    });
});
