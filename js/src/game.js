class Game {
  constructor() {
    this.startScreen = document.getElementById("home");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 100;
    this.width = 100;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60); // 60fps
  }
  start(){
    console.log("start() from Game class");
    this.gameScreen.style.height = `${this.height}vh`;
    this.gameScreen.style.width = `${this.width}%`;
  }
  gameLoop(){
    console.log("gameLoop() from Game class");
  }
  update(){
    console.log("update() from Game class");
  }
}
