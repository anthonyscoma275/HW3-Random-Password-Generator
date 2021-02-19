// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "123456789".split("")
var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","~","."]


function generatePassword() {
  var passwordArray = []
 var password = ""
  // select number of characters
 var characAmount = prompt("Choose the password length")
 console.log (characAmount)

  // include uppercase
  var inclUpper = confirm("click ok to use uppercase")
  console.log(inclUpper)

  // include lowercase
  var inclLower = confirm("click ok to use lowercase")
  console.log(inclLower)

  //  include numbers
  var inclNumbers = confirm("click ok to use numbers")
  
  // include symbols
  var inclSymbols = confirm("click ok to use symbols")
  console.log(inclSymbols)

  if (characAmount < 8) {
    alert("Minimum of 8 characters required");
    return;
  }
  if (characAmount > 128) {
    alert("Maxium of 128 characters allowed");
    return;
}

  if (inclUpper === true) {
    passwordArray = passwordArray.concat(upperCase)
  }

  if (inclLower === true) {
   passwordArray = passwordArray.concat(lowerCase)
  }

  if (inclNumbers === true) {
    passwordArray = passwordArray.concat(numbers)
  }

  if (inclSymbols === true) {
    passwordArray = passwordArray.concat(symbols)
  }
 


  // computer reads true or false with selections
  // generate password based on selections



 var randomArray = []
 for(var i=0; i<characAmount; i++){
   var randomi = Math.floor(Math.random() * passwordArray.length);
   randomArray.push(passwordArray[randomi])
 }

 return randomArray.join("")
}
 
      


  