// Assignment Code
var generateBtn = document.querySelector("#generate");

/* var passwordLength = prompt ("How many characters are desired? (8-128)");
  if ((passwordLength > 7) && (passwordLength < 129)) {
    console.log(passwordLength);
  }
    else {alert ("Password must be between 8 - 128 characters")
      console.log(passwordLength);
  }*/

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
  var lower = "abcdefghijklmnopqrstuvwxyz"
  return lower [Math.floor(Math.random() * lower.length)];
}console.log(getRandomLower());

function getRandomUpper() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upper [Math.floor(Math.random() * upper.length)];
}console.log(getRandomUpper());

function getRandomNumber() {
  var numbers = "0123456789"
  return numbers [Math.floor(Math.random() * numbers.length)];
}console.log(getRandomNumber());

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols [Math.floor(Math.random() * symbols.length)];
}console.log(getRandomSymbol());


function writePassword(lower, upper, number, symbol) {
  var password = generatePassword();
}


  
// var passwordLower = confirm ("Do you want to include lowercase letters?");

// var passwordUpper = confirm ("Do you want to include uppercase letters?");

// var passwordNumber = confirm ("Do you want to include numbers?");

// var passwordSymbol = confirm ("Do you want to include symbols?");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
