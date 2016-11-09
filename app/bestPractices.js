/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
   var myObject = {		// myObject should be assigned to a variable
      name: 'Jory'
    };

    return myObject;
  },

    
  functions : function(flag) {
     var getValue;
     if (flag) {
       getValue = function () { return 'x'; } 		// assign o/p of a funtion to a variable
     } else {
       getValue = function () { return 'y'; }
     }
 
     return getValue();
   },
 
    
  parseInt: function(num) {
    return parseInt(num, 10);		//parseInt() function parses a string argument and returns an integer of the specified radix 
									//Syntax: parseInt(string, radix); where 2<= radix<=36
  },

  identity: function(val1, val2) {
	return val1 === val2;
  }
};
