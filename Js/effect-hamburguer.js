const effectMenuOpen = document.querySelector('.effectMenuOpen')

const openNav = document.querySelector('.nav-list')
const effectMenu1 = document.querySelector('.line1')
const effectMenu2 = document.querySelector('.line2')
const effectMenu3 = document.querySelector('.line3')

const effectLink1 = document.querySelector('.link1')
const effectLink2 = document.querySelector('.link2')
const effectLink3 = document.querySelector('.link3')


effectMenuOpen.addEventListener('click', function(){
    openNav.classList.toggle('activeMenu')
    effectMenu1.classList.toggle('effect1')
    effectMenu2.classList.toggle('effect2')
    effectMenu3.classList.toggle('effect3')

    effectLink1.classList.toggle('effectLink1')
    effectLink2.classList.toggle('effectLink2')
    effectLink3.classList.toggle('effectLink3')
})

