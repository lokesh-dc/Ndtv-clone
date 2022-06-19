import {data,data2,data3} from '/scripts/arrObjData.js';
displaymidNews(data)

function displaymidNews(data) {
  data.forEach(function (elem,index) {
    if(index<30){
    let div = document.createElement("div");

    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.imageUrl);
    img.addEventListener("click",function(){
      readArticle(elem);
})
    let div2 = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = elem.headline;
    h2.addEventListener("click",function(){
      readArticle(elem);
})
    let p1 = document.createElement("p");
    p1.innerText = elem.postedDate;
    let p2 = document.createElement("p");
    p2.innerText = elem.description;

    let btn = document.createElement("button");
    btn.setAttribute("id", "readButton")
    btn.innerText = "Read Later"
    btn.addEventListener("click",function(){
      flag = readLater(elem);
  });

    div1.setAttribute("class", "image");
    div2.setAttribute("class", "innertext");
    document.querySelector("#midNews").append(div);
    div.append(div1, div2);
    div1.append(img);
    div2.append(h2, p1, p2, btn);
}
  });
}


displayTreadingNews(data2)

function displayTreadingNews(data2) {
  data2.forEach(function (elem,index) {
    if(index<40){
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", elem.imageUrl);

    let p = document.createElement("p");
    p.innerText = elem.headline;

    div.append(img, p);
    document.querySelector("#treadingNews").append(div);
    div.setAttribute("class", "inner");
  }
  });

}



displayRightFun(data3)
function displayRightFun(data3) {
  data3.forEach(function (el,index) {
    if(index<30){
    let div = document.createElement("div");
    // div.addEventListener("click", function () {
    //   window.location.href = el.path;
    // });
    let img = document.createElement("img");
    img.setAttribute("src", el.imageUrl);
    let h4 = document.createElement("h4");
    h4.innerText = el.headline;
    div.append(img, h4);
    document.querySelector("#rightSideNews").append(div);

    div.setAttribute("class", "innerBox");
    }
  });
}



let filter = document.querySelector("select")
filter.addEventListener("change", displayChange)



//  FILTER METHOD
function displayChange() {

  let change = document.querySelector("#changeName").value
  console.log(change)

  if (change == "") {
    window.location.reload()
  }

  console.log(data2)
  let selected = data2.filter(function (el) {

    document.querySelector("#treadingNews").innerHTML = "";

    return el.cityName == change
  })
  let selected2 = data.filter(function (el) {

    document.querySelector("#midNews").innerHTML = "";

    return el.cityName == change
  })

  let selected3 = data3.filter(function (el) {

    document.querySelector("#rightSideNews").innerHTML = "";

    return el.cityName == change
  })

  let symbol = document.createElement("span")
  symbol.setAttribute("class", "symbol")
  symbol.innerText = ">"

  let heading = document.querySelector(".heading")
  heading.innerText = change
  document.querySelector(".showName").innerText = ">          " + change
  displayTreadingNews(selected)
  displaymidNews(selected2)
  displayRightFun(selected3)

}

let redLaterData = JSON.parse(localStorage.getItem("readLaterArticles")) || [];
function readLater(elem){
    redLaterData.push(elem);
    localStorage.setItem("readLaterArticles",JSON.stringify(redLaterData));
    alert("Article added to Read Later")
}

function readArticle(elem){
    localStorage.setItem("readThisArticle",JSON.stringify(elem));
    window.location.href = "citiesNewsDec.html"
}
