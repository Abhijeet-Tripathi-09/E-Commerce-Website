let scrollContainer = document.querySelector("#text");
let backBtn = document.querySelector("#backbtn");
let nextBtn = document.querySelector("#nextbtn");
let backBtni = document.querySelector("#backbtn i");
let nextBtni = document.querySelector("#nextbtn i");


nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1155;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1260;
});

// ---------------------------------------------------

var t1 = gsap.timeline({scrollTrigger:{
  trigger: ".strip",
  start:"10% 10%",
  end:"250% 250%",
  scrub:true,
  // markers:true,
}});

t1.to(".navbar", {
  top: 0,
})


// ------------------------------------------------------


let scrollContainer2 = document.querySelector(".full-content");
let backBtn2 = document.querySelector("#backbtn2");
let nextBtn2 = document.querySelector("#nextbtn2");
let backBtni2 = document.querySelector("#backbtn2 i");
let nextBtni2 = document.querySelector("#nextbtn2 i");


nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 1330;
});

backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 1330;
});