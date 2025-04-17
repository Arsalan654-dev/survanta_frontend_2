

    // Initialize carousel with auto-rotation
    const testimonialCarousel = new bootstrap.Carousel('#testimonialCarousel', {
        interval: 5000,
        pause: 'hover'
    });

    // Initialize dropdown hover effect
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Show dropdown on hover
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                const bsDropdown = bootstrap.Dropdown.getInstance(this.querySelector('.dropdown-toggle')) || 
                                  new bootstrap.Dropdown(this.querySelector('.dropdown-toggle'));
                bsDropdown.show();
            }
        });
        
        // Keep dropdown open when hovering over menu
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.addEventListener('mouseleave', function() {
                const bsDropdown = bootstrap.Dropdown.getInstance(dropdown.querySelector('.dropdown-toggle'));
                bsDropdown.hide();
            });
        }
    });
    
    // Hide dropdown when mouse leaves the navbar item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseleave', function() {
            const dropdown = this.querySelector('.dropdown-toggle');
            if (dropdown && dropdown.getAttribute('aria-expanded') === 'true') {
                const bsDropdown = bootstrap.Dropdown.getInstance(dropdown);
                bsDropdown.hide();
            }
        });
    });
});
// Initialize dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Make dropdown arrows clickable
    document.querySelectorAll('.dropdown-toggle-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = this.closest('.nav-item').querySelector('.dropdown-menu');
            const isShowing = dropdown.classList.contains('show');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            if (!isShowing) {
                dropdown.classList.add('show');
            } else {
                dropdown.classList.remove('show');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-mega')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    answer.classList.toggle('show');
}

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

  // Initialize carousel with auto-rotation
  new bootstrap.Carousel('#testimonialCarousel', {
    interval: 5000,
    pause: 'hover'
});




