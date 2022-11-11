Splitting();
AOS.init();
const swiper = new Swiper("#main-visual .main-slide", {
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-visual .contents .pagination",
    type: "bullets",
    clickable: true,
  },
});
const txtswiper = new Swiper("#main-visual .txt-slide", {
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-visual .contents .pagination",
    type: "bullets",
    clickable: true,
  },
  fadeEffect: {
    crossFade: true,
  },
});
const noticeswiper = new Swiper("#main-visual .notice-box", {
  loop: true,
  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },
});

const reswiper = new Swiper("#research #research-banner", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: "#research .btn-next",
    prevEl: "#research .btn-prev",
  },
});

const bk21swiper = new Swiper("#bk21 .bk21-banner", {
  effect: "fade",
  loop: true,
  pagination: {
    el: "#bk21 .contents .pagination",
    type: "bullets",
  },
  navigation: {
    prevEl: "#bk21 .bk21-btn .btn-prev",
    nextEl: "#bk21 .bk21-btn .btn-next",
  },
  on: {
    slideChange: function (swiper) {
      const index = swiper.realIndex;

      const bk21List = document.querySelectorAll("#bk21 .banner-list li");
      for (let i = 0; i < 4; i++) {
        bk21List[i].classList.remove("on");
      }
      const selectedlist = document.querySelector(`#bk21 .banner-list li:nth-child(${index + 1})`);
      selectedlist.classList.add("on");
    },
  },
});

gsap.from("#main-visual .contents .char", {
  y: -200,
  opacity: 0,
  duration: 2,
  ease: "bounce",
  stagger: { each: 0.03, from: "random" },
});

const fundList = document.querySelectorAll("#fund .info-box li");
const total = fundList.length;

for (let i = 0; i < total; i++) {
  fundList[i].addEventListener("click", function () {
    for (let j = 0; j < total; j++) {
      fundList[j].classList.remove("on");
    }
    fundList[i].classList.add("on");
  });
}
