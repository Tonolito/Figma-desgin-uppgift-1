// Taget från w3school och lite ändring av mig. Även chatgpt = (querySelector(".accordionitem"))
var acc = document.getElementsByClassName("question-card");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var accordionitem = this.querySelector(".accordionitem");
    if (accordionitem.style.display === "block") {
      accordionitem.style.display = "none";
    } else {
      accordionitem.style.display = "block";
    }
  });
}

//  Darkmode nedanför tagen från Joakims video

const darkmodeSwitch = document.querySelector("#darkmode-switch");
const hasDarkmode = localStorage.getItem("darkmode");

if (hasDarkmode == null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
} else if (hasDarkmode === "on") {
  enableDarkmode();
} else if (hasDarkmode === "off") {
  disableDarkmode();
}

darkmodeSwitch.addEventListener("change", () => {
  if (darkmodeSwitch.checked) {
    enableDarkmode();
    localStorage.setItem("darkmode", "on");
  } else {
    disableDarkmode();
    localStorage.setItem("darkmode", "off");
  }
});
function enableDarkmode() {
  darkmodeSwitch.checked = true;
  document.documentElement.classList.add("dark");
}
function disableDarkmode() {
  darkmodeSwitch.checked = false;
  document.documentElement.classList.remove("dark");
}
