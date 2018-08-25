 box1=document.querySelector("#box1");

 box2=document.querySelector("#box2");

 box3=document.querySelector("#box3");

box1.style.cssFloat="left";
box1.style.margin="5px";
box1.style.height="200px";
box1.style.width="200px";
box1.style.backgroundColor="black";

box2.style.cssFloat="left";
box2.style.margin="5px";
box2.style.height="200px";
box2.style.width="200px";
box2.style.backgroundColor="black";

box3.style.cssFloat="left";
box3.style.margin="5px";
box3.style.height="200px";
box3.style.width="200px";
box3.style.backgroundColor="black";

box1.addEventListener("click", doSomething);
box2.addEventListener("click", doSomething);
box3.addEventListener("click", doSomething);

function doSomething(event) {
     color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor=color;
}