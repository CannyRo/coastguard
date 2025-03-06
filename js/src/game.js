class Game {
  constructor() {
    this.startScreen = document.getElementById("home");
    this.gameWholePage = document.getElementById("game");
    this.gameScreen = document.getElementById("game-screen");
    this.gameSky = document.getElementById("fixed-sky");
    this.gameEndScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.survivorElement = document.getElementById("survivors");
    this.livesElement = document.getElementById("lives");

    this.player = new Player(
      this.gameScreen,
      this.gameSky,
      48,
      116,
      "./img/boat_anime_v1.gif"
    );
    this.height = 100;
    this.width = 100;
    this.obstacles = [];
    this.score = 0;
    this.lives = 5;
    this.survivors = 0;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
    this.counter = 0;
  }
  start() {
    // To insure the reset of this values to restart
    this.obstacles = [];
    this.score = 0;
    this.scoreElement.innerText = this.score;
    this.lives = 5;
    this.livesElement.innerText = this.lives;
    this.survivors = 0;
    this.survivorElement.innerText = this.survivors;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
    this.counter = 0;
    this.level = 1;
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
    this.counter ++;
    console.log(this.counter);
    if(this.counter % 60 === 0) { // The longer you stay in the game, the more points you earn
      this.score ++;
      this.scoreElement.innerText = this.score;
    }
    if(this.counter % 3600 === 0 ) {
      this.level += 1;
      // Chaque minute passé à jouer le niveau augmente
    }
    if(this.counter % 75 === 0) {
      // console.log("this.level : ", this.level);
      this.obstacles.push(new Obstacle(this.gameScreen, true, this.level));
    }
    if(this.counter % 120 === 0) {
      // console.log("this.level : ", this.level);
      this.obstacles.push(new Obstacle(this.gameScreen, false, this.level));
    }
    if( this.gameScreen.getBoundingClientRect().width >= 1000 && this.counter % 80 === 0) {
      // console.log("this.level : ",this.level);
      this.obstacles.push(new Obstacle(this.gameScreen, false, this.level));
    }
    // update the game
    this.update();
    // Check if the game is OVER
    if (this.gameIsOver) {
      this.gameOver();
    }
  }
  update() {
    // update the player;
    this.player.move();
    // update each obstacle
    for(let i = 0; i< this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      let localInterval;
      // check the collisions
      if(this.player.didCollide(obstacle)){
        // type of obstacle
        if(obstacle.detail.type === "wave" && obstacle.collision === false){
          obstacle.collision = true; // We use this variable to apply the effect of the collision only one unique time
          if(this.survivors > 2){
            this.survivors -= obstacle.detail.victim;
            this.survivorElement.innerText = this.survivors;
          }
          this.obstacles.splice(i, 1); // remove from the array obstacles
          obstacle.element.remove(); // remove the Html Element
          // The wave breaks on the boat without damage, but its force sweeps away 2 shipwrecked men
        }
        if(obstacle.detail.type === "rock" && obstacle.collision === false){
          obstacle.collision = true;
          this.lives--;
          this.livesElement.innerText = this.lives;
          if(this.lives === 0){
            this.gameIsOver = true;
          }
          // Note that the rock doesn't desappear after collision
        }
        if(obstacle.detail.type === "shark" && obstacle.collision === false){
          obstacle.collision = true;
          if(this.survivors > 0){
            this.survivors -= obstacle.detail.victim;;
            this.survivorElement.innerText = this.survivors;
          }
          this.lives--;
          this.livesElement.innerText = this.lives;
          if(this.lives === 0){
            this.gameIsOver = true;
          }
          // Note that the shark doesn't desappear after collision
        }
        if(obstacle.detail.type === "victim" && obstacle.collision === false){
          obstacle.collision = true;
          this.survivors += 1;
          this.survivorElement.innerText = this.survivors;
          this.obstacles.splice(i, 1); // remove from the array obstacles
          obstacle.element.remove(); // remove the Html Element
        }
      }
      // delete the obstacle when disappears
      if(obstacle.top > this.gameScreen.getBoundingClientRect().height){
        this.obstacles.splice(i, 1); // remove from the array obstacles
        obstacle.element.remove(); // remove the Html Element
      }
    }
  }
  gameOver() {
    clearInterval(this.gameIntervalId);
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameWholePage.classList.add("hidden");
    this.gameEndScreen.classList.remove("hidden");
  }
}
