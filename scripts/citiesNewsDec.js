
import {data,data2,data3} from '/scripts/arrObjData.js';
let presentArticle = JSON.parse(localStorage.getItem("readThisArticle"));
window.addEventListener("load",function(event){
    event.preventDefault();
    displayNews(presentArticle,data,data2,data3);
})

let pages = document.querySelector("body>p").innerText;
pages += " " + presentArticle.headline;
pages = pages.trim().split(">");
console.log(pages);

function displayNews(presentArticle,data,data2,data3){
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
    data,data2,data3.forEach(function(elem,index){
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
    let img=document.querySelector("img");
    img.setAttribute("src",presentArticle.imageUrl);
    let para = document.createElement("p");
    para.innerText = `Chennai: An AIADMK functionary was injured in a clash among party workers at the AIADMK headquarters on Saturday amid demands for a singular leadership.
    The incident took place as the party's coordinator O Panneerselvam (OPS) and the committee was drafting the agenda for the upcoming general council and executive meeting of the party on June 23.
    
    "They attacked me shouting that I am a supporter of Edappadi Palanisamy and Jayakumar. Outsiders have come in," said the AIADMK functionary while bleeding from his face.
    
    A sense of unease began a few days ago after a district secretaries meeting, with senior party leader D Jayakumar announcing that a section of district secretaries wanted a single leadership for the party.
    
    Presently, OPS is the coordinator of the party and former Chief Minister Edappadi K Palaniswami (EPS) is the joint coordinator and Leader of the Opposition.
    
    On Thursday, OPS had wanted the dual leadership to continue saying the party had earlier adopted to have the late Jayalalithaa as the "eternal" General Secretary of the party and any move to appoint a General Secretary would be a betrayal.
    
    He also mooted the idea of a "14-member high-level committee with senior leaders who had worked with the late founder of AIADMK MG Ramachandran and his successor the late Jayalalithaa".
    
    "They would decide on issues and the coordinator and joint coordinator would give consent only to what they decide," OPS added.
    
    The party, founded by MG Ramachandran after he walked out of the DMK, was headed by Jayalalithaa after his death.
    
    While Jayalalithaa's friend and aide Ms Sasikala was crowned party chief after her death, she sacked OPS and made EPS the chief minister after her conviction in the disproportionate assets case in which she was the prime accused.
    
    However as she remained in jail, EPS and OPS patched up, expelled her from the party, and created a dual leadership with OPS as coordinator of AIADMK and EPS as joint coordinator.
    
    EPS also inducted OPS as deputy chief minister in the government.
    
    Though the Thevar community, to which OPS and Ms Sasikala belong, has commanded a dominant role in AIADMK for decades, EPS' Gounder community has brought the party under control.`  
    paraDiv.append(img,para);
    document.querySelector("#content").append(paraDiv);

    var rightDiv = document.createElement("div");
    rightDiv.setAttribute("class","right")
    data,data2,data3.forEach(function(elem,index){
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