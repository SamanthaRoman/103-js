// think of the functionaliy you need.
// we need to 1. register a student and then
// 2. we want to display the new registered stuendt.

// we need an array
let students = [];

// we want to add a new registered student
function register(){
    console.log("registration");
    // steps we need to take 
    // 1. get the value from the input
        // 1. search the element and store it in a variable
        let student=document.getElementById("txtName").value
        // 2. test it by displaying it on the console
    // 2. validate if the input was not empty 
        // 1. we need an if statement 
        if(student==""){
            alert("Please add a student name.")
        }else{
        // the last 3 actions will happen within the else execution IF the
        // input is not empty. (so we moved them inside the else function)
        
        
        // 3. push the ew value to the array
        students.push(student);
        console.log(students.length);// display the number of them.
        // 4. clear the input
        document.getElementById("txtName").value="";
        // 5. display the student on the list (call the display funciton)
        display();
        }


}
// then we want to display the studen inside the list

function display(){
    let tmp = "";
    console.log("displaying.... "); // here we are testing to make sure its connecting to our else statemnt and calling the function. 
    // steps we need to take
    // 1. travel the array (for loop)
    for(let i=0;i<students.length;i++){
        // the last two steps will happen within the for loop
        // 2. create the html tmp
        tmp+=`
        <li class="box-shadow">${students[i]}</li>`;
        console.log(tmp) // you need to consolelog to see it working.
        // 3. insert the tmp into the HTML
        document.getElementById("studentList").innerHTML=tmp;

    }


}