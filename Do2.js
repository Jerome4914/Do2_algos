// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy
// function reverseArray(arr) {
// for (var i = 0; i < arr.length / 2; i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// }
// var myArr = [1,2,3,4,5,6,7];
// reverseArray(myArr);
// console.log(myArr);



// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy
// function rotateArr(arr, shiftBy) {
// var movementsNeeded;
// if (shiftBy > 0) {
//     movementsNeeded = shiftBy % arr.length;
// } else {
//     movementsNeeded = Math.abs(shiftBy) % arr.length;
// }
// if (shiftBy > 0) {
//     for (var i = 0; i < movementsNeeded; i++) {
//         var temp = arr[arr.length - 1];
//         for (var x = arr.length - 2; x >= 0; x--) {
//             arr[x+1] = arr[x];
//         }
//         arr[0] = temp; 
//     }
// } else {
//     for (var i = 0; i < movementsNeeded; i++) {
//         var temp = arr[0];
//         for (var x = 1; x < arr.length; x++) {
//             arr[x-1] = arr[x];
//         }
//         arr[arr.length - 1] = temp;
//     }
// }
// }
// var myArr = ["mustard", "ketchup", "relish", "BBQ sauce"];
// var myArr = ["mustard", "ketchup", "relish", "BBQ sauce", 18, 9, 3, 6];
// rotateArr(myArr, 2);
// rotateArr(myArr, 4);
// console.log(myArr);

// Second version: 
// function rotateArr2(arr, shiftBy) {
// reverseArr(arr);
// var movementsNeeded;
// if (shiftBy > 0) {
//     movementsNeeded =shiftBy % arr.length;
// } else {
//     movementsNeeded = Math.abs(shiftBy) % arr.length;
// }
// if (shiftBy > 0) {
//     reverseArr(arr,0,movementsNeeded - 1);
//     reverseArr(arr,movementsNeeded, arr.length - 1);
// } else {
//     reverseArr(arr,0,arr.length-movementsNeeded - 1);
//     reverseArr(arr, arr.length - movementsNeeded,arr.length - 1);
// }
// }

// var myArr = ["mustard", "ketchup", "relish", "BBQ sauce"];
// var myArr = ["mustard", "ketchup", "relish", "BBQ sauce", 18, 9, 3, 6];
// rotateArr(myArr, 2);
// rotateArr(myArr, 1);
// console.log(myArr);


// minimized touches
// function reverseArr(arr, startId = 0, endId = arr.length - 1) {
// var iterations = 0;
// for (var x = startId; x < (startId+endId)/2; x++) {
//     var temp = arr[x];
//     arr[x] = arr[endId - iterations];
//     arr[endId - iterations] = temp;
//     iterations++;
// }
// }
// var myArr = [1,2,3,45,6,7,8,9,34,29];
// reverseArr(myArr, 9);
// console.log(myArr);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.copy
//
// function filterRange(arr, minVal, maxVal) {
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < minVal || arr[i] > maxVal) {
//         for (var x = i+1; x < arr.length; x++) {
//             arr[x-1] = arr[x];
//         }
//         arr.length--; 
//         i--; 
//     }
// }
// }

// var myArr = [23,345,65,64,53,2,1,3];
// filterRange(myArr, 2, 65);
// console.log(myArr);


// function filterRange2(arr, minVal, maxVal) {
// var nextId = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= minVal && arr[i] <= maxVal) {
//         arr[nextId] = arr[i];
//         nextId++; 
//     }
// }
// arr.length = nextId; 
// }
// var myArr = [23,345,65,64,53,2,1,3];
// filterRange2(myArr, 20, 100);
// console.log(myArr);
// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].copy
// function concatArrays(arr1, arr2) {
// var newArr = [];
// var curId = 0; 
// for (var i = 0; i < arr1.length; i++) {
//     newArr[curId] = arr1[i];
//     curId++;
// }
// for (var i = 0; i < arr2.length; i++) {
//     newArr[curId] = arr2[i];
//     curId++;
// }
// return newArr;
// }

// var myArr = concatArrays(["cheese", "nuts", "fish"], ["rice", "beans"]);
// console.log(myArr);





