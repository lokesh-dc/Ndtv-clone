
import {articles} from './test.js';
let presentArticle = JSON.parse(localStorage.getItem("readThisArticle"));
window.addEventListener("load",function(event){
    event.preventDefault();
    displayNews(presentArticle,articles);
})


function displayNews(presentArticle,articles){
    let div = document.querySelector("#content");
    let headlinediv = document.createElement("div");
    let headline = document.createElement("h1");
    headline.innerText = presentArticle.headline;
    let description = document.createElement("h4");
    description.innerText = presentArticle.description;
    headlinediv.append(headline,description);
    div.append(headlinediv);

    var newsDiv = document.createElement("div");
    newsDiv.setAttribute("class","left")
    articles.forEach(function(elem,index){
        console.log(elem)
        if(index<10){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imageUrl);
        let news = document.createElement("h2");
        news.innerText = elem.headline;

        div.append(img,news);
        newsDiv.append(div);
        document.querySelector("#content").append(newsDiv);
        }
    });
    

    let paraDiv = document.createElement("div");
    console.log()
    let img=document.querySelector("img");
    if(presentArticle.imageUrl == undefined){
        img.setAttribute("src","https://static01.nyt.com/images/2020/07/21/autossell/sports-reboot-promo-still/sports-reboot-promo-still-videoSixteenByNineJumbo1600.jpg");
    }
    else{
    img.setAttribute("src",presentArticle.imageUrl);
    }
    let para = document.createElement("p");
    para.innerText = "New Delhi: Navya Naveli Nanda, who is currently holidaying in Japan, has shared a new picture on her Instagram handle, and this time, she is not alone. Amitabh Bachchan's granddaughter has shared a photo with her father, Nikhil Nanda, and has captioned it as just me & my dad exploring the world together, followed with a heart emoticon. In the post, Navya is seen resting her head on father Nikhil's shoulder as the father-daughter duo poses for the camera. Navya looks pretty in a graphic white t-shirt paired with high-waist jeans. Nikhil, on the other hand, looks sharp in a black suit paired with a white shirt and blue jeans. Soon after Navya Naveli Nanda shared the post, her family and friends flooded the comment section. Neetu Kapoor, the aunt of Nikhil Nanda, wrote, Too adorable both of you, while Sikandar Kher, Neha Dhupia and others dropped heart emoticons. Check out the post below:\n new delhi: Navya Naveli Nanda, who is currently holidaying in Japan, has shared a new picture on her Instagram handle, and this time, she is not alone. Amitabh Bachchan's granddaughter has shared a photo with her father, Nikhil Nanda, and has captioned it as just me & my dad exploring the world together, followed with a heart emoticon. In the post, Navya is seen resting her head on father Nikhil's shoulder as the father-daughter duo poses for the camera. Navya looks pretty in a graphic white t-shirt paired with high-waist jeans. Nikhil, on the other hand, looks sharp in a black suit paired with a white shirt and blue jeans. Soon after Navya Naveli Nanda shared the post, her family and friends flooded the comment section. Neetu Kapoor, the aunt of Nikhil Nanda, wrote, Too adorable both of you, while Sikandar Kher, Neha Dhupia and others dropped heart emoticons. Check out the post below: \n new delhi: Navya Naveli Nanda, who is currently holidaying in Japan, has shared a new picture on her Instagram handle, and this time, she is not alone. Amitabh Bachchan's granddaughter has shared a photo with her father, Nikhil Nanda, and has captioned it as just me & my dad exploring the world together, followed with a heart emoticon. In the post, Navya is seen resting her head on father Nikhil's shoulder as the father-daughter duo poses for the camera. Navya looks pretty in a graphic white t-shirt paired with high-waist jeans. Nikhil, on the other hand, looks sharp in a black suit paired with a white shirt and blue jeans. Soon after Navya Naveli Nanda shared the post, her family and friends flooded the comment section. Neetu Kapoor, the aunt of Nikhil Nanda, wrote, Too adorable both of you, while Sikandar Kher, Neha Dhupia and others dropped heart emoticons. Check out the post below: "
    paraDiv.append(img,para);
    document.querySelector("#content").append(paraDiv);

    var rightDiv = document.createElement("div");
    rightDiv.setAttribute("class","right")
    articles.forEach(function(elem,index){
        if(index<5 && elem.headline != presentArticle.headline){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imageUrl);
        let news = document.createElement("h2");
        news.innerText = elem.headline;

        div.append(img,news);
        rightDiv.append(div);
        document.querySelector("#content").append(rightDiv);
        }
    });
}