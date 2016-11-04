exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regex = /\d/;
    if (str.match(regex)){
      return true;
    } else {
      return false;
    }
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {
    var regex = /\d{3}/;
  //  console.log(str.match(regex));
    return str.match(regex);
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
