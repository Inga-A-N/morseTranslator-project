import { translate } from "./functions.js";
import { translateMorse } from "./functions.js";

describe("Test cases for English to Morse translation", () => {
  test("Should translate letters of the Latin alphabet to morse code both upper and lower case", () => {
    expect(translate("the quick brown fox jumps over the lazy dog")).toBe(
      "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --."
    );
    expect(translate("HELLO WORLD")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(translate("HaPpY CoDing")).toBe(
      ".... .- .--. .--. -.-- / -.-. --- -.. .. -. --."
    );
  });

  test("Should return an error if input is anything but English letters", () => {
    expect(() => translate("6.78")).toThrowError(
      new Error("Characters are not supported: 6, ., 7, 8")
    );

    expect(() => translate("fl4t white")).toThrowError(
      new Error("Characters are not supported: 4")
    );
  });
});

describe("Test cases for Morse to English translation", () => {
  test("Should translate morse code to english text", () => {
    expect(
      translateMorse(
        "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --."
      )
    ).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
  });

  test("Should handle multiple spaces", () => {
    expect(
      translateMorse("....   . .-..   .-.. ---  /  .-- ---  .-. .-..  -..")
    ).toBe("HELLO WORLD");
    expect(
      translateMorse("   .... .- .--. .--. -.-- / -.-. --- -.. .. -. --.   ")
    ).toBe("HAPPY CODING");
  });
});

test("Should return an error if input is anything but morse code for Latin alphabet", () => {
  expect(() => translateMorse("6ABC78")).toThrowError(
    new Error("Characters are not supported: 6ABC78")
  );

  expect(() =>
    translateMorse(". / ..?").toThrowError(
      new Error(
        "Please only enter dots and dashes, one space should follow a character and forward slash should separate the words. (Click 'Clear' to restart)"
      )
    )
  );
});
