const startGameBtn = document.getElementById('start-game-button');

function startGame (){
    console.log("Game is starting...")
};

startGame();

startGameBtn.addEventListener('click', startGame);