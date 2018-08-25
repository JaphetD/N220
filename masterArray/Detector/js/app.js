'use scrict';
//Japhet Diaz
//10.4.2017
//N220

//variable this is for writing in the input.
var words;
//output is the div beneath the input box
var output = document.querySelector("#output");
var found = false;
var numberFound =0;

function checkWords() {
    //this is resetting the values once you hit the button
    found = false;
    numberFound = 0;
    //This is receiving the actual words in the input and value makes sure it works
    var input = document.querySelector(".input").value;
    //this is splitting the words in the input
    words = input.split(" ");
    wordExist(words);
    // printing values to the DOM
    output.innerHTML = "Words found: " +found+"Number of words = "+numberFound;
}

//When you need to create an array.
function wordExist(list) {
    //list.length is based on how many words are in the input. i always starts off at 0, and i++ is incrementing each line by 1.
    for(var i=0; i<list.length; i++){
        //this is checking for the words in the input box. Looks like a switch statement.
        if(list[i]=="legos"){
            //if you type out "legos" the found in the div will return as true and number found will increase by 1.
            found=true;
            numberFound++;
        } else if(list[i]=="clouds"){
            found=true;
            numberFound++;
        }else if(list[i]=="manifold"){
            found=true;
            numberFound++;
        }
    }
}


