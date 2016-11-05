exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var string = str.split('');
    var newStr = [];
    var count = amount;
    for (var i = 0; i < string.length; i++) {

      if (string[i] === string[i + 1]) {
        newStr.push(string[i]);
        string.slice(i, 1);
      }
    }
    console.log(string);
    console.log(newStr);
  },

  wordWrap: function(str, cols) {
    // console.log(str);
    // console.log(cols);
  },

  reverseString: function(str) {
    var letters = str.split('');
    return letters.reverse().join('');
  }
};
