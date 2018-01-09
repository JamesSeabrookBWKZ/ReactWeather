// var names = ['James', 'Ali', 'Archer'];

// names.forEach(function(name){
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('James'))

// var person = {
//     name: 'Claudia',
//     greet: function(){
//         names.forEach(function(name){
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// }

// var person = {
//     name: 'Claudia',
//     greet: function(){
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// }

// person.greet();

function add (a, b) {
    return a+b;
}

var addExpression = (a,b) => a+b;
console.log(addExpression(1,3))

var addStatement = (a,b) => {
    return(a+b)
}
console.log(addStatement(5,5));