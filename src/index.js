exports.min = function min (array) {
  if  (array===undefined){
      return 0;
  }
  if (array.length===0){
        return 0;
    }
    var x = array[0];
    for (var i = 1; i < array.length; ++i) {
        if (x > array[i]) {
            x = array[i];
        }
    }
    return x ;
}


exports.max = function max (array) {
  if  (array===undefined){
      return 0;
  }
  if (array.length===0){
        return 0;
    }
   var x=array[0];
   for (var i = 1; i < array.length; ++i) {
       if (x<array[i]) {
           x=array[i];
       }
    }
   return x;
}

exports.avg = function avg (array) {
  if  (array===undefined){
      return 0;
  }
  if (array.length===0){
        return 0;
    }
    var x = 0;
    for (var i = 0; i < array.length; ++i) {
        x=x+array[i];
    }
    return x/array.length;
}
