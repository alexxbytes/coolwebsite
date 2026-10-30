const splashscreen = document.getElementById("splashscreen");
const splashScreenFadeOut = {
	opacity: [1, 0],
  transform: ["scale(1)", "scale(2)"],
	easing: "cubic-bezier(.85,0,0,1)"
};
const splashScreenFadeIn = {
  opacity: [0, 1],
  transform: ["scale(2)", "scale(1)"],
  easing: "cubic-bezier(.85,0,0,1)"
};
const splashScreenFadeTiming = {
  duration: 500,
  iterations: 1,
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    splashscreen.animate(splashScreenFadeOut, splashScreenFadeTiming);
    setTimeout(function () {
      splashscreen.remove();
    }, 500)
  }
}
