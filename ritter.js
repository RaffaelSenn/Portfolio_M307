function ritter(){
    console.log("input");
    var lastname = document.getElementById("lname").value;
    var firstname = document.getElementById("fname").value
    var email = document.getElementById("email").value
    var age = document.getElementById("age").value
    var checkbox = document.getElementById("checkbox").value     
    //neuer Teil
    var invfirstname = false
    var invlastname = false
    var error = false
    const form = document.getElementById('form');
    var i = ("")
    const allowedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u00dc", "\u00fc", "\u00c4", "\u00e4", "\u00d6", "\u00f6", "\xE8", "\xE9", "\xEA", "\xEB"]
    var check = lastname
    //Ende neuer Teil
    var validate = email.includes("@")
    
    if(!validate){
        console.log("emailfalse");
    }
    //neuer Teil
    for (let i = 0; i < lastname.length; i++) {
        const element = lastname[i]
        
        if (!allowedCharacters.includes(element))
            console.log("lnamefalse") 
    }  
    
    for (let i = 0; i < firstname.length; i++) {
        const element = firstname[i]
       
        if (!allowedCharacters.includes(element))
            console.log("fnamefalse")
    }   

    //Error Messages
    //möglich mit if und elseif
    //First Name

    if (firstname == "" || firstname == null) {
            alert("First Name is missing");
            error = true
    } 
    for (let i = 0; i < firstname.length; i++) {
        const element = firstname[i]
               
    if (!allowedCharacters.includes(element)) {
        invfirstname = true
        error = true
    } }  
    if (invfirstname == true) {
        alert("First Name contains Numbers or Special Characters")
    }
    //Last Name
    if (lastname == "" || lastname == null) {
            alert("Last Name is missing");
            error = true
    } 
    for (let i = 0; i < lastname.length; i++) {
        const element = lastname[i]

    if (!allowedCharacters.includes(element)) {
        invlastname = true
        error = true
    } }
    if (invlastname == true)
        alert("Last Name contains Numbers or Special Characters")
    //Email    
    if (email == "" || email == null) {
            alert("Email is missing");        
            error = true
    }
    if (!email.includes("@") ) {
            alert("Email is missing the @");
            error = true
    } 
    //Age
    if (age == "" || age == null) {
        alert("Age is missing"); 
        error = true                                  
    }
    if (age <=0 || age >=100) {
        alert("The Age has to be between 1 and 99");
        error = true
    }
    //Welcome Message
    if (error == false) {
        alert("Login successful")
    }
    //Ende neuer Teil
    console.log(lastname,"" + firstname,"" + email,"" + age,"" + checkbox);
    
    localStorage.setItem('lname', lastname);
    localStorage.setItem('fname', firstname);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);
    localStorage.setItem('checkbox', checkbox);
    
    function ritteer(){ 
        document.getElementById("lname").value= localStorage.getItem('lname');
        document.getElementById("fname").value= localStorage.getItem('fname');
        document.getElementById("email").value= localStorage.getItem('email');
        document.getElementById('age').value= localStorage.getItem('age');
        document.getElementById("checkbox").value= localStorage.getItem('checkbox');
    
        if(localStorage.getItem('lname')==null){
            document.getElementById("lname").value= "";
        }
        if(localStorage.getItem('fname')==null){
            document.getElementById("fname").value= "";  
        }
        if(localStorage.getItem('email')==null){
            document.getElementById("email").value="";
        }
        if(localStorage.getItem('age')==null){
            document.getElementById("age").value="";
        }
        if(localStorage.getItem('checkbox')==null){
            document.getElementById("checkbox").value= "on";
        }
    }}