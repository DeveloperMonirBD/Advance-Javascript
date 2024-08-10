// function details(firstName, lastName ="rakib") {
//   // lastName = lastName || "rakib" //lastname na thakle rakib k dakhabe.
//   console.log(`${firstName} ${lastName}`)
// }
// details("Md.", "Monir");

// default paramitter:-
function details(firstName, lastName = 'rakib', { greet = 'hello', title = 'Md.' } = {}) {
    firstName = firstName ?? 'Monir'; //?? ata sudhumatro null or undefine k check korbe
    console.log(`${greet} ${title} ${firstName} ${lastName}`);
}
details(0, 'Monir', { greet: 'hi', title: 'Mr.' });
