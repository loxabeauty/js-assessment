exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((prev, curr) => prev + curr);
  },

  remove: function(arr, item) {
    var sortArray = arr;
    var result = [];
    //    console.log(arr[item]);
    return sortArray.sort().reduce(function(prev,curr,index){
      if(sortArray[index] != item){
      result.push(sortArray[index])
    }
    return result;
    },{})
  },

  removeWithoutCopy: function(arr, item) {
//    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, i + 1);
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
    //    console.log(arr);
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
    var newArr = arr;
    newArr.splice(index, 0, item);
    return newArr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
//    console.log(arr);
    return arr.map(function(x){
//      console.log(x);
      return x*x;
    })
  },

  findAllOccurrences: function(arr, target) {

  }
};
