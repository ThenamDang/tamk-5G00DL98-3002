const arguement = process.argv.slice(2);

let x = 0;
let solution = arguement.forEach((value) => {
    x += Number(value);
});
    
console.log(x);
