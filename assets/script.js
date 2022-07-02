const buttonBlender = document.getElementById('blender');
const buttonHairdryer = document.getElementById('hairdryer');
const buttonPencukur = document.getElementById('pencukur');
//punya blender
const modalBg = document.querySelector('.modalbg')
const modalClose = document.querySelector('.close-modal')


buttonBlender.addEventListener('mouseover', () => {
    modalBg.classList.add('activate-bg')
})

modalClose.addEventListener('mouseover', () => {
    modalBg.classList.remove('activate-bg')
})

//punya hairdryer
const modalBg1 = document.querySelector('.modalbg1')
const modalClose1 = document.querySelector('.close-modal1')

buttonHairdryer.addEventListener('mouseover', () => {
    modalBg1.classList.add('activate-bg1')
})

modalClose1.addEventListener('mouseover', () => {
    modalBg1.classList.remove('activate-bg1')
})

//punya pencukur
const modalBg2 = document.querySelector('.modalbg2')
const modalClose2 = document.querySelector('.close-modal2')

buttonPencukur.addEventListener('mouseover', () => {
    modalBg2.classList.add('activate-bg2')
})

modalClose2.addEventListener('mouseover', () => {
    modalBg2.classList.remove('activate-bg2')
})