function max(arr) {
    if (arr.length===0){
        return 0
    }
   var x=arr[0];
   for (var i = 1; i < arr.length; ++i) {
       if (x<arr[i]) {
           x=arr[i];
       }
    }
   return x;
}

function min(arr) {
    if (arr.length===0){
        return 0
    }
    var x = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (x > arr[i]) {
            x = arr[i];
        }
    }
    return x ;
}

function arr() {
    if (arr.length===0){
        return 0
    }
    var x = 0;
    for (var i = 0; i < arr.length; ++i) {
        x=x+arr[i];
    }
    return x/arr.length;
}
