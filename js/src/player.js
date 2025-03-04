class Player {
  constructor(gameScreen, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    // Calculate the X axe position = left
    this.screenWidth = this.gameScreen.getBoundingClientRect();
    this.middle = this.screenWidth.width / 2;
    this.left = this.middle - width / 2;
    // this.left = 0;
    // Default Y axe position = 0 from the Bottom
    this.bottom = 0;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    // Create the Boat Element
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
    // Insert the Boat Element
    this.gameScreen.appendChild(this.element);
  }
  getInfo() {
    console.log("this.gameScreem : ", this.gameScreen);
    console.log("this.screenWidth : ", this.screenWidth);
    console.log("this.middle : ", this.middle);
    console.log("this.left : ", this.left);
  }
  move() {
    // console.log(this.left);
    this.left += this.directionX;
    // this.top += this.directionY;
    this.bottom += this.directionY;
    // Set limits

    // Update the position
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    // let foo = 50 / 100 - ()
    // this.element.style.left = `calc(50% - (${this.width}px / 2) + ${this.left})`;
    this.element.style.bottom = `${this.bottom}px`;
  }
  didCollide() {}
}
