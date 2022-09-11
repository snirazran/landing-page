const sectionList = document.querySelectorAll("section");
const navMenu = document.getElementById("navigation");
const aTags = document.getElementsByTagName("a");
const body = document.getElementsByTagName("body");
//Functions

//building navigation
const navFiller = () => {
  sectionList.forEach((section) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<a class="anchor">${section.id}</a>`;
    navMenu.appendChild(newLi);
  });
};

//view port helper function // i got help from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=Use%20the%20getBoundingClientRect()%20method%20to%20get%20the%20size%20of,in%20the%20viewport%20or%20not.
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= 150 && rect.bottom >= 150;
}

//Event listeners

//Event for filling navigation
navMenu.addEventListener("DOMContentLoaded", navFiller());

//Event for adding active state to sections

const makeActive = () => {
  sectionList.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("active");
      for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].innerHTML === section.id) {
          aTags[i].classList.add("active");
        }
      }
    } else {
      section.classList.remove("active");
      for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].innerHTML === section.id) {
          aTags[i].classList.remove("active");
        }
      }
    }
  });
};

body[0].addEventListener("scroll", makeActive);

//Nav scrolls into view
for (let i = 0; i < aTags.length; i++) {
  sectionList.forEach((section) => {
    aTags[i].addEventListener("click", function (e) {
      if (e.target.innerHTML === section.className) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
