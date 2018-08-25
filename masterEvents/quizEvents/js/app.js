dvQuestionResponse = document.querySelector("#answer");

var Question1 = document.querySelector("#button1");

var Question2= document.querySelector("#button2");

Question1.addEventListener("click", doSomething);
Question2.addEventListener("click", doSomething);
    





function doSomething(event) {
   var answer = event.target.getAttribute("data-answer");
console.log(answer);
dvQuestionResponse.innerHTML=answer;
}