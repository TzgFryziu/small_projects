let player1 = {
    scoreDisplay: document.querySelector("#p1ScoreDisplay"),
    button: document.querySelector("#p1Button"),
    currentScore: 0,
}

let player2 = {
    scoreDisplay: document.querySelector("#p2ScoreDisplay"),
    button: document.querySelector("#p2Button"),
    currentScore: 0,
}
let resetButton = document.querySelector("#resetButton")

const gameOver = (winner, loser) => {
    winner.button.disabled = true
    loser.button.disabled = true
    winner.scoreDisplay.classList.add("winner")
    loser.scoreDisplay.classList.add("loser")
}


const addPoint = (player, oponnent) => {
    player.currentScore++;
    player.scoreDisplay.innerText = player.currentScore;

    if (player.currentScore >= 11 && player.currentScore - oponnent.currentScore >= 2) {
        gameOver(player, oponnent)
    }
}

player1.button.addEventListener("click", () => { addPoint(player1, player2) })
player2.button.addEventListener("click", () => { addPoint(player2, player1) })

resetButton.addEventListener("click", () => {
    player1.currentScore = 0
    player2.currentScore = 0
    player1.scoreDisplay.innerText = player1.currentScore
    player2.scoreDisplay.innerText = player2.currentScore
    player1.scoreDisplay.classList.remove("winner", "loser")
    player2.scoreDisplay.classList.remove("winner", "loser")
    player1.button.disabled = false
    player2.button.disabled = false
})
