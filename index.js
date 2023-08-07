// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function Tuesday(params) {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function Wednesday(params) {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
// }

// function Thursday(params) {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function Friday(params) {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }
 function receivesAFunction(callback) {
    return callback()
 }

function returnsANamedFunction() {
   return function namedFunction() {
   }
}

function returnsAnAnonymousFunction() {
   return ()=>{}
}