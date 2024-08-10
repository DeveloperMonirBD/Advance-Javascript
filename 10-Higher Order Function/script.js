// higher order function holo amon akta function, ja onno akta function k argument hisebea nibea abong satake return korbe.

// function hello(callback) {
//     return callback();
// }

// function anything() {
//     return "I am callback function from anything"
// }

// function anotherOne() {
//     return "I am callback function from anotherOne"
// }

// console.log(hello(anything))
// console.log(hello(anotherOne))

const platform = [
    { id: 01, name: 'Code ABC', havePlaylist: 13 },
    { id: 02, name: 'new ABC', havePlaylist: 4 },
    { id: 03, name: 'old ABC', havePlaylist: 33 },
    { id: 04, name: 'future ABC', havePlaylist: 0 }
];

// for (let i = 0; i < platform.length; i++) {
//     console.log(platform[i])
// }

//forEach
// platform.forEach(function (item, index, array) {
//     console.log(item)
//     console.log(index)
//     console.log(array)
// })

//map
// const platformName = platform.map(function (item) {
//     return item.name
// })
// console.log(platformName)

// const multipleHavePlaylist = platform.map(item => item.havePlaylist * 2);
// console.log(multipleHavePlaylist);

//filter
// const over10Playlist = platform.filter(function (item) {
//     return item.havePlaylist > 10
// })

// const over10Playlist = platform.filter(item => item.havePlaylist > 10)
// console.log(over10Playlist)

//reduce
// let totalPlaylist = 0;
// for (let i = 0; i < platform.length; i++) {
//     // console.log(platform[i])
//     totalPlaylist += platform[i].havePlaylist
// }

// console.log(totalPlaylist)

const totalPlaylist = platform.reduce((acc, current) => {
    return acc + current.havePlaylist;
}, 0);

console.log(totalPlaylist);
