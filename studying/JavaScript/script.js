class Employee {
  constructor(name, deparment, hours, payRate) {
    this.name = name;
    this.deparment = deparment;
    this.hours = hours;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hours * this.payRate;
  }
}

class Fulltime extends Employee {
  constructor(name, deparment, hours) {
    super(name, deparment, hours, 10000);
  }
}

class Parttime extends Employee {
  constructor(name, deparment, hours) {
    super(name, deparment, hours, 8000);
  }
}

let me = new Fulltime('Keith', 'Strategy', 24);

console.log(me);
console.log(me.calculatePay);
