//Function scope var
function nvm(){
    if (2>1){
        var x =5;
    }
    console.log(x);
}

nvm();
// Global scope var
if (1<2) {
    var a =5;
}
console.log(a);

// Let is block scope so you cant access it outside of the block
function nvm(){
    if (2>1){
        let x =5;
    }
    console.log(x);
}
// const is also block scope but you cant change it
