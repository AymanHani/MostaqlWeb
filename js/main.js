$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});

// strad code a js
let swicther = document.querySelectorAll(".list-profile ul li");

let img1 = document.querySelectorAll(".mohammed-img");

swicther.forEach((li) =>{
  li.addEventListener("click" , romoveLink);
  li.addEventListener("click" , manage);
});


// strad romove active

function romoveLink(){
  swicther.forEach((li) =>{
    li.classList.remove("profile-active");
    this.classList.add("profile-active");
  })
}
// strad img manage
function manage(){
  img1.forEach((img)=>{
    img.style.display='none';
  });
  document.querySelectorAll(this.dataset.cat).forEach((el)=>{
    el.style.display='block';
  });
  
}

//Javacript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

AOS.init();

