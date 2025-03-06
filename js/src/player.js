class Player {
  constructor(gameScreen, gameSky, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.gameSky = gameSky;
    // Calculatethe top limite of the game area
    this.gameSkyData = gameSky.getBoundingClientRect();
    this.skyHeight = this.gameSkyData.height;
    // Calculate the X axe position = left
    this.gameScreenData = this.gameScreen.getBoundingClientRect();
    this.middle = this.gameScreenData.width / 2;
    this.left = this.middle - width / 2;
    // this.left = 0;
    // Default Y axe position = 0 from the Bottom
    this.bottom = 0;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 1;
    // Create the Boat Element
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.zIndex = 99;
    // Insert the Boat Element
    this.gameScreen.appendChild(this.element);

  }
  getInfo() {
    console.log("this.gameScreem : ", this.gameScreen);
    console.log("this.gameScreenData : ", this.gameScreenData);
    console.log("WIDTH ==> ", this.gameScreenData.width);
    console.log("this.middle : ", this.middle);
    console.log("this.left : ", this.left);
  }
  move() {
    // console.log(this.left);
    this.left += (this.directionX * this.speed);
    // this.top += this.directionY;
    this.bottom += (this.directionY * this.speed);
    // Set limits on LEFT RIGHT BOTTOM TOP
    if (this.left < 0) {
      this.left = 0;
    }
    if (this.left > this.gameScreenData.width - this.width) {
      this.left = this.gameScreenData.width - this.width;
    }
    if (this.bottom < 0) {
        this.bottom = 0;
    }
    if (this.bottom > this.gameScreenData.height - this.skyHeight - this.height) {
        this.bottom = this.gameScreenData.height - this.skyHeight - this.height;
    }
    // Update the position
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    // let foo = 50 / 100 - ()
    // this.element.style.left = `calc(50% - (${this.width}px / 2) + ${this.left})`;
    this.element.style.bottom = `${this.bottom}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
