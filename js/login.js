

function login(email, password) {

    //uzimanje vrednosti
     email = document.getElementById("email").value.trim() === "admin";
     password = document.getElementById("password").value.trim() === "admin";


    
    //provera ture/false
    console.log(email && password);

    
    if (email && password) {

        alert("Welcome  " + document.getElementById("email").value.trim());
    }
    else {

        alert("Invalid email or password.\nTry again");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

}