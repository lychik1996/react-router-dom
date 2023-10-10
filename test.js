let array = [1, 2, [44, [12, [16, 18, [35, 1, 10], 5], 6, 5], 12], [1, 2]];

function unfolding(arr) {
  let resultArray = [];
  function flatten(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        resultArray = [...resultArray, item];
        //resultArray=resultArray.concat(item)
        //resultArray.push(item)
      }
    });
  }
  flatten(arr);
  return resultArray;
}
function unfolding2(array, sum = 1) {
  let newArray = array.flat();

  if (newArray.some((item) => Array.isArray(item))) {
    return unfolding2(newArray, (sum += 1));
  }
  return console.log(sum, newArray);
}
function unfolding3(arr) {
  let resultSum = 0;
  function flatten(arr, sum = 0) {
    if (sum > resultSum) {
      resultSum = sum;
    }
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item, sum + 1);
        //resultArray=resultArray.concat(item)
        //resultArray.push(item)
      }
    });
  }
  flatten(arr);
  return resultSum;
}
console.log(unfolding3(array));
