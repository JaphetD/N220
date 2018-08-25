
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
        }(6);
        var factorialize2 = document.querySelector("#numbers").value;
    console.log(factorialize2);
}
console.log(factorialize(6));