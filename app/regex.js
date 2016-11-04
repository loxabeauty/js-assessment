exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regex = /\d/;
    return str.match(regex) ? true : false;
  },

  containsRepeatingLetter: function(str) {
    var regex = /([a-zA-Z])\1+/;
    return str.match(regex) ? true : false;
  },

  endsWithVowel: function(str) {
    var regex = /[aeiouAEIOU]$/;
//    console.log(str.match(regex));
    return str.match(regex) ? true : false;
  },

  captureThreeNumbers: function(str) {
    var regex = /\d{3}/;
  //  console.log(str.match(regex));
    return str.match(regex) ? str.match(regex).toString() : false;
  },

  matchesPattern: function(str) {
    var regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    // console.log(str.match(regex));
    return str.match(regex) ? true : false;
  },

  isUSD: function(str) {
    var regex = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;
//    console.log(str.match(regex));
    var numString = str;
    // console.log(numString);
    return numString.match(regex) ? true : false;
  }
};
