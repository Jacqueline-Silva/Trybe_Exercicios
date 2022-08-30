class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
  sleep() { console.log(`${this.name} está dormindo`); }
}

class Bird extends Animal {
  move() {
    super.move(); // sobrescrevendo
    console.log(`${this.name} está voando.`);
  }
}

class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
  sleep(): void {
    super.sleep();
  }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}

const mySleep = (animal: Animal) => {
  animal.sleep();
}

myMove(a);
myMove(b);
mySleep(m);

/*
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está dormindo
*/