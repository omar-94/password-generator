// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters to generate from
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChar = '0123456789';
var specialChar = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';



function generatePassword() {
  var chooseLength = window.prompt("Choose a password length between 8 and 128.")
  console.log(chooseLength)

  while (chooseLength <= 7 || chooseLength >= 129) {
    alert("Password length must range between 8-128 characters. Please choose a valid number.");
    chooseLength = window.prompt("Choose a password length between 8 and 128.");
    console.log(chooseLength);
  }

  var chooseLowercaseChar = confirm("Select OK to include lowercase characters.");
  var chooseUppercaseChar = confirm("Select OK to include uppercase characters.");
  var chooseNumberChar = confirm("Select OK to include numerical characters.");
  var chooseSpecialChar = confirm("Select OK to include special characters.");

  while (!chooseLowercaseChar && !chooseUppercaseChar && !chooseNumberChar && !chooseSpecialChar) {
    alert("Please choose at least one character type to include.");
    chooseLowercaseChar = confirm("Select OK to include lowercase characters.");
    chooseUppercaseChar = confirm("Select OK to include uppercase characters.");
    chooseNumberChar = confirm("Select OK to include numerical characters.");
    chooseSpecialChar = confirm("Select OK to include special characters.");
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
