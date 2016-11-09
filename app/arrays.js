exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	
	//indexOf() method returns the first index at which a given element can be found in the array
	//Array.prototype property represents the prototype for the Array constructor and allows 
	//to add new properties and methods to all Array objects
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
                 sum1 =sum1 + Number(arr[i]);
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
			arr.splice(i, 1); 	//splice() method changes the content of an array by removing existing elements or adding new elements
			i--;
		}
	}
	return arr;
  },

  append: function(arr, item) {
	arr.push(item);		//pushes the item at the end of an array
 return arr;
  },

  truncate: function(arr) {
	arr.pop();			// pops the first element of the given array
 return arr;
  },

  prepend: function(arr, item) {
	arr.unshift(item);	//adds one or more elements to the beginning of an array and returns the new length of the array
 return arr;
  },

  curtail: function(arr) {
	arr.shift();		// removes the first element from an array and returns that element
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
	ans= [];	// declare an array to store the square values of the given array

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
