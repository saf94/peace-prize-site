/* eslint-disable */

// ==============
// SECTION 1
// ==============

gsap.from('.section-1 .img-wrapper', {
	scrollTrigger: {
		trigger: '.section-1',
		start: "top 70%",
	},
	duration: 1.5,
	x: -500,
	opacity: 0,
})

gsap.from('.section-1 .bg-circle', {
	scrollTrigger: {
		trigger: '.section-1',
		start: "top 70%",
	},
	duration: 1.5,
	y: 200,
	opacity: 0,
})

gsap.from('.section-1 .content-wrapper', {
	scrollTrigger: {
		trigger: '.section-1',
		start: "top 70%",
	},
	duration: 1.5,
	x: 500,
	opacity: 0,
})

// ==============
// SECTION 2
// ==============

gsap.from('.section-2 .img-wrapper', {
	scrollTrigger: {
		trigger: '.section-2',
		start: "top 70%",
	},
	duration: 1.5,
	x: -500,
	opacity: 0,
})

gsap.from('.section-2 .bg-circle', {
	scrollTrigger: {
		trigger: '.section-2',
		start: "top 70%",
	},
	duration: 1.5,
	y: 200,
	opacity: 0,
})

gsap.from('.section-2 .content-wrapper', {
	scrollTrigger: {
		trigger: '.section-2',
		start: "top 70%",
	},
	duration: 1.5,
	x: 500,
	opacity: 0,
})

// ==============
// PREVIOUS WINNERS
// ==============

gsap.to(
	'.previous-winners .winner-2018, .winner-2017, .winner-2016, .winner-2015, .winner-2014', 
	{
	scrollTrigger: {
		trigger: '.previous-winners',
	},
	y: 100,
	duration: 0,
})

gsap.to('.previous-winners .winner-2019', {
	scrollTrigger: {
		trigger: '.previous-winners',
	},
	css: { 
		display: "flex",
		position: "static",
		opacity: "1",
	},
	duration: 0.6,
})

const yearButtons = document.getElementsByClassName("yearTitle")
let year;

const tlPrevWinner = gsap.timeline({
	defaults: { duration: 0.6 },
});

for (const yearButton of yearButtons) {
	yearButton.addEventListener("click", function(e) {
		const prevYear = year || "2019"
		year = e.target.innerText
	
		if (prevYear === year) return

		for (const button of yearButtons) {
			if (year == button.innerText) {
				button.classList.add("active")
			} else {
				button.classList.remove("active")
			}
		}
	
		tlPrevWinner.to(`.previous-winners .winner-${prevYear}`, {
			opacity: 0,
			y: -100,
			// duration: 1,
		})
		
		tlPrevWinner.to(`.previous-winners .winner-${year}`, {
			css: { 
				opacity: "1",
				transform: "translate(0, 0)"
			},
			// duration: 1,
		})

		tlPrevWinner.to(`.previous-winners .winner-${prevYear}`, {
			y: 100,
			duration: 0,
		})

	})	
};

