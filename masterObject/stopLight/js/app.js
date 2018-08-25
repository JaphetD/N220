var stoplightque = [
    {color:"#f90000"},
   {color:"#f9cb00"},
    {color:"#028200"}
];


setTimeout(showNextLight, 1500);
var stoplightindex = 0;
var newElement= document.createElement("div");
newElement.style.backgroundColor ="#f90000";
newElement.style.height='90px';
newElement.style.width='90px';
document.body.appendChild(newElement);

function showNextLight() {
    if(stoplightindex < stoplightque.length) {
        var stoplightobj = stoplightque[stoplightindex];
        newElement.style.backgroundColor=stoplightobj.color;
        stoplightindex++;
        setTimeout(showNextLight, 700 + Math.random() * 3000);
        console.log(stoplightque);

    }
}