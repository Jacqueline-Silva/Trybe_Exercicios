class Tv {
  brand: string // marca da TV;
  size: number // tamanho em polegadas;
  resolution: string // resolução da tela;
  connections: string // conexões disponíveis(HDMI, Ethernet, etc.);
  connectedTo: string = 'Wireless' // conexão atual - valor default.

  constructor(
    b: string,
    s: number,
    r: string,
    c: string,
  ) {
    console.log('Passou pelo constructor');
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(`
      Agora dentro do método turnOn, os atributos que chegaram no constructor são:
      ${ this.brand }, ${ this.size }, ${ this.resolution }, ${ this.connections }
    `);
  }
}

const obj1 = new Tv('LG', 55, '4K', 'HDMI')

console.log(`acessando atributos de forma externa:
${obj1.brand}, ${obj1.size}, ${obj1.resolution}, ${obj1.connections}, ${obj1.connectedTo} 
`);

obj1.turnOn()

// npx ts-node 01.criando-classe.ts