'use scrict';
//Japhet Diaz
//10.17.2017
//N220

//This output is to display the customer's name and which number they beneath the input.
dvOutput=document.querySelector("#output");

//We set the customer variable to 1 to start it of at 1.
var customer=1;

//This function is following the logic that as customers keep inputing their names the customer variable will increase by 1.
function submit() {
 var firstName=document.querySelector("#firstName").value;
 dvOutput.innerHTML="Hello " + firstName + "!" + "You're customer number: "+ customer++;
 for(i=0; i <= firstName; i++){
        customer++;
    }
}
