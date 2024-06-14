// var a=10;
// function X(){
//     var a=19;
//     console.log(a);
// }
// X();
// console.log(a);


// Shadowing let using var is allowed in case of functions.
let b=20;
function Y(){
    var b=10;
    console.log(b);
}
Y();
console.log(b);


// Illegal Shadowing

// let a=20;
// {
//     var a=20;
// }


// Allowed

var a=20;
{
    let a=90;
    console.log(a);
}
console.log(a);