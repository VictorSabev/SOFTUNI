class Circle {
  constructor(radius) {
    this.radius = radius;
    // this.area = Math.PI * radius ** 2 - working but not a good practice (because if we change the radius later on we will have to change the diameter as well)
  }

  // Insted we can use accessor property:
  get area() {
    return Math.PI * this.radius ** 2;
  }

  get diameter() {
    return this.radius * 2;
  }
  set diameter(value) {
    if (value < 0) {
      throw new Error('Diameter cannot be less than 0');
    }
    this.radius = value / 2;
  }

  set area(value) {
    this.radius = value / 2;  
  }
}

let firstCircle = new Circle(2);
console.log(firstCircle.area);

firstCircle.radius = 3;
console.log(firstCircle.radius);

firstCircle.diameter = 10;
console.log(firstCircle.area);
console.log(firstCircle.area);
