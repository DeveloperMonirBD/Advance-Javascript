const Computer = function (name, model) {
    this.name = name;
    this.model = model;

    // this.aboutComputer = function () {
    //     console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    // };
};

Computer.prototype.aboutComputer = this.aboutComputer = function () {
    console.log(`this computer name is ${this.name} and the model is ${this.model}`);
};

const dell = new Computer('dell', 'dk125');
const hp = new Computer('hp', 'dd4433');

// console.log(Computer.prototype === dell.__proto__);

console.log(dell.hasOwnProperty('name'));
// console.log(Object.getPrototypeOf(dell));

let arr = [2, 3, 4];

let obj = {
    name: 'X-Company'
};

console.log(obj);
console.log(arr);
