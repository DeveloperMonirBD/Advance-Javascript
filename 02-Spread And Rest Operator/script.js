let array = ['math', 'Science', 'ict', 'english', 'bangla'];

//rest operator: - ...rest
// const [first, second, ...rest] = array
// console.log(first, second);
// console.log(rest);

// sprade Operator:-
// let newArr = [...array] //akhane push korar karone kono change hobe na.
// array.push("school")
// console.log(newArr);
// console.log(array)

// const classTen = {
//     classTeacher: 'Mr. X',
//     students: 67,
//     goodAt: {
//         math: 20,
//         english: 10,
//         science: 17,
//         others: 20
//     }
// };

// const teacherObj = {
//   teacherName: "Mr. Y",
//   institute: "govt school"
// }

// let details = {...classTen, ...teacherObj }
// console.log(details)

// example:-
function sumofAllNum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumofAllNum(1, 2, 3, 6));
