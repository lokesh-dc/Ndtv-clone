let dataL=
[
{
    img:"https://c.ndtvimg.com/2022-06/kteqij6o_nupur-sharma_120x90_09_June_22.jpg",
p:"Condemn Offensive Comments Made By 2 BJP Officials: US On Prophet Row",
path:"https://www.ndtv.com/india-news/condemn-offensive-comments-made-by-2-bjp-officials-us-on-prophet-row-3074520#News_Trending"
},
{
img:"https://c.ndtvimg.com/2022-06/7p6d36p8_cops-push-train-ballia_120x90_17_June_22.jpg",
p:"Agnipath' Protests Intensify, Nitish Kumar's Deputy's Home Attacked",
path:"https://www.ndtv.com/india-news/agnipath-protest-2-coaches-of-passenger-train-set-on-fire-by-mob-in-bihar-3074583#News_Trending"
},
{img:"https://c.ndtvimg.com/2020-06/lcq3t9kg_vp-malik-240_240x180_16_June_20.jpg",
p:"People Burning Buses Not Fit For Armed Forces: Ex-Army Chief On Agnipath",
path:"https://www.ndtv.com/india-news/people-burning-buses-not-fit-for-armed-forces-ex-army-chief-on-agnipath-3074073#News_Trending"
},
{img:"https://c.ndtvimg.com/2022-06/6gvu6prg_mouniwingedliner1_120x90_15_June_22.jpg",
p:"Beauty-Mouni Roy's Winged Eyeliner-10 slides,click to watch",
path:"https://swirlster.ndtv.com/webstories/beauty/mouni-roys-winged-eyeliner-6060?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories"
},
{img:"https://c.ndtvimg.com/2022-06/d03bj7fg_keerthynaturalhairstyle1_120x90_16_June_22.jpg",
p:"Keerthy Suresh's Natural Hairstyle and tips for stronger hair",
path:"https://swirlster.ndtv.com/webstories/beauty/keerthy-sureshs-natural-hairstyle-6080?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories"
},
{img:"https://c.ndtvimg.com/2022-06/jtug41hg_instant-mango-pickle_120x90_15_June_22.jpg",
p:"Instant Mango Pickle Recipe,better than everything",
path:"https://food.ndtv.com/webstories/food/instant-mango-pickle-recipe-6062?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories"
}
]

