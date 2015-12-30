exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var res=str+', ';
    var callsecond=function(str){ return res + str};
    return callsecond;
  },

  makeClosures : function(arr, fn) {
    var len=arr.length;
    var funcA=new Array(len);
    var t;
    for(var i=0;i<len;i++){
      t=(function(index){return function(){return arr[index]*arr[index];}})(i);
      funcA[i]=t
    }
    return funcA;
  },

  partial : function(fn, str1, str2) {
    return function(x){return fn(str1,str2,x)}
  },

  useArguments : function() {
    var len =arguments.length;
    var sum=0;
    for(var i=0;i<len;i++){
      sum=sum+arguments[i];
    }

    return sum;
  },

  callIt : function(fn) {
    var input=[];
    for(var i in arguments){
      input.push(arguments[i]);
    }
    return fn.apply(this,input.slice(1));
  },

  partialUsingArguments : function(fn) {
    var input1=[];
    for(var i in arguments){
      input1.push(arguments[i]);
    }
    return function(){
      var input2=[];
      for(var i in arguments){
        input2.push(arguments[i]);
      }
      input=input1.concat(input2);
      return input.shift().apply(this,input);
    };
  },

  curryIt : function(fn) {
    if(typeof fn==='function'){
      return (function(arr){return curryIt})([fn]);
    }
    else{
      var temp=arr.slice(0);
      if(temp.length===4){
        return temp.shift().apply(this,temp);
      }
      else{
        temp.push(fn);
        return (function(arr){return curryIt})(temp);
      }
    }
  }
};
