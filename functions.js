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
  let errors = [];

  let morseText = text
    .toUpperCase()
    .split("")
    .map((letter) => {
      const char = letters[letter];

      if (char === undefined) {
        errors.push(letter);
      }
      return char;
    })
    .join(" ");

  // Making an errors array an array of unique characters
  errors = Array.from(new Set(errors));

  if (errors.length > 0) {
    throw new Error(`Characters are not supported: ${errors.join(", ")}`);
  }

  return morseText;
}

export function translateMorse(morseText) {
  let errors = [];

  const englishText = morseText
    .replace(/\/ | \/|\//g, " / ")
    .trim()
    .split(" ")
    .map((symbol) => {
      let english = swapKeysAndValues(letters);
      const morseChar = english[symbol];

      if (morseChar === undefined && symbol !== "") {
        errors.push(symbol);
      }

      return symbol === "" ? "" : morseChar;
    })
    .join("");

  errors = Array.from(new Set(errors));

  if (errors.length > 0) {
    throw new Error(`Characters are not supported: ${errors.join(", ")}`);
  }
  return englishText;
}
