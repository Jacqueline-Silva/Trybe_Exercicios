from eletrodomestico import Eletrodomestico


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Geladeira(Eletrodomestico):
    def __init__(
        self, cor, potencia, voltagem, preco, quantidade_de_portas=1
    ):
        super().__init__(cor, potencia, voltagem, preco)
        self.quantidade_de_portas = quantidade_de_portas


microondas = Microondas("azul", 120, 220, 300)
print(
    f"""
O preço do microondas é {microondas.preco}
Sua cor é {microondas.cor}
"""
)

geladeira = Geladeira("branca", 352, 220, 3500, 2)
print(
    f"""
O preço da geladeira é {geladeira.preco}
Seu material é {geladeira.cor}
Esta geladeira tem {geladeira.quantidade_de_portas} portas
"""
)
