def name_inverted(name):
    for letter_index in range(len(name)):
        for index in range(len(name) - letter_index):
            print(name[index], end="")
        print()


print(name_inverted('JACQUELINE'))
