// Task 2 (Test) - Even Or Odd

const isOddOrEven = require('./task_2_even_Or_Odd');
const {assert} = require('chai');

describe('isOddOrEven function tests',() => {

  // invalid input tests
  it('should return undefined if the parameter is a number', () => {
    assert.equal(isOddOrEven(10), undefined);
  });

  it('should return undefined if the parameter is an object', () => {
    assert.equal(isOddOrEven({}), undefined);
  });

  it('should return undefined if the parameter is an array', () => {
    assert.equal(isOddOrEven([]), undefined);
  });

  it('should return undefined if the parameter is undefined', () => {
    assert.equal(isOddOrEven(undefined), undefined);
  });

  it('should return undefined if the parameter is null', () => {
    assert.equal(isOddOrEven(null), undefined);
  });
  
  // valid input tests
  it('should return even as result', () => {
    assert.equal(isOddOrEven('Hi'), 'even');
  });
  
  it('should return odd as result', () => {
    assert.equal(isOddOrEven('Hello'), 'odd');
  });
  
});

