var dvChartHolder = document.querySelector(".chartHolder");
var TextBox = document.querySelector(".textBox");
var text = document.createElement('div');
TextBox.appendChild(text);

var objToday = {
    High: "A high of 76",
    Low: "a low of 41.",
    Winds:"NW Winds will be at 3mph",
    Clouds:"today will be partly cloudy."
};

TextBox.innerHTML=objToday.High + " and " + objToday.Low + objToday.Winds + " and " + objToday.Clouds;

var entries = [
    {color:"#ff0000", height: 150, value:"Chance of rain is 40%"},
    {color:"#00ff00", height: 100, value:"with 30% humidity. Partly cloudy."}
];

for(var i = 0; i < 2; i++) {
    var objEntry = entries[i];

    //make new element
    var newDiv = document.createElement("div");
    newDiv.style.width = "90px";
    newDiv.style.height = objEntry.height +"px";
    newDiv.style.position = "absolute";
    newDiv.style.bottom = "0px";
    // 1st: 0px, 2nd: 90px, 3rd: 180px
    newDiv.style.left = (100 * i) + "px";
    newDiv.style.backgroundColor = objEntry.color;
    newDiv.innerHTML=objEntry.value;

    //add to the page
    dvChartHolder.appendChild(newDiv);
}