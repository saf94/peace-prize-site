/* eslint-disable */

const button = document.getElementsByClassName('mobile-nav')[0]
let isOpen = false
button.addEventListener('click', function () {
  if (isOpen) {
    gsap.to('.site-header .navbar', {
      css: {
        opacity: '0',
      },
      duration: 0,
    })
    gsap.to('.site-header .navbar', {
      css: {
        display: 'none',
        height: '0',
      },
      duration: 0.6,
    })
  } else {
    gsap.to('.site-header .navbar', {
      css: {
        display: 'block',
      },
      duration: 0,
    })
    gsap.to('.site-header .navbar', {
      css: {
        height: 'auto',
      },
      duration: 0.6,
    })
    gsap.to('.site-header .navbar', {
      css: {
        opacity: '1',
      },
      delay: 0.2,
      duration: 0.6,
    })
  }
  isOpen = !isOpen
})
