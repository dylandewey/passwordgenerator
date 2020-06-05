// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomfunct = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Write password to the #password input
function passwordLength() {
  if ((passwordLength > 7) && (passwordLength < 129)) 
    console.log(passwordLength);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}console.log(getRandomNumber());

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols [Math.floor(Math.random() * symbols.length)];
}console.log(getRandomSymbol());


function writePassword(lower, upper, number, symbol) {
  var password = generatePassword();
}

var passwordLength = prompt ("How many characters are desired? (8-128)");
  if ((passwordLength > 7) && (passwordLength < 129)) {
    console.log(passwordLength);
  }
    else {alert ("Password must be between 8 - 128 characters")
      console.log(passwordLength);
  }
  
// var passwordLower = prompt ("Do you want to include lowercase letters?");

// var passwordUpper = prompt ("Do you want to include uppercase letters?");

// var passwordNumber = prompt ("Do you want to include numbers?");

// var passwordSymbol = prompt ("Do you want to include symbols?");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
