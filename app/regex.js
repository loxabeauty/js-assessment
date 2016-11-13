exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
	var patt = /\d/;
	return patt.test(str);
  },

  containsRepeatingLetter: function(str) {
	var patt = /([A-Za-z])\1/;
	return patt.test(str);
  },

  endsWithVowel: function(str) {
	var patt = /[/a|/e|/i|/o|/u]$/i;
	return patt.test(str);
  },

  captureThreeNumbers: function(str) {
	var match = (/\d{3}/).exec(str);
    return match ? match[0] : false;
  },

  matchesPattern: function(str) {
	var patt = /^\d{3}-\d{3}-\d{4}$/;
	return patt.test(str);
  },

  isUSD: function(str) {
	var patt = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
	return patt.test(str);
  }
};
