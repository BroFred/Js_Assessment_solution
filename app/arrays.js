exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var len =arr.length;
    for(var i=0;i<len;i++){
      if(arr[i]===item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    return arr.reduce(function(p,c){return p+c});
  },

  remove : function(arr, item) {
    var len =arr.length;
    var res=[];
    for(var i=0;i<len;i++){
      if(arr[i]!==item){
        res.push(arr[i]);
      }
    }
    return res;
  },

  removeWithoutCopy : function(arr, item) {
    var len =arr.length;
    for(var i=0;i<len;i++){
      if(arr[i]===item){
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var len =arr.length;
    var res=0;
    for(var i=0;i<len;i++){
      if(arr[i]===item){
        res++;
      }
    }
    return res;
  },

  duplicates : function(arr) {
    var len =arr.length;
    var dic={};
    var res={};
    for(var i=0;i<len;i++){
      dic[arr[i]] ? res[arr[i]]=1 : dic[arr[i]]=1;
    }
    res=Object.keys(res);
    res=res.map(function(a){return parseInt(a)})
    return res;
  },

  square : function(arr) {
        return arr.map(function(a){return Math.pow(a,2)});
  },

  findAllOccurrences : function(arr, target) {
    var len =arr.length;
    var res=[];
    for(var i=0;i<len;i++){
      if(arr[i]===target){
        res.push(i);
      }
    }
    return res;
  }
};
