
//This output is for the div that displays the sum.

dvOutput = document.querySelector("#output");

//this is the array and it is stored within the variable prices.

var prices = [ 12.3, 20, 30.33 ];
'use scrict';
//Japhet Diaz
//10.17.2017
//N220


//setting sum to 0 so my end values are not off.

    var sum = 0;

    //this is the loop that is adding up the numbers within the array. i is 0 always, prices.length to check for every number within the array, and i++ to increment by 1 for every loop.

    for (var i = 0; i < prices.length; i++) {
        console.log(prices[i]);

        //this is essentially adding up the values within the array. Can either use Parsefloat or Numbers for the values in the array. This is to ensure that they are numbers.

        sum = sum + Number(prices[i]);

        //This is ensuring that there are only 2 spaces after the decimal.

        var s=sum.toFixed(2);
}
//this is the text that comes out to the dom.

dvOutput.innerHTML += "The sum is: "+ s +"<br>";

    //Making total 0 in order to ensure code is okay

var total = 0;

// The line of code below is taking the sum and multiplying by 7% and stores it within the variable total.

total = 0.07 * sum;

//This is rounding the numbers and ensuring 2 spaces are the decimal.

var t = total.toFixed(2);

// this is writing out to the dom.

dvOutput.innerHTML += "The total is: "+ t;

