// Assignment Code

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = "!@#$%^&*(){}[]=<>/,."


function password(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

function randomPassword() {
  var generate = ""


  // Loop if answer is outside the parameters 
  var passwordLength = prompt("How many characters are desired? (8-128)");

  while (passwordLength <= 7 || passwordLength >= 129) {

    alert("Password must be between 8 - 128 characters");
    var passwordLength = (prompt("How many characters are desired? (8-128)"));
  }console.log (passwordLength);
  
  
  var passwordLower = confirm("Do you want to include lowercase letters?");
  if (passwordLower) {
    generate += lower
  }console.log (passwordLower);

  var passwordUpper = confirm("Do you want to include uppercase letters?");
  if (passwordUpper) {
    generate += upper
  }console.log (passwordUpper);

  var passwordNumber = confirm("Do you want to include numbers?");
  if (passwordNumber) {
    generate += number
  }console.log (passwordNumber);

  var passwordSymbol = confirm("Do you want to include symbols?");
  if (passwordSymbol) {
    generate += symbol
  }console.log (passwordSymbol);

  // Loop if answer is outside the parameters 
  while(passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSymbol === false) {
    alert("You must choose at least one set of characters"); 
    var passwordLower = confirm("Do you want to include lowercase letters?");
  if (passwordLower) {
    gen += lower
  }console.log (passwordLower);

  var passwordUpper = confirm("Do you want to include uppercase letters?");
  if (passwordUpper) {
    gen += upper
  }console.log (passwordUpper);

  var passwordNumber = confirm("Do you want to include numbers?");
  if (passwordNumber) {
    gen += number
  }console.log (passwordNumber);

  var passwordSymbol = confirm("Do you want to include symbols?");
  if (passwordSymbol) {
    gen += symbol
  }console.log (passwordSymbol);
  }

  document.getElementById("password").value = password(passwordLength, generate);
}


// Write password to the #password input
// function passwordLength() {
//   if ((passwordLength > 7) && (passwordLength < 129))   

//   function passwordLower() {
//     return lower [Math.floor(Math.random() * lower.length)];
//   }console.log(passwordLower());

//   function passwordUpper() {
//     return upper [Math.floor(Math.random() * upper.length)];
//   }console.log(passwordUpper());

//   function passwordNumber() {
//     return number [Math.floor(Math.random() * number.length)];

//   }console.log(passwordNumber());

//   function passwordSymbol() {
//     return symbol [Math.floor(Math.random() * symbol.length)];
//   }console.log(passwordSymbol());

//}





//var random = ""

//var passwordText = document.querySelector("#password");

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", randomPassword);
