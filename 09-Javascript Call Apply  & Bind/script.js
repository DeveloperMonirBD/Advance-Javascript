const codeABC = {
    nameOfthis: 'X-Company',
    founder: 'Monir',
    established: 2021,

    aboutPlatform: function (month) {
        console.log(`The founder of ${this.nameOfthis} is ${this.founder} and established in ${month} ${this.established}.`);
    }
};

const stackLearner = {
    nameOfthis: 'Stack Learner',
    founder: 'Hm Nayeem',
    established: 2017
};

let aboutPlatformFunc = codeABC.aboutPlatform;

codeABC.aboutPlatform('october');

// stackLearner.aboutPlatformFunc();

//call
// aboutPlatformFunc.call(stackLearner, "January")

//apply
// aboutPlatformFunc.apply(stackLearner, ['February']);

//bind
// let platformBound = aboutPlatformFunc.bind(stackLearner);
// platformBound("march")
// platformBound("December")

// examplae 01:-

function sum(a, b) {
    return a + b;
}
// console.log(sum(3, 5))
// console.log(sum.call(null, 3, 5))
// console.log(sum.apply(null, [3, 5]))

let boundSum = sum.bind(null, 3, 7);
console.log(boundSum());

// examplae 02:-
//bind akta jinish k store korea rakhea dai abong proijon ar somai amra sata k use korte pare.

function sum(price, quantity) {
    return price * quantity;
}

let totalPrice = sum.bind(null, 2);
console.log(totalPrice(36));
