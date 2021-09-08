// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters to generate from
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChar = '0123456789';
var specialChar = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';



function generatePassword() {
  var chooseLength = window.prompt("Choose a password length between 8 and 128.", "8-128")

  if (chooseLength <= 7 || chooseLength >= 129) {
    alert("Password length must range between 8-128 characters. Please choose a valid number.");
    var chooseLength = window.prompt("Choose a password length between 8 and 128.", "8-128")
  } else {
    passwordLength = chooseLength
    console.log(chooseLength)
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
