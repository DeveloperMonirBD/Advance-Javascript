const Computer = function (name, model) {
    this.name = name;
    this.model = model;

    this.aboutComputer = function () {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`)
    }
}
const dell = new Computer("dell", "dk125")
const hp = new Computer("hp", "dd4433")

console.log(dell)
console.log(hp)

dell.aboutComputer()
hp.aboutComputer()



// const obj = {}
// obj.name = "code ABC";
// obj.playlist = 20;

// console.log(obj) 