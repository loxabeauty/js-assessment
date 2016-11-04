exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
   return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(x){
      return str + ', ' + x;
    };
  },

  makeClosures: function(arr, fn) {
    // console.log(arr);

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function(arg) {
    return Array.from(arguments).reduce(function (x, y) {
      return x + y;
    });
  },

  callIt: function(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
