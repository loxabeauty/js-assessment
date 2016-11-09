exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
	  if(dirName === undefined){
		  // We want tto return all the files, without the directories
		  var files = [];
		  for(var i = 0;i< data.files.length; i++){
			  if(typeof data.files[i] =='string'){
				  // the current item is a file
				  files.push(data.files[i]);
			  }
			  else{
				  // this is a folder, gotta go in
				  var a = recursionAnswers.listFiles(data.files[i]);
				  files = files.concat(a)
			  }
		  }
		  return files;//end of the program, should return the final array
	  }
	  else{
		  // we want to return all the files within a specific directory
		  var files = [];
		  for(var i = 0;i< data.files.length; i++){
			  if(typeof data.files[i] !='string'){
				  // finding the right subdir
				  if(data.files[i].dir == dirName){
					  files = files.concat(recursionAnswers.listFiles(data.files[i]));
				  }
			  }
			  
		  }
		  return files;//end of the program, should return the final array
	  }
	
  },

  permute: function(arr) {
	var temp = [];
	var answer = [];
	return doIt(arr);
	function doIt(a) {
		 var item;
		 for (var i = 0; i < arr.length; i++) {
			 item = arr.splice(i, 1)[0];
			 temp.push(item);
			 if (arr.length) {
				 doIt(arr);
				 } else {
					 logResult();
				 }
				  arr.splice(i, 0, item);
		 temp.pop(); }
	return answer;}
	
	 function logResult() {
		 answer.push(
		 temp.slice()
		 );}
		 
  },

  fibonacci: function(n) {

  function fib(n) {
       return n < 2 ? n : fib(n - 1) + fib(n - 2);
     }
     return fib(n)
   

  },

  validParentheses: function(n) {
	 var sets = [];
     var getParen = function (left, right, current) {
       if (left == 0 && right == 0) {
         sets.push(current);
       }
       if (left > 0) {
         getParen(left - 1, right + 1, current + '(');
       }
       if (right > 0) {
         getParen(left, right - 1, current + ')');
       }
       return sets;
     };
     return getParen(n, 0, '');

  }
};
