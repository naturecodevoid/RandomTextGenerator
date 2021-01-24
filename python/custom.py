import random

# import secrets

true = True
false = False
null = None

length = 10

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


def promptCharacters():
    global characters
    input_ = str(input(f"What characters should it use? (string) > "))

    characters = list(input_)

    if len(characters) <= 0:
        print("That's not enough characters! Please give at least 1.")
        return promptCharacters()


if __name__ == "__main__":
    print(" ")

    print("This is a version of main.py that allows for entering custom characters.")

    print(" ")

    promptLength()
    promptCharacters()

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