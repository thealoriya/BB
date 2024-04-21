// router.js

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `/${sectionId}`);
    }
}

// Handle back/forward navigation
window.addEventListener('popstate', function(event) {
    const path = window.location.pathname.substring(1);
    if (path) {
        navigateToSection(path);
    }
});
