

function findNumberInInfinityArry(arr,target){
    var low =0; 
    var high = 1;
 while(target<arr[high]){
      
     low = high
     high = 2 * high;
     
     if(high>arr.length){
         high=arr.length;
     }

 }
 while(low<=high){
    let mid = Math.floor((low+high)/2);

    if(arr[mid]===target){
        return mid;
}
    else if(arr[mid]<target){
        low = mid+1;

    }
    else{
        high= mid-1;
    }
    return -1 ;
}
}



 let arr =[2,1,4,7,8,4,5,7,8];
 let target = 5;
 
 let result = findNumberInInfinityArry(arr,target)
 console.log(result);
 