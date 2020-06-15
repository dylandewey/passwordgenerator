// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = "!@#$%^&*(){}[]=<>/"
var forSure = ""
var generate = ""

// For loop to randomly select the amount of characters input by user
function password(pwdl, characters) {
  var pwd = "";
  for (var i = 0; i < pwdl; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  } console.log(pwd)

  // For loop to make sure the variables selected by user are included in the password
  for (var g = 0; g < forSure.length; g++) {
    // pwd.charAt(g) = forSure.charAt(g)
    // pwd = pwd.replace()
    console.log(pwd.charAt(g))
  }
  return pwd;
}

//password(passwordLength, generate)
// Prompt for number of characters in password
//Where the magic happens
function randomPassword() {
  var passwordLength = prompt("How many characters are desired? (8-128)");
  console.log(passwordLength);

  // While loop if character number is less than 8  or more than 128 
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password must be between 8 - 128 characters");
    return randomPassword();
  }
  // User selects which type of characters to include in the password 
  var passwordLower = confirm("Do you want to include lowercase letters?");
  if (passwordLower) {
    generate += lower
    forSure += lower.charAt(Math.floor(Math.random() * lower.length))
  } console.log(passwordLower);

  var passwordUpper = confirm("Do you want to include uppercase letters?");
  if (passwordUpper) {
    generate += upper
    forSure += upper.charAt(Math.floor(Math.random() * upper.length))
  } console.log(passwordUpper);

  var passwordNumber = confirm("Do you want to include numbers?");
  if (passwordNumber) {
    generate += number
    forSure += number.charAt(Math.floor(Math.random() * number.length))
  } console.log(passwordNumber);

  var passwordSymbol = confirm("Do you want to include symbols?");
  if (passwordSymbol) {
    generate += symbol
    forSure += symbol.charAt(Math.floor(Math.random() * symbol.length))
    console.log(passwordSymbol);
    console.log(forSure);
  }
  // if statement if all selections are "false" 
  if (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSymbol === false) {
    alert("You must choose at least one set of characters");
    return randomPassword ()
  }
  document.getElementById("password").value = password(passwordLength, generate);
}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", randomPassword);
