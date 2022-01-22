
let index;
let architects = undefined;


function showUI(){
    //architects
    let htmlObj = document.getElementById("architects");
    htmlObj.innerHTML =
        `First Name: ${architects.firstname}<br>`+
        `Last Name: ${architects.lastname}<br>`+
        `Nationality: ${architects.nationality}`;

    //Famous Buildings
    htmlObj = document.getElementById("famousbuildings");
    //clear
    htmlObj.innerHTML = "";
    //set
    architects.famousbuildings.buildings.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });
    
}



/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (architectList.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    architects = architectList[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    architects = architectList[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (architects === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    architects = architectList[index];
    //zeige den Eintrag
    showUI();
}

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
    