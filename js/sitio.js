/*-----------------
    INICIAMOS WOW
------------------- */
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
var scroll = new SmoothScroll('a[href*="#agencia"]', {
	speed: 1000
    
});

var scroll = new SmoothScroll('a[href*="#encabezado"]', {
	speed: 1000
});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
 $(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});

/*------------
OWL CAROUSEL
-------------*/

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoWidth: false,

    navText: ['<i class="fa fa-arrow-circle-left" title="Anterior"></i>',
        '<i class="fa  fa-arrow-circle-right" title="Siguiente"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2,
            margin: 30
        },
        800: {
            items: 3,
            margin: 30
        },
        1000: {
            items: 3,
            margin: 30
        }
    }
});