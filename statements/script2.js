let myArray = ["string", 10, true];


myArray.push(20); // add to end of the array with .push();
myArray.unshift(false); // add to the begining of array .unshift();
myArray.pop(); // remove last item
myArray.shift(); // remove first item of the array
myArray.splice(3,1); // delete a position in the array with splice start at 3 and remove only 1 element.

document.write(myArray[1]);

console.log(myArray);
// .length is length of the array.

//loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// we now replace all those individule console logs with a 4 loop. 
for (let i = 1; i <= 5 ; i++) {
    console.log(i);
};

let studentNames = ["Michael", "Sam", "Jason", "Jesenia"];
let studentGrades = [3.9, 4.0, 3.8, 3.8];
let total = 0;


// display all the names with a loop 

for(let i = 0; i <studentGrades.length ; i++) {
    console.log(studentNames[i]);
    // display it on the document(browser)
    document.write(`
    <p>Student ${i+1}: ${studentNames[i]}, ${studentGrades[i]}</p>
    `); // i+1 adds a number next to the student. 
    total=total + studentGrades[i];
}

// to update the array automatically refrence the array 
// we replace the number of the stopping condition with the 
// name of the array and then .length to go through the array.

console.log(total);








