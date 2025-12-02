

const lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const lengthEl = document.getElementById("length-field");
const lowercaseEl = document.getElementById("lowercase-field");
const uppercaseEl = document.getElementById("uppercase-field");
const numbersEl = document.getElementById("numbers-field");
const specialEl = document.getElementById("special-field");
const countEl = document.getElementById("count-field");



function getRandomChars(pwLength,allCharacters){
    let p1El = document.getElementById("pass1")
    let p2El = document.getElementById("pass2")
    let temp1 = ""
    let temp2 = ""
    for (let i = 0; i < pwLength; i++){
        temp1 += allCharacters[Math.floor(Math.random()* allCharacters.length)]
        temp2 += allCharacters[Math.floor(Math.random()* allCharacters.length)]
    }
    p1El.textContent = temp1
    p2El.textContent = temp2
    console.log(p1El.textContent,p2El.textContent)
}

function generatePasswords(){
    let allCharacters = [];
    let length = lengthEl.valueAsNumber
    if(lowercaseEl.checked){
        allCharacters = [...allCharacters,...lowerChars]
    }
    if(uppercaseEl.checked){
        allCharacters = [...allCharacters,...upperChars]
    }
    if(numbersEl.checked){
        allCharacters = [...allCharacters,...numberChars]
    }
    if(specialEl.checked){
        allCharacters = [...allCharacters,...specialChars]
    }

    getRandomChars(length ,allCharacters)
}
