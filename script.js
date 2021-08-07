const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
console.log(slides)
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

// when click left, back slide to the left

prevButton.addEventListener('click', e => {
    const currrentSlide = track.querySelector('.current-slide');
    const prevSlide = currrentSlide.previousElementSibling; // lấy element ở trước(trên)
   movetoSlide(track, currrentSlide, prevSlide);
})

// when click right, move slide to the right

nextButton.addEventListener('click', e => {
    const currrentSlide = track.querySelector('.current-slide');
    const nextSlide = currrentSlide.nextElementSibling; // lấy element ở sau (dưới)
   // move to the next silde 
   movetoSlide(track, currrentSlide, nextSlide);
})


// Init arrWidth
var arrWidth = [];

slideWidthArr = slideWidth * 0 + 'px';
arrWidth.push(slideWidthArr)
slideWidthArr = slideWidth * 1 + 'px';
arrWidth.push(slideWidthArr)
slideWidthArr = slideWidth * 2 + 'px';
arrWidth.push(slideWidthArr)
slideWidthArr = slideWidth * 3 + 'px';
arrWidth.push(slideWidthArr)
slideWidthArr = slideWidth * 4 + 'px';
arrWidth.push(slideWidthArr)
slideWidthArr = slideWidth * 5 + 'px';
arrWidth.push(slideWidthArr)


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

// prevButton.addEventListener("click", e => {

//     slides[0].getAttribute('id') == ('first')
//         track.style.transform = 'translateX(-' + arrWidth[0] + ')';      


//     slides[1].getAttribute('id') == ('second')
//         track.style.transform = 'translateX(-' + arrWidth[1] + ')';
        
//     slides[2].getAttribute('id') == ('third')
//         track.style.transform = 'translateX(-' + arrWidth[2] + ')';
        
//     slides[3].getAttribute('id') == ('fourth')
//       track.style.transform = 'translateX(-' + arrWidth[3] + ')';
    
//     slides[4].getAttribute('id') == ('fifth')
//       track.style.transform = 'translateX(-' + arrWidth[4] + ')';
//     slides[5].getAttribute('id') == ('sixth')
//       track.style.transform = 'translateX(-' + arrWidth[5] + ')';    

//   });




