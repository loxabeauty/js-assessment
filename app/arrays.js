exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	var index = arr.indexOf(item);
	return index;
  },

  sum: function(arr) {
	var total=0;
	for(var i=0; i<arr.length; i++)
	{
		total=total+arr[i];
	}
	return total;
  },

  remove: function(arr, item) {
	return filter_array = arr.filter(function (itm) {
		return itm != item;
	});
  },

  removeWithoutCopy: function(arr, item) {
	for(var i=arr.length; i>=0; i--)
	{
		if(arr[i] == item)
		{
			arr.splice(i,1);
		}
	}
	return arr;
  },

  append: function(arr, item) {
	arr.push(item);
	return arr;
  },

  truncate: function(arr) {
	arr.pop();
	return arr;
  },

  prepend: function(arr, item) {
	arr.unshift(item);
	return arr;
  },

  curtail: function(arr) {
	arr.shift();
	return arr;
  },

  concat: function(arr1, arr2) {
	var arr = arr1.concat(arr2);
	return arr;
  },

  insert: function(arr, item, index) {
	arr.splice(index,0,item);
	return arr;
  },

  count: function(arr, item) {
	return count = arr.reduce(function(n, value) {
		return n + (value == item);
	}, 0);
  },

  duplicates: function(arr) {
	arr.sort();
	var duplicates = [];
	for (var i=0; i<arr.length; i++)
	{
		if(arr[i] == arr[i+1] && duplicates.indexOf(arr[i]) == -1)
		{
			duplicates.push(arr[i]);
		}
	}
	return duplicates;
  },

  square: function(arr) {
	return arr.map(function(x){
		return Math.pow(x,2);
	});
  },

  findAllOccurrences: function(arr, target) {
	var target_index = [];
	for (var i=0; i<arr.length; i++)
	{
		if(arr[i] == target)
		{
			target_index.push(i);
		}
	}
	return target_index;
  }
};
