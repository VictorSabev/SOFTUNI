// Task 4 - Point Distance

class Point {
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }

  static distance(firstPint, secondPoint) {
    let a = Math.abs(firstPint.x - secondPoint.x); // we can skip Math.abs because later a and b ** 2;
    let b = Math.abs(firstPint.y - secondPoint.y);
    let distance = Math.sqrt(a ** 2 + b**2);
    return distance;
    
  }
}

let p1 = new Point(5, 5); 
let p2 = new Point(9, 8);

let distance = Point.distance(p1, p2); // static method!
console.log(distance);