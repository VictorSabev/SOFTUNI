// Task 3 (Test) - Char Lookup

const lookupChar = require('./task_3_Char_Lookup');
const {assert} = require('chai');

describe ('Retrieves a character at a given index', () => {
  
  // invalid input tests

  it ('Chck if type of string is a number', () => {
    assert.equal(lookupChar(4, 4), undefined)
  });
 
  it ('Chck if type of index is a floating number', () => {
    assert.equal(lookupChar('Test', 4.5), undefined)
  });

  it ('Chck if type of string is a undefined', () => {
    assert.equal(lookupChar(undefined, undefined), undefined)
  });

  it ('Chck if type of index is a string', () => {
    assert.equal(lookupChar('Test', 'Error'), undefined)
  });
  
  it ('Chck if string length is neutal number', () => {
    assert.equal(lookupChar('Test', -4), 'Incorrect index');
  });

  it ('Chck if string length is equal to index', () => {
    assert.equal(lookupChar('Test', 4), 'Incorrect index');
  });

  it ('Chck if string length is lower than index', () => {
    assert.equal(lookupChar('Test', 5), 'Incorrect index');
  });

  // valid input tests

  it ('Chck if lookupChar returnes correct result', () => {
    assert.equal(lookupChar('Test', 3), 't');
  });

  it ('Chck if lookupChar returnes correct result', () => {
    assert.equal(lookupChar('Test', 0), 'T');
  });

});