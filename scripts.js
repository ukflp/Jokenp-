const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Função chamada quando o jogador faz uma escolha
const playHuman = (humanChoice) => {
    const machineChoice = playMachine(); // A máquina faz sua escolha
    playTheGame(humanChoice, machineChoice);
};

// Função que gera uma escolha aleatória para a máquina
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Gera um número aleatório entre 0 e 2
    return choices[randomNumber];
};

// Função que compara as escolhas do jogador e da máquina e exibe o resultado
const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === 'paper' && machine === 'rock') ||
               (human === 'rock' && machine === 'scissors') ||
               (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você Ganhou!";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você Perdeu!";
    }
};
