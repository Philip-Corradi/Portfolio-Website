function toggleHamburger() {
    const menu = document.querySelector('.hamburger-nav-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    icon.classList.toggle('active');

}