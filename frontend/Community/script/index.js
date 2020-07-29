(function($) {
    var page0End = false;
    var page1End = false;
    var page2End = false;
    var page3End = false;
  
    const scrollFunc = function(e) {
        e = e || window.event;
        if ($(document).scrollTop() >= $(".service-container0").offset().top - 800 && !page0End) {
            $(".service0").removeClass('animate__zoomOut').css("visibility","visible").addClass("animate__zoomIn");
            page0End = true;
        }
        if ($(document).scrollTop() >= $(".service-container1").offset().top - 800 && !page1End) {
            $(".service1").removeClass('animate__zoomOut').css("visibility","visible").addClass("animate__zoomIn");
            page0End = true;
        }
        if ($(document).scrollTop() >= $(".service-container2").offset().top - 800 && !page2End) {
            $(".service2").removeClass('animate__zoomOut').css("visibility","visible").addClass("animate__zoomIn");
            page0End = true;
        }
        if ($(document).scrollTop() >= $(".service-container3").offset().top - 800 && !page3End) {
            $(".service3").removeClass('animate__zoomOut').css("visibility","visible").addClass("animate__zoomIn");
            page0End = true;
        }
    }
  
    if (document.addEventListener) { 
      document.addEventListener('DOMMouseScroll', scrollFunc, false); 
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
    scrollFunc();
  })(jQuery);