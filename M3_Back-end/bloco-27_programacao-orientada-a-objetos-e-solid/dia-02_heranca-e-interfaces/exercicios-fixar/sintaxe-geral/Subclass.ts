import Superclass from "./Superclass";

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

const myFunc = (obj: Superclass):void => {
  obj.sayHello()
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const superC = new Superclass(true);
myFunc(superC);

const subC = new Subclass();
myFunc(subC);