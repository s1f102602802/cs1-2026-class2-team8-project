const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

// 画像を表示
function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
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