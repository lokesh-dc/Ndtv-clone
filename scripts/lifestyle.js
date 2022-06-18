let imageArr = [
  {
    img: "https://c.ndtvimg.com/2022-06/o802htd8_sunil-harshana-aravalli-range_625x300_10_June_22.jpg",
    text: "मुश्किलों को परे हटा अरावली के पहाड़ों और मांगर के जंगलों को बचाने में जुटे सुनील हर्षाना",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/v5bn8hmg_bengaluru-prithvi-mangiri_625x300_09_June_22.jpg",
    text: "मैकेनिकल इंजीनियर से ड्रमर बने पृथ्वी मंगिरी से अब बिजली विभाग खरीदता है बिजली, कभी बिल से थे परेशा",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/turanmf_beru-matimand-pratishthan_625x300_08_June_22.jpg",
    text: "दिव्यांगजनों के लिए सम्मान की जिंदगी जीने का अवसर बना बेरू मतिमंद प्रतिष्ठान",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/8u9mqdmo_edwin-joseph_625x300_03_June_22.jpg",
    text: "बेंगलुरू के Sparrow Man के तौर पर पहचाने जाते हैं एडविन जोसेफ",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/2uvvr6jo_lottoland-warriors_625x300_13_June_22.jpg",
    text: "बेंगलुरू के इस घर में केवल Rain water का ही होता है उपयोग",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/2ie4kmk8_lottoland-warriors_625x300_02_June_22.jpg",
    text: "Meet Bengaluru's Sparrow Man - Edwin Joseph",
  },
];

let icon_circle_left = document.querySelector(".icon-circle-left");
let icon_circle_right = document.querySelector(".icon-circle-right");
let selectedImageArr = [0, 1, 2];

function handleSlideLeft() {
  let length = imageArr.length - 1;
  let newSelectedImageArr = [];
  let count = selectedImageArr[selectedImageArr.length - 1];
  for (let i = 0; i < length; i++) {
    if (count === 0) {
      count = length;
    } else count--;
    newSelectedImageArr.push(count);
    if (newSelectedImageArr.length >= selectedImageArr.length) {
      break;
    }
  }
  selectedImageArr = newSelectedImageArr.reverse();
  slider(selectedImageArr);
}

function handleSlideRight() {
  let length = imageArr.length - 1;
  let newSelectedImageArr = [];
  let count = selectedImageArr[0];
  for (let i = 0; i < length; i++) {
    count++;
    if (count >= 6) count = 0;
    newSelectedImageArr.push(count);
    if (newSelectedImageArr.length >= selectedImageArr.length) {
      break;
    }
  }
  selectedImageArr = newSelectedImageArr;
  slider(selectedImageArr);
}

icon_circle_left.addEventListener("click", function () {
  handleSlideLeft();
});
icon_circle_right.addEventListener("click", function () {
  handleSlideRight();
});

function readArticle(elem) {
  localStorage.setItem("readThisArticle", JSON.stringify(elem));
  window.location.href = "articlePage.html"
}

function slider() {
  document.querySelector(".cards").innerHTML = null;
  selectedImageArr.forEach(function (index) {
    let elem = imageArr[index];
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);
    let h2 = document.createElement("h2");
    h2.innerText = elem.text;
    div.append(img, h2);
    div.addEventListener("click", function () {
      let newData = {
        category: "LifeStyle",
        description: `${elem.text}`,
        headline: `${elem.text}`,
        imageUrl: elem.img,
        postedDate: new Date().toISOString().slice(0, 10),
      };
      readArticle(newData);
    });
    document.querySelector(".cards").append(div);
  });
}
slider(selectedImageArr);

let imageArray = [
  {
    img: "https://c.ndtvimg.com/2022-06/ejuh89fo_manushi-chhillar_240x180_16_June_22.jpg",
    text1: "Style",
    text: "Manushi Chhillar Gives The Right Vibes For The Weekend In A Chic Playsuit",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/rjc6m55o_samanthastripedsareecarousel_240x180_16_June_22.jpg",
    text1: "Style",
    text: "Samantha Ruth Prabhu's Striped Saree Gloriously Glows With A Burst Of Warm Yellow",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/0ag67gu8_shilpa-shetty-_240x180_17_June_22.jpg",
    text1: "Style",
    text: "Shilpa Shetty In A Pink Sequin Saree Is Setting The Perfect Mood For The Weekend",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/jksmpba8_kriti-sanon_240x180_17_June_22.jpg",
    text1: "Style",
    text: "Dressed To Kill In A Sheer Corset Gown, There's No Doubt That Kriti Sanon Is A Game Changer",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/klefcsog_malika-arora_240x180_17_June_22.jpg",
    text1: "Style",
    text: "It's Hard To Glance Away From Malika Arora In A Stunning Metallic Slip Dress",
  },
];

let index = 0;

function sliderImage(imageObj) {
  document.querySelector("#upperBox").innerHTML = null;
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", imageObj.img);

  let h2 = document.createElement("h2");
  h2.innerText = imageObj.text1;
  let h1 = document.createElement("h1");
  h1.innerText = imageObj.text;
  div.append(img, h2, h1);
  document.querySelector("#upperBox").append(div);
}
sliderImage(imageArray[index]);

let left = document.querySelector(".circle-left");

left.addEventListener("click", () => {
  if (index === 0) {
    index = imageArray.length - 1;
  } else index--;
  sliderImage(imageArray[index]);
});
let right = document.querySelector(".circle-right");
right.addEventListener("click", () => {
  if (index === imageArray.length - 1) {
    index = 0;
  } else index++;
  sliderImage(imageArray[index]);
});
