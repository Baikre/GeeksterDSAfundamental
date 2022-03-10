function sort_color(arr){
    
         
        let lo = 0;
        let hi = arr.length - 1;
        let mid = 0;
        let temp = 0;
        while (mid <= hi)
        {
            if(arr[mid] == 0)
            {
                temp = arr[lo];
                arr[lo] = arr[mid];
                arr[mid] = temp;
                lo++;
                mid++;
            }
            else if(arr[mid] == 1)
            {
                mid++;
            }
            else
            {
                temp = arr[mid];
                arr[mid] = arr[hi];
                arr[hi] = temp;
                hi--;
            }
             
        }
        console.log(arr);
    }
    var arr =[2,0,2,1,0,1];
    sort_color(arr)
