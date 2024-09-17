import random


def color_guess():
    chances = 3
    word = random.choice(['azul', 'vermelho', 'branco', 'preto'])
    scrambled_word = "".join(random.sample(word, len(word)))
    input_word = ""

    print(f'COR SECRETA: {scrambled_word}')

    while chances > 0:
        chances -= 1
        input_word = input('Qual a cor? ')

        if word == input_word:
            return f'Parábens, você acertou! A cor secreta é {word}'

        if chances > 1:
            print(f'Você ainda tem {chances} chances. Tente novamente...')
        elif chances == 1:
            print('Esta é sua última chance...')
        else:
            return f'Você perdeu! A cor secreta era {word}'
