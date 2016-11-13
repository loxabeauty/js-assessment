exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
	var filenames = [];
    var directories = [];

    function recurse(dir) {
		var files = dir.files;
		directories.push( dir.dir );
		for (var i = 0; i < files.length; i++) 
			{
				if (typeof(files[i]) === 'string') 
				{
					if (!dirName || directories.indexOf(dirName) > -1) 
					{
						filenames.push(files[i]);
					}
			} 
			else 
			{
				recurse(files[i]);
			}
		}
		directories.pop();
    }
    recurse(data);
    return filenames;
  },

  permute: function(arr) {
	var temp = [];
    var ans = [];

    function save() {
      ans.push(temp.slice());
    }

    function permutation() {
      var it;
      for (var i = 0; i < arr.length; i++) {
        it = arr.splice(i, 1)[0];
        temp.push(it);
        if (arr.length) {
          permutation();
        } else {
          save();
        }
        arr.splice(i, 0, it);
        temp.pop();
      }
      return ans;
    }
    return permutation();
  },

  fibonacci: function(n) {
	function recursuve(n) {
		if(n <= 2) 
		{
			return 1;
		} 
		else 
		{
			return recursuve(n - 1) + recursuve(n - 2);
		}
	}
	return recursuve(n);
  },

  validParentheses: function(n) {
	function paren(n) {
		var result = [];
		if (n == 0)
		{
			result.push("");
			return result;
		}
		for (var i = 0; i < n; i++) 
		{
			var leftparen = paren(i);
			var rightparen = paren(n - 1 - i);
			for (var l = 0; l < leftparen.length; l++)
			{
				for (var r = 0; r < rightparen.length; r++)
				{
					result.push("(" + leftparen[l] + ")" + rightparen[r]);
				}
			}
		}
		return result;
	}
	return paren(n);
  },
};
