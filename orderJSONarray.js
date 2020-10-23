/*
Given an JSON array of object:
1) convert the JSON to an array
2) arrange the array base on the price from lowest to highest
3) convert return a JSON array
*/
function orderObj(arr) {
  const newArr = JSON.parse(arr);
  for (i = 0; i < newArr.length; i++) {
    for (j = i + 1; j < newArr.length; j++) {
      if (newArr[i].price > newArr[j].price) {
        let tmp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = tmp;
      }
    }
  }

  return JSON.stringify(newArr);
}

let list =
  '[{"name":"orange","price":4.4},{"name":"berry","price":5.4},{"name":"apple","price": 3.2},{"name":"pear","price":3.7}]';

console.log(orderObj(list));
