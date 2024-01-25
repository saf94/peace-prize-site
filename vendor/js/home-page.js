/* eslint-disable */

// ==============
// SECTION 1
// ==============

window.onload = (event) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-1',
      // markers: true,
      start: 'top 20%',
    },
    defaults: { duration: 1 },
  })

  tl.to('.section-1 .initial-bg-img', {
    x: 1000,
    ease: "power2.out",
    duration: 2,
  })

  tl.to('.section-1 .initial-bg-img', {
    css: {
      display: 'none',
    },
    duration: 0,
  })

  tl.to('.section-1 .animated-bg-img', {
    // css: {
    //   width: 0,
    // },
    x: 600,
    ease: "power2.out",
    duration: 2,
  }, 0.5)

  tl.from('.section-1 .content-wrapper', {
    // css: {
    //   height: 0,
    // },
    opacity: 0,
    y: 50,
    duration: 1,
  }, 2)
 
  tl.to('.section-1 .content-wrapper .animated-bg-content', {
    // css: {
    //   height: 0,
    // },
    opacity: 1,
    y: 0,
    duration: 1,
  }, 2.5)

  
  // ==============
  // SECTION 2
  // ==============

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-2',
      // markers: true,
      start: 'top 20%',
    },
    defaults: { duration: 1 },
  })

  tl2.to('.section-2 .initial-bg-img', {
    x: -1000,
    ease: "power2.out",
    duration: 2,
  })

  tl2.to('.section-2 .initial-bg-img', {
    css: {
      display: 'none',
    },
    duration: 0,
  })

  tl2.to('.section-2 .animated-bg-img', {
    x: -700,
    ease: "power2.out",
    duration: 2,
  }, 0.5)

  tl2.from('.section-2 .content-wrapper', {
    opacity: 0,
    y: 50,
    duration: 1,
  }, 2)
 
  tl2.to('.section-2 .content-wrapper .animated-bg-content', {
    opacity: 1,
    y: 0,
    duration: 1,
  }, 2.5)


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
    }
  )

  gsap.to('.previous-winners .winner-2019', {
    scrollTrigger: {
      trigger: '.previous-winners',
    },
    css: {
      position: 'static',
      opacity: '1',
    },
    duration: 0.6,
  })

  const yearButtons = document.getElementsByClassName('yearTitle')
  let year

  const tlPrevWinner = gsap.timeline({
    defaults: { duration: 0.6 },
  })

  for (const yearButton of yearButtons) {
    yearButton.addEventListener('click', function (e) {
      const prevYear = year || '2019'
      year = e.target.innerText

      if (prevYear === year) return

      for (const button of yearButtons) {
        if (year == button.innerText) {
          button.classList.add('active')
        } else {
          button.classList.remove('active')
        }
      }

      tlPrevWinner.to(`.previous-winners .winner-${prevYear}`, {
        opacity: 0,
        y: -100,
        // duration: 1,
      })

      tlPrevWinner.to(`.previous-winners .winner-${year}`, {
        css: {
          opacity: '1',
          transform: 'translate(0, 0)',
        },
        // duration: 1,
      })

      tlPrevWinner.to(`.previous-winners .winner-${prevYear}`, {
        y: 100,
        duration: 0,
      })
    })
  }
}
