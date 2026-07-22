let card = document.querySelector(".cardfollower")

if (card) {
    card.style.transition = "top 0.18s linear, left 0.18s linear";
    document.addEventListener("mousemove", (e) => {
        card.style.top = e.clientY + "px";
        card.style.left = e.clientX + "px";
    });
}


let menudiv = document.querySelector(".menu")
let click = document.querySelector("#menuClick")
let flag = 0;
// let texts = document.querySelector(".texts")
let button = document.querySelector(".btn1")
const texts = document.querySelector(".texts");

click.addEventListener("click", () => {
    
    if (!flag) {
        setTimeout(() => {
        texts.style.bottom = "20%";
        texts.style.opacity = 1;
        texts.style.transition = "all 0.5s ease-out";
        }, 400);
        menudiv.style.top = "-45%"
        menudiv.style.height = "180%"
        menudiv.style.transition = "linear 1s"
        menudiv.style.rotate = "15deg"
        flag = 1
    } else {
        menudiv.style.top = "-100%"
        menudiv.style.height = "100%"
        menudiv.style.transition = "linear 1s"
        menudiv.style.rotate = "0deg"
        flag = 0;
        texts.style.opacity = 0;
    }

    
    
})




// let texts = document.querySelector(".texts h1")
// let button = document.querySelector(".btn1")

// button.addEventListener("click",()=>{
//     texts.style.bottom = "40%";
//     texts.style.opacity = 1;
//     texts.style.transition = "all 0.5s ease-out";
// })

