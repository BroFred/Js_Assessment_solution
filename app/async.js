exports = (typeof window === 'undefined') ? global : window;
exports.asyncAnswers = {
  async : function(value) {
  	var promise=new Promise(function(resolve, reject) { if(value){resolve(value);} });
  	return promise;
  },

  manipulateRemoteData : function(url) {
    var dfd =$.Deferred();
    $.getJSON(url).then(function(res) {
        var arr=res.people.map(function(a){return a.name;});
        dfd.resolve(arr.sort());
    });
    return dfd.promise();
  }
};
