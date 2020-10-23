/*
Given an JSON array of object:
1) convert the JSON to an array
2) arrange the array base on the price from lowest to highest
3) convert return a JSON array
*/
function orderObj(arr) {
  const newArr = JSON.parse(arr);

  newArr.sort((a, b) => a.price - b.price);

  return newArr;
}

let list =
  '[{"name":"orange","price":4.4},{"name":"berry","price":5.4},{"name":"apple","price": 3.2},{"name":"pear","price":3.7}]';

console.log(orderObj(list));
