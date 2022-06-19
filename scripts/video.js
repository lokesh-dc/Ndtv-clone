import {articles} from './test.js';

window.addEventListener("load",function (){
    displayNews(articles); // main column

})

function displayNews(articles){
    articles.forEach(function(elem,index){
        if(index<40){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        let head = document.createElement("p");
        head.innerText = elem.headline;

        div.append(img,head);
        div.addEventListener("click",function(){
            readArticle(elem);
        })
        document.querySelector("#mainContent").appendChild(div);
    }
    });
        
}


function readArticle(elem){
    localStorage.setItem("readThisArticle",JSON.stringify(elem));
    window.location.href = "articlePage.html"
}
