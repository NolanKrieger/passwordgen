// Assignment Code
var low_characters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z']
var cap_characters = ['A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
]
var nums = ["1", "2", "3", "4" , "5" , "6", "7", "8" , "9", "0"];
var spec_characters = ["!", "@", "#", "$","%","^","&","*","(", ")"];




function generatePassword(){
  
  var length = parseInt(prompt("how many characters in your password?"));
  
  if(length>128 || length<8 || isNaN(length)){
    alert("password must be between 8 and 128")
    return "";
  }
  var uppercase = confirm("do you want uppercasel letters?")
  var lowercase = confirm("do you want lowercase letters?")
  var numcase =  confirm("do you want numbers?")
  var speccase = confirm("do you want special characters?")
  console.log(uppercase, lowercase, numcase, speccase)
  if(uppercase + lowercase + numcase + speccase<1){
    alert("please choose at least one character option.");
    return"";
  }
  var useCharacters = [];
  if(uppercase){
    useCharacters.push(...cap_characters);
  }
  if(lowercase){
    useCharacters.push(...low_characters);
  }
  if(numcase){
    useCharacters.push(...nums);
  }
  if(uppercase){
    useCharacters.push(...spec_characters);
  }
  console.log(useCharacters);
  var passwordString = "";
  for(var i = 0; i<length; i++){
    var random = Math.floor(Math.random()*useCharacters.length);
    var character = useCharacters[random];
    passwordString = passwordString+character;
    console.log(passwordString);
  }

  return passwordString;
}
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);