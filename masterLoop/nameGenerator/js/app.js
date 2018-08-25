var wordDiv = document.querySelector(".container");
var chr = "";
function generate() {
    var words = "";

    for (var y = 0; y < 5; y++) {
        var myWord = "";
        for (var i = 0; i < 4; i++) {
            var randomCharacterIndex = Math.round(Math.random() * 25);
            chr = String.fromCharCode(97 + randomCharacterIndex);
            if (i == 1) {
                myWord += String.fromCharCode(97 + randomCharacterIndex);
                myWord += String.fromCharCode(97 + randomCharacterIndex);
            } else if (i == 3) {
                if (isVowel(chr)) {
                    myWord += String.fromCharCode(97 + randomCharacterIndex);
                } else {
                    var vowels = ["a", "e", "i", "o", "u"];
                    var rdmV = Math.floor(Math.random() * 4);
                    myWord += vowels[rdmV];
                }
            } else {
                myWord += String.fromCharCode(97 + randomCharacterIndex);
            }
        }
        words += myWord + " ";
    }

    //let's make a five letter word..

    wordDiv.innerHTML = words;
}

function isVowel(character) {
    if (
        character == "a" ||
        character == "e" ||
        character == "i" ||
        character == "o" ||
        character == "u"
    ) {
        return true;
    } else {
        return false;
    }
}
