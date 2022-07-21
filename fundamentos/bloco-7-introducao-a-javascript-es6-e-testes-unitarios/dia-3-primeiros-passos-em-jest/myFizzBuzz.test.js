// myFizzBuzz.test.js
const myFizzBuzz = require('./myFizzBuzz.js');

describe('testando function myFizzBuzz', () => {
  it('testando o resultado da função fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(3)).toBe("fizz");
    expect(myFizzBuzz(5)).toBe("buzz");
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('3')).toBe(false);
  });
});
