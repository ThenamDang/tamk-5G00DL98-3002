function doIt() {
    console.log('hello')
 }
 console.log(typeof doIt)
 console.log(doIt instanceof Function)

 /* result is: 
 function
 true
 console.log(typeof doIt) return a string indicate the type of (typeof doIt) operand, in this case is a function
 console.log(doIt instanceof Function) instanceof operator check if an object (doIt) belongs to a class (Function) in this case the answer is true doIt belongs to the Function class
 */
