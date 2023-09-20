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

const textAreas = document.querySelectorAll(".synced");

textAreas.forEach((textArea) => {
  textArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newEvent = new Event("submit", { cancelable: true });
      e.target.form.dispatchEvent(newEvent);
    }
  });
});

const tarnslateForm = document.querySelector(".textAreas");

tarnslateForm.addEventListener("submit", (e) => {
  e.preventDefault();

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

buttonClear.addEventListener("click", () => {
  document.querySelector(".textAreas").reset();
});
