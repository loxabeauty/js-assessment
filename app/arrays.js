exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  
  indexOf: function(arr, item) 
  {
    var i;

    for (i=0; i<4; i++) 
    {
      if (arr[i] === item) 
      {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) 
  {
    var i;
    var total = 0;

    for (i=0; i<4 ; i++) 
    {
      total = total + arr[i];
    }

    return total;
  },

  remove: function(arr, item) 
  {
    var i;
    var result = [];

    for(i=0; i<arr.length; i++)
    {
      if(arr[i] !== item)
      {
        result.push(arr[i]);
      }
    }

    return result;
  },

  removeWithoutCopy: function(arr, item) 
  {
    var i;
    var finish = arr.length;

    for(i=0; i<finish; i++)
    {
      if(arr[i] === item)
      {
        arr.splice(i, 1);
        i--;
        finish--;
      }
    }

    return arr;
  },

  append: function(arr, item) 
  {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) 
  {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) 
  {
    arr.unshift(item); 
    return arr;
  },

  curtail: function(arr) 
  {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) 
  {
    var result;
    result = arr1.concat(arr2);

    return result;
  },

  insert: function(arr, item, index) 
  {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) 
  {
    var i;
    var counter = 0;

    for(i=0; i<arr.length; i++)
    {
      if(arr[i] === item)
      {
        counter++;
      }
    }

    return counter;
  },

  duplicates: function(arr) 
  {
    var i;
    var item;
    var found = {};
    var duplicates = [];

    for (i=0; i<arr.length; i++) 
    {
      found[arr[i]] = found[arr[i]] ? found[arr[i]] + 1 : 1;
    }

    for (item in found) 
    {
      if (found.hasOwnProperty(item) && found[item] > 1) 
      {
        duplicates.push(Number(item));
      }
    }

    return duplicates;
  },

  square: function(arr) 
  {
    var i;
    var squared = [];

    for (i=0; i<arr.length; i++) 
    {
      squared.push(arr[i] * arr[i]);
    }

    return squared;
  },

  findAllOccurrences: function(arr, target) 
  {
    var i;
    var occurrence = [];

    for (i=0; i<arr.length; i++) 
    {
      if (arr[i] === target) 
      {
        occurrence.push(i);
      }
    }

    return occurrence;
  }

};
