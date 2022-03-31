const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', function() {

    this.classList.toggle('is-active');
    navItems.classList.toggle('show');
    
});