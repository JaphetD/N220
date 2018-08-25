var sum;
var avg;
var numbers;


var output = document.querySelector(".output").value;

function createNumbers() {
    var input = document.querySelector(".input").value;
    numbers = input.split(" "); 
   console.log(numbers);
}

function sumOf(numb){
    var sum = 0;
    for(i = 0; i < numb.length; i++){
    sum = sum + parseFloat(numb[i]);
    }
    return sum;
    console.log(sumOf);
}


function avgOf(numb){
        var sum = sumOf(numb);
        var avg = sum/numb.length;
        return avg;
}