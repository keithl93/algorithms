const fruits = ['🍌', '🍐', '🍊'];

//배열인지 아닌지 체크
console.log(Array.isArray(fruits));

//배열안에 특정 아이템이 있는지 체크
console.log(fruits.includes('🍌'));

//추가 - 제일 뒤에 추가 하기 / 총 아이템이의 길이도 리턴해줌
let length = fruits.push('🍋'); //배열 자체를 변경
console.log(fruits);
console.log(fruits.length);
//추가 - 제일 앞에 추가 하기
length = fruits.unshift('🍓');
console.log(fruits);
console.log(fruits.length);

//제거 - 제일 뒤를 제거하고 제거된 아이템을 리턴해줌
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

//제거 - 제일 앞을 제거하고 제거된 아이템을 리턴
let lastItem2 = fruits.shift();
console.log(fruits);
console.log(lastItem2);

//중간에 추가 또는 삭제
//splice 로 삭제후 삭제된 아이템을 새로운 배열로 리턴
//추가는 새로운 아이템을 리턴하지는 않음
let deleted = fruits.splice(1, 1);
console.log(fruits); //배열 자체를 수정
console.log(deleted);
let deleted2 = fruits.splice(1, 0, '🍏', '🍎');
console.log(fruits);
console.log(deleted2);

//배열 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.clear();

let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); //처음 일단계에서만 flat을 시켜줌
console.log(arr.flat(2)); //지정해줘야됨 2단계 이상부터는
//기존의 배열을 update
arr = arr.flat(3); //새로운 arr을 만들기위해 그냥 이렇게함
//특정한 값으로 배열 채우기

//fill은 배열자체를 수정
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr); //1부터 2까지만 채워짐

arr.fill('a', 1);
console.log(arr); //시작 포인트만 주면 끝까지 채워버림

//배열을 문자열호 합하기
//조인은 수정하고 새로운 배열을 리턴함
console.log(arr.join(','));
console.log(arr);
