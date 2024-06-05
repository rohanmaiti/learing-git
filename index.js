const name = "rohan"

function Name(parameter){
    return "your name is "+parameter;
}

function even(array){
    return array.filter(e=>e%2==0);
}

//calling the even function
console.log(even([1,2,3,4,5,6,7]));