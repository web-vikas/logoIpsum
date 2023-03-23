const hamburger = document.querySelector('#hamburger')
const mobilemenu = document.querySelector('#mobilemenu')
const closeMenu = document.querySelector('#closeMenu')

hamburger.addEventListener('click',()=>{
    mobilemenu.classList.remove('right')
})
closeMenu.addEventListener('click',()=>{
    mobilemenu.classList.add('right')
})