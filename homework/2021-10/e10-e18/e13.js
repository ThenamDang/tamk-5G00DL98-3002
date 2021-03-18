function isPositiveInteger(value, onSuccess, onError){
    if(value>0){
        onSuccess();
    }
    else{
        onError();
    }
}

let onSuccess = function () {
    console.log("Is Pos");
}
let onError = function (){
    console.log("Not Pos");
}
isPositiveInteger(-13, onSuccess, onError)
//console.log(isPositiveInteger()); 
