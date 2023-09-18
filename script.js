// English text - check if input contains only letters of latin alphabet and spaces
// no numbers, punctuation or special characters for now - if any: show a message
// should convert any number of letters >= 1

// Morse code - check if input contains only dot dash space forward slash
// should handle one or more spaces between morse letters
// should have forward slash between words

import { translate, translateMorse } from "./functions.js";

const englishTextArea = document.getElementById("input");
console.log(englishTextArea);
const morseTextArea = document.getElementById("output");
const buttonTranslate = document.querySelector("#translate");
console.log(buttonTranslate);
const buttonClear = document.querySelector("#clear");
console.log(buttonClear);

buttonTranslate.addEventListener("click", () => {
  if (englishTextArea.value.length > 0) {
    try {
      morseTextArea.value = translate(englishTextArea.value);
    } catch (e) {
      morseTextArea.placeholder = e.message;
    }
  } else if (morseTextArea.value.length > 0) {
    try {
      englishTextArea.value = translateMorse(morseTextArea.value);
    } catch (e) {
      englishTextArea.placeholder = e.message;
    }
  }
});

//   LEAVING THIS CODE HERE TO DISCUSS AT 1-1
//   try {
//     if (
//       englishTextArea.value.includes("undefined") ||
//       morseTextArea.value.includes("undefined")
//     ) {
//       throw new Error("Oops, something went wrong!"); //DOES NOT THROW AN ERROR
//     }
//   } catch (error) {
//     englishTextArea.value =
//       "Please enter letters of Latin alphabet. (Click 'Clear' to restart)";
//     morseTextArea.value =
//       "Please only enter dots and dashes, one space should follow a character and forward slash should separate the words. (Click 'Clear' to restart)";
//   }
// });
console.log(document.querySelector(".textAreas"));
buttonClear.addEventListener("click", () => {
  document.querySelector(".textAreas").reset();
});
