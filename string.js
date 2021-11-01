 let student = "Konstantin";
console.log(student);
console.log(student[0]);
console.log(student.length);
console.log(student[student.length - 1]);
console.log(student.slice(4));
console.log(student.slice(0,3));
console.log(student.substring(0,3));

console.log(student.toUpperCase());
console.log(student.toLowerCase());

const splitStudent = student.split('');
console.log(splitStudent);
console.log(splitStudent.join(''));

console.log(`${student} is amazing!`);