function sum(a,b){
    let sum = a+b;
    console.log(sum);
};

sum(3,5);


// challenge 1

// calculate the gpa of a student enrolled in course 101 and 102.
// display the students name, grade1, grade2 andd gpa 

function gpa(student, grade1, grade2){
    let gpa = (grade1+grade2)/2;
    console.log(student, grade1, grade2, gpa);
};

// gpa("Samantha",90,100);

// once its working make it beautiufl... 
function gpa(student, grade1, grade2){
    let gpa = (grade1+grade2)/2;
    document.write(
        `
        <div>
            <p>Name: ${student}</>
            <p>FSDI 101: ${grade1}</>
            <p>FSDI 101: ${grade2}</>
            <p>GPA: ${gpa}</>
        </div>
        `
    )
};

gpa("Samantha",90,100);


// get it from the user
function calculateGPA(){
    //getting the values
    let studentName = prompt("Enter student name");
    let grade1 = Number(prompt("Enter SDI 101 grade"));
    let grade2= Number(prompt("Enter SDI 101 grade"));

    // calculating
    let gpa = (grade1+grade2)/2;

    //displaying

    // document.write(
    //     `
    //     <div>
    //         <p>Name: ${studentName}</>
    //         <p>FSDI 101: ${grade1}</>
    //         <p>FSDI 101: ${grade2}</>
    //         <p>GPA: ${gpa}</>
    //     </div>
    //     `
    // )




/// now inject the code so it stays... 

document.getElementById("studentList").innerHTML+=  `
<div>
    <p>Name: ${studentName}</>
    <p>FSDI 101: ${grade1}</>
    <p>FSDI 101: ${grade2}</>
    <p>GPA: ${gpa}</>
</div>
`
};