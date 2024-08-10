let firstName = 'Monir';
let institute = 'X-Company';

let greet = function () {
    console.log(`${firstName} make programing video for ${institute}`);
};

let playList = 'playlist';

const myObject = {
    firstName,
    institute,
    greet() {
        console.log(`${firstName} make programing video for ${institute}`);
    }
};

myObject[playList] = 'Advanced Javascript';

console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));
console.log(myObject.hasOwnProperty('firstName'));
