const loader2 = document.querySelector('.loader2')
const main = document.querySelector('#main')

const delay = () => {
    setTimeout(() => {

        loader2.style.opacity = 0;
        loader2.style.display = 'none';

        main.style.display = 'block'
        setTimeout(() => main.style.opacity = 1, 50)



    }, 4000)
}

delay()