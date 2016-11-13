exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	
	var it = [];
	for (var objectproperty in obj)
	{
		if (obj.hasOwnProperty(objectproperty))
		{
			it.push(objectproperty + ': ' + obj[objectproperty]);
		}
	}
	return it;
  }
};
