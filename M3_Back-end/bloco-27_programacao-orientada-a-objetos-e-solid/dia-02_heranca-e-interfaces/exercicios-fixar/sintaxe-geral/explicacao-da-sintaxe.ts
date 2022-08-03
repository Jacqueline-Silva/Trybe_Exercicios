class Animal { // superclasse
  constructor(public name: string, protected birthDate: Date) { }

  get age() {
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal { // subclasse
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

class Bird extends Animal {  // subclasse
  
  showBirthDate() {
    console.log(this.birthDate); // o protected permite o acesso pois é uma classe filha
  }

  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const tiger = new Mammal( // instância da classe Mammal
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const parrot = new Bird( // instância da classe Bird
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger); // 2
tiger.walk(); // Tigre está andando!

main(parrot); // 5
parrot.fly(); // Papagaio está voando!