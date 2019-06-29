const time = document.querySelector('#time')
let greeding = document.querySelector('#greeding')
const name = document.querySelector('#name')
const focus = document.querySelector('#focus')

const showeTime = () => {
    let today = new Date()
    hour = today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()


    const amPm = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)}`

    setTimeout(() => {
        showeTime()
    }, 1000)
}

const addzero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

function setBG() {
    let today = new Date()
    let hour = today.getHours()

    if (hour < 12) {
        document.body.style.backgroundImage = "url('./car.png')"
        document.body.style.backgroundColor = "pink"
        greeding.innerHTML = 'Good Morning'

    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('coffe.png')"
        document.body.style.backgroundColor = "pink"

        greeding.innerHTML = 'Good Afternoon'
    } else {
        document.body.style.backgroundImage = "url('mercedes.png')"
        document.body.style.backgroundColor = "green"


        greeding.innerHTML = 'Good Evening'
    }
}

setBG()
showeTime();