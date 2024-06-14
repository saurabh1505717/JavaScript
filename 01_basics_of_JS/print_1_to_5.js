// Print 1 at 1st SecurityPolicyViolationEvent, 2 at 2nd sec and so on till 5 at 5th sec. 

// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }console.log("Namaste JS")
// }

// x()

function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }console.log("Namaste JS")
}

x();