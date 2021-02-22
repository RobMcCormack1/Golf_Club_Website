window.onload = () => {
  //select all nav a elements
  const anchors = document.querySelectorAll("nav a");
  //select class of transition
  const transition_element = document.querySelector(".transition");

  //console.log(transition_element.classList.length);

  setTimeout(() => {
    //remove class, class to added later for for transition effect click
    transition_element.classList.remove("active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    //console.log(anchor);

    anchor.addEventListener("click", (e) => {
      //prevent deault behaviour of going to other page
      e.preventDefault();
      // console.log(e);
      let target = e.target.href;
      // console.log(target);

      transition_element.classList.add("active");
      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
