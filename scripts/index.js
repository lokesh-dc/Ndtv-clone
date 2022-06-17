import {articles} from './test.js';

window.addEventListener("load",function (){
    displayNews(articles);
    displayLatest(articles);
    displayRight(articles);
})

function displayNews(articles){
    
    articles.forEach(function(elem,index) {
        if(index<40){
        let div = document.createElement("div");
        let heading = document.createElement("p");
        heading.innerText = elem.headline;
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy")
       
        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category;
        btn.innerText = "Read Later"
        innerDiv.append(type,btn);

        div.append(innerDiv,img,heading);

        div.addEventListener("click",function(){
            readArticle(elem);
        })
        btn.addEventListener("click",function(){
            readLater(elem);
        })

        document.querySelector("#mainContent").appendChild(div);
    }
    });
}

function displayLatest(articles){

    let filtered  = articles.filter(function(elem){
        return elem.category === "latest";
    });

    filtered.forEach(function(elem,index){
        if(index<30){
        let div = document.createElement("div");
        let heading = document.createElement("p");
        heading.innerText = elem.headline;
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy")
        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category;
        btn.innerText = "Read Later"
        innerDiv.append(type,btn)
        div.append(innerDiv,img,heading);
        div.addEventListener("click",function(){
            readArticle(elem);
        })
        btn.addEventListener("click",function(){
            readLater(elem);
        })

        document.querySelector("#leftContent").appendChild(div);
    }
    })
}

function displayRight(articles){

    let filtered  = articles.filter(function(elem){
        return elem.category === "football" || elem.category === "cricket" || elem.category === "tennis";
    }); 

    filtered.forEach(function(elem,index){
        if(index<30){
        let div = document.createElement("div");
        let category = document.createElement("h1");
        category.innerText = elem.category;
        let heading = document.createElement("p");
        heading.innerText = elem.headline;
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy");
        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category;
        btn.innerText = "Read Later"
        innerDiv.append(type,btn)
        div.append(innerDiv,img,heading);
        div.addEventListener("click",function(){
            readArticle(elem);
        })
        btn.addEventListener("click",function(){
            readLater(elem);
        })
        document.querySelector("#rightContent").appendChild(div);
    }
    })


}

let redLaterData = JSON.parse(localStorage.getItem("readLaterArticles")) || [];
function readLater(elem){
    redLaterData.push(elem);
    localStorage.setItem("readLaterArticles",JSON.stringify(redLaterData));
}

function readArticle(elem){
    localStorage.setItem("readThisArticle",JSON.stringify(elem));
    window.location.href = "articlePage.html"
}