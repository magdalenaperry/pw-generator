// Assignment Code

var generateBtn = document.querySelector("#generate");

// determine number of characters needed 
function generatePassword() {
  var count = Number(prompt("Please enter the number of characters (8-128) you would like in your password."));
  // console.log('count!', count);
  // count greater than 8 or less than 128
  // console.log('type of thing!!', typeof count)


  //assigned variables used in password generator
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*(){}|:<.,>?-+/';']/";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  // variable to ensure all characters are applied when password is generated
  var all = ""


  if (!count || count < 8 || count > 128) {
    alert('Please type a valid number between 8 and 128.');
    return " ";
  } else {

    if (confirm("Would you like to include undercase letters?")) {
      all += letters;
    }

    if (confirm("Would you like to include uppercase letters?")) {
      all += uppercase;
    }

    if (confirm("Would you like to include special characters?")) {
      all += special;
    }

    if (confirm("Would you like to include numbers?")) {
      all += number;
    }

    if (all === ""){
      alert('Please select at least one type of character to generate a password.');
      return " ";
    }

    var genPassword = "";
    for (var i = 0; i < count; i++) {
      var random = Math.floor(Math.random() * all.length);
      genPassword += all[random];
    }
    }
    // runs the function to generate password
    return genPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);