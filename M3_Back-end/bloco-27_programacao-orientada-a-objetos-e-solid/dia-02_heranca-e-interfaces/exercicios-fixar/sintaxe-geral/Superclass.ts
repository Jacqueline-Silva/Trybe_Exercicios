class Superclass {
  constructor(
    public isSuper: boolean
  ) {  this.isSuper = isSuper }

  public sayHello():void {
    console.log('Olá mundo!');
  }
}

export default Superclass;