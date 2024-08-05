
AOS.init({
  duration: 400,
  delay: 400,
});

$(document).ready(function () {
  $('.navbar-toggler').click(function(){
    $('.site-header').toggleClass('menu-active');
    $(this).toggleClass('open');
  })
  
  if($(window).width() < 999){
    $('.explore-links').click(function(){
      $(this).next().slideToggle();
    });    
  }
  if ($(".intro-slider").length > 0) {
    $(".intro-slider").owlCarousel({
      items: 1,
      margin: 0,
      nav: true,
      dots: true,
      navText: [
        '<span class="prev"></span>',
        '<span class="next"></span>',
      ],
      loop: false,
      autoplay: false,
      autoplayTimeout: 4000,
      slideSpeed: 2000,
      smartSpeed: 1000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive: {
        0: {
          dots: false
        },
        600: {
          dots: false
        },
        1000:{
          dots:true
        }
      }
    });
  }
  if ($(".clients-slider").length > 0) {
    $(".clients-slider").owlCarousel({
      items: 4,
      margin: 50,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      navText: [
        '<span class="prev"></span>',
        '<span class="next"></span>',
      ],
      loop: true,
      autoplay: true,
      slideSpeed: 2000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000:{
          items:3
        },
        1200:{
          items:4
        }
      }
    });
  }
});
$(window).on("load", function () {
  if ($(".animated-icon").length > 0) {
    const animatedEls = document.querySelectorAll(".animated-icon");
    for (const animatedEl of animatedEls) {
      const id = animatedEl.id;
      lottie.loadAnimation({
        container: document.getElementById(id),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://seo-local.co.uk/tealrock/js/json/" + id + ".json",
      });
    }
  }
});
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
  $('.structural-process-section').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('animate');
    }
  });
});
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 100) {
    $(".site-header").addClass("is-fixed");
  } else {
    $(".site-header").removeClass("is-fixed");
  }
});
