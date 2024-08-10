// const map = new Map([
// [1, "A"],
// [2, "B"],
// [3, "C"],
// [4, "D"],
// ])

// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// console.log(map.get(3))
// console.log(map.set(5, "E"))
// console.log(map.delete(4))
// console.log(map.entries())
// console.log(map.has(4))

// map.clear()
// console.log(map)

// map.forEach(value => console.log(value))

// const myObj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// Object.entries(myObj).forEach(([key, value]) => console.log(key, value))

// Task:-

// const myObj = [
//   {
//     id: 1,
//     title: "title 1",
//     desc: "desc 1"
//   },
//   {
//     id: 2,
//     title: "title 2",
//     desc: "desc 2"
//   },
//   {
//     id: 3,
//     title: "title 3",
//     desc: "desc 3"
//   },
//   {
//     id: 4,
//     title: "title 4",
//     desc: "desc 4"
//   },
// ]

// function findIndex(id) {
//   return myObj.find(item => item.id === id)
// }

// console.log(findIndex(2));

// Ans:- map
// const items = new Map([
//   [1, {
//     id: 1,
//     title: "title 1",
//     desc: "desc 1"
//   }],
//   [2, {
//     id: 2,
//     title: "title 2",
//     desc: "desc 2"
//   }],
//   [3, {
//     id: 3,
//     title: "title 3",
//     desc: "desc 3"
//   }],
//   [4, {
//     id: 4,
//     title: "title 4",
//     desc: "desc 4"
//   }],
// ])

// console.log(items.get(2))

// Another Ans:- map
const items = new Map();

items.set(1, {
    id: 1,
    title: 'title 1',
    desc: 'desc 1'
});
items.set(2, {
    id: 2,
    title: 'title 2',
    desc: 'desc 2'
});
items.set(3, {
    id: 3,
    title: 'title 3',
    desc: 'desc 3'
});
items.set(4, {
    id: 4,
    title: 'title 4',
    desc: 'desc 4'
});

console.log(items.get(2));
