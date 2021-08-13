
 document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider',{
        over: true,
        rewind: true,
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 4000,
        drag: true,   
        pagination: true
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide1',{
        rewind: true,
        perPage: 4,
        perMove: 1,
        pagination: false,
        autoplay: true,
        interval: 3000,
        gap: 5,
        breakpoints: {
		992: {
			perPage: 3,
		},
        600: {
            perPage: 2,
        }
	}
    } ).mount();
} );

const nameProduct = document.querySelectorAll('.name-product');
const iconNameProduct = document.querySelectorAll('.icon-name-product')

console.log(nameProduct);

nameProduct.forEach( item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(this.getAttribute('open')){
            this.removeAttribute('open');
        }
        else{
            this.setAttribute('open', true);
        }
    })
})