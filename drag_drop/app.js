let date = new Date()
let days=date.getMilliseconds()


document.querySelector('#date').innerHTML=moment(days)