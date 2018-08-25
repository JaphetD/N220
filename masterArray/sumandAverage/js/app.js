'use scrict';
//Japhet Diaz
//10.4.2017
//N220

var output = document.querySelector(".container");
var avg;
var numbers;


function createNumbers() {
    var input = document.querySelector(".input").value;
    var numbers = input.split(" ");
    output.innerHTML = "Sum of Number: "+  sumOf(numbers)+ "Aveage of Numbers: "+avgOf(numbers);
    console.log(numbers)
}

function sumOf(numb){
    var sum = 0;
    for(var i = 0; i < numb.length; i++){
    sum = sum + parseFloat(numb[i]);
}
return sum;
}


function avgOf(numb){
        var avg = sumOf(numb)/numb.length;
        return avg; 
}
