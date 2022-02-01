const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("disappear", "appear");
    } else {
      entry.target.classList.replace("appear", "disappear");
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
