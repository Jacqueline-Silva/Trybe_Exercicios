class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        MAX_VOL = 99
        self.__volume += 1 if self.__volume < MAX_VOL else self.__volume

    def diminuir_volume(self):
        MIN_VOL = 0
        self.__volume -= 1 if self.__volume >= MIN_VOL else self.__volume

    def modificar_canal(self, canal):
        if 1 < canal < 99:
            self.__canal = canal
        else:
            raise ValueError('Tente outro canal!')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        tv_status = 'desligada' if not self.__ligada else 'ligada'
        return f"""
          O tamanho da TV é {self.__tamanho}
          Se encontra {tv_status}
          No canal {self.__canal}
          Com o volume em {self.__volume}
        """


tv = TV('55"')
tv.ligar_desligar()
tv.modificar_canal(25)
tv.diminuir_volume()

print(tv)
