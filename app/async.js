exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // console.log(value);
  },

  manipulateRemoteData: function(url) {
    function reportStatus()
{
  if (oReq.readyState == 4 /* complete */) {
      if (oReq.status == 200 || oReq.status == 304) {
            alert('Transfer complete.');
        }
      else {
            // error occurred
        }
    }
    }
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "http://localhost/test.xml", true);
    oReq.onreadystatechange = reportStatus;
    oReq.send();
  }
};
