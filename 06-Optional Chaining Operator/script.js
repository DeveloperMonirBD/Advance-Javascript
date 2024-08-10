// const company = {
//   companyName: "X-Company",
//   employee: 9,
//   // address: {
//   //   street: "702, new chadgaon",
//   //   location: "chattogram, Bangladesh"
//   // }
// }

// function findName(object) {
//     // console.log(object.companyName);
//     // console.log(object.address.street);

//     //Optional Chaining:-

//     // if (object && object.address && object.address.street) {
//     //     console.log(object.address.street);
//     // }

//   //Optional Chaining shortcut:-

//     console.log(object?.address?.street);
// }

// findName(company)

const company = {
    companyName: 'X-Company',
    employee: 9,
    address: {
        street: '702, new chadgaon',
        location: 'chattogram, Bangladesh'
    }
    // playList: ["Datastructure and algo", "advanced Javascript"]
};

function findName(object) {
    console.log(object?.playList?.[0]);
}

findName(company);
