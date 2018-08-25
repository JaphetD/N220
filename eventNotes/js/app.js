//Below are the two lines of codes that takes in the values for the buttons, and we're assigning them to a variable.
let btnHappyHalloween=document.querySelector("#btnHappyHalloween");

let btnTrick=document.querySelector("#btnTrick");

//Below are the "EventListener" that listens for the event and how the event will appear. Below it will appear when we click on the button.

btnHappyHalloween.addEventListener("click", doSomething)
btnTrick.addEventListener("click", doSomething)


//This is the event handler that "triggers" the event that we made above. Below we made the event to change the button color into a ugly yellow.
function doSomething(event) {
    //This string below is is getting the attribute that is stored in data-color.Now the new event handler is changing the colors to red and blue.
    let color = event.target.getAttribute("data-color");
    //The variable color below is the variable we created above. We stored data-color in the variable and thats how event handler knows what color to change to.
    event.target.style.backgroundColor=color;
}