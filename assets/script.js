// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters to generate from
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];


// Generate password function
function generatePassword() {

  // Prompt password length
  var chooseLength = window.prompt("Choose a password length between 8 and 128.");
  console.log(chooseLength);
  // Validate length entered
  while (chooseLength <= 7 || chooseLength >= 129) {
    alert("Password length must range between 8-128 characters. Please choose a valid number.");
    chooseLength = window.prompt("Choose a password length between 8 and 128.");
    console.log(chooseLength);
  };


  // Confirm character sets to include
  var chooseLowercaseChar = confirm("Select OK to include lowercase characters.");
  var chooseUppercaseChar = confirm("Select OK to include uppercase characters.");
  var chooseNumberChar = confirm("Select OK to include numerical characters.");
  var chooseSpecialChar = confirm("Select OK to include special characters.");
  // Validate at least one character set to include
  while (!chooseLowercaseChar && !chooseUppercaseChar && !chooseNumberChar && !chooseSpecialChar) {
    alert("Please choose at least one character type to include.");
    chooseLowercaseChar = confirm("Select OK to include lowercase characters.");
    chooseUppercaseChar = confirm("Select OK to include uppercase characters.");
    chooseNumberChar = confirm("Select OK to include numerical characters.");
    chooseSpecialChar = confirm("Select OK to include special characters.");
  };


  // Character Set chosen
  var passwordCharSet = [];
  // Concat chosen characters to array
  if (chooseLowercaseChar) {
    passwordCharSet = passwordCharSet.concat(lowercaseChar);
  };
  if (chooseUppercaseChar) {
    passwordCharSet = passwordCharSet.concat(uppercaseChar);
  };
  if (chooseNumberChar) {
    passwordCharSet = passwordCharSet.concat(numberChar);
  };
  if (chooseSpecialChar) {
    passwordCharSet = passwordCharSet.concat(specialChar);
  };

  console.log(passwordCharSet);


  // Password Generated
  var passwordCreated = ""
  
  for (var i = 0; i < chooseLength; i++) {
    passwordCreated = passwordCreated + passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
  };

  console.log(passwordCreated);

  return passwordCreated;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
