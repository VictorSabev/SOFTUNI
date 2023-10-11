// Task 4 (Test) - Math Enforcer

const mathEnforcer = require('./task_4_Math_Enforcer');

const { assert } = require('chai');

describe('Math Enforcer functions tests', () => {
 
  describe('Check addFive functionality', () => {
    
    it('Check if the input is a string', () => {
      assert(mathEnforcer.addFive('5') === undefined);
    });

    it('Check if the input is a number the result is correct', () => {
      assert(mathEnforcer.addFive(5) === 10);
    });

    it('Negative', () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });

    it('Float', () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });



    it('Check if the input is a undefined', () => {
      assert(mathEnforcer.addFive(undefined) === undefined);
    });
    
  });

  describe('Check subtractTen functionality', () => {
    it('Check if the input is a string', () => {
      assert(mathEnforcer.subtractTen('5') === undefined);
    });

    it('Check if the input is an object', () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });

    it('Check if the input is an array', () => {
      assert(mathEnforcer.subtractTen([]) === undefined);
    });

    it('Check if the input is a number the result is correct', () => {
      assert(mathEnforcer.subtractTen(5) === -5);
    });

    it('Negative', () => {
      assert(mathEnforcer.subtractTen(-5) === -15);
    });

    it('Float', () => {
      assert(mathEnforcer.subtractTen(4.5) === -5.5);
    });

    it('Check if the input is undefined', () => {
      assert(mathEnforcer.subtractTen(undefined) === undefined);
    });

  });

  describe('Check sum functionality', () => {
    it('Check if the both inputs are numbers the result is correct', () => {
      assert(mathEnforcer.sum(4, 5) === 9);
    });

    it('Check if the firs input is a string and second one is a number', () => {
      assert(mathEnforcer.sum('4', 5) === undefined);
    });

    it('Check if the firs input is a number and second one is a string', () => {
      assert(mathEnforcer.sum(4, '5') === undefined);
    });

    it('Check if the both inputs are strings', () => {
      assert(mathEnforcer.sum('4', '5') === undefined);
    });

    it('Check if the first input is undefined', () => {
      assert(mathEnforcer.sum(undefined, '5') === undefined);
    });

    it('Check if second input is undefined', () => {
      assert(mathEnforcer.sum('4', undefined) === undefined);
    });

    it('Check if the both inputs are undefined', () => {
      assert(mathEnforcer.sum(undefined, undefined) === undefined);
    });

    it('', () => {
      assert(mathEnforcer.sum(0, 0) === 0);
    });

    it('', () => {
      assert(mathEnforcer.sum(-5, -5) === -10);
    });

    it('', () => {
      assert(mathEnforcer.sum(-5, 5) === 0);
    });

    it('', () => {
      assert(mathEnforcer.sum(5.5, 5) === 10.5);
    });

    it('', () => {
      assert(mathEnforcer.sum(4, 5.5) === 9.5);
    });

    it('', () => {
      assert(mathEnforcer.sum(4.5, 5.5) === 10);
    });

   
    


  });
});
