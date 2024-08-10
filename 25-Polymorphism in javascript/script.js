class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and the model is ${this.model}`);
    }
}

class Hp extends Computer {
    constructor(name, model, color) {
        super(name, model);
        this.color = color;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and the model is ${this.model} and the color is ${this.color} `);
    }
}

const hp22 = new Hp('Hp22', 'Df435re', 'black');
const hp23 = new Hp('Hp23', 'Df443df', 'gray');
hp22.aboutComputer();
hp23.aboutComputer();
