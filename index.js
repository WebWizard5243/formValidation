document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    checkData();
});
var firstName = document.getElementById("first-name");
var secondName = document.getElementById("second-name");
var address = document.getElementById("address");
var password = document.getElementById("password");
var enterElements = [firstName,secondName,address,password];
function checkData(){
    for(var i = 0; i< enterElements.length;i++){
    var usernameValue = enterElements[i].value.trim();
    if(i===2){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(usernameValue.match(validRegex)){
            setSuccess(enterElements[i])
        }
        else if(usernameValue==""){
            checkError(enterElements[i],document.querySelectorAll("input")[i].getAttribute("placeholder") + " can't be blank.");
        }
        else {
            checkError(enterElements[i],"this doesn't seems like an Email");
        }
    }
    else{
    if(usernameValue==""){
        checkError(enterElements[i],document.querySelectorAll("input")[i].getAttribute("placeholder") + " can't be blank.");
    }
    else{
        setSuccess(enterElements[i]);
    }
    }
}
}

function checkError(userInput,msg){
    var parentBox = userInput.parentElement;
    parentBox.className ="input-field error";
    parentBox.querySelector("span").innerText = msg ;
    parentBox.querySelector("img").setAttribute("src","./Images/close.png");
    parentBox.querySelector("img").setAttribute("class","icon");
}
function setSuccess(userInput){
    var parentBox = userInput.parentElement;
    parentBox.className ="input-field success";
    parentBox.querySelector("span").innerText = "";
    parentBox.querySelector("img").setAttribute("src","./Images/check.png");
    parentBox.querySelector("img").setAttribute("class","icon");
    var usernameValue = firstName.value.trim();
}