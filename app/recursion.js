exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
	var listOfFiles = [];
	var dirs = [];
	processDir(data);
	function processDir(dir) {
		var files = dir.files;
		dirs.push(dir.dir);
		for (var i = 0; i < files.length; i++) {
			file = files[i];
			 if (typeof file === 'string') {
				 if (!dirName || dirs.indexOf(dirName) > -1) {
				 }
			 }
			 dirs.pop();
		}
		return listOfFiles;
		
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
/*	var x = document.f1.n1.value;
  if (getLucas) {
      alert(n(x));
  }
  else {
      alert(fib(x));
  }
}

function fib(a) {
  if (a < 2) {
      return n;
  }
  else {
      return fib(a - 1) + fib(a - 2);
  }
}

function n(a) {
  if (a < 2) {
      return 2-a;
  }
  else {
      return n(a - 1) + n(a - 2);
  } */
  
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
