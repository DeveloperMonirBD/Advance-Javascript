// class Computer {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }

//     aboutComputer() {
//         console.log(`this computer name is ${this.name} and the model is ${this.model}`);
//     }

//     get computerName() {
//         return this.name
//     }
//     set computerName(value) {
//         this.name = value
//     }
// }

// const dell = new Computer('Dell', "D324ed");

// dell.computerName = "HP"
// console.log(dell.computerName);
// console.log(dell);



// Object.create()
const computer = {
    name: '',
    model: '',
    aboutComputer() {
        console.log(`This computer name is ${this.name} and the model is ${this.model}`);
    }
};

let dell = Object.create(computer);
dell.name = 'Dell';
dell.model = 'D325de5';
dell.aboutComputer();
console.log(dell);

let hp = Object.create(computer);
hp.name = 'HP';
hp.model = 'h43d5sc',
hp.aboutComputer();
console.log(hp);

