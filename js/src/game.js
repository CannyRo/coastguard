class Game {
  constructor() {
    this.startScreen = document.getElementById("home");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      48,
      116,
      "../../img/boat_anime_v1.gif"
    );
    this.height = 100;
    this.width = 100;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }
  start() {
    console.log("start() from Game class");
    // Set the screen size
    this.gameScreen.style.height = `${this.height}vh`;
    this.gameScreen.style.width = `${this.width}%`;
    // Hide HomePage and show GamePage (already did in app.js)
    // ...
    // Gamelopp to update the screen with 60 images per second
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    console.log("gameLoop() from Game class");
    this.update();

    // Check if the Game is OVER
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    // console.log("update() from Game class");
    this.player.move();
  }
}
