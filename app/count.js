exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var count = start;
    function finalCountDown(){
      var timerId = setTimeout(function() {
        if (count <= end) {
          count++;
        }
      }, 100);
    }
    console.log(count);
    return count;
    finalCountDown(count);
  }
};
