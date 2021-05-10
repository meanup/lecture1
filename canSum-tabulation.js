// canSum(7, [5, 3, 4]) -> true
// length = targetSum + 1
// Boolean Data start with F value
// canSum(0, [...]) -> true

const canSum = (targetSum, numbers) => {
  const table = Array(tagertSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++){ //table.length
    if (table[i] === true) {
      for (let num of numbers){
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
}

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false

// Testing 
// const arr = ['a', 'b', 'c'];
// arr[10] = 'x';
// console.log(arr);
