var generateBtn = document.querySelector("#generate"); 
// Password Innards
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolS = [' ', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '.',  ':', ';', '<', '=', '>', '?', '_', '[',  ']', '{', '}' ];
// Series of Prompts
function PromptSeries() {
  userInput =[];
 
  userSelect = window.prompt("Choose how many characters your password will be. (8-128)");
// Password  Character Boundaries
  if (userSelect < 8 || userSelect > 128) {
    alert ("Only input the following values: 8-128")
    return false;
  }
//   if(userSelect < 8) {
//     window.alert("password must be more than 8 characters")
    
//   } else if(userSelect > 128) {
//     window.alert("password must be less than 128 characters")}

  if (confirm("Include lowercase?")) {
    userInput = userInput.concat(lowerCase);
  }

  if (confirm("Include UPPERCASE?")) {
    userInput = userInput.concat(upperCase);
  }
 
  if (confirm("Include Numbers?")) {
    userInput = userInput.concat(numberS);
  }
  
  if (confirm("Include Special Characters?")) {
    userInput = userInput.concat(symbolS);
  }
  return true;
}
// Generating Users Password RNG
function generatePassword(){
  var password = "";
  for(var i = 0; i < userSelect; i++) {
    var random = Math.floor(Math.random() * userInput.length);
     password = password + userInput[random];
  }
  return password;
}
// Extracting final result into id password
function writePassword() {
//Establishing Prompt connection password
  var Prampt = PromptSeries();
  if (Prampt) {
  var password = generatePassword();
  var passwordLink = document.querySelector("#password");
  passwordLink.value = password;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
