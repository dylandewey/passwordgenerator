// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = "!@#$%^&*(){}[]=<>/,."

var random = [lower, upper, number, symbol];


 var passwordLength = prompt ("How many characters are desired? (8-128)");
  
 // Loop if answer is outside the parameters 
 while(passwordLength <= 7 || passwordLength >= 129) {

     alert ("Password must be between 8 - 128 characters");
    var passwordLength = prompt ("How many characters are desired? (8-128)");
 } console.log(passwordLength);
  
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


  function getRandomLower() {
    return lower [Math.floor(Math.random() * lower.length)];
  }console.log(getRandomLower());

  function getRandomUpper() {
    return upper [Math.floor(Math.random() * upper.length)];
  }console.log(getRandomUpper());

  function getRandomNumber() {
    return number [Math.floor(Math.random() * number.length)];
  }console.log(getRandomNumber());

  function getRandomSymbol() {
    return symbol [Math.floor(Math.random() * symbol.length)];
  }console.log(getRandomSymbol());

  // Loop if answer is outside the parameters 
  while(getRandomLower === false && getRandomUpper === false && getRandomNumber === false && getRandomSymbol === false) 
    alert("You must choose at least one parameter");


  var funcrandom = (getRandomUpper, getRandomLower, getRandomSymbol, getRandomNumber);

  var random = ""

  for (var i = 0; i<0; i++) {
    passwordLength += random.charAt(Math.floor(Math.random() * random.length))
  }
    

  function generatePassword() {
    return funcrandom
  }
   
  
  

function writePassword() {
  var password = generatePassword();
}
  


  


  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
