const itemSlide = document.querySelector('.carousel-inner');
const slides = Array.from(itemSlide.children);
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const dot = document.querySelector('.dot');
const dots = Array.from(dot.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';
// slides[5].style.left = slideWidth * 5 + 'px';

const setSlidePotision = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePotision);

// when click right, move slide to the right

nextButton.addEventListener('click', e => {
    const currrentSlide = itemSlide.querySelector('.current-slide');
    const nextSlide = currrentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
   // move to the next silde 
    itemSlide.style.transform = 'translateX(' + amountToMove + ')';
})