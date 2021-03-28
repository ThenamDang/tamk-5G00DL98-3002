let user = {
    name: "Jack",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
user.sayHello()
let myfunc = user.sayHello
myfunc()

/* using the last 2 line you get Hello, undefined! => myfunc() invoke the function directly, ignoring the object*/
