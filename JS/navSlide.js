const navSlide = () => {
    const burger_menu = document.querySelector('.burger_menu');
    const nav = document.querySelector('.nav_links1');

    burger_menu.addEventListener('click',() => {
        nav.classList.toggle('nav_active');
    });
}

navSlide();