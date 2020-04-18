let player1, player2;

let ball;

let outOfWindow;

let scoreP1 = 0;
let scoreP2 = 0;

function setup() {
    // canvas
    createCanvas(600, 500);

    //player
    player1 = new Player(50, height / 2);
    player2 = new Player(width - 50, height / 2);

    //ball
    ball = new Ball();
}

function draw() {
    // background
    background(51);
    stroke(255);
    line(width / 2, 0, width / 2, height);

    //player1
    player1.show();
    player1.move1();

    //player2
    player2.show();
    player2.move2();

    //ball
    ball.show();
    ball.move();
    ball.collide();

    //check Score
    score();
}

function score() {
    //Player1
    if(ball.x < 0) {
        outOfWindow = true;
        scoreP2++;
        console.log("Score Player 1: " + scoreP1);
        console.log("Score Player 2: " + scoreP2);
        ball.update();
    }

    if(ball.x > width) {
        outOfWindow = true;
        scoreP1++;
        console.log("Score Player 1: " + scoreP1);
        console.log("Score Player 2: " + scoreP2);
        ball.update();
    }

}


