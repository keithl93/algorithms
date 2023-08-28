// // 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// // 직원들의 정보: 이름, 부서이름, 한달 근무시간
// // 매달 직원들의 정보를 이용해서 한달 월급을 계산
// // 정직원은 시간당 10000원
// // 파트타임은 시간당 8000원

// class Employee {
//   constructor(name, deparment, hours, payRate) {
//     this.name = name;
//     this.deparment = deparment;
//     this.hours = hours;
//     this.payRate = payRate;
//   }

//   calculatePay() {
//     return this.hours * this.payRate;
//   }
// }

// class Fulltime extends Employee {
//   constructor(name, deparment, hours) {
//     super(name, deparment, hours, 10000);
//   }
// }

// class Parttime extends Employee {
//   constructor(name, deparment, hours) {
//     super(name, deparment, hours, 8000);
//   }
// }

// let me = new Fulltime('Keith', 'Strategy', 24);

// console.log(me);
// console.log(me.calculatePay);

let group = ['Rebekah', 'Keith', 'Sherilyn', 'Natalie'];

function getRandomName() {
  let randomIndex = Math.floor(Math.random() * group.length);
  return group[randomIndex];
}

let randomName = getRandomName();
console.log(randomName);
