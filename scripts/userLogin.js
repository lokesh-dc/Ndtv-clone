 
    document.querySelector("#signup").addEventListener("click",function(event){
        event.preventDefault();
        window.location.href = "userSignup.html"
    })
    document.querySelector("form").addEventListener("submit",signin);

    let loginId = JSON.parse(localStorage.getItem("loginId")) || 0 ;
    
    window.addEventListener("load",function(){
        if(loginId == 1){
            document.querySelector("#container").innerHTML = "";
            let div = document.createElement("div");
            div.setAttribute("id","success");
            let head = document.createElement("h1");
            var user = JSON.parse(localStorage.getItem("user"));
            head.innerText ="hey, " + user.email;
            let btn = document.createElement("button");
            btn.innerText = "Sign out";
            let btn1 = document.createElement("button");
            btn1.innerText = "Read Later Articles";
            btn1.style.marginLeft = "10px";
            btn1.addEventListener("click",function(){
                window.location.href = "readLater.html";
            })
            btn.addEventListener("click",function(){
                localStorage.setItem("loginId",0);
                window.location.reload();
            })
            div.append(head,btn,btn1);
            document.querySelector("body").append(div);
        }
    })

    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    let obj ={
        email:email,
        password : pass
    };
    document.querySelector("#person1").addEventListener("click",function(){
        obj ={
            email : "lokesh@gmail.com",
            pass : "lokesh@9172"
        };
        localStorage.setItem("loginId","1");
        localStorage.setItem("user",JSON.stringify(obj));
        alert("Hi Person-1, you are successfully logged in");
        window.location.href = "index.html";
    })
    document.querySelector("#person2").addEventListener("click",function(){
        obj ={
            email : "lokesh@gmail.com",
            pass : "lokesh@9172"
        };
        localStorage.setItem("loginId","1");
        localStorage.setItem("user",JSON.stringify(obj));
        alert("Hi Person-2, you are successfully logged in");
        window.location.href = "index.html";
    })
    function signin(event){ 
        event.preventDefault();
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
                    localStorage.setItem("loginId","1");
                    localStorage.setItem("user",JSON.stringify(obj));
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