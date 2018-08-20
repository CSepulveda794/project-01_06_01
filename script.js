/*
      Project 01_06_01

      Author: Cynthia Sepulveda
      Date:   8.17.18

      Filename: scrpit.js
   */

    "use strict";
    var formValidity = true;



//function to validate the entire form 
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnvalue = false;
    }
    validateRequired();
}



function validateRequired(){ 
    var collectInput = document.getElementsByTagName("input");
    var errorDiv = document.getElementById("errorText");
    var currentElementCount = collectInput.length;
    var validity = true;
    var currentElement;
    
    //loops through the field checking for validity 
    try {
        for (var i = 0; i < currentElementCount; i++) {
            currentElement = collectInput[i];
            if (currentElement.value === ""){
                currentElement.style.background = "rgb(255,233,233)";
                validity = false;
            }else {
                currentElement.style.background = "white";
            }
        }
        // if a field is empty it will notify the user
        if (validity === false){
            throw "Please complete the empty boxes"
        }else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            formValidity = true;
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
    // if form is completely done with no errors submit
    if (formValidity === true){
        document.getElementsByTagName("form")[0].submit();
    }
    
}

function creatEventListeners(){
   
   var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else {
        form.addEventListener("onsubmit", validateForm);
    }
}

    addEventListener("load", creatEventListeners);