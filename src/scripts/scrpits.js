jQuery(document).ready(function($) {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
});