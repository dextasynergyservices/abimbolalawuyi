// Mobile navbar functionality with overlay
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarOverlay = document.querySelector('.navbar-overlay');
    
    // Function to close navbar
    function closeNavbar() {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
        if (navbarOverlay) {
            navbarOverlay.classList.remove('show');
        }
        document.body.classList.remove('navbar-open');
    }
    
    // Close navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                closeNavbar();
            }
        });
    });
    
    // Close navbar when overlay is clicked (if overlay exists)
    if (navbarOverlay) {
        navbarOverlay.addEventListener('click', closeNavbar);
    }
    
    // Handle Bootstrap's collapse events for overlay
    if (navbarOverlay) {
        navbarCollapse.addEventListener('hidden.bs.collapse', function() {
            navbarOverlay.classList.remove('show');
            document.body.classList.remove('navbar-open');
        });
        
        navbarCollapse.addEventListener('show.bs.collapse', function() {
            if (window.innerWidth < 992) {
                navbarOverlay.classList.add('show');
                document.body.classList.add('navbar-open');
            }
        });
    }
});