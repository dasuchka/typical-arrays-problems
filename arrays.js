function max() {
    if (arguments.length===0){
        console.log(0)
        return
    }
   var x=arguments[0];
   for (var i = 1; i < arguments.length; ++i) {
       if (x<arguments[i]) {
           x=arguments[i];
       }
    }
   console.log(x);
}

function min() {
    if (arguments.length===0){
        console.log(0)
        return
    }
    var x = arguments[0];
    for (var i = 1; i < arguments.length; ++i) {
        if (x > arguments[i]) {
            x = arguments[i];
        }
    }
    console.log(x);
}

function avg() {
    if (arguments.length===0){
        console.log(0)
        return
    }
    var x = 0;
    for (var i = 0; i < arguments.length; ++i) {
        x=x+arguments[i];
    }
    console.log(x/arguments.length);
}

min(-1, 2, 3, 55, -16, 4)
max(4, 8, 55, 1)

