exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) 
  {
  	var counter;
  	var space = ''; 
  	var temp = str.split('');
    var result = [];
    
    

    temp.forEach(function (item) 
    {
      if (item != space) 
      {
        space = item;
        counter = 1;
        result.push(item);
      } 
      else if (counter < amount) 
      {
        counter++;
        result.push(item);
      }

    });

    return result.join('')
  },

  wordWrap: function(str, cols) 
  {
  	var temp = str.split('');
    var i = cols;

    function cMore() 
    {
      for (i; i<temp.length; i++) 
      {
        if (temp[i] === ' ') 
        {
          temp[i] = '\n';
          i += cols;
          return;
        }
      }
    }

    function cLess() 
    {
      for (i; i>0; i--) 
      {
        if (temp[i] === ' ') 
        {
          temp[i] = '\n';
          i += cols;
          return;
        }
      }

      cMore();
    }

    while (i<temp.length) 
    {
      if (temp.indexOf(' ') < 0) 
      {
        return temp.join('')
      }

      cLess();
    }

    return temp.join('')
  },

  reverseString: function(str) 
  {
  	var i;
  	var result = '';

  	for(i=str.length - 1; i >= 0; i--)
  	{
  		result = result + str[i];
  	}

  	return result;
  }
  
};
