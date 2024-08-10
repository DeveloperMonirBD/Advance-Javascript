// const Computer = function (name, model) {
//     this.name = name;
//     this.model = model;
// }

// Computer.sayAboutComputer = function () {
//     console.log("this is computer")
// }

// const dell = new Computer("Dell", "Dk234");

// Computer.sayAboutComputer()
// console.log(dell)

class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    sayAboutComputer() {
        console.log(`This computer name is ${this.name} and the model is ${this.model}.`);
    }
    static sayAboutComputer = function () {
        console.log('this is computer');
    };
}

const dell = new Computer('Dell', 'D34254f');

console.log(dell);
Computer.sayAboutComputer();
console.log(dell);
