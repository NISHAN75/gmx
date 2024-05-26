(function ($) {
   $(document).ready(function () {   
    var logoSlider = new Swiper(".logo-slider", {
        slidesPerView: 4,
        spaceBetween: 66,
        loop:true,
        autoplay: {
          delay: 2500,
        },
        breakpoints: {
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
    });
    
   });
})(jQuery);

