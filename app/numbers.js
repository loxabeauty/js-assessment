exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
	var number = num.toString(2);
	if(number.length < 8)
	{
		for(var i=0; i < 8-number.length; i++)
		{
			number = 0 + number;
		}
	}
	return number;
  },

  multiply: function(a, b) {
	var num = a*b;
	var a = a.toString();
	var b = b.toString();
	var decimalpointa = a.indexOf('.') > -1 ? (a.split('.')[1]).length : 0;
	var decimalpointb = b.indexOf('.') > -1 ? (b.split('.')[1]).length : 0;
	var decimalpoint = decimalpointa > decimalpointb ? decimalpointa : decimalpointb;
	num = decimalpoint !== 0 ? num.toFixed(decimalpoint) : num;
	return parseFloat(num);
  }
};
