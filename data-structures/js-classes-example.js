class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.lateDays = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.lateDays++;
    if (this.lateDays > 3) {
      return `${this.firstName} ${this.lastName} has been expelled for lateness!`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.lateDays} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
  static enrollStudents(...students) {
    // util function - could send emails to each student maybe
    console.log("Enrolled students", students);
  }
}

const students = [];

let newStudent = new Student("Joe", "Bloggs", 1);
students.push(newStudent);
console.log(`${newStudent.fullName()}`);
console.log(newStudent.markLate());
console.log(newStudent.markLate());
console.log(newStudent.markLate());
console.log(newStudent.markLate());
newStudent.addScore(94);
newStudent.addScore(83);
newStudent.addScore(62);
console.log(
  `${newStudent.fullName()}, you have scores of ${newStudent.scores}`
);
console.log(
  `${newStudent.fullName()}, your average score is ${newStudent.calculateAverage()}`
);

let student2 = new Student("Fred", "Again", 2);
students.push(student2);

Student.enrollStudents(students);
