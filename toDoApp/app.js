//empty array to store our tasks

let personalTasks = [];
let businessTasks = [];



function addTask(){
    console.log("addingTask");
    let newTask=document.getElementById("txtNewTask").value;
    if(document.getElementById("personalTask").checked === true){
        personalTasks.push(newTask);
        console.log(personalTasks.length);
        document.getElementById("txtNewTask").value="";
        displayPersonal();
    };
    if(document.getElementById("businessTask").checked === true){
        businessTasks.push(newTask);
        console.log(businessTasks.length);
        document.getElementById("txtNewTask").value="";
        displayBusiness();
    };

    if(newTask==""){
        alert("You forgot to add a task.")
    }else{
        
    }
};

function displayPersonal(){
    let tmp = "";
    console.log("displaying...");
    for(let i=0;i<personalTasks.length;i++){
        tmp+=`
        <li>${personalTasks[i]}</li>`;
        console.log(tmp);
        document.getElementById("personalList").innerHTML=tmp;
    }

}
function displayBusiness(){
    let tmp = "";
    console.log("displaying...");
    for(let i=0;i<businessTasks.length;i++){
        tmp+=`
        <li>${businessTasks[i]}</li>`;
        console.log(tmp);
        document.getElementById("businessList").innerHTML=tmp;
    }

}

