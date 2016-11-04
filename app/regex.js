exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regex = /\d/;
    return str.match(regex) ? true : false;
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {
    var regex = /\d{3}/;
    console.log(str.match(regex));
  //  console.log(str.match(regex));
    return str.match(regex) ? str.match(regex).toString() : false;
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
