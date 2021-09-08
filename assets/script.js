// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  window.prompt("Choose a password length between 8 and 128.", "8-128")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);