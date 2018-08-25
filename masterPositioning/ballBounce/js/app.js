var dvBox = document.querySelector(".box");
var ball = document.querySelector(".ball");
var velocityX = 7;
var velocityY = 1;


dvBox.appendChild(ball);

var x = 0;
var y = 0;

setInterval(update,10);
function update() {
    ball.style.left = x + "px";
    ball.style.top = y + "px";
    console.log(x, y);
    x++;
    y++;
    if (x >= 745) {
        velocityX *=-1;
    }
    if(x <= 0){
        velocityX *=-1;
    }
    if(y > 400){
        velocityY *=-2;
    }
    if(y < -10){
        velocityY *= -2
    }
    x = x + velocityX;
    y = y + velocityY;
}

