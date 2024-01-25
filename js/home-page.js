/* eslint-disable */

window.onload = () => {
  // ==============
  // Banner
  // ==============
  const imgOneOffsets = [0, 0, 2, 3]
  const imgTwoOffsets = [3, 3, 6, 7]
  const imgThreeOffsets = [7, 7, 10, 11]
  const imgFourOffsets = [11, 11, 14, 15]
  const imgFiveOffsets = [15, 15, 18, 19]

  var tlBanner = gsap.timeline({
    defaults: { duration: 1 },
    repeat: -1,
  })

  tlBanner.to(
    '.fullsize-video-bg .img-1, .flag-1, .flag-1',
    {
      css: {
        display: 'block',
      },
      ease: 'power2.out',
    },
    imgOneOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-1, .flag-1',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgOneOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-1, .flag-1',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgOneOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-1, .flag-1',
    {
      css: {
        display: 'none',
      },
      ease: 'power2.out',
      duration: 0,
    },
    imgOneOffsets[3]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2, .flag-2',
    {
      css: {
        display: 'block',
      },
      ease: 'power2.out',
    },
    imgTwoOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2, .flag-2',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgTwoOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2, .flag-2',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgTwoOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2, .flag-2',
    {
      css: {
        display: 'none',
      },
      ease: 'power2.out',
      duration: 0,
    },
    imgTwoOffsets[3]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3, .flag-3',
    {
      css: {
        display: 'block',
      },
      ease: 'power2.out',
    },
    imgThreeOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3, .flag-3',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgThreeOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3, .flag-3',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgThreeOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3, .flag-3',
    {
      css: {
        display: 'none',
      },
      ease: 'power2.out',
      duration: 0,
    },
    imgThreeOffsets[3]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4, .flag-4',
    {
      css: {
        display: 'block',
      },
      ease: 'power2.out',
    },
    imgFourOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4, .flag-4',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgFourOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4, .flag-4',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgFourOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4, .flag-4',
    {
      css: {
        display: 'none',
      },
      ease: 'power2.out',
      duration: 0,
    },
    imgFourOffsets[3]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5, .flag-5',
    {
      css: {
        display: 'block',
      },
      ease: 'power2.out',
    },
    imgFiveOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5, .flag-5',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgFiveOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5, .flag-5',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgFiveOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5, .flag-5',
    {
      css: {
        display: 'none',
      },
      ease: 'power2.out',
      duration: 0,
    },
    imgFiveOffsets[3]
  )

  // ==============
  // SECTION 1
  // ==============
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-1',
      // markers: true,
      start: 'top 50%',
    },
    defaults: { duration: 1 },
  })

  tl.to('.section-1', {
    opacity: 1,
    ease: 'power2.out',
    duration: 0.5,
  })

  tl.to('.section-1 .img-wrapper', {
    opacity: 1,
    ease: 'power2.out',
    duration: 0.5,
  }, 0)

  tl.to(
    '.section-1 .animated-bg-img',
    {
      scaleX: 0,
      transformOrigin: 'top right',
      ease: 'power2.out',
      duration: 1.7,
    },
    0.2
  )

  tl.from(
    '.section-1 .content-wrapper',
    {
      opacity: 0,
      y: 50,
      duration: 0.5,
    },
    0.2
  )

  tl.to(
    '.section-1 .content-wrapper .animated-bg-content',
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    0.2
  )

  // ==============
  // SECTION 2
  // ==============

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-2',
      // markers: true,
      start: 'top 50%',
    },
    defaults: { duration: 1 },
  })

  tl2.to('.section-2', {
    opacity: 1,
    ease: 'power2.out',
    duration: 0.5,
  })

  tl2.to('.section-2 .img-wrapper', {
    opacity: 1,
    ease: 'power2.out',
    duration: 0.5,
  }, 0)

  tl2.to('.section-2 .animated-bg-img', {
    width: 0,
    ease: 'power2.out',
    duration: 1.7,
  }, 0.2)

  tl2.from(
    '.section-2 .content-wrapper',
    {
      opacity: 0,
      y: 50,
      duration: 0.5,
    },
    0.2
  )

  tl2.to(
    '.section-2 .content-wrapper .animated-bg-content',
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    0.2
  )

  // ==============
  // PREVIOUS WINNERS
  // ==============

  var tlPrev = gsap.timeline({
    scrollTrigger: {
      trigger: '.previous-winners',
      start: 'top 60%',
      // markers: true,
    },
  })

  tlPrev.to('.previous-winners .winner-2023', {
    css: {
      position: 'static',
    },
    duration: 0,
  })

  tlPrev.to(
    '.previous-winners h1',
    {
      css: {
        opacity: '1',
      },
      duration: 0.7,
    },
    0.5
  )

  tlPrev.to(
    '.previous-winners ul',
    {
      css: {
        opacity: '1',
      },
      duration: 0.7,
    },
    0.5
  )

  tlPrev.to(
    '.previous-winners .winner-wrapper',
    {
      css: {
        opacity: '1',
        zIndex: '2',
      },
      duration: 0.7,
    },
    1
  )

  tlPrev.to(
    '.previous-winners .winner-2023',
    {
      css: {
        position: 'static',
        opacity: '1',
        zIndex: '2',
      },
      duration: 0.7,
    },
    1
  )

  const yearButtons = document.getElementsByClassName('yearTitle')
  let year

  const tlPrevWinner = gsap.timeline({
    defaults: { duration: 0.6 },
  })

  for (const yearButton of yearButtons) {
    yearButton.addEventListener('click', function (e) {
      const prevYear = year || '2023'
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
          zIndex: '2',
        },
        // duration: 1,
      })

      tlPrevWinner.to(`.previous-winners .winner-${prevYear}`, {
        y: 100,
        duration: 0,
      })
    })
  }

  // ==============
  // NOMINATE SECTION
  // ==============

  var tlNom = gsap.timeline({
    scrollTrigger: {
      trigger: '.nominate-section',
      start: 'top 80%',
      // markers: true,
    },
  })

  tlNom.to('.nominate-section h1', {
    opacity: 1,
    duration: 0.7,
  })

  tlNom.to(
    '.nominate-section button',
    {
      opacity: 1,
      duration: 0.7,
    },
    0.5
  )
}
