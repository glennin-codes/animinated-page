
const loaderText=document.querySelector(".loading-text")
const bG=document.querySelector(".bg")
let load=0
let int=setInterval(blurring,30)
function blurring(){
    load++
    if(load>99){
      clearInterval(int)
    }

    loaderText.textContent=`${load}%`
    //maping arange of numbers to other  range of numbers
    loaderText.style.opacity=scale(load, 0, 100, 1, 0)
    bG.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`
}
//maping
     const scale=(num,in_min, in_max,out_min,out_max)=>{
        return((num - in_min)*(out_max-out_min)) /(in_max - in_min) + out_min
     }
     