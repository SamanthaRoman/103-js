



function calculate(){

let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
// let sign=document.getElementById("txtOpp").value;
let opp = document.getElementById("opperator").value;


    if( opp === "+"){
        const result = parseInt(num1) + parseInt(num2);
        document.getElementById("total").innerHTML=`
        <p> ${num1} ${opp} ${num2} = ${result}</p>`;
        console.log(result); 
        
    }

    if( opp === "-"){
        const result = parseInt(num1) - parseInt(num2) ;
        document.getElementById("total").innerHTML=`
        <p> ${num1} ${opp} ${num2} = ${result}</p>`;
        console.log(result); 
    }

    if( opp === "*"){
        const result = parseInt(num1) * parseInt(num2) ;
        document.getElementById("total").innerHTML=`
        <p> ${num1} ${opp} ${num2} = ${result}</p>`;
        console.log(result); 
    }

    if( opp === "/"){
        const result = parseInt(num1) / parseInt(num2) ;
        document.getElementById("total").innerHTML=`
        <p> ${num1} ${opp} ${num2} = ${result}</p>`;
        console.log(result); 
    };

};



// calculate();