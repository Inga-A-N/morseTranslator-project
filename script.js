// English text - check if input contains only letters of latin alphabet and spaces
// no numbers, punctuation or special characters for now - if any: show a message
// should convert any number of letters >= 1



// Morse code - check if input contains only dot dash space forward slash
// should have one space between letters
// should have forward slash between words 

const letters = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }

function swapKeysAndValues(object){
    const entries= Object.entries(object);//array of entries
    // console.log(entries, "entries")
    const reversedEntries = entries.map((entry) => entry.reverse());
    const morseCode = Object.fromEntries(reversedEntries)
    
    
    return morseCode
    
    
}

// const morseLetters = swapKeysAndValues(letters)

function translate(text){

    let newStr = text.split("");
    console.log(newStr)
    const morseText = newStr.reduce((acc, letter) => {
        
        let key = letter.toUpperCase()
        let morse = letters[key];
        if (key=== " "){
         morse = "/"   
        }
        
        
        return `${acc} ${morse}`
    }, "")
    return morseText
    
}

function translateMorse(morseText){

    let newMorseStr = morseText.replace(/\/ | \/|\//g, " / ").trim().split(" ");
    console.log(newMorseStr)
    const englishText = newMorseStr.reduce((acc, symbol) => {
        
        let english = swapKeysAndValues(letters)[symbol];
        if (symbol === "/"){
         english = " "   
        }
        
        
        return `${acc}${english}`
    }, "")
    return englishText
    
}



const englishTextArea = document.getElementById("input")
console.log(englishTextArea)
const morseTextArea = document.getElementById("output")
const btnTranslate = document.querySelector("#translate")
console.log(btnTranslate)
const btnClear = document.querySelector("#clear")
console.log(btnClear)

btnTranslate.addEventListener("click", () => {

    if (englishTextArea.value.length > 0){
     
        morseTextArea.value = translate(englishTextArea.value);

    }
    else if (morseTextArea.value.length > 0){

        englishTextArea.value = translateMorse(morseTextArea.value);
    }
    try 
    {if (englishTextArea.value.includes("undefined") || morseTextArea.value.includes("undefined")){
        throw new Error("Oops, something went wrong!")
        }
    }catch(error) {
        englishTextArea.value = "Please enter letters of Latin alphabet. (Click 'Clear' to restart)";
        morseTextArea.value = "Please only enter dots and dashes, one space should follow a character and forward slash should separate the words. (Click 'Clear' to restart)"
    }


})

btnClear.addEventListener("click", () => {
    morseTextArea.value = "";
    englishTextArea.value = "";
})




