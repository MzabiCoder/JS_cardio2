let min = 1,
    max = 10,
    winingNum = Math.floor(Math.random() * 11)
//console.log(winingNum)
guessLeft = 3;


// UI elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess_input'),
    message = document.getElementById('message')


game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value)
    if (isNaN(guess) || guess < min || guess > max) {
        // setMessage(`Please Enter a number betweem ${min} and ${max}`)
        message.textContent = `Please Enter a number betweem ${min} and ${max}`
        message.style.color = "red"
    }
    if (guess === winingNum) {

        // gameover(true, `${winingNum} is correct, YOU WIN!!`)
        guessInput.disabled = true
        // guessInput.style.display = 'none'
        guessInput.style.borderColor = "green";
        message.textContent = `${winingNum} is correct, YOU WIN!! `
        message.style.color = 'green'
        guessBtn.value = 'Paly Again'
        guessBtn.className += 'play-again'



    } else {

        guessLeft -= 1
        if (guessLeft === 0) {

            guessInput.disabled = true
            // guessInput.style.display = 'none'
            guessInput.style.borderColor = "red";
            message.textContent = `YOU LOST the correct is ${winingNum }!! `
            message.style.color = 'red'
            guessBtn.value = 'Paly Again'
            guessBtn.className += 'play-again'

            // gameover(false, `YOU LOST the correct is ${winingNum }!!`)

        } else {
            // game  continues answer wrong
            message.textContent = `${guess} is not correct,${guessLeft} guests left !!`
            message.style.color = 'red'
            guessInput.value = ''


        }
    }

})

function gameover(won, message) {

    let color;
    won === true ? color = "green" : color = 'red'
    guessInput.disabled = won
    // guessInput.style.display = 'none'
    guessInput.style.borderColor = color
    message.textContent = message
    message.style.color = color
}