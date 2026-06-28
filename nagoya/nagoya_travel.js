const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

// 画像の○を自動表示
function showSlide(index){

    slides.forEach(slide =>{
        slide.classList.remove("active");
    });

    dots.forEach(dot =>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

// 次へ
next.addEventListener("click",function(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

});

// 前へ
prev.addEventListener("click",function(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

});

// 自動再生（3秒ごと）
setInterval(function(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},3000);
//　画像の○をクリックしたらその画像を表示する
const dotsContainer = document.querySelector(".dots");

slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if(index === 0){
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        current = index;
        showSlide(current);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current = index;

        showSlide(current);

    });

});