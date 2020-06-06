// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*(){}[]=<>/,."

var random = [lower, upper, numbers, symbols];


 var passwordLength = prompt ("How many characters are desired? (8-128)");
  if ((passwordLength > 7) && (passwordLength < 129)) {
    console.log(passwordLength);
  }
    else {alert ("Password must be between 8 - 128 characters")
      console.log(passwordLength);
  }

  var passwordLower = confirm ("Do you want to include lowercase letters?");
  if (getRandomLower === false) {
    lower = lower.toUpperCase();
  }

var passwordUpper = confirm ("Do you want to include uppercase letters?");
  if (getRandomUpper === false) {
    upper = upper.toLowerCase();
  }

var passwordNumber = confirm ("Do you want to include numbers?");
  if (getRandomNumber === false) 
  

var passwordSymbol = confirm ("Do you want to include symbols?");
  if (getRandomSymbol === false) 

// Write password to the #password input
function passwordLength() {}
  if ((passwordLength > 7) && (passwordLength < 129))   

for (var i = 0; i < random.length; i++)  {
  function getRandomLower() {
    return lower [Math.floor(Math.random() * lower.length)];
  }console.log(getRandomLower());

  function getRandomUpper() {
    return upper [Math.floor(Math.random() * upper.length)];
  }console.log(getRandomUpper());

  function getRandomNumber() {
    return numbers [Math.floor(Math.random() * numbers.length)];
  }console.log(getRandomNumber());

  function getRandomSymbol() {
    return symbols [Math.floor(Math.random() * symbols.length)];
  }console.log(getRandomSymbol());

  
  }

function writePassword() {
  var password = generatePassword();
}


  


  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
