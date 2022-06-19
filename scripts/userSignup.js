document.querySelector("#signin").addEventListener("click",function(){
    window.location.href = "userLogin.html"
})
document.querySelector("form").addEventListener("submit",signup);

function signup(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    if(name === ""){
        let wrong = document.querySelector("#name");
        wrong.style.borderBottom ="1px solid red";
    }
    if(email === ""){
        let wrong = document.querySelector("#email");
        wrong.style.borderBottom ="1px solid red";
    }
    if(pass === ""){
        let wrong = document.querySelector("#pass");
        wrong.style.borderBottom="thin solid red";
    }
    if(email!="" && pass != "" && name != ""){
        let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
        let obj = {
            name : name,
            email : email,
            password : pass
        };

        userData.push(obj);
        localStorage.setItem("userDetails",JSON.stringify(userData));
        alert("You can Sign in now");
        window.location.href = "userLogin.html";
}
}   