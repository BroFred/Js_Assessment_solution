exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var res=[];
    var temp=data.files,t;
    if(data){
	    if(!dirName){
		    if(temp){
		      var len =temp.length;
		       for(var i=0;i<len;i++){
		        if(typeof temp[i] ==='string'){
		          res.push(temp[i]);
		        }
		        else{
		        	t=this.listFiles(temp[i]);
		          	res=res.concat(t);
		        }
		       }
		    }
		}
		else{
			if(dirName===data.dir){
				t=this.listFiles(data);
		        res=res.concat(t);
			}
			else{
				if(temp){
			       var len =temp.length;
			       for(var i=0;i<len;i++){
			        if(typeof temp[i] !=='string'){
			          	t=this.listFiles(temp[i],dirName);
			          	res=res.concat(t);
			        }
			    }
		       }
			}
		}
	}
    return res;
  },

  permute: function(arr) {
  	if(!arr.length){
    	return [[]];
  	}
    var len=arr.length,len1;
    var res=[];
    var arr1;
    var temp;
    for(var i=0;i<len;i++){
      temp=arr.splice(i,1);
      console.log(arr)
      arr1=this.permute(arr);
      len1 =arr1.length;
      for(var k=0;k<len1;k++){
        res.push(temp.concat(arr1[k]));
      }
      arr.splice(i,0,temp[0]);
    }
    return res;
  },

  fibonacci: function(n) {
  	if(n<0){
  		return 0;
  	}
  	if(n<=1){
  		return n;
  	}
  	return this.fibonacci(n-1)+this.fibonacci(n-2);
  },

  validParentheses: function(n) {
  	var res=[];
  	var s='';
  	var re=function(l,r,s,res){
      if(l>0){
        re(l-1,r,s+'(',res);
      }
      if(r>0&&r>l){
        re(l,r-1,s+')',res);
      }
      if(l===0&&r===0){
        res.push(s);
      }
    }
  	re(n,n,s,res)
  	return res;
  }
};
