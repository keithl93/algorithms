const fruits = ['🍌', '🍓', '🍐', '🍊', '🍓'];
//for 문 대신 하나씩 list하는걸 편하게 하는 고차함수
//배열을 빙글빙글 돌면서 원하는것을 하고싶을때
// fruits.forEach(function (value, index, array) {
//   console.log(value);
// });

fruits.forEach((something) => console.log(something));

//ex
//find: 제이 먼저 조건에 맞는 아이템을 반환

//some: 배열의 아이템들이 부분적으로, 하나라도 (콜백함수) 조건에 맞는지 확인
result = fruits.some((item) => item === '🍓');
console.log(result);

//every: 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = fruits.every((item) => item === '🍓');
console.log(result);

//filter: 조건에 맞는 모든 아이템들을 새로운 배열로 반환
result = fruits.filter((item) => item === '🍓');
console.log(result);

console.clear();

//Map: 배열의 아이템들을 각각 다른 아이템으로 매핑할수있는, 새로운 배열들로 생성
const nums = [1, 2, 3, 4, 5];

result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap: 하나의 배열로 쫙 펴줌
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

//sort: 배열의 아이템들을 정력
//문자열 형태의 오름차순으로 요소를 정리하고, 기존의 배열을 수정
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [1, 2, 4, 5, 10];
numbers.sort();
console.log(numbers);

//숫자를 순서대로 정렬하기
numbers.sort((a, b) => a - b);
console.log(numbers);

//reduce: 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
//0은 initial value; 즉 처음에 sum이 0으로 시작한다
//다른 표현은,
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
