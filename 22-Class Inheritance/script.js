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
    constructor(name, model, warenty) {
        super(name, model);
        this.warenty = warenty;
    }

    aboutWarenty() {
        console.log(`${this.name} provider ${this.warenty} year of warrenty`);
    }
}

let hp = new Hp('Hp', 'H3423d4', 3);
hp.aboutComputer();
hp.aboutWarenty();
