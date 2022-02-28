// Assignment Code

var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*(){}|:<.,>?-+/';']/";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count);

  // count greater than 8 or less than 128
  if (count < 8 || count > 128){
      alert('Please choose between 8 and 128 characters.');
      return "";
  }

  

  var genPassword = "";
  for (var i = 0; i < count; i++){
      var random = Math.floor(Math.random() * letters.length);
      genPassword += letters[Math.floor(Math.random() * letters.length)];
  }
  
  return genPassword;

  // var specialChar = Number(prompt("Would you like to include special characters?"));
  // console.log(specialChar);


  // for (var i = 0; i < count, i++){
  //   var random = Math.floor(Math.random() * special.length);
  //   genPassword += special[Math.floor(Math.random() * special.length)];
  // }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




