/*
	Template Name:Medica- Medical HTML5 Template
	Template URI: www.bootitems.com
	Description: This is a medial html5 template.
	Author: Masud Rana
	Author URI: www.bootitems.com
	Version: 1.0  
*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu Active
	02. WOW js active
	03. Home Slider Active
	04. Brand Logos Carousel Active
	05. Doctors Carousel Active
	06. Patient Say's Carousel Active
	07. Medical Page Blog Carousel Active
	08. Post Carousel Active
	09. Sticky Header Active
	10. Parallax Background Active
	11. Masonary Active
	12. Preloader
======================================
[ End table content ]
======================================*/
(function ($) {
	   "use strict";
	   
/* 01. jQuery MeanMenu Active  */  
	jQuery("nav#mobile-menu").meanmenu();	
	
/* 02. WOW js active */  
    new WOW().init();
	
/* 03. Home Slider Active */   
	$(".main-slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:8000,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : false,
		singleItem:true,
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	}); 

/* 04. Brand Logos Carousel Active */  	 
	$(".brand-logos").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 5,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsMobile : [479,1],
	}); 
	
/* 05. Doctors Carousel Active */  	 
	$(".doctors-inner").slick({
	  centerMode: true,
	  centerPadding: "0",
	  slidesToShow: 3,
	  prevArrow: "<div class='arrow-prev'><i class='icofont icofont-curved-left'></i></div>",
	  nextArrow: "<div class='arrow-next'><i class='icofont icofont-curved-right'></i></div>",		  
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 1
		  }
		}
	  ]
	});	
	
/* 06. Patient Say's Carousel Active */	 	 
	$("#patient-quotes").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});	
		
/* 07. Page Blog Carousel Active */ 	 
	$(".blog-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 3,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	});  

/*  08. Post Carousel Active  */	 
	$(".post-carousel").owlCarousel({
		autoPlay: 5000, 
		slideSpeed:500,
		pagination:false,
		navigation:true,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    // transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
	}); 
	
/* 09. Sticky Header Active */		  
	$(window).bind("scroll", function() {	
		var navHeight = 50;
		($(window).scrollTop() > navHeight) ? $("#sticky-header").addClass('sticky') : $("#sticky-header").removeClass("sticky");
	});		
	
/* 10. Parallax Background Active */		  
	$.stellar({
		horizontalScrolling:false,
		hideDistantElements: false,
		verticalOffset: 0,
		horizontalOffset: 0		
	});	
	

/* 11. Masonary Active  */				
	$(".masonry-container").masonry({
	  itemSelector: ".masonry-item",
	  columnWidth: ".masonry-item",
	});	

	
/* 12. Preloader */	
	$(window).on('load',function(){
		$('.preloader-wrap').fadeOut(500);
	});
 
})(jQuery); 