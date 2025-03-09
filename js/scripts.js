$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    nav: true,
    margin: 20,
    responsive:{
        0:{
            items:1,
            loop: false,
        },
        1100:{
            items:3
        }
    }


})
