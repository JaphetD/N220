var dvBox = document.querySelector(".box");
var ball = document.querySelector(".ball");

ball.classList.add('ball');
dvBox.appendChild(ball);

var x = 0;
var y = 0;

setInterval(update,10);
function update() {
    if (x > 800) {
        x = 0;
        y = 0;
    }
            ball.style.left = x + "px";
        console.log(x);
        x++;
}

