class Cat {
  // isHungry = true; // OPTIONALY we can set properties with default values - hard coded
  constructor(name) {
    this.name = name;
    // this.attitude = 'bitchy' // default property setup that can be dinamicly changed
  }

  makeSound() {
    console.log(`${this.name}:  Meow`);
  }
}

let firstCat = new Cat('Navcho');
let secondCat = new Cat('Garry');

console.log(firstCat);
console.log(secondCat);
firstCat.makeSound();
// return;

// change properties runtime
secondCat.name = 'Mishy';
console.log(secondCat);

// second example

let catNames = ['Navcho', 'Garry', 'Mishy', 'Zuza', 'Sisa'];

let cats = catNames.map((x) => new Cat(x));
console.log(cats);

cats.forEach((x) => x.makeSound());

// instanceof

console.log(firstCat instanceof Cat); // true
console.log(firstCat instanceof Object); // true

class Dog {}
let dog = new Dog();

console.log(dog instanceof Cat); // false 