dataL.forEach(function(elem){

   div1=document.createElement("div")
   div1.addEventListener("click",function(){
     window.location.href =elem.path
})
   let img=document.createElement("img")
    img.setAttribute("src", elem.img);
let h2= document.createElement("h2")  
h2.innerText=elem.p
div1.setAttribute("class","box1")
document.querySelector("#left").append(div1)
div1.append(img,h2)
})
let dataL2=[
{img:"https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/mobile/v/m/h/-original-imagbgxfanhg6u35.jpeg?q=90&downsize=100:*",
h1:"OPPO Reno7 5G (Starry Black, 256GB)",
h2:"₹28,999​",
path:"https://www.flipkart.com/oppo-reno7-5g-starry-black-256-gb/p/itm6110d8481be93?pid=MOBGB5WXJWMEHYG8&affid=HotDeals20&affExtParam2=ndtvconv-21&affExtParam1=109588654",
logo:"https://assets.gadgets360cdn.com/pricee/assets/store/202111/amazon-in_1635937977.png"
},
{img:"https://m.media-amazon.com/images/I/51mDPrTCtgL._SL160_.jpg?downsize=100:*",
h1:"HP 14s 11th Gen Intel Core i3- 8GB RAM/256GB SSD",
h2:"₹36,990.00",
path:"https://www.amazon.in/dp/B09MH9M5CV?tag=ndtv-desktop-story-lhs-21&linkCode=ogi&th=1&psc=1&ascsubtag=109588686",
logo:"https://assets.gadgets360cdn.com/pricee/assets/store/1518083376_1487933307_flipkart.png"
},
{img:"https://m.media-amazon.com/images/I/31hGmv4D5WL._SL160_.jpg?downsize=100:*",
h1:"ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic,",
h2:"₹159.00",
path:"https://www.amazon.in/dp/B09R24HMNW?tag=ndtv-desktop-story-lhs-21&linkCode=ogi&th=1&psc=1&ascsubtag=109588910",
logo:"https://assets.gadgets360cdn.com/pricee/assets/store/1518083376_1487933307_flipkart.png"
},
]
let h4=document.createElement("h3")
h4.innerText="SHOPPING"
h4.setAttribute("id","shop")
document.querySelector("#left").append(h4)
dataL2.forEach(function(elem){
    let div=document.createElement("div")
    div.addEventListener("click",function(){
        window.location.href=elem.path
    })
    div.setAttribute("id","leftAd")
     let div1=document.createElement("div")
     let div2=document.createElement("div")
     div.append(div1,div2)
     document.querySelector("#left").append(div)
     div1.setAttribute("id","topp")
     div2.setAttribute("id","price")
     let img=document.createElement("img")
     img.setAttribute("src",elem.img)
     let h2=document.createElement("h2")
     h2.innerText=elem.h1
     div1.append(img,h2)
     let h3=document.createElement("h2")
     h3.innerText=elem.h2
     let logo=document.createElement("img")
     logo.setAttribute("src",elem.logo)
    div2.append(h3,logo)
 })

 let dataM=[
    {
        img:"https://c.ndtvimg.com/2022-06/hs4t09no_pakistan-afp_625x300_11_June_22.jpg?im=FaceCrop,algorithm=dnn,width=240,height=180",
        h2:"Watch: All Bowled Dismissals By Pakistan Bowlers In ODI Series vs West Indies",
        p:"Pakistan had defeated West Indies 3-0 in the recently-concluded three-match ODI series.",
        path:"https://sports.ndtv.com/cricket/pakistan-vs-west-indies-all-the-bowled-dismissals-by-pakistan-bowlers-in-odi-series-watch-3075034"
    },
    {img:"https://c.ndtvimg.com/2022-04/b2vmcnb8_haryana-police-generic-240_120x90_30_April_22.jpg",
    h2:"Army Aspirant Kills Self Over 'Agnipath' Scheme Claim Reports, Cops Deny",
    p:"A 23-year-old man was found dead in a room in his rented house in Haryana's Rohtak on Thursday, a police official said.",
    path:"https://www.ndtv.com/india-news/army-aspirant-kills-self-over-agnipath-scheme-claim-reports-cops-deny-3074056"},
    {img:"https://c.ndtvimg.com/2022-06/spv2gsi8_traffic-police-240_120x90_17_June_22.jpg",
    h2:"Viral Video: Traffic Cop Sweeps Busy Road To Help Commuters, Internet Salutes Him",
    p:"A video is winning hearts on the internet where a traffic police is seen sweeping the road to remove small pebbles and rocks while the traffic signal is red. These unwanted particles could lead to tyre punctures.",
    path:"https://www.ndtv.com/offbeat/viral-video-traffic-cop-sweeps-busy-road-to-help-commuters-internet-salutes-him-3075006"},
    {img:"https://cache.careers360.mobi/media/presets/240X180/article_images/2022/6/17/BSEH-10th-result-2022-declared-at-bseh-org-in.jpg",
    h2:"Haryana Board 10th Result 2022 Live Updates: BSEH To Announce Class 10 Result Today, Websites To Check",
    p:"BSEH 10th Result 2022 Live: The Haryana Board Class 10 result 2022 will be announced today. Check BSEH 10th result 2022 on the official website- bseh.org.in",
    path:"https://www.ndtv.com/education/hbse-class-10th-result-2022-live-updates-haryana-board-result-declared-bseh-org-in-official-website-link-latest-news"},
    {img:"https://c.ndtvimg.com/2022-06/70pgaql8_sonia-gandhi-close-up_240x180_12_June_22.jpg",
    h2:"Sonia Gandhi Undergoes Medical Procedure For Respiratory Infection, Has Other Post-Covid Symptoms: Congress",
    p:"Sonia Gandhi being treated for respiratory infection along with post-Covid symptoms: Congress",
    path:"https://www.ndtv.com/india-news/sonia-gandhi-undergoes-medical-procedure-for-infection-has-other-post-covid-symptoms-congress-3074996"},
    {img:"https://c.ndtvimg.com/2022-06/8soqkkq_vidya-balan_120x90_17_June_22.jpg",
    h2:"Poco F4 5G, Poco X4 GT Price, Specifications Leaked Ahead of Launch",
    p:"Poco F4 5G and Poco X4 GT price and specifications have been leaked. The Poco F4 5G may be priced at EUR 430 (roughly ₹ 35,300), and the Poco X4 GT is said to carry a price tag of EUR 400 (roughly ₹ 32,850).",
    path:"https://gadgets360.com/mobiles/news/poco-f4-5g-x4-gt-price-eur-400-430-launch-june-23-specifications-features-3074994"},
    {img:"https://c.ndtvimg.com/2021-05/iudv44f8_elon-musk-bloomberg_120x90_18_May_21.jpg",
    h2:"At Twitter Meet, Elon Musk's Comments Trigger Snark On Message Boards",
    p:"Elon Musk met directly with Twitter Inc. employees for the first time since signing a $44 billion deal to acquire the social network.",
    path:"https://www.ndtv.com/world-news/at-twitter-meet-elon-musks-comments-trigger-snark-on-message-boards-3074984"},
    {img:"https://c.ndtvimg.com/2022-06/t3h2p22_sri-lanka-bloomberg_120x90_17_June_22.jpg",
    h2:"Sri Lanka Announces Day Off As Fuel Runs Out, No New Supplies",
    p:"Sri Lanka's economic activity is coming to a near standstill as the island nation, facing its worst financial crisis, runs out of fuel for transport and there's little signs of fresh supplies coming in.",
    path:"https://www.ndtv.com/world-news/sri-lanka-announces-day-off-as-fuel-runs-out-no-new-supplies-3074980"},
    
]
dataM.forEach(function(elem){
    let div=document.createElement("div")
    div.addEventListener("click",function(){
        window.location.href=elem.path
    })
    let div1=document.createElement("div")
    let div2=document.createElement("div")
    div.append(div1,div2)
    document.querySelector("#middle").append(div)
    div.setAttribute("id","middleN")
    div2.setAttribute("id","middleText")
    let img=document.createElement("img")
    img.setAttribute("src",elem.img)
    let h2=document.createElement("h2")
    h2.innerText=elem.h2
    let p=document.createElement("p")
    p.innerText=elem.p
    div1.append(img)
    div2.append(h2,p)
})

