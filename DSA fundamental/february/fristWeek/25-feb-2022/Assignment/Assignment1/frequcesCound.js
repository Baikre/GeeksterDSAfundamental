
        function frequency(arry, target,  flag ) {
            let low = 0;
            let high = arry.length - 1;
            let result = -1;

            while (low <= high) {


                let mid = Math.floor((low + high) / 2);
                // let mid = Math.floor((low + high) / 2);

                if (arry[mid] === target) {

                     result = mid;
                    if (flag === true) {
                        
                        low = mid + 1;
                    }
                    else {
                        
                        high = mid - 1;
                    }


                }


                else if (arry[mid] < target  ) {

                    low = mid + 1;
                }
                else {
                    high = mid - 1;
                }
               
            }
            return result; 
        }

        let arry = [1, 1, 2, 2, 4, 5, 5, 6, 6, 6, 6, 9, 10, 11];
        let target = 6;

        var  upper_id = frequency(arry, target, true);
        console.log(upper_id);

        var lower_id = frequency(arry, target, false)
        console.log(lower_id);
        let output = (upper_id - lower_id) + 1;
       
        console.log(target +" is "+output+" time repeted in an array");
