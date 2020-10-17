function findIntersection(strArr) { 

  let arr1 =  strArr[0].split(',')
  arr1 = arr1.map(element => parseInt(element))
  let arr2 =  strArr[1].split(',')
  arr2 = arr2.map(element => parseInt(element))
  const newArr = arr1.concat(arr2).sort((a, b) => a - b)
  let tmpArr = []

  for (let i = 0; i < newArr.length; i++){
    if (!tmpArr.includes(newArr[i])){
      if (newArr[i] === newArr[i+1]){
        tmpArr.push(newArr[i])
      }
    }
  }

  return tmpArr.length ? tmpArr.join() : false; 
}

console.log(findIntersection(readline()));