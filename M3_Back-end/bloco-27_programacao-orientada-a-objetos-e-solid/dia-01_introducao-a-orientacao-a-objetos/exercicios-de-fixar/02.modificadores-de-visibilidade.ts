class Tv2 {
  private _brand: string
  private _size: number
  private _resolution: string
  private _connections: string[]
  private _connectedTo?: string

  constructor(
    b: string,
    s: number,
    r: string,
    c: string[],
  ) {
    console.log('Passou pelo constructor');
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn():void {
    console.log(`
      Agora dentro do método turnOn, os atributos privados:
      ${ this._brand }, ${ this._size }, ${ this._resolution }, ${ this._connections }
    `);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const obj2 = new Tv2('LG', 55, '4K', ['HDMI', 'Wireless', 'Ethernet', 'Cable', 'Antena'])

obj2.connectedTo = 'Cable'; // set
console.log(`connectedTo atual ${obj2.connectedTo}`); // get

console.log(obj2.turnOn()); // método público que exibe atributos privados


