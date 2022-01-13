function ritter(){
console.log("a");
var lastname = document.getElementById("lname").value;
var firstname = document.getElementById("fname").value
var email = document.getElementById("email").value
var checkbox = document.getElementById("checkbox").value

var validate = email.includes("@")

if(!validate){
    console.log("emailfalse");
}

console.log(lastname + firstname + email + checkbox);

localStorage.setItem('lname', lastname);
localStorage.setItem('fname', firstname);
localStorage.setItem('email', email);
localStorage.setItem('checkbox', checkbox);
location.reload()
}

function ritteer(){ 
    document.getElementById("lname").value= localStorage.getItem('lname');
    document.getElementById("fname").value= localStorage.getItem('fname');
    document.getElementById("email").value= localStorage.getItem('email');
    document.getElementById("checkbox").value= localStorage.getItem('checkbox');

    if(localStorage.getItem('lname')==null){
        document.getElementById("lname").value= "Mustermann";
    
    }
    if(localStorage.getItem('fname')==null){
        document.getElementById("fname").value= "Max";
    
    }
    if(localStorage.getItem('email')==null){
        document.getElementById("email").value="max.mustermann@gmail.com";
    
    }
    if(localStorage.getItem('checkbox')==null){
        document.getElementById("checkbox").value= "on";
    
    }
}


