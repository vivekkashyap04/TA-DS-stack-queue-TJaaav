## Go through the tasks given below and complete

- Write a function called `linearSearch` which accepts an array and a value. Using the linear search algorithm search for the value. If you find the value return the index of the element otherwise return -1. Olso write teh

```js
function linearSearch(arr,val) {
   for(let i=0;i<arr.length;i++){
         if(arr[i] === val){
          return i
         }
   }
   return -1;
}

// TEST

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
console.log(linearSearch(list, 66)); // 9
console.log(linearSearch(list, 166)); // -1
console.log(linearSearch(list, 54)); // 8
```

- Write a function called `binarySearch` which accepts an array and a value. Using the binary search algorithm search for the value. If you find the value return the index of the element otherwise return -1. Make sure to use the binary search algorithm.

```js
function binarySearch(arr,val) {
   let lower = 0;
   let upper = arr.length-1;
   while(lower <= upper){
     let middle = lower + Math.floor((lower+upper) /2);
     if(val === arr[middle]){
      return middle
     }
     if(val <arr[middle]){
         upper = middle -1; 
     }else{
         lower = middle +1;
     }
   }
}

// TEST

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
console.log(binarySearch(list, 66)); // 9
console.log(binarySearch(list, 166)); // -1
console.log(binarySearch(list, 54)); // 8
```

- Compare the worst case complexity (Big O Notation) of linear search and binary search. Compare linear search and binary search

- Assume you have a list of `240,000` items and we want to search for a particular value. In the worst case situation how many times we will run the loop in the case of binary search algorithm and linear search algorithm.

Binary Search:
In binary search, the list is repeatedly divided in half until the target value is found or it's determined that the target is not in the list. Binary search has a time complexity of O(log n), where n is the number of items in the list.

Given that you have 240,000 items, the worst-case scenario for binary search would require a maximum of log₂(240,000) iterations to find the target value.

log₂(240,000) is approximately 17.9, which means in the worst case, you would run the loop approximately 18 times (rounding up to the nearest whole number).

Linear Search:
In linear search, you would go through each item in the list one by one until you either find the target value or reach the end of the list. Linear search has a time complexity of O(n), where n is the number of items in the list.

In the worst case scenario for linear search, you would need to check all 240,000 items in the list to determine that the target value is not present. So, in this case, you would run the loop 240,000 times.

In summary, for a list of 240,000 items:

Binary search in the worst case would require approximately 18 iterations.
Linear search in the worst case would require 240,000 iterations.
Binary search is significantly more efficient for large lists because it reduces the number of iterations required compared to linear search.
