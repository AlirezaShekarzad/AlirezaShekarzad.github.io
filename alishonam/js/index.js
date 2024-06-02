jQuery(document).ready(function($){
    $('.featured-countainer').each(function(){
        $(".featured-post").slick({
            autoplay:true,
            autoplaySpeed:4500,
            dots:true,
            slidesToShow: 5,
            slidesToScroll:1,
            prevArrow:'',
            nextArrow:'',
        });
    });
        $(".most-popouler-post").slick({
            autoplay:true,
            autoplaySpeed:4500,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
    });
