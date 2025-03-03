function app() {
    console.log("App is running with success");
    // Html Elements - Button
    const startGameBtn = document.getElementById("start-btn");
    console.log(startGameBtn);
    const pauseGameBtn = document.getElementById("pause-btn");
    console.log(pauseGameBtn);
    const quitGameBtn = document.getElementById("quit-btn");
    console.log(quitGameBtn);
    const restartGameBtn = document.getElementById("restart-btn");
    console.log(restartGameBtn);

    const showParameterBtn = document.getElementById("parameter-btn");
    console.log(showParameterBtn);
    const showParameterFromGameBtn = document.getElementById("game-parameter-btn");
    console.log(showParameterFromGameBtn);
    const updateParameterBtn = document.getElementById("update-parameter-btn");
    console.log(updateParameterBtn);
    
    const showScoreBtn = document.getElementById("show-score-btn");
    console.log(showScoreBtn);
    const closeScoreBtn = document.getElementById("close-score-btn");
    console.log(closeScoreBtn);

    // Html Elements - Container
    const homePage = document.getElementById("home");
    const gamePage = document.getElementById("game");
    const gameEndPage = document.getElementById("game-end");
    const parameterPage = document.getElementById("parameter");
    const scoreboardPage = document.getElementById("scoreboard");
    // Other global variables
    // let game;
    // let parameter;

    // Event Listener 
    startGameBtn.addEventListener("click", function(){
        console.log("Clic on start button");
        startGame();
        gamePage.classList.remove("hidden");
        homePage.classList.add("hidden");
    });
    pauseGameBtn.addEventListener("click", function(){
        console.log("Clic on pause button");
        pauseGame();
    });
    quitGameBtn.addEventListener("click", function(){
        console.log("Clic on quit button");
        quitGame();
        gamePage.classList.add("hidden");
        homePage.classList.remove("hidden");
    });
    restartGameBtn.addEventListener("click", function(){
        console.log("Clic on Restart button");
        restartGame();
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

    // Functions
    function startGame() {
        console.log("startGame() is running");
    }
    function pauseGame() {
        console.log("pauseGame() is running");
    }
    function quitGame(){
        console.log("quitGame() is running");
    }
    function restartGame(){
        console.log("restartGame() is running");
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