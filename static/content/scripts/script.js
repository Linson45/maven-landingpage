let multiCarousel = [];

$(document).ready(function() {

    // Fix navabr when opened on mobile
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
