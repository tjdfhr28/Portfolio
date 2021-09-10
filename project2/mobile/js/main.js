$(function(){
	var swiper=new Swiper(".mainSwiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		on: {
			init: function () {
				setTimeout(function(){ $(".main_text").addClass("active"); }, 1000);
			},
		},
	});

	$("#header .tab").click(function(e){
		e.preventDefault();
		$(".menu").animate({right:0}, 300);
	});
	$(".menu .close").click(function(e){
		e.preventDefault();
		$(".menu").animate({right:"-100vw"}, 300, function(){
			$("#gnb > ul > li").each(function(){
				if($(this).hasClass("active") == true){
					$(this).removeClass("active");
					$(this).children("ul").hide();
				}
			});
		});
	});
	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});

});