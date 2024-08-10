class Computer {
    // privet field
    #warranty;
    constructor(name, model, warranty) {
        this.name = name;
        this.model = model;
        this.#warranty = warranty;
    }

    aboutComputer() {
        this.#aboutWarranty();
        console.log(`This computer name is ${this.name} and the model is ${this.model}`);
    }

    // privet method
    #aboutWarranty() {
        console.log(`${this.#warranty} Years of warranty provide dell`);
    }
}

let dell = new Computer('Dell', 'D432e54', 3);
// console.log(dell.name)
// console.log(dell.model);
// console.log(dell.warranty);
dell.aboutComputer();
// dell.aboutWarranty();
