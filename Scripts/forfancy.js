$(document).ready(function () {
    $('.multiple-items-vert').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.multiple-items-hor').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});