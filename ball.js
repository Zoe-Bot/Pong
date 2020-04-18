class Ball {
    constructor() {
        this.x = random(250, 350);
        this.y = 0;
        this.xSpeed = 4;
        this.ySpeed = 3;
    }

    update() {
        if(outOfWindow) {
            this.x = random(250, 400);
            this.y = 0;
        }
    }

    show() {
        ellipse(this.x, this.y, 20, 20);
    }

    move() {
        this.x += this.xSpeed;
        this.y -= this.ySpeed;
    }

    collide() {
        if(this.x > player1.x - 8 && this.y > player1.y - 50 && this.y < player1.y + 50 && this.x < player1.x + 8) {
            this.xSpeed = this.xSpeed * -1;
        }

        if(this.x > player2.x - 8 && this.y > player2.y - 50 && this.y < player2.y + 50 && this.x < player2.x + 8) {
            this.xSpeed = this.xSpeed * -1;
        }

        if(this.y < 0 || this.y > height) {
            this.ySpeed = this.ySpeed * -1;
        }
    }
}