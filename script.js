// Assignment code here

function generatePassword() {

     const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
     const numbers = "0123456789";
     const symbols = "!@#$%^&*";
 
     let passwordLength = 8;
 
     const includeUppercase = confirm("Include uppercase letters?");
     const includeLowercase = confirm("Include lowercase letters?");
     const includeNumbers = confirm("Include numbers?");
     const includeSymbols = confirm("Include symbols?");

     let letters = "";
     if (includeUppercase) letters += uppercaseLetters;
     if (includeLowercase) letters += lowercaseLetters;
     if (includeNumbers) letters += numbers;
     if (includeSymbols) letters += symbols;
 
     if (letters === "") {
       alert("Please select at least one character type");
       return;
     }
 
     do {
       const length = prompt("Enter the length of the password (between 8 and 128 characters):");
       passwordLength = parseInt(length);
 
       if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
         alert("Please enter a password length between 8 and 128 characters.");
       }
     } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
 


     let password = "";
     for (let i = 0; i < passwordLength; i++) {
       const randomIndex = Math.floor(Math.random() * letters.length);
       password += letters.charAt(randomIndex);
     }
 
     document.getElementById("password").innerText = "Your password is: " + password
   }
 
   generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
