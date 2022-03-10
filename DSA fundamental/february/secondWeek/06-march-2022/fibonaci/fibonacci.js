 function fibonacci_series(n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var arr = fibonacci_series(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

var num = prompt("enter a number")
 num = parseInt(num)

 console.log(fibonacci_series(num));