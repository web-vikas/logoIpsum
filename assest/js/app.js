const hamburger = document.querySelector('#hamburger')
const mobilemenu = document.querySelector('#mobilemenu')
const closeMenu = document.querySelector('#closeMenu')
const backtopBtn = document.querySelector('#backtop')

hamburger.addEventListener('click',()=>{
    mobilemenu.classList.remove('right')
})
closeMenu.addEventListener('click',()=>{
    mobilemenu.classList.add('right')
})
backtopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
    
})