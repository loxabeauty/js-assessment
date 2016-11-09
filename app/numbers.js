exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
	function byteString(n) {
		if (n < 0 || n > 255 || n % 1 !== 0) {
			 throw new Error(n + " does not fit in a byte");
			 }
		return ("000000000" + n.toString(2)).substr(-8);
		}
		return byteString(num); 
		 //return (num >>> 0).toString(2);
		
  },

  multiply: function(a, b) {
	var multiply = function (a, b) {
		 var x = 1000000;
		 var div = x*x;
		 a = a*x;
		 b = b*x;
		  return (a * b) / div;
		  };
		  return multiply(a, b)
  }
};
