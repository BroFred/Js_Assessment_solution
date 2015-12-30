exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  		var con= function(str1, str2){
        this.name=str2;
        this.greeting=str1;
        this.sayIt=function(){return this.greeting+', '+this.name;};
      }
    return new con(str1,str2);
  }
};
