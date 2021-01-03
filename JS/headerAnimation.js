//Wrap every letter in a span
var textWrapper = document.querySelector('.overlay h1');
var textWrapperP = document.querySelector('.overlay p');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperP.innerHTML = textWrapperP.textContent.replace(/\S/g, "<span class='letterP'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.overlay h1 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.overlay p .letterP',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i

  }).add({
    targets: '.overlay p',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }).add({
    targets: '.overlay h1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });