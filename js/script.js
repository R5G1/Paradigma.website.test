window.addEventListener('scroll', e => {
    const scroll = document.querySelector(".header-navigation")

    if (pageYOffset > 500) {
        scroll.classList.add('activ')
    } if (pageYOffset < 500) {
        scroll.classList.remove('activ')
    }
})
