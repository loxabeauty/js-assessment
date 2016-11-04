exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) 
  {
  	var timer;

    function doIt () 
    {
      console.log(start++); 

      if (start <= end) 
      {
        timer = setTimeout(doIt, 100);
      }
    }

    doIt();

    return { cancel: function () 
    	{
        	timer && clearTimeout(timer);
      	}
    };
  }
};
