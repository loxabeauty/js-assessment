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

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {
    arr.pop()
    //    console.log(arr);
    return arr;
  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
