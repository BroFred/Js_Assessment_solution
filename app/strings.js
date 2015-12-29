exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var len=str.length;
  	var res='';
  	var count=0;
  	for(var i=0;i<len;i++){
  		if(str[i-1]===str[i]){
  			if(count===amount){
  				continue;
  			}
  			else{
  				res=res+str[i];
  				count++;
  			}
  		}
  		else{
  			res=res+str[i];
  			count=1;
  		}
  	}
  	return res;
  },
  wordWrap: function(str, cols) {
  	var temp =str.split(' ');
  	var res=[];
  	while(temp.length>1){
  		if(temp[0].length+temp[1].length+1<=cols){
  			temp[1]=temp[0]+' '+temp[1];
  			temp.shift()
  		}
  		else{
  			res.push(temp.shift())
  		}
  	}
  	res.push(temp[0]);
  	return res.join('\n');
  },
  reverseString: function(str) {
  	var temp=str.split('');
  	temp=temp.reverse();
  	return temp.join('');
  }
};
