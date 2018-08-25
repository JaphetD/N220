var dvBox = document.querySelector(".box");

var ball = document.createElement('div');
ball.classList.add('rball');
dvBox.appendChild(ball);


var objBall = {
    x:0, y:0,
    velocityX:7, velocityY:1
};

setInterval(update,10);
function update() {
    ball.style.top = objBall.y + "px";
    ball.style.left = objBall.x + "px";

    console.log(objBall.y,objBall.x);

    if (objBall.x >= 745) {
        objBall.velocityX *=-1;
    }
    if(objBall.x <= -10){
        objBall.velocityX *=-1;
    }
    if(objBall.y > 540){
        objBall.velocityY *=-1;
    }
    if(objBall.y < -10){
        objBall.velocityY *= -1;
    }

    objBall.x = objBall.x + objBall.velocityX;
    objBall.y = objBall.y + objBall.velocityY;
}