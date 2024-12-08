const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function generate() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";

    for (i = 0; i < 15; i++) {
        let randomCharacterIndex = Math.floor( Math.random() * characters.length)
        passwordOne.textContent += characters[randomCharacterIndex]
    }

    for (i = 0; i < 15; i++) {
        let randomCharacterIndex = Math.floor( Math.random() * characters.length)
        passwordTwo.textContent += characters[randomCharacterIndex]
    }
    
}

function reset() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
}