
const resultInput = document.getElementById("result");

const playerButtons = document.querySelectorAll(".player .choice");


const options = ["rock", "paper", "scissors"];


const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};


playerButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();

        const result = getResult(playerChoice, computerChoice);

        showResult(playerChoice, computerChoice, result);
    });
});


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function getResult(player, computer) {

    if (player === computer) {
        return "Empate!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "Você venceu! 🎉";
    }

    return "Computador venceu! 🤖";
}


function showResult(player, computer, result) {
    resultInput.value = `Você: ${emojis[player]} vs Computador: ${emojis[computer]} → ${result}`;
}