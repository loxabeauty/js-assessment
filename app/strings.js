exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	var patt = new RegExp("(.)(?=\\1{" + amount + "})","g");
    return str.replace(patt, "");
  },

  wordWrap: function(str, cols) {
	var formedstr = '';
    var arr = str.split(" ");
    formedstr = arr[0];
    for (var i = 1; i < arr.length; i++) 
	{
        if (arr[i].length > cols) 
		{
            formedstr = formedstr + "\n" + arr[i];
        } 
		else 
		{
            if (formedstr.length + arr[i].length > cols) 
			{
                formedstr = formedstr + "\n" + arr[i];
            } 
			else 
			{
                formedstr = formedstr + " " + arr[i];
            }
        }
    }
	return formedstr;
  },

  reverseString: function(str) {
	return str.split("").reverse().join("");
  }
};
