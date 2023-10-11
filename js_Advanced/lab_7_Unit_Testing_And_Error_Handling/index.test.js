const sumOfTwoNumbers = require('./index');
const { assert } = require('chai')

describe('sumOfTwoNumbers function test', () => {
  it ('Test with two numbers', () => {
    assert.equal(sumOfTwoNumbers(3,4),7)
  });

  it ('Test with two numbers', () => {
    assert.equal(sumOfTwoNumbers('3',4),7)
  });

});