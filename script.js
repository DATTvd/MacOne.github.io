const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

//Set width for slide
const setSlidePotision = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePotision);


//move to slide
const movetoSlide = (track, currentSlide, targetSlide) =>{
    const currrentSlide = track.querySelector('.current-slide');
    track.style.transform ='translateX(-' + targetSlide.style.left + ')';
    currrentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    
}

  const moveToDotPrev = (index) =>{
  const indexTarget = index - 1; 
  const currentDot = dotsNav.querySelector('.active');
  currentDot.classList.remove('active');
  const targetDot = dots[indexTarget];
  targetDot.classList.add('active');
}

const moveToDotNext = (index) =>{
  const indexTarget = parseInt(index) + 1; 
  const currentDot = dotsNav.querySelector('.active');
  currentDot.classList.remove('active');
  const targetDot = dots[indexTarget];
  targetDot.classList.add('active');
}

// when click left, back slide to the left

auToSlide = prevButton.addEventListener('click', e => {
    const currrentSlide = track.querySelector('.current-slide'); 
    const index = currrentSlide.getAttribute('ID')
    const prevSlide = currrentSlide.previousElementSibling; // lấy element ở trước(trên)
    movetoSlide(track, currrentSlide, prevSlide);
    moveToDotPrev(index);
})

// when click right, move slide to the right

nextButton.addEventListener('click', e => {
    const currrentSlide = track.querySelector('.current-slide');
    const index = currrentSlide.getAttribute('ID')
    const nextSlide = currrentSlide.nextElementSibling;
    // lấy element ở sau (dưới)
   // move to the next silde 
   movetoSlide(track, currrentSlide, nextSlide);
   moveToDotNext(index);
})


// Init arrWidth
var arrWidth = [];
for(i=0; i<slides.length; i++){
  const slideWidthArr = slideWidth * i + 'px';
  arrWidth.push(slideWidthArr)
}

dotsNav.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
    dots.forEach(item => item.classList.remove("active"));
    
    if (e.target.classList.contains("first")) {
        track.style.transform = 'translateX(-' + arrWidth[0] + ')';      
        e.target.classList.add("active");

    } else if (e.target.classList.contains("second")) {
        track.style.transform = 'translateX(-' + arrWidth[1] + ')';
        e.target.classList.add("active");

    } else if (e.target.classList.contains('third')){
        track.style.transform = 'translateX(-' + arrWidth[2] + ')';
        e.target.classList.add('active');
    }
    else if (e.target.classList.contains('fourth')){
        track.style.transform = 'translateX(-' + arrWidth[3] + ')';
        e.target.classList.add('active');
    } 
    else if (e.target.classList.contains('fifth')){
        track.style.transform = 'translateX(-' + arrWidth[4] + ')';
        e.target.classList.add('active');
    }
    else if (e.target.classList.contains('sixth')){
        track.style.transform = 'translateX(-' + arrWidth[5] + ')';
        e.target.classList.add('active');
    }
  }
});


// Start auto play slide herder-inner

function autoRunSlide1(){
    track.style.transform = 'translateX(-' + arrWidth[0] + ')';
}
function autoRunSlide2(){
    track.style.transform = 'translateX(-' + arrWidth[1] + ')';
}
function autoRunSlide3(){
    track.style.transform = 'translateX(-' + arrWidth[2] + ')';
}
function autoRunSlide4(){
    track.style.transform = 'translateX(-' + arrWidth[3] + ')';
}
function autoRunSlide5(){
    track.style.transform = 'translateX(-' + arrWidth[4] + ')';
}
function autoRunSlide6(){
    track.style.transform = 'translateX(-' + arrWidth[5] + ')';
}

setInterval(() => {
    setTimeout(() => {
        autoRunSlide2();
    }, 3000);
    setTimeout(() => {
        autoRunSlide3();
    }, 6000);
    setTimeout(() => {
        autoRunSlide4();
    }, 9000);
    setTimeout(() => {
        autoRunSlide5();
    }, 12000);
    setTimeout(() => {
        autoRunSlide6();
    },15000); 
}, 15000);

// End auto play slide herder-inner

//Start auto play slide item hot
// $(function(){
//     $('.autoplay').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         centerPadding: '10px',
//         dots: false,
//         swipe: true,
//         prevArrow: '.carousel-control-prev',
//         nextArrow: '.carousel-control-next',
//       });   
// });
//End auto play slide item hot


//Start toggle list-item-product
const nameProduct = document.getElementById('name-product-1');
const kindOfProduct = document.getElementById('kind-of-product-1');

console.log(kindOfProduct);
nameProduct.addEventListener('click', e =>{
    console.log('id1');
    kindOfProduct.style.height = '100%';
});
//End toggle list-item-product


