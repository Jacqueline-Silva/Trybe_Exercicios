def triangle(side_A, side_B, side_C):
    side_AB = (side_A + side_B) > side_C
    side_AC = (side_A + side_C) > side_B
    side_BC = (side_B + side_C) > side_A
    side_or = (side_A == side_B) or (side_B == side_C) or (side_C == side_A)

    if not (side_AB and side_AC and side_BC):
        return "Não é um Triângulo"
    elif side_A == side_B == side_C:
        return "Este é um Triângulo Equilátero"
    elif side_or:
        return "Este é um Triângulo Isósceles"
    else:
        return "Este é um Triângulo Escaleno"


print(triangle(5, 5, 5))
print(triangle(6, 6, 10))
print(triangle(5, 6, 7))
print(triangle(6, 7, 14))
