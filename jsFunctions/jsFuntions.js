// declaring a function.

function greet(name,age){
    // let age = 26;
    return "Hello" + name + "!" + age;
}

console.log(greet("Eric", 26));

 //Define a function called multiplyThree which accepts a number and returns that number multiplied by 3.

 // 1. Create function
// one way
function multiplyThree(num){
    return num*3
};

console.log(multiplyThree(3));

// second way
function multiplyThree(num){
    let mult = num*3
    return mult;
};

console.log(multiplyThree(10));

////////////////////////////////

function sum(){
    console.log(10+10);
 }
 sum();
 
//  let sum2 = function(){
//     console.log(3+3);
//  }
//  sum2();

let total =0;

function addCart(price){
   return total += price;
}

total = addCart(200);
console.log("200",total);
total = addCart(400);
console.log("400",total);
total = addCart(600);
console.log("600",total);

