  // owl carousel main

  $('.owl_first').owlCarousel({
    loop:true,
    autoplay:true, 
    autoplayTimeout:4500,
    autoplayHoverPause:true,
    margin:0,
    nav:true,
    navText : ["",""],
    dots: true,
    dots: 3,
    lazyLoad: true,
    responsive:{
    0:{
        items:1
        },
    600:{
          items:1
        },
    800:{
        items:1
        },
    1300: {
        items: 2
    }
    }
  });    

  // second carousel

  $('.owl_second').owlCarousel({
    loop:true,
    autoplay:true, 
    autoplayTimeout:4500,
    autoplayHoverPause:true,
    margin:0,
    nav:true,
    navText : ["",""],
    dots: false,
    lazyLoad: true,
    responsive:{
    0:{
        items:1
        },
    888:{
        items: 1
        },
    1300: {
        items: 2
    },
    1320: {
      items: 3
    },
    }
  }); 

// select

$(document).ready(function () {
  $('#tours').chosen({
    disable_search: true,
    placeholder_text_single: "Страна тура",
  });
});

