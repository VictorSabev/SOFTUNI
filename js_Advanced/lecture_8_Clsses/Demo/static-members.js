class Cat {
  isHungry = true;
  static legNumber = 4;
  
  constructor(name) {
    this.name = name;

  }

  makeSound() {
    console.log(`${this.name}: Meow`);
  }

  static vetCheck(cat) {
    if (cat.isHungry) {
      console.log('This cat should be fed!');
    } else {
      console.log('This cat is fine');
    }
  }
}

let firstCat = new Cat('Navcho');

firstCat.makeSound();

// firstCat.vetCheck(); - will not work!

Cat.vetCheck(firstCat); // static mehod syntaxis -  the static method is called from the class  

// static property
// console.log(firstCat.legNumber); - will not work!

console.log(Cat.legNumber); // correct syntaxis

// Analogy Math.floor - "Math" is a class and "floor" is a static method

