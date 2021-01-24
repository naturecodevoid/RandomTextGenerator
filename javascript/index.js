const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
const lettersUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~",
];
const underscores = ["_", "_", "_", "_", "_"];
const dashes = ["-", "-", "-"];

// https://stackoverflow.com/a/6274381
Object.defineProperty(Array.prototype, "shuffle", {
    value() {
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
        return this;
    },
});

window.addEventListener("load", () => (getResult().value = ""));

const getResult = () => {
    return document.getElementById("result");
};

const main = {
    run() {
        console.debug("running main");

        const length = Number.parseInt(this.getLength().value) || "";
        const useLetters = this.getLetters().checked;
        const useLettersUpper = this.getUppercaseLetters().checked;
        const useNumbers = this.getNumbers().checked;
        const useSymbols = this.getSymbols().checked;
        const useUnderscores = this.getUnderscores().checked;
        const useDashes = this.getDashes().checked;

        console.debug(length, useLetters, useLettersUpper, useNumbers, useSymbols, useUnderscores, useDashes);

        if (typeof length !== "number" || length === 0) {
            getResult().value = "Error! Please check that all values are correct.";
            console.debug("return because typeof length !== number or length === 0");
            return;
        }

        const characters = [];

        if (useLetters) {
            characters.push(...letters);
        }

        if (useLettersUpper) {
            characters.push(...lettersUpper);
        }

        if (useNumbers) {
            characters.push(...numbers);
            characters.push(...numbers);
            characters.push(...numbers);
        }

        if (useSymbols) {
            characters.push(...symbols);
            characters.push(...symbols);
        }

        if (useUnderscores) {
            characters.push(...underscores);
            if (useLetters) {
                characters.push(...underscores);
            }
            if (useLettersUpper) {
                characters.push(...underscores);
            }
            if (useNumbers) {
                characters.push(...underscores);
            }
            if (useSymbols) {
                characters.push(...underscores);
            }
        }

        if (useDashes) {
            characters.push(...dashes);
            if (useLetters) {
                characters.push(...dashes);
            }
            if (useLettersUpper) {
                characters.push(...dashes);
            }
            if (useNumbers) {
                characters.push(...dashes);
            }
            if (useSymbols) {
                characters.push(...dashes);
            }
        }

        characters.shuffle();

        let out = "";

        for (let i = 0; i < length; i++) {
            // https://stackoverflow.com/a/5915122
            out += characters[Math.floor(Math.random() * characters.length)];
        }

        getResult().value = out;
    },
    get() {
        return document.getElementById("type-main");
    },
    getLength() {
        return document.getElementById("type-main-length");
    },
    getLetters() {
        return document.getElementById("type-main-lletters");
    },
    getUppercaseLetters() {
        return document.getElementById("type-main-uletters");
    },
    getNumbers() {
        return document.getElementById("type-main-numbers");
    },
    getSymbols() {
        return document.getElementById("type-main-symbols");
    },
    getUnderscores() {
        return document.getElementById("type-main-underscores");
    },
    getDashes() {
        return document.getElementById("type-main-dashes");
    },
};

const custom = {
    run() {
        console.debug("running custom");

        const length = Number.parseInt(this.getLength().value) || "";
        const characters = Array.from(this.getCharacters().value);

        console.debug(length, characters);

        if (characters.length <= 0 || typeof length !== "number" || length === 0) {
            getResult().value = "Error! Please check that all values are correct.";
            console.debug("return because characters.length <= 0 or typeof length !== number or length === 0");
            return;
        }

        characters.shuffle();

        let out = "";

        for (let i = 0; i < length; i++) {
            // https://stackoverflow.com/a/5915122
            out += characters[Math.floor(Math.random() * characters.length)];
        }

        getResult().value = out;
    },
    get() {
        return document.getElementById("type-custom");
    },
    getLength() {
        return document.getElementById("type-custom-length");
    },
    getCharacters() {
        return document.getElementById("type-custom-characters");
    },
};

const run = () => {
    if (main.get().checked === true) main.run();
    else custom.run();
};
