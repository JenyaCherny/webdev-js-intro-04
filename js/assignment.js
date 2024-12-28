"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");

// create a mutable variable called age and do not assign it a value.
const responseParagraph = document.getElementById('response');
    let age;


function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    // Write your code below

if (ageInputEl.value >= 18) {
    console.log("You can vote, but you cannot purchase alcohol.");
    }
if (ageInputEl.value >= 21) {
        console.log("You can vote and purchase alcohol");
    }
else {
    console.log("You cannot vote nor purchase alcohol. You are too young!");
}
  }  /*Question - Why for age < 21 the logic gives two output? 
    
      */
submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
