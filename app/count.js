exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
	var timeout = 0;
	function clock(){
		console.log(start++);
		
		if(start<=end)
		{
			timeout = setTimeout(clock, 100);
		}
	}
	clock();
	return {
		cancel: function() {
			timeout && clearTimeout(timeout);
		}
	};
  }
};
