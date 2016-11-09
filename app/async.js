exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	var deferred = $.Deferred();	//register multiple callbacks into callback queues
	 setTimeout(function () {
		 deferred.resolve(value);	//Any doneCallbacks added after the Deferred enters the resolved state are 
									//executed immediately when they are added
		  }, 10);
		  return deferred.promise();	// prevent other code from changing the Deferred's state 
  },

  manipulateRemoteData: function(url) {
	 var deferred = $.Deferred();
	 $.ajax(url).then(function (resp)    //Create the "callback" functions that will be invoked when the AJAX request is successful
	 {
		 var people = resp.people.map(function (person)
		 {
			 return person.name;
			  });
			  deferred.resolve(people.sort());	// returns the sorted array of names
			  });
			  return deferred.promise();
  }
};
