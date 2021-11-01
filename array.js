// CRUD
const students = ["Caio", "Ryota", "Jesse"]

// Create
students.push("Michael")
console.log(students);

// Read
console.log(students[1]);

// Udpate
students[1] = "Super Ryota";
console.log(students);

// Delete
students.splice(1, 1);
console.log(students);

// JS arrow function
// () => {}

// students.forEach(stu => console.log(`${stu} is fabulous!`));
students.forEach((student) => {
  console.log(student + " is fabulous!");
});

console.log(students)