// this is DB data
let passwordDB="admin1234";
let emailDB="Samantha@gmail.com"

function login(){
    // get the password
    let password = document.getElementById("txtPassword").value;
    let email = document.getElementById("txtEmail").value;
    // ask the question if yes do this
    if(password===passwordDB && email.toLowerCase()===emailDB.toLowerCase()){
        window.location="home.html";
        // window - webpage
        // location is the url
        // console.log("Welcome to the system!"); --- we first console.log to see it work then we redirect it.
    }else{
        document.getElementById("notification").innerHTML=`
        <p class="alert-error">Invalid Credentials!</p>`
        console.log("Invalid credentials");
    }
    // console.log(password)
}


