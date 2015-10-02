export { memoize };

function memoize(func) {
 var CACHE = {};
  var mainFunc = function() {
   var buffer = " ";

   for(var i = 0; i < arguments.length; i++) {
    buffer += (typeof arguments[i]) +":"+ arguments[i] + " ";
	  } 
   console.log('Parameters:' + buffer);

   if(buffer in CACHE) {
    console.log("Location: from Cache" );
    return CACHE[buffer];
   } else {
    console.log("Location: not cache");
    CACHE[buffer] = func.apply(this,arguments);
    return CACHE[buffer]; 
   }
  };
  return mainFunc;
}