let dataR=[
{img:"https://c.ndtvimg.com/2022-05/fim8s91g_seema-khan_625x300_20_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
h3:"Seema Kiran Sajdeh Assembles,This Delicious Sweet Treat For Her Son Yohan On His Birthday"
},
{img:"https://c.ndtvimg.com/2022-06/bha6afsg_cleaning-a-pan_625x300_15_June_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
h3:"Watch: This Easy Hack Cleans Burnt Grease On Pans In A Matter Of Minutes"},
{img:"https://c.ndtvimg.com/2022-06/977c5ca_dogcat_625x300_16_June_22.jpg",
h3:"Video Showing Difference Between Dog And Cat Leaves Internet Amused"},
{img:"https://c.ndtvimg.com/2022-06/9ij0jdag_disha-patani-_625x300_15_June_22.jpg",
h3:"​HomeBollywoodMirror Mirror On The Wall, Disha Patani Is The Fittest Of Them All Mirror Mirror On The Wall, Disha Patani Is The Fittest Of Them All​"},
{img:"https://c.ndtvimg.com/2022-06/lfc2plog_father-son-train-selfie-650_625x300_16_June_22.jpg",
h3:"Viral Photo: Father-Son Duo's 'Jab We Met' Moment Crossing Paths As Railways Staff"}
]
dataR.forEach(function(elem){
let div=document.createElement("div")
div.setAttribute("id","rightt")
let img=document.createElement("img")
img.setAttribute("src",elem.img)
let h2=document.createElement("h2")
h2.innerText=elem.h3
div.append(img,h2)
document.querySelector("#right").append(div)
})