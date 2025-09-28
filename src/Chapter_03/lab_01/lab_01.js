console.log("Lab 01");

const fullName = "Manh Vu";

const birthYear = 2001;

const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear, typeof currentYear);

let age = currentYear - birthYear;

console.log(`Tên: ${fullName}
Tuổi: ${age}
Sinh viên: ${isStudent}
`);

console.log("---");

console.log("Tên:", fullName);
console.log("Tuổi:", age);
console.log("Sinh viên:", isStudent);

