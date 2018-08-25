function submitPass() {
    var user=document.querySelector("#user").value;

    var pass=document.querySelector("#pass").value;

    if(user=="Username"&&pass=="Password"){
        var user=document.querySelector(".message").innerHTML="success";

    } else {
        var user=document.querySelector(".message").innerHTML="Error!";
    }
}


