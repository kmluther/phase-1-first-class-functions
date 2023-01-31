function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    console.log("This is a function");
    console.log(receivesAFunction.name);
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log("Hi");
    };
}