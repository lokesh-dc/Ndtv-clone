import {articles} from './test.js';

window.addEventListener("load",function (){
    displayNews(articles); // main column

})

function displayNews(articles){
    articles.forEach(function(elem){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        let head = document.createElement("p");
        head.innerText = elem.headline;

        div.append(img,head);
        document.querySelector("#mainContent").appendChild(div);
    });
        
}

