// click button = generate password
// what do i need for my password? criteria
// click on the criteria needed for password
// determine the length of my password (conditions 8-128 char)
// what characters do I want in my password? (select true/false: lowercase, uppercase, numbers, or spec. char)
// must have one true selector
// dom manipulation methods password to display


// dom manipulation methods
// functions that are built in to javascript
// 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


