let menuToggle = document.getElementsByClassName("toggle")[0];
let menu = document.getElementsByClassName("menu")[0];

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

let menuLinks = document.querySelectorAll("a");

menuLinks.forEach(function (i) {
  i.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
  });
});
