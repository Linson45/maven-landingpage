let multiCarousel = [];

$(document).ready(function() {
    CarouselMaxHeight();

    $(".navbar-toggler").click(function() {
        $("body").toggleClass("navbar-fixed");
    });

    // Get data of all the carousel items 
    $('.multicarousel').each(function() {
        let carouselID = $(this).attr('id'),
            carouselObj;
        $('#' + carouselID + " .carousel-item").each(function(index) {
            carouselObj = {};
            carouselObj['name'] = carouselID;
            carouselObj['data'] = $(this).html();
            multiCarousel.push(carouselObj);
        });
    });
});

$(window).on("load",function(e) {
    slideCarousel();
});


function CarouselMaxHeight() {
    let bannerCarousel_id = $('#how-it-works-carousel');

    // Carousel item max height fix
    if (bannerCarousel_id.length > 0) {
      let carouselItem = $("#how-it-works-carousel .carousel-item");
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

function slideCarousel() {
    $('.multicarousel').each(function() {
        let carouselID = $(this).attr('id'),
            itemsToSlide = 1;
        const totalSlides = $('#' + carouselID + ' .carousel-item').length;
        appendsSlides(itemsToSlide, totalSlides, carouselID)
    });
}

// Append slides to each carousel item 
function appendsSlides(itemsToSlide, totalSlides, carouselID) {
    let carouselData = multiCarousel.filter(function(obj) {
        return (obj.name === carouselID);
    });
    $('#' + carouselID + " .carousel-item").each(function(index) {
        $(this).html("");
        let count = 0;
        count += itemsToSlide * index;
        for (let i = 0; i < totalSlides; i++) {
            if (count >= totalSlides) {
                count = (count - totalSlides) % totalSlides;
            }
            $(this).append(carouselData[count].data);
            count++;
        }
    });
}
