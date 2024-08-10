class Car {
    constructor(name, tier) {
        this.name = name;
        this.tier = tier;
    }

    aboutCar() {
        return `This car name is ${this.name} and have ${this.tier} tier`;
    }

    static staticMethod() {
        return `You could not access this method in instantiate`;
    }

    get getName() {
        return `The car name is ${this.name}`;
    }

    set getName(value) {
        this.name = value;
    }
}

// const ferrari = new Car("Ferrari", 4);
// console.log(ferrari)
// console.log(Car.staticMethod());
// console.log(ferrari.getName);

// ferrari.getName = "premio";
// console.log(ferrari.getName);

// console.log(ferrari.aboutCar());

// console.log(Car.prototype === ferrari.__proto__);
// console.log(ferrari.__proto__)

//inheritance
class Premio extends Car {
    constructor(name, tier, light) {
        super(name, tier);
        this.light = light;
    }

    aboutLight() {
        return `This car have ${this.light} light`;
    }

    // abstraction
    carPrice(quantity) {
        let price = 30000;
        let totalPrice = price * quantity;
        return `You have to pay $${totalPrice > 0 ? totalPrice : 0} for ${quantity ? quantity : 0} car ${this.#hideMethod()}`;
    }

    // encaptulation
    #hideMethod() {
        console.log('You could not access outside of this class');
    }

    // polymorphism
    aboutCar() {
        return `This car name is ${this.name} and have ${this.tier} tier and ${this.light} light`;
    }
}

let premiof1 = new Premio('PremioF1', 4, 9);
// console.log(premiof1);
// console.log(premiof1.aboutLight());
console.log(premiof1.carPrice(3));
console.log(premiof1.aboutCar());
// console.log(premiof1.#hideMethod())
