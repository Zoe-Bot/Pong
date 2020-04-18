class Player {
    constructor(x, y) {
       this.x = x;
       this.y = y;
    }

    show() {
        rectMode(CENTER);
        noStroke();
        rect(this.x, this.y, 16, 100);
    }

    move1() {
        if(keyIsDown(87)) {
            this.y -= 5;
        }
        if(keyIsDown(83)) {
            this.y += 5;
        }
    }

    move2() {
        if(keyIsDown(UP_ARROW)) {
            this.y -= 5;
        }
        if(keyIsDown(DOWN_ARROW)) {
            this.y += 5;
        }
    }
}