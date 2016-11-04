exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  
  listFiles: function(data, dirName) 
  {
  	var list = [];
    var directory = [];

    function processDir(dir) 
    {
      var i;
      var file;
      var files = dir.files;

      directory.push(dir.dir);

      for (i=0; i<files.length; i++) 
      {
        file = files[i];
        
        if (typeof file === 'string') 
        {
          if (!dirName || directory.indexOf(dirName) > -1) 
          {
            list.push(files[i]);
          }
        } 
        else 
        {
          processDir(files[i]);
        }
      }

      directory.pop();
    }

    processDir(data);

	return list;
  },

  permute: function(arr) 
  {
  	var temp = [];
	var result = [];

	function logResult() 
	{
      result.push(temp.slice());
	}

	function doIt() 
	{
      var i;
      var item;

      for (i=0; i<arr.length; i++) 
      {        
        item = arr.splice(i, 1)[0];

        temp.push(item);

        if (arr.length) 
        {
          doIt();
        } 
        else 
        {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return result;
    }

    return doIt();
  },

  fibonacci: function fibonacci(n) 
  {
  	if (n < 2) 
  	{
      return n;
  	}
  	else 
  	{
      return fibonacci(n - 1) + fibonacci(n - 2);
  	}
  },

  validParentheses: function nthPair(n) 
  {
  	var i;
  	var start, end;
  	var result = [];

  	if(n == 0)
        return [""];

    for (i=0; i<n; ++i) 
    {
    	var left = nthPair(i);
        var right = nthPair(n - i - 1);

        for (start=0; start<left.length; ++start)
        {
            for (end=0;end<right.length; ++end)
            {
                result.push("(" + left[start] + ")" + right[end]);
            }
        }
    }

    return result;
  }
};
