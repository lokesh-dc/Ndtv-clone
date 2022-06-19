 
    document.querySelector("#signup").addEventListener("click",function(event){
        event.preventDefault();
        window.location.href = "userSignup.html"
    })
    document.querySelector("form").addEventListener("submit",signin);

    let loginId = JSON.parse(localStorage.getItem("loginId")) || 0 ;
    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];

    document.querySelector("#person1").addEventListener("click",function(){
        alert("Hi Person-1, you are successfully logged in");
        localStorage.setItem("loginId","1");
        window.location.href = "index.html";
    })
    document.querySelector("#person2").addEventListener("click",function(){
        alert("Hi Person-2, you are successfully logged in");
        localStorage.setItem("loginId","1");
        window.location.href = "index.html";
    })
    console.log(loginId,userData)
    function signin(event){ 
        event.preventDefault();
        let email = document.querySelector("#email").value;
        let pass = document.querySelector("#pass").value;

        
        if(userData.length>0){
            if(email === ""){
                let wrong = document.querySelector("#email");
                wrong.style.borderBottom ="1px solid red";
            }
            if(pass === ""){
                let wrong = document.querySelector("#pass");
                wrong.style.borderBottom="thin solid red";
            }
            if(email != "" && pass != ""){
                console.log("helo");
            userData.forEach(function(elem){
                if(email != elem.email){
                    let wrong = document.querySelector("#email");
                    wrong.style.borderBottom="thin solid blue";
                }
                if(pass != elem.password){
                    let wrong = document.querySelector("#pass");
                    wrong.style.borderBottom="thin solid blue";
                }
                if(email == elem.email && pass == elem.password){
                    alert("you are successfully logged in");
                    window.location.href = "index.html";
                }
            });
            
        }     
}
else{
    alert("Must Sign up first");
    window.location.href = "usersignup.html";

}

    }