const header = document.querySelector("#header");
const topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }

  if (window.scrollY > 300) {
    topBtn.classList.add("on");
  } else {
    topBtn.classList.remove("on");
  }
});

topBtn.addEventListener("click", function () {
  gsap.to(window, { scrollTo: 0, duration: 1 });
});

const familyBtn = document.querySelector("#footer .family-site button");
const submenu = document.querySelector("#footer .family-site .submenu");
familyBtn.addEventListener("click", function () {
  submenu.classList.toggle("on");
});

const subMenu = $("#sub-menu li .plus");
subMenu.on("click", function (e) {
  e.preventDefault();
  const subsliblings = $(this).next();
  const siblings = $(this).parent().siblings().find("ul");
  subsliblings.slideToggle();
  siblings.slideUp();
});
