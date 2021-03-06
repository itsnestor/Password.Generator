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

// Prompt for number of characters in password
function generatePassword(){
  var pwLength = parseInt(prompt("Please choose how many characters you would like your password to be. (Between 8-128 characters)"));

  // Making sure the password length is within specified values
  if (pwLength < 8 || pwLength > 128) {
    alert("Password needs to be between 8 to 128 characters long");
    return;
  }
  
  // array of possible characters
  var lowerCaseLetter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var upperCaseLetter = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var specialChar = [" ", "!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var pwChar = [];

  // Prompts for choosing what kind of characters needed in password
  var needLowerCase = confirm("Would you like lowercase characters in your password? (Ok for yes or Cancel for no)");
  var needUpperCase = confirm("Would you like uppercase characters in your password? (Ok for yes or Cancel for no)");
  var needSpecialChar = confirm("Would you like special characters in your password? (Ok for yes or Cancel for no)");
  var needNumber = confirm("Would you like number characters in your password? (Ok for yes or Cancel for no)");

  // Making sure at least one option is chosen
  if (needLowerCase === false && needUpperCase === false && needSpecialChar === false && needNumber === false){
    alert("Password needs at least one of the options.");
    return;
  }
  // adding characters to the password if needed from promnpts
  if (needLowerCase) {
    pwChar = pwChar.concat(lowerCaseLetter);
  }
  if (needUpperCase) {
    pwChar = pwChar.concat(upperCaseLetter);
  }
  if (needSpecialChar) {
    pwChar = pwChar.concat(specialChar);
  }
  if (needNumber) {
    pwChar = pwChar.concat(numbers);
  }

  // storing generated password
  var newPassword = "";

  // takes the choices and generates the password
  for (var i = 0; i < pwLength; i++){
    newPassword = newPassword + pwChar[Math.floor(Math.random() * pwChar.length)];
    console.log(newPassword);
  }

  // shows password in a pop up notification
  alert("Your password is " + newPassword);
  
  // shows the generated password in the text box
  return newPassword;
}