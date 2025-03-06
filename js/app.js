function app() {
    // Html Elements - Button
    const startGameBtn = document.getElementById("start-btn");

    const playGameBtn = document.getElementById("play-btn");
    const quitGameBtn = document.getElementById("quit-btn");
    const restartGameBtn = document.getElementById("restart-btn");
    const homeGameBtn = document.getElementById("home-btn");

    const showParameterBtn = document.getElementById("parameter-btn");
    // console.log(showParameterBtn);
    const showParameterFromGameBtn = document.getElementById("game-parameter-btn");
    // console.log(showParameterFromGameBtn);
    const updateParameterBtn = document.getElementById("update-parameter-btn");
    // console.log(updateParameterBtn);
    
    const showScoreBtn = document.getElementById("show-score-btn");
    // console.log(showScoreBtn);
    const closeScoreBtn = document.getElementById("close-score-btn");
    // console.log(closeScoreBtn);

    // Html Elements - Container
    const homePage = document.getElementById("home");
    const gamePage = document.getElementById("game");
    const gameEndPage = document.getElementById("game-end");
    const parameterPage = document.getElementById("parameter");
    const scoreboardPage = document.getElementById("scoreboard");

    const navButtonsContainer = document.getElementById("nav-game"); 
    // Other global variables
    let game;
    let player;
    // let parameter;

    // Button Event Listener 
    startGameBtn.addEventListener("click", function(){
        startGame();
    });
    playGameBtn.addEventListener("click", function(){
        playGame(); // Go back in game after a pause (Esc)
    });
    quitGameBtn.addEventListener("click", function(){
        // console.log("Clic on quit button");
        quitGame();
    });
    restartGameBtn.addEventListener("click", function(){
        console.log("Clic on Restart button");
        restartGame();
    });
    homeGameBtn.addEventListener("click", function(){
        gameEndPage.classList.add("hidden");
        homePage.classList.remove("hidden");
    });

    showParameterBtn.addEventListener("click", function(){
        console.log("Clic on parameters button");
        showParameters();
        parameterPage.classList.remove("hidden");
    });
    showParameterFromGameBtn.addEventListener("click", function(){
        console.log("Clic on parameters (from game) button");
        showParameters();
        parameterPage.classList.remove("hidden");
    });
    updateParameterBtn.addEventListener("click", function(){
        console.log("Clic on update parameters button");
        updateParameter();
        parameterPage.classList.add("hidden");
    });

    showScoreBtn.addEventListener("click", function(){
        console.log("Clic on score button");
        showScoreboard();
        scoreboardPage.classList.remove("hidden");
        homePage.classList.add("hidden");
    });
    closeScoreBtn.addEventListener("click", function(){
        console.log("Clic on close score button");
        closeScoreboard();
        scoreboardPage.classList.add("hidden");
        homePage.classList.remove("hidden");
    })

    // Keyboard Event Listener
    window.addEventListener("keydown", function(e){
        // console.log(e);
        // player direction
        if(e.code === "ArrowRight"){game.player.directionX = 4;}
        if(e.code === "ArrowLeft"){game.player.directionX = -4;}
        if(e.code === "ArrowUp"){game.player.directionY = 4;}
        if(e.code === "ArrowDown"){game.player.directionY = -4;}
        // escape / pause
        if(e.code === "Escape"){
            pauseGame();
        }
    });
    window.addEventListener("keyup", function(e){
        // console.log(e);
        if(e.code === "ArrowRight"){game.player.directionX = 0;}
        if(e.code === "ArrowLeft"){game.player.directionX = 0;}
        if(e.code === "ArrowUp"){game.player.directionY = 0;}
        if(e.code === "ArrowDown"){game.player.directionY = 0;}
    });

    // Functions
    function startGame() {
        // console.log("startGame() is running");
        gamePage.classList.remove("hidden");
        homePage.classList.add("hidden");
        game = new Game();
        game.start();
        player = game.player;
    }
    function pauseGame() {
        console.log("pauseGame() is running");
        console.log(game);
        clearInterval(game.gameIntervalId);
        navButtonsContainer.classList.remove("hidden");
    }
    function playGame() {
        navButtonsContainer.classList.add("hidden");
        game.gameIntervalId = setInterval(() => {
            game.gameLoop();
        }, game.gameLoopFrequency);
    }
    function quitGame(){
        console.log("quitGame() is running");
        game.gameOver();
    }
    function restartGame(){
        console.log("restartGame() is running");
        gamePage.classList.remove("hidden");
        gameEndPage.classList.add("hidden");
        game = new Game();
        game.start();
        player = game.player;
        // game = new Game();
        // game.start();

        
    }
    function showParameters() {
        console.log("showParameters() is running");
    }
    function updateParameter(){
        console.log("updateParameter() is running");
    }
    function showScoreboard(){
        console.log("showScoreboard() is running");
    }
    function closeScoreboard(){
        console.log("closeScoreboard() is running");
    }
}
window.addEventListener("DOMContentLoaded", app);