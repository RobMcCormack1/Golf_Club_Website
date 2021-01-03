const navSlide = () => {
  const burger_menu = document.querySelector(".burger_menu");
  const nav1 = document.querySelector(".nav_links1");
  const nav = document.querySelector(".nav_links");

  burger_menu.addEventListener("click", () => {
    nav1.classList.toggle("nav_active");
    nav.classList.toggle("nav_deactive");

    //Burger animation
    burger_menu.classList.toggle("toggle");
  });
};

navSlide();
