// Variables for Skills Section
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills__header");
  // Variables for Academical Section
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");
  // Constant for lightMode
const lightmode = document.querySelectorAll("[section-change]");
const lightModeButton = document.querySelector("#lightMode");

// Animation 
const bighero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const burger = document.querySelector(".burger");
const headline = document.querySelector(".headline");
// Burger
const ham = document.querySelector(".burger");
const nav = document.querySelector("nav");

// animation: 
// Animation from the begginning
// Target , duration , {properties},{propertiestogo}
const tl = new TimelineMax();
tl.fromTo(bighero, 1, { height: "0%" }, { height: "100%", ease: "bounce.out" })
  .fromTo(
    bighero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(slider, 1.6, { opacity: "0%" ,x: "200%" }, { opacity:"100%", x: "0%", ease: Power2.easeInOut });

tl.fromTo(logo, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });
// Burger
ham.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    // slider.style.height = "80vh";
  } else {
    slider.style.height = "100vh";
  }
  this.classList.toggle("color");
    nav.classList.toggle("active");
    bighero.classList.toggle("pAbs");
});

window.addEventListener("resize", () => {
  if (nav.classList.contains("active")) {
    if (screen.width > 768) {
      ham.classList.remove("color");
      nav.classList.remove("active");
    }
  }
});

// Skills Section
function toggleElements() {
  let className = this.parentNode.className;

  for (const element of skillsContent) {
    element.className = "skills_content skills__close";
  }

  if (className.includes("open")) {
    this.parentNode.className = className.replace("open", "close");
  } else {
    this.parentNode.className = className.replace("close", "open");
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleElements);
});

const colors = [
  "#430a23",
  "#220b15",
  "#0c1d34",
  "#0a111a",
  "#230010",
  "#3b021b",
  "#03214c",
  "#07336f",
];

const icons = document.querySelectorAll(".icon").forEach((element) => {
  element.style.color = `${colors[Math.floor(Math.random() * colors.length)]}`;
});


// End of Skills Section

// Adding light mode to th eweb page
lightModeButton.addEventListener("click", () => { 
    
    lightmode.forEach(element => {
        element.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`;
    });
})


tabs.forEach(tab => { 
    tab.addEventListener("click", function(){
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContent => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add('qualification__active')

        tabs.forEach(tab => { 
            tab.classList.remove("qualification__active");
        })
        tab.classList.add("qualification__active");
    });
})