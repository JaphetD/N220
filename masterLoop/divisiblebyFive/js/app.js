'use scrict';
//Japhet Diaz
//9.27.2017
//N220


var dvOutput = document.querySelector("#output");

for (var i = 0; i < 20; i++)
    if ( (i%5) == 0) {
        dvOutput.innerHTML += "Yes its divisble! <br />";
    } else {
        dvOutput.innerHTML += "No its not.<br />";
    }


