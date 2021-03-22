/* eslint-disable */

var dropdown = document.getElementsByClassName('dropdown-wrapper')[0]
console.log('dropdown', dropdown)
var isOpen = false

dropdown.addEventListener('click', function () {
  console.log('this works!!')

  if (isOpen) {
    gsap.to('.nominate-winner-template .dropdown-content', {
      duration: 0.5,
      css: {
        height: '0',
      },
    })
  } else {
    gsap.to('.nominate-winner-template .dropdown-content', {
      duration: 0.5,
      css: {
        height: 'auto',
      },
    })
  }

  isOpen = !isOpen
})
