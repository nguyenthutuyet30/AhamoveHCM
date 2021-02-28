$(document).ready(function () {
	
	$(window).scroll(function(e) {
		if ($(this).scrollTop() > 0)
		{
			$(".menu").addClass("menu-fixed");
		}
		else
		{
			$(".menu").removeClass("menu-fixed");	
		}
	});

	//Slide logo doi tac
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 7,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:7
			}
		}
	}); 

	// trượt xuống tai sao ahamove?
   $('.nuttimhieuthem').click(function(){
      $('html').animate({scrollTop:600});
      return true;
   });
});
