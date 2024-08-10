// Array Destructing methods:-

// let array = ["math", "Science", "ict", "english", ["first", "second"],"bangla"];

// console.log(array[0]);
// console.log(array[1]);

// const [first, second] = array;
// console.log(first, second)

// const [first, second, third] = array;
// console.log(first, second, third);

// const [first, second, ,third] = array
// console.log(first, second, third)

// const [first, second, , ,third] = array;
// console.log(first, second, third)



// Object Destructing methods:-
const classTen = {
    classTeacher: 'Mr. X',
    students: 67,
    goodAt: {
        math: 20,
        english: 10,
        science: 17,
        others: 20
    }
};

// const teacher = classTen.classTeacher;
// const students = classTen.students;
// console.log(teacher, students);

// const { classTeacher, students } = classTen;
// console.log(classTeacher, students);

// const { classTeacher: teacher, students } = classTen;
// console.log(teacher, students);

// const { goodAt } = classTen;
// console.log(goodAt)
// const { math, english } = goodAt;
// console.log("math: " + math +" "+"english: " +  english)

// const {goodAt: { math, english }} = classTen;
// console.log( math, english);

// real exm:-
function individualNum(option) {
  // let math = option.math
  // let english = option.english
  let { math, english } = option;
  return [math + english, math - english];
}

const result = individualNum({ math: 82, english: 60 });
// console.log(result);

const [ sum, much ] = result;
console.log(sum, much)