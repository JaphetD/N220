//
// //Japhet Diaz
// //11.29.2017
// //N220
//

for(var i=0; i<16; i++){
    var newDiv = document.createElement("div");
    newDiv.style.height = "150px";
    newDiv.style.width = "300px";
    newDiv.style.margin = "5px";
    newDiv.style.backgroundColor="#111";
    newDiv.style.cssFloat="left";
    newDiv.innerHTML = i;
    document.body.appendChild(newDiv);

    newDiv.addEventListener("click", doSomething);
}

function doSomething(event) {


    event.target.style.backgroundColor = "#ff0000";

    function clearBoxes() {
        newDiv = "";
    }


    if (newDiv.length == "#ff0000"){
        setTimeout(flipover, 20);
    }




    function flipover() {
        newDiv.style.backgroundColor = "#111";

    }
}


function refreshPage(){
    window.location.reload();
}
































//
// // box1=document.querySelector("#box1");
// //
// // box2=document.querySelector("#box2");
// //
// // box3=document.querySelector("#box3");
// //
// // box4=document.querySelector("#box4");
// //
// // box5=document.querySelector("#box5");
// //
// // box6=document.querySelector("#box6");
// //
// // box7=document.querySelector("#box7");
// //
// // box8=document.querySelector("#box8");
//
//
// box1.style.cssFloat="left";
// box1.style.margin="5px";
// box1.style.height="200px";
// box1.style.width="200px";
// box1.style.backgroundColor="black";
//
// box2.style.cssFloat="left";
// box2.style.margin="5px";
// box2.style.height="200px";
// box2.style.width="200px";
// box2.style.backgroundColor="black";
//
// box3.style.cssFloat="left";
// box3.style.margin="5px";
// box3.style.height="200px";
// box3.style.width="200px";
// box3.style.backgroundColor="black";
//
// box4.style.cssFloat="left";
// box4.style.margin="5px";
// box4.style.height="200px";
// box4.style.width="200px";
// box4.style.backgroundColor="black";
//
// box5.style.cssFloat="left";
// box5.style.margin="5px";
// box5.style.height="200px";
// box5.style.width="200px";
// box5.style.clear="both";
// box5.style.backgroundColor="black";
//
// box6.style.cssFloat="left";
// box6.style.margin="5px";
// box6.style.height="200px";
// box6.style.width="200px";
// // box6.style.clear="both";
// box6.style.backgroundColor="black";
//
// box7.style.cssFloat="left";
// box7.style.margin="5px";
// box7.style.height="200px";
// box7.style.width="200px";
// // box7.style.clear="both";
// box7.style.backgroundColor="black";
//
// box8.style.cssFloat="left";
// box8.style.margin="5px";
// box8.style.height="200px";
// box8.style.width="200px";
// // box8.style.clear="both";
// box8.style.backgroundColor="black";
//
//
// box1.addEventListener("click", doSomething);
// box2.addEventListener("click", doSomething);
// box3.addEventListener("click", doSomething);
// box4.addEventListener("click", doSomething);
// box5.addEventListener("click", doSomething);
// box6.addEventListener("click", doSomething);
// box7.addEventListener("click", doSomething);
// box8.addEventListener("click", doSomething);
//
//
// function doSomething(event) {
//     color = event.target.getAttribute("data-color");
//     event.target.style.backgroundColor=color;
// }