'use scrict';
//Japhet Diaz
//10.17.2017
//N220

//This line of code is assigning the computer variable a random number between but in the 100's
var computer = Math.floor((Math.random() * 100));

//This will be the computer picking either rock paper or scissors. Later I will assign , through < > == a winner or if its a tie.
function rockSubmit() {
    if(computer < 50){
document.querySelector("#output").innerHTML="You Won! Computer chose:Scissors You chose:Rock."
    } else if(computer > 50){
        document.querySelector("#output").innerHTML="You Lost! Computer chose:Paper You chose:Rock."
    }
}

function paperSubmit(){
    if(computer < 50){
document.querySelector("#output").innerHTML="You Won! Computer chose:Rock You chose:Paper."
    } else if(computer > 50){
        document.querySelector("#output").innerHTML="You Lost! Computer chose:Scissors You chose:Rock."
    }
}

function paperSubmit(){
    if(computer < 50){
        document.querySelector("#output").innerHTML="You Won! Computer chose:Rock You chose:Paper."
    } else if(computer > 50){
        document.querySelector("#output").innerHTML="You Lost! Computer chose:Scissors You chose:Rock."
    }
}

function scissorsSubmit(){
    if(computer < 50){
        document.querySelector("#output").innerHTML="You Won! Computer chose:Paper You chose:Scissors."
    } else if(computer > 50){
        document.querySelector("#output").innerHTML="You Lost! Computer chose:Rock You chose:Scissors."
    }
}

//Here I added a refresh button in order for the user to try again.
function tryAgain() {
    location.reload();
}