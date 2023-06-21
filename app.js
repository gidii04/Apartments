const mobileOverlay = document.querySelector('.mobile-overlay')
const mobileBar = document.querySelector('.mobile-bars')
const closeBar = document.querySelector('.close-bar')
mobileBar.addEventListener('click', () => {
  mobileOverlay.classList.add('show-mobile-overlay')
})

closeBar.addEventListener('click', () => {
  mobileOverlay.classList.remove('show-mobile-overlay')
})
b
