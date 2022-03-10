
// plindrom promble

var str = prompt("Enter a string");


function chekking(str){

   //convert string to array

   let strToArray = str.split('');
   
   //reverse a array
    let reverseArray = strToArray.reverse();

    //convert array to string
    let ArrayToString = reverseArray.join('')

    // chekking 
    if(ArrayToString===str){
       console.log("thise is plindrom");
    }
  else{
     console.log(" thise not plindrom");
  }
}

 var result = chekking(str);


 //second aproch 


 function checkingFunction(str){
   
   
   var last = str.length-1;
   //half string 
 let mid = Math.floor(last/2);

 for(let i =0; i<mid;i++){

   if(str[i]===str[last-i]){
   
      return true;
    }

 }

 }
 var runORnot=checkingFunction(str);

 if(runORnot==true){
    console.log("thise is plindorem");
 }
 else{
    console.log("thise not plindorem");
 }



