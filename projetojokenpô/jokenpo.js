const result = document.querySelector('#result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const choicemachine = document.querySelector('#machine-choice')

let humanScoreNumber = 0
let machineScoreNumber = 0
const playHuman = (humanChoice) => {
    console.log(humanChoice)
    console.log('retorno' + playMachine())
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [{chave:'pedra',valor :'&#x270A;'},{chave:'papel',valor:'&#x1F590;'}, {chave:'tesoura',valor:'&#x270C;'}]
    const randomNumber = Math.floor(Math.random() * 3)
    choicemachine.innerHTML = choices[randomNumber].valor
    return choices[randomNumber].chave
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = 'Deu Empate'
    } else if
        (human === 'papel' && machine === 'pedra' ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
        ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa"
    }
}