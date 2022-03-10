


//2. For the given array = ['a','b','d','e','f','g','h','i','x','z'] use binary search to find the target element = 'z'.
console.log("🤘🏻");



function SarchingTarget(arry, target) {

    let first = 0;
    let last = arry.length - 1;


    while (first <= last) {

            // Math .floor convert 4.25 = 4 , 1.68 = 1 
        let mid = Math.floor((first + last) / 2);

        if (arry[mid] === target) {
            return mid;
        }
         // target is greater then mid then 
        else if (arry[mid] < target) {
            first = mid + 1;

        }
        // target is leass then mid then 
        else {

            last = mid - 1;
        }

    }
    return -1;  // target  is Not found in arry then 
}


let arry = ['a','b','d','e','f','g','h','i','x','z'];
let target = 'z';
let con = SarchingTarget(arry, target);


if(con === -1){
    console.log("not found");
}
else{
    console.log(con);
}