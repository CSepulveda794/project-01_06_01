/*
      Project 01_06_01

      Author: Cynthia Sepulveda
      Date:   8.17.18

      Filename: scrpit.js
   */

    "use strict";

    
    var formValidity = true;







function creatEventListeners(){
   var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}
//function to validate the entire form 
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnvalue = false;
    }

    formValidity = true;
   
    validateRequired();

    if (formValidity === true) { 
        //form is valid
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementById("form")[0].submit();
    } else {
        document.getElementById('errorText').innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}

function validateRequired(){
    var inputElements = document.quereySelectorAll("#contactinfo input")
    var errorDiv = document.getElementById(errortext)
    
    var currentElement = contactinfo.length
    alert(currentElement);
}


    if (window.addEventListener) {
    window.addEventListener("load", creatEventListeners, false);
} else if (window.attachEvent) {
    window.attatchEvent("onload", creatEventListeners);
}