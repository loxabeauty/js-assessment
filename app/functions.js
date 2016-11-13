exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
	return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
	return fn.call(obj);
  },

  functionFunction: function(str) {
	var functionInFunction = function(str1){
		return str + ", " + str1;
	}
	return functionInFunction;
  },

  makeClosures: function(arr, fn) {
	var func = [];
	for(var i =0 ; i<arr.length; i++)
	{
		(function(i){
			func[i] = function(){ return fn(arr[i]); };
		}(i));
	}
	return func;
  },

  partial: function(fn, str1, str2) {
	return function(str) {
		return fn(str1, str2, str);
	};
  },

  useArguments: function() {
	var sum = 0;
	for(var i =0; i< arguments.length; i++)
	{
		sum += arguments[i];
	}
	return sum;
  },

  callIt: function(fn) {
	var arg = Array.prototype.slice.call(arguments, 1, arguments.length);
	fn.apply(null, arg);
  },

  partialUsingArguments: function(fn) {
	var arg = Array.prototype.slice.call(arguments, 1, arguments.length);
	return function() {
		var newarg = arg.concat(Array.prototype.slice.call(arguments));
		return fn.apply(null, newarg);
	};
  },

  curryIt: function(fn) {
	function makeArgument(_fn, arg)
	{
		return _fn.apply(null, arg);
	}
	
	function curryarguments(newarg, arg_count){
		return function(currentarg){
			newarg.push(currentarg);
			var allarg = newarg.length === arg_count;
			if(allarg)
			{
				return makeArgument(fn, newarg);
			}
			return curryarguments(newarg, arg_count);
		};
	}
	return curryarguments([], fn.length);
  }
};
