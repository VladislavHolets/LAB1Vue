function isIsogram(inputText) {
	var arr = inputText.toLowerCase().split("");
    var inArr = [];
    for(var i =0; i<arr.length; ++i){
        if(!inArr[arr[i]]){
    	inArr[arr[i]] = arr[i];
    }else{
   	    return false;
   }
  }
  return true;
}

function nextSmaller(numberString)	{
	var arr = numberString.toString().split("");
	var i=arr.length-1;
	for(; i>0; --i){
		if(arr[i]<arr[i-1]){

			break;
		}
	
	}
	if (i==0) {
		return "-1";
	}
	var temp=arr[i];
	arr[i]=arr[i-1];
	arr[i-1]=temp;
	var k=i;
	for (i; i < arr.length; i++) {
        for (var j = k; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
	if (arr[0]=='0'){
		return "-1";
	}
	return arr.join('');
}