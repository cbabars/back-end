// src/validator.js

function validateNumber(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
      return { valid: false, message: 'The input must be an integer.' };
    }
    if (number < 0 || number > 999) {
      return { valid: false, message: 'The number must be between 0 and 999.' };
    }
    return { valid: true };
  }
  
  module.exports = {
    validateNumber
  };
  