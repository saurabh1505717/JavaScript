// function X(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
//     return y;
// }

// var Z=X();
// X();
// console.log(Z);
// Z();



// Output problem 1

// function X(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     // y();
//     a=100;
//     return y;
// }

// var z=X();
// console.log(z);
// z();


// Output problem 2

function x(){
    var a=100;
    function y(){
        var b=90;
        function z(){
            console.log(a,b);
        }
        console.log("first");
        z();
    }
    y();
}
x();