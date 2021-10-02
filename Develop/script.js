// Assignment Code
const generateBtn = document.querySelector("#generate");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
let superArray = [];
let password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
  let groupCounter = 0;
  const passwordLength = parseInt(prompt("How many characters will your password be? Enter number between 8 and 128."));
  
  if (isNaN(passwordLength)) {
    alert("Password must be a number between 8 and 128 characters.");
    return generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be a number between 8 and 128 characters.");
    return generatePassword();
  } else {
    const confirmUppercase = confirm("Will your password contain uppercase letter(s)?");
    const confirmLowercase = confirm("Will your password contain lowercase letter(s)?");
    const confirmNumbers = confirm("Will your password contain numbers?");
    const confirmSpecialCharacters = confirm("Will your password contain special characters?");

    if (confirmUppercase) {
      groupCounter++;
      superArray = superArray.concat(upper);
      let randomIndex = Math.floor(Math.random() * upper.length);
      let randomChar = upper[randomIndex];
      password = password.concat(randomChar);
    }
    if (confirmLowercase) {
      groupCounter++;
      superArray = superArray.concat(lower);
      let randomIndex = Math.floor(Math.random() * lower.length);
      let randomChar = lower[randomIndex];
      password = password.concat(randomChar);
    }
    if (confirmNumbers) {
      groupCounter++;
      superArray = superArray.concat(numbers);
      let randomIndex = Math.floor(Math.random() * numbers.length);
      let randomChar = numbers[randomIndex];
      password = password.concat(randomChar);
    }
    if (confirmSpecialCharacters) {
      groupCounter++;
      superArray = superArray.concat(specialCharacters);
      let randomIndex = Math.floor(Math.random() * specialCharacters.length);
      let randomChar = specialCharacters[randomIndex];
      password = password.concat(randomChar);
    }
    for (let i = 0; i < passwordLength - groupCounter; i++) {
      let randomIndex = Math.floor(Math.random() * superArray.length);
      let randomChar = superArray[randomIndex];
      password = password.concat(randomChar);      
    }
    password = password.split().sort(function (a, b) {
      return 0.5 - Math.random();
    }).join();
    return password;
  }
}
