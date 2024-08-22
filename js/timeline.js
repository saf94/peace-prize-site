/* eslint-disable */

document.addEventListener("scroll", function (e) {
  var lastKnownScrollPosition = window.scrollY;
  var viewportWidth = document.documentElement.clientWidth;
  var timelineOffset;
  if (viewportWidth < 796) {
    timelineOffset = 240;
  } else {
    timelineOffset = 500;
  }

  var timeline = document.getElementsByClassName("timeline-2")[0];
  var timelineTopViewport = $(timeline).offset().top - lastKnownScrollPosition;

  timeline.setAttribute(
    "style",
    `height:${timelineOffset - timelineTopViewport}px`
  );
});

gsap.to(".previous-winners-template .prev-winner-marker-2023", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2023",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2020", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2020",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2019", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2019",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2018", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2018",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2017", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2017",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2016", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2016",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2015", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2015",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2014", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2014",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2013", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2013",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2012", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2012",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2011", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2011",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});

gsap.to(".previous-winners-template .prev-winner-marker-2010", {
  scrollTrigger: {
    trigger: ".prev-winner-marker-2010",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
  css: {
    borderColor: "#A27247",
    backgroundColor: "#A27247",
  },
  duration: 0.3,
});
