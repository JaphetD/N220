'use scrict';
//Japhet Diaz
//10.4.2017
//N220

var divWidths = [ 100, 200, 300 ];

var divHeights = [ 300, 200, 100 ]; 

var divWords = [ "Going", "To do", "Great" ]; 

var divColors = [ "#FF0000", "#00FF00", "#0000FF" ]; 
var divIDs = [ "#first", "#second", "#third"];


for (var i=0; i <3; i++) {
    var div = document.createElement("div");
    div.style.width = divWidths[i];
    div.style.height = divHeights[i];
    div.style.background = divColors[i];
    div.innerHTML=divWords[i];
    document.querySelector(".container").appendChild(div);
}



