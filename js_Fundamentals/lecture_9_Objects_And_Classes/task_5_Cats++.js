// Task 5 - Cats

function cats(input) {
  class Cat {
    constructor(catName, catAge) {
      this.name = catName;
      this.age = catAge;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i of input) {
    let args = i.split(' '); // let [name, age] = line.split(' '); (destructering)
    let name = args[0];
    let age = Number(args[1]);

    let cat = new Cat(name, age);
    cat.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
