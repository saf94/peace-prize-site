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
    '.fullsize-video-bg .img-1',
    {
      css: {
        display: 'inline',
      },
      ease: 'power2.out',
    },
    imgOneOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-1',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgOneOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-1',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgOneOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-1',
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
    '.fullsize-video-bg .img-2',
    {
      css: {
        display: 'inline',
      },
      ease: 'power2.out',
    },
    imgTwoOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgTwoOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgTwoOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-2',
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
    '.fullsize-video-bg .img-3',
    {
      css: {
        display: 'inline',
      },
      ease: 'power2.out',
    },
    imgThreeOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgThreeOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgThreeOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-3',
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
    '.fullsize-video-bg .img-4',
    {
      css: {
        display: 'inline',
      },
      ease: 'power2.out',
    },
    imgFourOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgFourOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgFourOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-4',
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
    '.fullsize-video-bg .img-5',
    {
      css: {
        display: 'inline',
      },
      ease: 'power2.out',
    },
    imgFiveOffsets[0]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5',
    {
      opacity: 1,
      ease: 'power2.out',
    },
    imgFiveOffsets[1]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5',
    {
      opacity: 0,
      ease: 'power2.out',
    },
    imgFiveOffsets[2]
  )

  tlBanner.to(
    '.fullsize-video-bg .img-5',
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
      start: 'top 40%',
    },
    defaults: { duration: 1 },
  })

  tl.to('.section-1 .img-wrapper', {
    opacity: 1,
    ease: 'power2.out',
    duration: 0.5,
  })

  tl.to(
    '.section-1 .animated-bg-img',
    {
      scaleX: 0,
      transformOrigin: 'top right',
      ease: 'power2.out',
      duration: 2,
    },
    0.2
  )

  tl.from(
    '.section-1 .content-wrapper',
    {
      opacity: 0,
      y: 50,
      duration: 1,
    },
    1.5
  )

  tl.to(
    '.section-1 .content-wrapper .animated-bg-content',
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    2
  )

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

  tl2.to('.section-2 .img-wrapper', {
    opacity: 1,
    ease: 'power2.out',
    duration: 0.5,
  })

  tl2.to('.section-2 .animated-bg-img', {
    width: 0,
    ease: 'power2.out',
    duration: 2,
  })

  tl2.from(
    '.section-2 .content-wrapper',
    {
      opacity: 0,
      y: 50,
      duration: 1,
    },
    1.5
  )

  tl2.to(
    '.section-2 .content-wrapper .animated-bg-content',
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    2
  )

  // ==============
  // PREVIOUS WINNERS
  // ==============

  var tlPrev = gsap.timeline({
    scrollTrigger: {
      trigger: '.previous-winners',
      start: 'top 50%',
      markers: true,
    },
  })

  // gsap.to(
  //   '.previous-winners .winner-2018, .winner-2017, .winner-2016, .winner-2015, .winner-2014',
  //   {
  //     scrollTrigger: {
  //       trigger: '.previous-winners',
  //       start: 'top 20%',
  //       markers: true,
  //     },
  //     y: 100,
  //     duration: 0,
  //   }
  // )

  gsap.to(
    '.previous-winners .winner-2019',
    {
      css: {
        position: 'static',
      },
      duration: 0,
    }
  )

  tlPrev.to(
    '.previous-winners .winner-wrapper',
    {
      css: {
        opacity: '1',
        zIndex: '2',
      },
      duration: 1,
    },
    0.5
  )

  tlPrev.to(
    '.previous-winners .winner-2019',
    {
      css: {
        position: 'static',
        opacity: '1',
        zIndex: '2',
      },
      duration: 1,
    },
    0.5
  )

  // tlPrev.to('.previous-winners .winner-wrapper', {
  //   scrollTrigger: {
  //     trigger: '.previous-winners',
  //     start: 'top 20%',
  //   },
  //   css: {
  //     position: 'static',
  //     opacity: '1',
  //     zIndex: '2',
  //   },
  //   duration: 0.6,
  // })

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
}
