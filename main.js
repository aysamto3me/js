
$(function(){
    $(".resspan").click(function(){
        $("#myNav").css({"width":"100%"});
    });
});



$(function(){
    $(".closebtn").click(function(){
        $("#myNav").css({"width":"0%"});
    });
});


$(function() {

    $(window).scroll(function() {
      if ($(document).scrollTop() > 20 ){
        $("#navbar").addClass("test6");
        $(".span1").addClass("spanloop");
      } else{
        $("#navbar").removeClass("test6");
        $(".span1").removeClass("spanloop");
      }
    });
  });


  
  $(function() {
    $(document).ready(function() {

    $(document).scroll(function() {
      if ($(document).scrollTop() > 20 ){
        $(".respnav").addClass("test");
      } else{
        $(".respnav").removeClass("test");}
      });
    });
  });


    
$(function(){

  $(window).scroll(function() {
      if ($(document).scrollTop() > 50 ){
        $(".container1").addClass("fadescroll");
        $(".container2").addClass("fadescroll2");

      } else{
          $(".container1").removeClass("fadescroll");
          $(".container2").removeClass("fadescroll2");


      }
      });
    });


    $(function(){
      $(document).ready(function(){
        $(window).scroll(function() {
    
        if ($(document).scrollTop() > 350 ){
          $(".serviceBox").addClass("skillslide");
    
        } else{
            $(".serviceBox").removeClass("skillslide");
    
    
        }
      });
    });
    });
  

  

  $(function(){
    var typed1 = new Typed('.abtxt', {
        strings: ["I am a developer and programmer who loves innovation, luxury and enjoyment of work, a database developer, a designer who loves innovation and diversity in designs and ideas, I love challenges and winning them."],
        typeSpeed: 50,
        loop: false,
        smartBackspace: true

        });

  });

  

$(function(){
    var typed = new Typed('.typed1', {
        strings: ["Aysam Tohme", "Designer.", "Developer.", "Freelancer.", "Programmer."],
        typeSpeed: 100,
        loop: true,
        
});
});


$(function(){
    var typed2 = new Typed('.myfav', {
        strings: ['^19000 Some of my favorite things: Drinking a cup of tea or coffee, working under pressure, difficulties create creative ideas'],
        typeSpeed: 50,
        loop: false,
        
});
});






$(function(){
  
  $('#slider').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
  });

});


var magnifPopup = function() {
  $('.item').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
};


// Call the functions
magnifPopup();



$(function(){
  $(document).ready(function(){
    $(".custom-overlay").mouseenter(function(){
    })
  });
});




(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

})(jQuery);




  
  
  



  
  

  

  


  
  

  



  



 
