import random

# import secrets

true = True
false = False
null = None

length = 10
useLetters = true
useLettersUpper = true
useNumbers = true
useSymbols = false
useUnderscores = true
useDashes = false

letters = [
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
]
lettersUpper = [
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
]
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
symbols = [
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
]
underscores = ["_", "_", "_", "_", "_"]
dashes = ["-", "-", "-"]
characters = []


def promptLength():
    global length
    input_ = str(input(f"What length should the generated text be? (number, defaults to {length}) > "))
    if len(input_) <= 0:
        return

    try:
        result = int(input_)
    except ValueError:
        print("That's not a number! Please try again.")
        return promptLength()

    length = result


def promptBool(prompt: str, default: bool):
    input_ = str(input(f"{prompt} (boolean, defaults to {str(default).lower()}) > "))
    if len(input_) <= 0:
        return default

    if not input_.lower() == "true" and not input_.lower() == "false":
        print("That's not a boolean! Please try again with 'true' or 'false'.")
        return promptBool(prompt, default)

    # https://stackoverflow.com/a/715455
    result = input_.lower() == "true"

    return result


if __name__ == "__main__":
    print(" ")

    promptLength()
    useLetters = promptBool("Should the text use lowercase letters?", useLetters)
    useLettersUpper = promptBool("Should the text use uppercase letters?", useLettersUpper)
    useNumbers = promptBool("Should the text use numbers?", useNumbers)
    useSymbols = promptBool("Should the text use symbols? ($ or !)", useSymbols)
    useUnderscores = promptBool("Should the text use underscores? (_)", useUnderscores)
    useDashes = promptBool("Should the text use dashes? (-)", useDashes)

    if useLetters:
        characters.extend(letters)

    if useLettersUpper:
        characters.extend(lettersUpper)

    if useNumbers:
        characters.extend(numbers)
        characters.extend(numbers)
        characters.extend(numbers)

    if useSymbols:
        characters.extend(symbols)
        characters.extend(symbols)

    if useUnderscores:
        characters.extend(underscores)
        if useLetters:
            characters.extend(underscores)
        if useLettersUpper:
            characters.extend(underscores)
        if useNumbers:
            characters.extend(underscores)
        if useSymbols:
            characters.extend(underscores)

    if useDashes:
        characters.extend(dashes)
        if useLetters:
            characters.extend(dashes)
        if useLettersUpper:
            characters.extend(dashes)
        if useNumbers:
            characters.extend(dashes)
        if useSymbols:
            characters.extend(dashes)

    print(" ")

    print("Characters > " + "".join(characters))

    print(" ")

    print("Characters will now be shuffled.")

    random.shuffle(characters)

    print(" ")

    print("Characters > " + "".join(characters))

    print(" ")

    out = ""

    for i in range(length):
        out += random.choice(characters)
        # out += secrets.choice(characters)

    print(f"Your random text is > {out}")

    print(" ")
