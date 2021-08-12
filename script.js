

 document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider',{
        over: true,
        rewind: true,
        perPage: 1,
        perMove: 1,
        autoplay: false,
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
        autoplay: false,
        interval: 3000,
        gap: 10,
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