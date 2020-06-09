// Assignment Code

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = "!@#$%^&*(){}[]=<>/,."
var forSure = ""
var generate = ""

function password(pwdl, characters) {
  var pwd = "";
  for (var i = 0; i < pwdl; i++) {
    // console.log(i, characters.charAt(i));
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }console.log(pwd)
  for (var g = 0; g < forSure.length; g++) {
    // pwd.charAt(g) = forSure.charAt(g)
    // pwd = pwd.replace()
    console.log(pwd.charAt(g))
  }
  return pwd;
}
//password(passwordLength, generate)
function randomPassword() {
  // Loop if character number is less than 8  or more than 128 
  var passwordLength = prompt("How many characters are desired? (8-128)");
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password must be between 8 - 128 characters");
    var passwordLength = (prompt("How many characters are desired? (8-128)"));
   console.log(passwordLength);
  }

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
  } console.log(passwordSymbol);
    console.log(forSure);

  // Loop if all confirms are false 
  while (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSymbol === false) {
    alert("You must choose at least one set of characters");
    var passwordLower = confirm("Do you want to include lowercase letters?");
  if (passwordLower) {
    generate += lower
    forSure += lower.charAt(Math.floor(Math.random() * lower.length))
  } console.log(passwordLower);

  //change string to array and use this
    //generate = generate.concat(lower);

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
    console.log(forSure);
  } console.log(passwordSymbol);
  
  }

  document.getElementById("password").value = password(passwordLength, generate);
}

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", randomPassword);
