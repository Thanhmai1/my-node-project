function example_var() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log("Var " + x) // output 20
    }
    console.log("Var " + x) // output 20
}

// => var có thể khai báo toàn cục, có thể tái gán và khai báo lại

function example_let() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log("Let " + x) // output 20
    }
    console.log("Let " + x) //output 10
}

// => let có phạm vi khối , có thể tái gán, không thể khai báo lại trong cùng phạm vi

function example_const() {
    const x = 10;
    if (true) {
        const x = 20;
        console.log("Const " + x) // output 20
    }
    console.log("Const " + x) //output 10
}


// => const có phạm vi khối, không thể tái gán, không thể khai báo lại trong cùng phạm vi

module.exports = [
    example_var,
    example_let
]