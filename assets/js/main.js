(function ($) {
   $(document).ready(function () {   
    let logoSlider = new Swiper(".logo-slider", {
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

    var rt = $("").offset().right
    console.log(rt); 


    
   });
})(jQuery);

