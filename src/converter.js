// src/converter.js

const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];
  const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  const hundreds = 'hundred';
  
  function convertNumberToWords(number) {
    if (number === 0) return 'zero';
  
    let words = '';
  
    if (Math.floor(number / 100) > 0) {
      words += `${ones[Math.floor(number / 100)]} ${hundreds} `;
      number %= 100;
    }
  
    if (number >= 10 && number < 20) {
      words += teens[number - 10];
    } else {
      if (number >= 20) {
        words += tens[Math.floor(number / 10)];
        number %= 10;
      }
      if (number > 0) {
        words += ` ${ones[number]}`;
      }
    }
  
    return words.trim();
  }
  
  module.exports = {
    convertNumberToWords
  };
  