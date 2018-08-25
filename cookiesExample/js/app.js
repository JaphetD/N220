////var catName = "Red";
////console.log(catName);
//
////localStorage['dogName'] = "Blue";
//console.log(localStorage['dogName']);
//
//var catName;
//console.log(catName);

//manually insert template, we put {{}} as placeholders for content later on. This is special and I can search for it later on.
var template = "It was the {{adjective1}} of times, it was the {{adjective2}} of times";

//using replace to replace words in a string
var modifiedString = template.replace("{{adjective1}}", "chocolatiest");

var modifiedString = template.replace("{{adjective2}}", "bitter");

console.log(modifiedString)

