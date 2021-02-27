// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// array of possible characters
var lowerCaseLetter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCaseLetter = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var specialChar = [" ", "!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var pwChar = [];

function generatePassword(){
  var pwLength = parseInt(prompt("Please choose how many characters you would like your password to be. (Between 8-128 characters)"));

  if (pwLength < 8 || pwLength > 128){
    alert("Password needs to be between 8 to 128 characters long");
    return;
  }
}