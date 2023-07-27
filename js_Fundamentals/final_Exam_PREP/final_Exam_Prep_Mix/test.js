let test = '@#ValidIteM@#';
let test2 = '@###Brea0D@###';

let pattern1 = /@#+[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1}@#+/g;
let pattern2 = /\d/g;

let matches1 = test.match(pattern1);
console.log(matches1);

console.log('----------');

let matches2 = test2.match(pattern2);
console.log(matches2);
