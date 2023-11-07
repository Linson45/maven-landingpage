$(document).ready(function() {
    CarouselMaxHeight();

    // Stop video on close of popup
    if($('.video-modal').length > 0) {
        $('.video-modal').on('hidden.bs.modal', function (e) {
            $('.video-modal .video-iframe').attr("src", $(".video-modal  .video-iframe").attr("src"));
        });
    }
    $(".navbar-toggler").click(function() {
        $("body").toggleClass("navbar-fixed");
    });
});


function CarouselMaxHeight() {
    let bannerCarousel_id = $('#banner-carousel'),
        QuoteCarousel_id = $('#quote-carousel');

    // Carousel item max height fix
    if (bannerCarousel_id.length > 0) {
      let carouselItem = $("#banner-carousel .carousel-item");
      getMaxHeight(carouselItem);
    }
    if (QuoteCarousel_id.length > 0) {
      let carouselItem = $("#quote-carousel .carousel-item");
      getMaxHeight(carouselItem);
    }

    $(window).on('load resize orientationchange', function () {
        CarouselMaxHeight();
    });
}

// Get max height
function getMaxHeight(element) {
    let maxHeight = 0;
    $(element).css('display','block');
    $(element).each(function(){
        let maxContent = $(this).find('.max-height-content');
        if(!maxContent.length > 0) {
            $(element).wrapInner('<div class="max-height-content"></div>');
        }
        let maxHeightContent = maxContent.outerHeight();
        if(maxHeightContent > maxHeight){
            maxHeight = maxHeightContent;
        }
    });
    $(element).attr('style','');
    $(element).css("minHeight", maxHeight);
}
