'use scrict'; 
//Japhet Diaz
//8.31.2017
//N220

var bravery = 10;

function venture() {    
    document.body.innerHTML = "You step out into the dark, and have to turn on your flashlight. <button onclick='returnHome()'>Go back inside</button> <button onclick='walkOnward()'>Walk forward</button>";
    
    bravery --;
}

function stay(choice) {
    if(bravery < 10) {
        document.body.innerHTML = "You go back inside, but a shadow scares you to death. Game over."
    } else {
        document.body.innerHTML = "Even though you decided to stay, you muster your courage and burst through the front door to go outside, only to trip and fall on a branch. Game over."
    }
    
}

function returnHome() {
    document.body.innerHTML = "You go back inside. You can always try to <button onclick='stay()'>leave.</button>.";
}

function walkOnward() {
    document.body.innerHTML = "You walk into the darkness and the first thing you see is a forest. While walking onwards you can barely hear the sound of running water as well.<button onclick='riverSound()'>Walk towards the faint water sounds.</button> <button onclick='forest()'>Ignore the water sounds, and head deeper into the forest.</button>";
    bravery--;
}

function riverSound() {
    document.body.innerHTML = "You trust your inner boyscout and decide to walk towards the running water sounds.You find a small river!<button onclick='exit()'>Salvation.</button>";
}

function forest(choice) {
    if(bravery < 10) {
        document.body.innerHTML = "You're not afraid of the dark creepy forest,and head in without checking your path for obstacles.Game over.";
    } else {
        document.body.innerHTML = "You're too scared to go into the forest, so you try to go back the way you came,but you lost the main path. Game over.";
    }
}

function exit() {
    document.body.innerHTML = "You followed the river all the way upstream, and it led you straight back to civilization.You Win!";
}







