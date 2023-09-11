let number = 0
let cronometro
function start() {
    cronometro = setInterval(function () {
        number++
        h1.innerHTML = number
    }, 1000)

}

function stop() {

}