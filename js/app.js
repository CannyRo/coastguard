function app() {
    // Html Elements - Button 
    const startGameBtn = document.getElementById("start-btn");
    const playGameBtn = document.getElementById("play-btn"); // Play = Start after pause
    const quitGameBtn = document.getElementById("quit-btn");
    const restartGameBtn = document.getElementById("restart-btn");
    const homeGameBtn = document.getElementById("home-btn");
    const showParameterBtn = document.getElementById("parameter-btn");
    const showParameterFromGameBtn = document.getElementById("game-parameter-btn");
    const updateParameterBtn = document.getElementById("update-parameter-btn");
    const showScoreBtn = document.getElementById("show-score-btn");
    const closeScoreBtn = document.getElementById("close-score-btn");

    // Html Elements - Container
    const homePage = document.getElementById("home");
    const gamePage = document.getElementById("game");
    const gameEndPage = document.getElementById("game-end");
    const parameterPage = document.getElementById("parameter");
    const scoreboardPage = document.getElementById("scoreboard");
    const navButtonsContainer = document.getElementById("nav-game"); 
    // Other global variables
    let game;
    // let player; -- maybe later
    // let parameter; -- maybe later

    // Button Event Listener 
    startGameBtn.addEventListener("click", function(){
        startGame();
    });
    playGameBtn.addEventListener("click", function(){
        playGame(); // Go back in game after a pause (Esc)
    });
    quitGameBtn.addEventListener("click", function(){
        quitGame();
    });
    restartGameBtn.addEventListener("click", function(){
        restartGame();
    });
    homeGameBtn.addEventListener("click", function(){
        gameEndPage.classList.add("hidden");
        homePage.classList.remove("hidden");
    });

    showParameterBtn.addEventListener("click", function(){
        parameterPage.classList.remove("hidden");
    });
    showParameterFromGameBtn.addEventListener("click", function(){
        parameterPage.classList.remove("hidden");
    });
    updateParameterBtn.addEventListener("click", function(){
        updateParameter();
    });

    showScoreBtn.addEventListener("click", function(){
        showScoreboard();
    });
    closeScoreBtn.addEventListener("click", function(){
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
        game.gameOver();
    }
    function restartGame(){
        gamePage.classList.remove("hidden");
        gameEndPage.classList.add("hidden");
        game = new Game();
        game.start();
        player = game.player;

    }
    function updateParameter(){
        console.log("updateParameter() is running");
        parameterPage.classList.add("hidden");
    }
    function showScoreboard(){
        console.log("showScoreboard() is running");
        scoreboardPage.classList.remove("hidden");
        homePage.classList.add("hidden");
    }
}
window.addEventListener("DOMContentLoaded", app);