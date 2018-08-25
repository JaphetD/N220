ColorBox = document.querySelector("#colorBox");

CurrentColor = document.querySelector("#currentColor");


//i-ching

ColorBox.style.margin="5px";
ColorBox.style.height="200px";
ColorBox.style.width="200px";
ColorBox.style.backgroundColor="black";

var r=0;
var g=0;
var b=0;

// event.target.style.backgroundColor = color;




function plusOneRed() {
     r +=1;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;

}

function plusFiveRed() {
    r +=5;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;

    CurrentColor.innerHTML=color;

}

function plusTenRed() {
    r+=10;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;
}

function plusOneGreen() {
    g +=1;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;
}

function plusFiveGreen() {
    g +=5;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;
}

function plusTenGreen() {
    g += 10;

    var color = "rgb(" + r + "," + g + "," + b + ")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;
}

    function plusOneBlue() {
    b +=1;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
        CurrentColor.innerHTML=color;
}

function plusFiveBlue() {
    b +=5;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;
}

function plusTenBlue() {
    b+=10;

    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);

    ColorBox.style.backgroundColor = color;
    CurrentColor.innerHTML=color;
}



