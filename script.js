//password options 
const passwordOptions = {
  number: '0123456789',
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};
//selections from prompt
const userSelections = {
  size: 0,
  types: ''
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassBtn() {
  let numLength = String(window.prompt("How long should the password be?"));
  if (isNaN(numLength) || (numLength < 8 || numLength > 128 ) ){
    window.prompt("Invalid input. Password should be between 8 - 128 characters long")
    generatePassBtn()
  } else {
    userSelections.size = numLength;
    console.log(userSelections.size, numLength);
    addUpperCase();
  }
}

function addUpperCase() {
  let answer = Boolean(window.confirm("Do you want to include uppercase characters?"));
  if (answer === true) {
    userSelections.types = userSelections.types.concat(passwordOptions.upperCase)
   
    console.log(userSelections.types); 
  } else {
  }
  addLowerCase();
}
function addLowerCase() {
  let answer = Boolean(window.confirm("Do you want to include lowercase characters?"));
  if (answer === true) {
    userSelections.types = userSelections.types.concat(passwordOptions.lowerCase)
    console.log(userSelections.types); 
  } else {
  }
  addSpecialChar();
}
function addSpecialChar() {
  let answer = Boolean(window.confirm("Do you want to include special characters?"));
  if (answer === true) {
   userSelections.types = userSelections.types.concat(passwordOptions.specialChar)
   console.log(userSelections.types); 
  } else {
  }
  addNumeric();
}
function addNumeric() {
  let answer = Boolean(window.confirm("Do you want to include numeric characters?"));
  if (answer === true) {
   userSelections.types = userSelections.types.concat(passwordOptions.number)
   console.log(userSelections.types); 
  } else {
  }
  generatePassword();
}

function generatePassword() {
  let password = '';
  for (i = 0; i < userSelections.size; i++){
    console.log('i');
    password += userSelections.types.charAt(Math.floor(Math.random() * userSelections.types.length))
  }
  console.log(password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
