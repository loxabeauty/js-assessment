exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) 
  {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) 
  {
    return fn.call(obj);
  },

  functionFunction: function(str) 
  {
    return function (arg) 
    {
      return str + ', ' + arg;
    }
  },

  makeClosures: function(arr, fn) 
  {
    var i;
    var close = [];

    var makeFn = function(val) 
    {
      return function() { return fn(val); };
    };

    for (i=0; i<arr.length; i++) 
    {
      close.push(makeFn(arr[i]));
    }

    return close;
  },

  partial: function(fn, str1, str2) 
  {
    return function (str3)
    {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() 
  {
    var i;
    var add = 0;

    for(i=0; i<arguments.length; i++)
    {
      add = add + arguments[i];
    }

    return add;
  },

  callIt: function(fn) 
  {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) 
  {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    
    return function() 
    {
      var variableArguments = args.concat(Array.prototype.slice.call(arguments));

      return fn.apply(null, variableArguments);
    };
  },

  curryIt: function(fn) 
  {
    function applyArguments(_fn, args) 
    {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) 
    {
      return function (currentArgument) 
      {
        accumulatedArguments.push(currentArgument);

        var correct = accumulatedArguments.length === expectedArgumentsCount;

        if (correct) 
        {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }

};
