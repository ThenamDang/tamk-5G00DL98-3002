function isPositiveInteger(value, onSuccess, onError){
    if(value>0){
        onSuccess();
    }
    else{
        onError();
    }
}

function onSuccess(){
    console.log("Is Pos");
}
function onError(){
    console.log("Not Pos");
}
isPositiveInteger(-13, onSuccess, onError)
//console.log(isPositiveInteger());
