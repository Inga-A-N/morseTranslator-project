const letters = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

export function swapKeysAndValues(object) {
  const entries = Object.entries(object); //array of entries
  const reversedEntries = entries.map((entry) => entry.reverse());
  const morseCode = Object.fromEntries(reversedEntries);

  return morseCode;
}

export function translate(text) {
  let newStrArray = text.toUpperCase().split("");
  console.log(newStrArray);

  const morseText = newStrArray.reduce((acc, letter) => {
    let key = letter;
    let morse = letters[key];
    if (key === " ") {
      morse = "/";
    }

    return `${acc} ${morse}`.trim();
  }, "");
  console.log(morseText);
  if (/undefined/.test(morseText)) {
    throw new Error(
      "Please enter letters of Latin alphabet. (Click 'Clear' to restart)"
    );
  }
  return morseText;
}

export function translateMorse(morseText) {
  let newMorseArray = morseText
    .replace(/\/ | \/|\//g, " / ")
    .trim()
    .split(" ");

  const englishText = newMorseArray.reduce((acc, symbol) => {
    let english = swapKeysAndValues(letters)[symbol];
    if (symbol === "/") {
      english = " ";
    }

    return symbol === "" ? `${acc}` : `${acc}${english}`;
  }, "");

  if (/undefined/.test(englishText)) {
    throw new Error(
      "Please only enter dots and dashes, one space should follow a character and forward slash should separate the words. (Click 'Clear' to restart)"
    );
  }

  return englishText;
}
