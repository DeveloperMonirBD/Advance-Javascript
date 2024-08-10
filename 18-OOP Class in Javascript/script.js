// // class expretion
// const myName = class {}

// // class declaration
// class myName {}

class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model
    }
    aboutComputer() {
        console.log(`This Computer name is ${this.name} and the model is ${this.model}`);
    }
}

const dell = new Computer('dell', "d2345");
console.log(dell)
dell.aboutComputer()



