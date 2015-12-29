exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var temp=num.toString(2);
  	return parseInt(temp[temp.length-bit],10);
  },

  base10: function(str) {
  	return parseInt(str,2);
  },

  convertToBinary: function(num) {
  	var temp=num.toString(2);
  	for(var i=1;i<=8-temp.length;i++){
  		temp='0'+temp;
  	}
  	return temp
  },

  multiply: function(a, b) {
  	var temp=a*b;
  	a=(a.toString().split('.')[1]||'').length;
  	b=(b.toString().split('.')[1]||'').length;
  	temp=temp.toPrecision((a||1)*b)
  	return Number(temp);
  }
};
