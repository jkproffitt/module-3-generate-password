const passwordOptions = {
  number: '0123456789',
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};
const userSelections = {
  size: 0,
  types: ''
}

var generateBtn = document.querySelector("#generate");

function generatePassBtn() {
  let numLength = String(window.prompt("How long should the password be?"));
  if (isNaN(numLength) || (numLength < 8 || numLength > 128 ) ){
    window.alert("Invalid input. Password should be between 8 - 128 characters long")
    generatePassBtn()
  } else {
    userSelections.size = numLength;
    addUpperCase();
  }
}

function addUpperCase() {
  let answer = Boolean(window.confirm("Do you want to include uppercase characters?"));
  if (answer === true) {
    userSelections.types = userSelections.types.concat(passwordOptions.upperCase)
  }
  addLowerCase();
}

function addLowerCase() {
  let answer = Boolean(window.confirm("Do you want to include lowercase characters?"));
  if (answer === true) {
    userSelections.types = userSelections.types.concat(passwordOptions.lowerCase)
  }
  addSpecialChar();
}

function addSpecialChar() {
  let answer = Boolean(window.confirm("Do you want to include special characters?"));
  if (answer === true) {
   userSelections.types = userSelections.types.concat(passwordOptions.specialChar)
  } 
  addNumeric();
}
function addNumeric() {
  let answer = Boolean(window.confirm("Do you want to include numeric characters?"));
  if (answer === true) {
   userSelections.types = userSelections.types.concat(passwordOptions.number)
  } 
  writePassword();
}

function generatePassword() {
  let password = '';
  for (i = 0; i < userSelections.size; i++){
    password += userSelections.types.charAt(Math.floor(Math.random() * userSelections.types.length))
  }
  console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  if (userSelections.types == '') {
   String(window.alert("You must select at least one option"));
   passwordText.value = ""
   return;
  }
  var password = generatePassword();

  passwordText.value = password;
//reset variables 
  userSelections.size= 0;
  userSelections.types= '';
}
