let imgslider=document.getElementById('latest')
console.log(imgslider.scrollWidth)
let total=imgslider.scrollWidth-400;
let count=0;
document.getElementById('btn').addEventListener('click',function(){
    //  count=total;
    count+=200;
    console.log(count,total)
    if(count>=total){
        count=0;
    }   
    // imgslider.scrollTo(count,0)
    imgslider.scrollTo({
        top:0,
        left:count,
        behavior:'smooth'
    })
})
document.getElementById('btn2').addEventListener('click',function(){
    // let total=imgslider.scrollWidth;
    count+=200;
    if(count>=total){
        count=0;
    }
    imgslider.scrollTo({
        top:0,
        left:count,
        behavior:'smooth'
    })
    console.log(count,total) 
})