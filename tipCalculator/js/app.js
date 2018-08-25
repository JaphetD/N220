'Use Strict';
//Japhet Diaz 
//9.6.2017 
//N220

var a = 100;

var b = 200;

function calculate() {
var addedValue = a + b + parseFloat(document.querySelector("#bill").value);

var tipValue = parseFloat(document.querySelector("#bill").value);
    
console.log("Tip:$"+ tipValue+ " " + "Total:$" + addedValue);
}


