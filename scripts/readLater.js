
let readLaterArticles = JSON.parse(localStorage.getItem("readLaterArticles")) || [];
window.addEventListener("load",function(event){
    event.preventDefault();
    displayNews(readLaterArticles);
})
let loginId = JSON.parse(localStorage.getItem("loginId"));
function displayNews(readLaterArticles){
    if(loginId == 1){
    if(readLaterArticles.length >= 0){
    document.querySelector("#articles").innerHTML = "";
    readLaterArticles.forEach(function(elem,index) {
        let div = document.createElement("div");
        let firstdiv = document.createElement("div");
        let heading = document.createElement("p");
        heading.innerText = elem.headline
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy")
       firstdiv.append(img,heading);
        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category;
        type.style.textTransform = "uppercase";
        type.style.letterSpacing = "2px";
        btn.innerText = "Mark As Completed"
        innerDiv.append(type,btn);

        div.append(innerDiv,firstdiv);
        btn.addEventListener("click",function(){
            Completed(elem,index);
        });
            firstdiv.addEventListener("click",function(){
                readArticle(elem);
        })
     document.querySelector("#articles").appendChild(div);
    });
    }
if(readLaterArticles.length === 0){
    let div = document.createElement("div");
    let h = document.createElement("h1");
    h.innerText = "No Articles to Read"
    let btn = document.createElement("button");
    btn.innerText = "Add Articles";
    btn.addEventListener("click",function(){
        window.location.href = "index.html";
    })
    div.append(h,btn);
    div.style.textAlign = "center"
    div.style.marginTop = "200px";
    document.querySelector("body").append(div);
}
}
else{
    let div = document.createElement("div");
    let h = document.createElement("h1");
    h.innerText = "Sign in / Sign up to access Read Later";
    h.style.fontWeight = "300";
    let btn = document.createElement("button");
    btn.innerText = "SIGN IN";
    btn.addEventListener("click",function(){
        window.location.href = "userLogin.html";
    })
    div.append(h,btn);
    btn.style.width = "300px";
    btn.style.fontSize = "25px";
    btn.style.marginTop = "20px";
    div.style.textAlign = "center"
    div.style.marginTop = "200px";
    document.querySelector("body").append(div);
}
}

function readArticle(elem){
    localStorage.setItem("readThisArticle",JSON.stringify(elem));
    window.location.href = "articlePage.html";
}

function Completed(elem,index){
    readLaterArticles.splice(index,1);
    localStorage.setItem("readLaterArticles",JSON.stringify(readLaterArticles));
    displayNews(readLaterArticles);
}

