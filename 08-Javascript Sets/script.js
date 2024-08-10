// set duplicate arr. k set ar moddhea rakhea na..
// let arr = [2, 3, 4, 5, 2, 9, 3]
// let set = new Set(arr);
// console.log(set)
// console.log(set.has(2))


function removeDuplicate(arr) {
    // let newArr = []
    // for (let i = 0; i < arr.length; i++){
    //     let element = arr[i];
    //     if (!newArr.includes(element))
    //         newArr.push(element)
    // }
    // return newArr

    // set ar maddhome a vabe korte pare:-
    let set = new Set(arr);
    // return set    // ata object return korbe.
    return [...set]; // sprade operator ar maddhome array tea convart kora hoieasea
}

console.log(removeDuplicate([2, 3, 4, 6, 3, 2, 4, 7, 8]));
