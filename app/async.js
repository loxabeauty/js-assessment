exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	var dfd = $.Deferred();
	setTimeout(function() {
	dfd.resolve(value);
	});
	return dfd.promise();
  },

  manipulateRemoteData: function(url) {
	var dfd = $.Deferred();
	var arr = [];
	$.ajax(url).then(function (response){
		for(var i in response.people)
		{
			arr.push(response.people[i].name);
		}
		dfd.resolve(arr.sort());
	});
	return dfd.promise();
  },
};
