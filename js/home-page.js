// ==============
// SECTION 1
// ==============

gsap.from('.section-1 .img-wrapper', {
	scrollTrigger: {
		trigger: '.section-1',
	},
	duration: 1.5,
	x: -500,
})

gsap.from('.section-1 .bg-circle', {
	scrollTrigger: {
		trigger: '.section-1',
	},
	duration: 1.5,
	y: 200,
})

gsap.from('.section-1 .content-wrapper', {
	scrollTrigger: {
		trigger: '.section-1',
	},
	duration: 1.5,
	x: 500,
})

// ==============
// SECTION 2
// ==============

gsap.from('.section-2 .img-wrapper', {
	scrollTrigger: {
		trigger: '.section-2',
	},
	duration: 1.5,
	x: -500,
})

gsap.from('.section-2 .bg-circle', {
	scrollTrigger: {
		trigger: '.section-2',
	},
	duration: 1.5,
	y: 200,
})

gsap.from('.section-2 .content-wrapper', {
	scrollTrigger: {
		trigger: '.section-2',
	},
	duration: 1.5,
	x: 500,
})

// ==============
// PREVIOUS WINNERS
// ==============

const yearButton = document.getElementsByClassName("2019")[0]
let toggleShow = false

const tlPrevWinner = gsap.timeline({
	defaults: { duration: 0.6 },
});

yearButton.addEventListener("click", function(e) {
	const year = e.target.innerText
	console.log(e.target.innerText)
	toggleShow = !toggleShow

	if (toggleShow) {

		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-wrapper`, {
			css: { maxWidth: "70%" },
			duration: 0,
		})

		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-details`, {
			css: { display: "block" },
			duration: 0.2,
		})
		
		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-wrapper`, {
			css: { backgroundColor: "rgba(255, 255, 255, 0.15)" },
			duration: 0.5,
		})

		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-details`, {
			css: { opacity: 1 },
		})

	} else {

		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-details`, {
			css: { opacity: 0 },
		})


		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-wrapper`, {
			css: { backgroundColor: "rgba(255, 255, 255, 0)" },
			duration: 0.5,
		})

		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-details`, {
			css: { display: "none" },
			duration: 0.2,
		})

		tlPrevWinner.to(`.previous-winners .winner-${year} .winner-wrapper`, {
			css: { maxWidth: "none" },
			duration: 0,
		})
	}
})

