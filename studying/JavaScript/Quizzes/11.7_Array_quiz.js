let arr = ['🍑', '🍐', '🍎', '🍐'];

//quiz1
function Change(arr, from, to) {
  let replaced = Array.from(arr); //새로운(shallow copy) array를 만듬
  for (let i = 0; i < arr.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

//quiz2
let result = Change(arr, '🍐', '🍌');
console.log(result);

function counter(arr, to) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === to) {
      count++;
    }
  }
  return count;
}

let result2 = counter(arr, '🍐');
console.log(result2);

//quiz3
let arr2 = ['🍑', '🍉', '🫐', '🍎'];

function duplicate(arr1, arr2) {
  let new_arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      new_arr.push(arr1[i]);
    }
  }
  return new_arr;
}

console.log(duplicate(arr, arr2));

let a = 5 % 5;
console.log(a);
