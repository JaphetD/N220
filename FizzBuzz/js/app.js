var dvOutput = document.querySelector("#output");


for(var i=0; i<=100; i++){
console.log(i);


if( (i%3) == 0 ){
    dvOutput.innerHTML += "Fizz <br />";
} else if( (i%5) == 0){
    dvOutput.innerHTML += "Buzz <br />";
} else if(i%3 && i%5) {
    dvOutput.innerHTML += "FizzBuzz <br />";
}

}