/* eslint-disable */

var criteriaDropdown = document.getElementsByClassName('criteria-dropdown-wrapper')[0]
var criteriaIsOpen = false

criteriaDropdown.addEventListener('click', function () {

  if (criteriaIsOpen) {
    gsap.to('.nominate-winner-template .criteria-dropdown-content', {
      duration: 0.5,
      css: {
        height: '0',
      },
    })
  } else {
    gsap.to('.nominate-winner-template .criteria-dropdown-content', {
      duration: 0.5,
      css: {
        height: 'auto',
      },
    })
  }

  criteriaIsOpen = !criteriaIsOpen
})

var evidenceDropdown = document.getElementsByClassName('evidence-dropdown-wrapper')[0]
var evidenceIsOpen = false

evidenceDropdown.addEventListener('click', function () {

  if (evidenceIsOpen) {
    gsap.to('.nominate-winner-template .evidence-dropdown-content', {
      duration: 0.5,
      css: {
        height: '0',
      },
    })
  } else {
    gsap.to('.nominate-winner-template .evidence-dropdown-content', {
      duration: 0.5,
      css: {
        height: 'auto',
      },
    })
  }

  evidenceIsOpen = !evidenceIsOpen
})

var processDropdown = document.getElementsByClassName('process-dropdown-wrapper')[0]
var processIsOpen = false

processDropdown.addEventListener('click', function () {

  if (processIsOpen) {
    gsap.to('.nominate-winner-template .process-dropdown-content', {
      duration: 0.5,
      css: {
        height: '0',
      },
    })
  } else {
    gsap.to('.nominate-winner-template .process-dropdown-content', {
      duration: 0.5,
      css: {
        height: 'auto',
      },
    })
  }

  processIsOpen = !processIsOpen
})

var exclusionsDropdown = document.getElementsByClassName('exclusions-dropdown-wrapper')[0]
var exclusionsIsOpen = false

exclusionsDropdown.addEventListener('click', function () {

  if (exclusionsIsOpen) {
    gsap.to('.nominate-winner-template .exclusions-dropdown-content', {
      duration: 0.5,
      css: {
        height: '0',
      },
    })
  } else {
    gsap.to('.nominate-winner-template .exclusions-dropdown-content', {
      duration: 0.5,
      css: {
        height: 'auto',
      },
    })
  }

  exclusionsIsOpen = !exclusionsIsOpen
})

var timelineDropdown = document.getElementsByClassName('timeline-dropdown-wrapper')[0]
var timelineIsOpen = false

timelineDropdown.addEventListener('click', function () {

  if (timelineIsOpen) {
    gsap.to('.nominate-winner-template .timeline-dropdown-content', {
      duration: 0.5,
      css: {
        height: '0',
      },
    })
  } else {
    gsap.to('.nominate-winner-template .timeline-dropdown-content', {
      duration: 0.5,
      css: {
        height: 'auto',
      },
    })
  }

  timelineIsOpen = !timelineIsOpen
})
