	$(function(){
		var swiper=new Swiper(".mainSwiper", {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: { 
				el: ".swiper-pagination",
				type: "fraction",
			},
			on: {
				init: function () {
					setTimeout(function(){ $(".main_text").addClass("active"); }, 1000);
				},
			},
		});
		$("#gnb > ul > li").hover(
			function(){
				$("#header").addClass("active");
			},
			function(){
				$("#header").removeClass("active");
			}
		);
		$("#gnb > ul > li:first-child > a").focusin(function(){
			$("#header").addClass("active");
		});
		$("#gnb li:last-child li:last-child a").focusout(function(){
			$("#header").removeClass("active")
		});
	});