var number = Math.floor((Math.random() * 20) +1);

function guess() {
    var guess = parseFloat(document.querySelector("#guess").value);

    if(isNaN(guess)){
        document.querySelector(".message").innerHTML="Please input a number only."
    }
   else if(guess<number){
        document.querySelector(".message").innerHTML="Your number is too low."
    }else if(guess>number){
        document.querySelector(".message").innerHTML="Your number is too high."
    } else {
        document.querySelector(".message").innerHTML="Your number is correct! Guess a new number!"
        number = Math.floor((Math.random() * 20) +1);
    }
}