/*
function doIt() {
    console.log(this)
}
obj = {"key": "value"}

// Create a copy of the doIt() function so that
// the keyword thisis replaced with obj
let x = doIt.bind(obj)
x()

function tyme(){
    console.log("hello world")
}

setTimeout(tyme, 1000);

let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  user.sayHello()

let f = user.sayHello
f()

setTimeout(user.sayHello, 1000) //this ignore the object user, so you will get undefined

function sayHello(){    // setting this function wont bypass the object
    user.sayHello();
}

setTimeout(sayHello, 1000)   // so you will get the name(jack) in this case

setTimeout(() => user.sayHello(), 1000);

//user.sayHello = function() { console.log("does it work?"); }; // this change the function inside settimeout since the the function calling in settimeout was delayed until after the change so the function got changed

let user = {
    firstName: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
let boundFunction = user.sayHello.bind(user);
boundFunction()
*/
function helper() {  // by putting the function sayhello inside another function it will call the entire function and its object
    user.sayHello()
  }
let user = {
    name: "Jack",
    sayHello: function() {
        console.log(`Hello, ${this.name}!`);
    },
    
    sayDelayedHello: function() {
    setTimeout(helper, 1000)  // this would call the function directly and ignoring the object
    }    
  }
  user.sayHello()
  user.sayDelayedHello()
  
