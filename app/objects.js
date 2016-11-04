exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) 
  {
  	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) 
  {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) 
  {
  	var properties;
  	var result = [];

    for (properties in obj) 
    {
      if (obj.hasOwnProperty(properties))
      {
        result.push(properties + ': ' + obj[properties]);
      }
    }

	return result;
  }
  
};
