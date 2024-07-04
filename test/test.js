// test/test.js

const { expect } = require('chai');
const { convertNumberToWords } = require('../src/converter');
const { validateNumber } = require('../src/validator');

describe('Number to Words Conversion', () => {
  it('should convert 123 to "one hundred twenty-three"', () => {
    const result = convertNumberToWords(123);
    expect(result).to.equal('one hundred twenty-three');
  });

  it('should convert 0 to "zero"', () => {
    const result = convertNumberToWords(0);
    expect(result).to.equal('zero');
  });

  it('should convert 19 to "nineteen"', () => {
    const result = convertNumberToWords(19);
    expect(result).to.equal('nineteen');
  });

  it('should convert 85 to "eighty-five"', () => {
    const result = convertNumberToWords(85);
    expect(result).to.equal('eighty-five');
  });
});

describe('Input Validation', () => {
  it('should validate number within range 0 to 999', () => {
    const result = validateNumber(500);
    expect(result.valid).to.be.true;
  });

  it('should invalidate number greater than 999', () => {
    const result = validateNumber(1000);
    expect(result.valid).to.be.false;
    expect(result.message).to.equal('The number must be between 0 and 999.');
  });

  it('should invalidate negative number', () => {
    const result = validateNumber(-5);
    expect(result.valid).to.be.false;
    expect(result.message).to.equal('The number must be between 0 and 999.');
  });

  it('should invalidate non-integer input', () => {
    const result = validateNumber('abc');
    expect(result.valid).to.be.false;
    expect(result.message).to.equal('The input must be an integer.');
  });
});
