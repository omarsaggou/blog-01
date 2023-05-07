const navLink = document.querySelectorAll('[data-navLink]');

navLink.forEach((link) => {
    if (link.getAttribute('href') === window.location.pathname) {
        link.setAttribute('aria-current', 'page');
    }
})