// When .mobile-menu is tapped, make mobile-navbar visible
const mobileMenu = document.getElementsByClassName('mobile-menu');


function toggleMobileNavbar() {
    document.getElementById('mobile-navbar').classList.toggle('showMobileNavbar');
    document.getElementById('mobile-navbar-wrapper').classList.toggle('mobile-navbar-wrapper-open');
    document.getElementById('mobile-menu-close').classList.toggle('mobile-menu-close-visible');
}