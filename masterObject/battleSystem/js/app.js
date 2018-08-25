var dvContainer = document.querySelector("#container");
var dvContainer2 = document.querySelector("#container2");
var Attack = document.querySelector("#attack");


var mainChar ={
    name:"Main Character",
    attack:50,
    health:100,
    defence:100
};

var attacker = {
    name:"Enemy",
    attack:50,
    health:100,
    defence:100
};

dvContainer.innerHTML = mainChar.name + ":</br>" +"Health:"+ mainChar.health+"</br>"+"Defense:"+ mainChar.defence +"</br>"+"Attack:"+ mainChar.attack;

dvContainer2.innerHTML = attacker.name + ":</br>" +"Health:"+ attacker.health+"</br>"+"Defense:"+ attacker.defence +"</br>"+"Attack:"+ attacker.attack;

Attack.addEventListener("click", doSomething);

function doSomething() {
    dvContainer2.innerHTML =attacker.name + ":</br>" +"Health:"+ (attacker.health - mainChar.attack)+"</br>"+"Defense:"+ (attacker.defence - mainChar.attack) +"</br>"+"Attack:"+ attacker.attack;;
    console.log("hey");
}
