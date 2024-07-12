const navBar = document.querySelector(".navbar");
const allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {
  li.addEventListener("click", () => {
    const currentActive = navBar.querySelector(".active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    li.classList.add("active");


    const indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 90}px))`;
  });
});