function max(a,b){
    a = process.argv[2];
    b = process.argv[3];
    if(a>b){
        return a;
    }
    else{
        return b;;
    }
}
console.log(max());
