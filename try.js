const TXT2MOR = {
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
    "Z": "--..",
    " ": " ",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    "'": ".----.",
    "/": "-..-.",
    ",": "--..--",
    '"': ".-..-.",
    ":": "---...",
    "-": "-....-",
    "=": "-...-",
    "?": "..--..",
    "[": "-.--.",
    "(": "-.--.",
    ")": "-.--.-",
    "]": "-.--.-",
    ";": "-.-.-.",
    ".": ".-.-.-",
    "+": ".-.-.",
    ":": "---...",
    "¿": "..-.-",
    "¡": "--...-",
    "&": ".-...",
    "_": "..--.-",
    "$": "...-..-",
    "!": "-.-.--",
    "@": ".--.-."
  }
  const MOR2TXT = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    " ": " ",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    ".----.": "'",
    "-..-.": "/",
    "--..--": ",",
    ".-..-.": '"',
    "---...": ":",
    "-....-": "-",
    "-...-": "=",
    "..--..": "?",
    "-.--.": "[",
    "-.--.": "(",
    "-.--.-": ")",
    "-.--.-": "]",
    "-.-.-.": ";",
    ".-.-.-": ".",
    ".-.-.": "+",
    "---...": ":",
    "..-.-": "¿",
    "--...-": "¡",
    ".-...": "&",
    "..--.-": "_",
    "...-..-": "$",
    "-.-.--": "!",
    ".--.-.": "@"
  }
  var txt2mor = document.getElementById('txt2mor');
  var mor2txt = document.getElementById('mor2txt');

  function convTxt2Mor() {
    var text = txt2mor.value;
    morse = mor2txt.value;
    if (text) {
      var converted = "";
      text_arr = text.split("");
      console.log(text_arr);
      for (let i = 0; i <= text_arr.length - 1; i++) {
        if (text_arr[i] == " ") {
          converted = converted.concat("   ")
        } else {
          converted = converted.concat(TXT2MOR[text_arr[i].toUpperCase()], " ")
          console.log(converted)
        }
      }
      mor2txt.value = converted;
    } else if (morse) {
      var converted = "";
      code_arr = morse.split(" ");
      console.log(code_arr);
      for (let i = 0; i <= code_arr.length - 1; i++) {
        if (code_arr[i] == "") {
          converted = converted.concat(" ");
        } else {
          converted = converted.concat(MOR2TXT[code_arr[i]])
          console.log(converted);
        }
      }
      txt2mor.value = converted;
    } else {
      alert("[ALERT] Both Fields Empty");
      txt2mor.value = null;
      mor2txt.value = null;
    }
  }

  function reset() {
    txt2mor.value = null;
    mor2txt.value = null;
  }

  function copyClipboard() {
    var mor2txt = document.getElementById('mor2txt');
    var text = mor2txt.value;
    if (text != "") {
      mor2txt.select();
      mor2txt.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert("Morse code copied")
    } else {
      alert("invalid value in field morse code");
    }
  }
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();
  var dot = 1.2 / 15;
  document.getElementById("demo").onsubmit = function() {
    var t = ctx.currentTime;
    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;
    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);
    this.mor2txt.value.split("").forEach(function(letter) {
      switch (letter) {
        case ".":
          gainNode.gain.setValueAtTime(1, t);
          t += dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case "-":
          gainNode.gain.setValueAtTime(1, t);
          t += 3 * dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case " ":
          t += 7 * dot;
          break;
      }
    });
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    return false;
  }


  //Synchronizing text areas

  let value = ""
const elements = document.querySelectorAll('.synced')
for (let i = 0; i < elements.length; i++) {
  
  elements[i].addEventListener('change', handleChange)
  elements[i].addEventListener('input', handleChange)
  elements[i].addEventListener('keyup', handleChange)
}
function handleChange(e) {
    value = e.target.value
    for (let i = 0; i < elements.length; i++) {
        
      elements[i].value = value
    }
  }
