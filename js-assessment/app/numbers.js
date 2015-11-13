exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bits = num.toString(2);
    var location = '';
    if (bit === 1) {
      location = 0;
    }else{
      location = Math.abs(bit - 8);
    }
    var numString = bits[location];
    return parseInt(numString,10);
  },

  base10: function(str) {
    var digit = parseInt(str,2);
    return digit;
  },

  convertToBinary: function(num) {
    return num.toString(2);
  },

  multiply: function(a, b) {
    var product = a * b;
    var secondFloat = b.toString();
    var numFixed = (secondFloat.length)-2;
    var numberString = product.toFixed(numFixed);
    var disNumber = parseFloat(numberString,16);
    return disNumber;
  }
};
