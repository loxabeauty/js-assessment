exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	 return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	var ans = [];
	var keys = Object.keys(obj);	//returns an array of a given object's own enumerable properties
	for (var i = 0; i < keys.length; i++) {
		ans.push(keys[i] + ': ' + obj[keys[i]]);	
	}
	 return ans;
  }
};
