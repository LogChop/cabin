document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        const toggleDropdown = (event) => {
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

            // Highlight the selected header option
            dropdowns.forEach(otherDropdown => {
                const otherButton = otherDropdown.querySelector('.dropbtn');
                otherButton.classList.remove('touch-highlight');
            });
            button.classList.add('touch-highlight');
        };

        button.addEventListener('click', toggleDropdown);
        button.addEventListener('touchstart', toggleDropdown);

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                button.setAttribute('aria-expanded', 'false');
                content.style.display = 'none';
                button.classList.remove('touch-highlight');
            }
        });
    });
});