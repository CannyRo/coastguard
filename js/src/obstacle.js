class Obstacle {
  constructor(gameScreen, isVictim, difficulty) {
    this.gameScreen = gameScreen;
    this.gameScreenData = gameScreen.getBoundingClientRect();
    this.screenWidth = this.gameScreenData.width;
    // this.screenHeight = this.gameScreenData.height;
    // this.gameSky = gameSky;
    // this.gameSkyData = gameSky.getBoundingClientRect();
    // this.skyWidth = this.gameSkyData.width;
    // this.skyHeight = this.gameSkyData.height;
    
    // All type of obstacles
    this.obstaclesArray = [
      {
        type: "wave", // Type of obstacle
        damage: 0, // Damage received on your lives
        victim: 2, // Victims if you already have survivors on board
        debuff: 0.6, // Debuff coefficient applying to speed
        duration: 3000, // Duration of debuff milliseconds
        width: 116,
        height: 48,
        srcImg: "../../img/waves_anime.gif"
      },
      {
        type: "rock",
        damage: 1,
        victim: 0,
        debuff: 0,
        duration: 5000,
        width: 48,
        height: 48,
        srcImg: "../../img/rock_anime.gif"
      },
      {
        type: "shark",
        damage: 1,
        victim: 1,
        debuff: 1,
        duration: 0,
        width: 74,
        height: 136,
        srcImg: "../../img/shark_anime.gif"
      },
      {
        type: "victim",
        damage: 0,
        victim: 0,
        debuff: 1,
        duration: 0,
        width: 33,
        height: 37,
        srcImg: "../../img/victim_anime.gif"
      }
    ];
    this.notRandomIndex = isVictim !== true ? Math.floor(Math.random() * this.obstaclesArray.length) : 3;
    this.detail = this.obstaclesArray[this.notRandomIndex];
    this.width = this.detail.width;
    this.height = this.detail.height;
    this.left = Math.floor(Math.random() * (this.screenWidth - this.width));
    this.top = 0;
    
    this.element = document.createElement("img");
    this.element.src = this.detail.srcImg;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);

    //
    // this.foo = document.createElement("p");
    // this.foo.innerText = this.speed;
    // this.element.appendChild(this.foo);
    this.difficulty = difficulty;
    this.speed = difficulty <= 1 ? 1 : Math.pow(1.1, this.difficulty);
    this.collision = false;
  }
  move() {
    console.log(this.speed);
    if(this.detail.type === "wave"){
      this.top += (3 * this.speed);
    }
    if(this.detail.type === "rock" || this.detail.type === "victim"){
      this.top += (1 * this.speed);
    }
    if(this.detail.type === "shark"){
      this.top += (3 * this.speed);
      // We assume that a shark could swim to left or right without linearity
      // const possibilities = [-3, -2, -1, 1, 2, 3];
      // const randomIndex = Math.floor(Math.random() * possibilities.length);
      let randomLeftOrRightSwim =  Math.random() * 2 - 1;
      this.left += randomLeftOrRightSwim;
      // this.left += possibilities[randomIndex];
      // console.log(randomLeftOrRightSwim);
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
