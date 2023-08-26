console.log("Script");
var message = "Hello world";
let num1; // this is declaring the variable
num1=10; // here assiging the value
let num2=20;
let sum = num1+num2; // better to store in variable to reuse it later if needed.
let firstName = "Samantha"; // camel case notation

// most common practice assign it on one line. But sometimes
// you can create all variables and assign it when you know the values. 

console.log(message, num1, num2); 
console.log("the result of the sume is:" + sum + "the calculation was made by " + firstName); // console.log first to test its correct then you can display it on the dom.
//document.write("the result of the sume is: " + sum + " the calculation was made by " + firstName);

message= "Welcome to coding";

console.log(message);

//excercise #1


var numberChildren = 10;
var jobTitle = "Software Developer";
var geoLocation = "North Carolina";
var partnerName = "Anthony";

console.log("You will be a " + jobTitle + " in " + geoLocation + " , and married to " + partnerName + " with " + numberChildren + " kids.")

// traditional string concatenation: 
// document.write("You will be a " + jobTitle + " in " + geoLocation + " , and married to " + partnerName + " with " + numberChildren + " kids.")

// option 2 - prefered for ease and less chance of errors.
// template string, template literal:
document.write(
    `
    <h2> Exercise 1 </h2>
    <p>
        You will be a ${jobTitle} in ${geoLocation} , and married to ${partnerName} with ${numberChildren} kids.
    </p>
    `
);


// excercise #2

var name = "Samantha";
var email = "samantha@gmail.com";
var password = "password";
var age = 31;
var country = "United States";
var monthlySalary = 10000;
var annualSalary = monthlySalary*12;

console.log(annualSalary)

document.write(
    `
    <h2> Exercise 2 </h2>
    <p class="details" >Name: ${name}</p>
    <p class="details" >Email: ${email}</p>
    <p class="details" >Salery: ${annualSalary}</p>
    `
)