exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function fib(n) {
      if(n < 2) {
        return n;
      } else {
        return fib(n - 1) + fib(n - 2);
      }
  },

  validParentheses: function(n) {

  }
};
