exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
	return fn.apply(this,arr); 
  },

  speak: function(fn, obj) {
	// return fn.call(obj);
		return fn.apply(obj);
  },

  functionFunction: function(str) {
	// return a function
	return function(str2){
		  return str + ',' + ' ' +str2;
	  };
  },

  makeClosures: function(arr, fn) {
	 var ans = [];
    for (var i = 0; i < arr.length; i++) {
      ans.push(function (x) {
        return function () {
          return fn(arr[x]);
        };
      }(i));
    }
    return ans;
  
  },

  partial: function(fn, str1, str2) {
	return function (str3) {
			return fn(str1,str2,str3);
    }
  },

  useArguments: function() {
	var result = 0;
    for(var i=0;i< arguments.length;i++){
      result+=arguments[i];			// argument object contains an array of the arguments used when the function was called
    }
    return result;
  },

  callIt: function(fn) {
	var argNew = [];
    for(var i=1;i<arguments.length;i++){
      argNew.push(arguments[i]);
    }
    fn.apply(this,argNew);
  },

  partialUsingArguments: function(fn) {
	var args1 = Array.prototype.slice.call(arguments,1,arguments.length);
     return function () {
     var args2 = args1.concat(Array.prototype.slice.call(arguments));
     return fn.apply(null,args2);
    }
  },

  curryIt: function(fn) {
	return function (a) {
      return function (b) {
        return function (c) {
          return fn.call(null,a,b,c);
        }
      }
    }
   }
};
