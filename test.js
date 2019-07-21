const loader = document.querySelector('.loader')
const text = document.querySelector('.text')


setTimeout(() => {

    loader.style.display = 'none'
    text.style.display = 'block'
    setTimeout(() => {
        text.style.opacity = 1
    }, 500)


}, 2000)