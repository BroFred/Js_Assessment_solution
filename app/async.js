exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var promise=new Promise(function(resolve, reject) { if(value){resolve(value);} });
  	return promise;
  },

  manipulateRemoteData : function(url) {
  	url='http://localhost:4444'+url;
  	var promise = new Promise( function (resolve, reject) {
  		var client = new XMLHttpRequest();
        client.open('GET', url);
        client.send();
        client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
  	});
  	return promise;
  }
};
