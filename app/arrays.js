exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	if (Array.prototype.indexOf) {
		return arr.indexOf(item);
		} else {
			for (var i = 0; i < arr.length; i++) {
				 if (arr[i] === item) {
					 return i;
				 }
			}
			return -1;
		}
  },

  sum: function(arr) {
	if (toString.call(arr) !== "[object Array]")
		return false;
      
        var sum1 =  0;
            for(var i=0;i<arr.length;i++)
              {                  
                if(isNaN(arr[i])){
                continue;
                } // end if
                 sum1 += Number(arr[i]);
               } //end for
        return sum1;
  },

  remove: function(arr, item) {
	 return arr.filter(function (val) {
		 return val !== item;
		 });
  },

  removeWithoutCopy: function(arr, item) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			arr.splice(i, 1);
			i--;
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
	return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
	arr.splice(index, 0, item);
 
 return arr;
  },

  count: function(arr, item) {
	 var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
    return count;
  },

  duplicates: function(arr) {
	 return arr.reduce(function (duplicate, val, i) {
		 if (arr.indexOf(val) !== i && duplicate.indexOf(val) === -1) {
			 duplicate.push(val);}
			 return duplicate;
			 }, []);
  },

  square: function(arr) {
	ans= [];

    for (var i = 0, len = arr.length; i < len; i++) {
        ans.push(arr[i] * arr[i]);
    }

    return ans;
  },

  findAllOccurrences: function(arr, target) {
	 var indexes = [];
  var i = -1;
      
	while ((i = arr.indexOf(target, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
  
  }
};
