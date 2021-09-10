$(function(){
	var n=0;
	var t=0;
	var winHalf;

	$(window).scroll(function(){
		t=$(window).scrollTop()+winHalf;

		if(t < $("#page1").offset().top){
			n=0;
		}
		else if(t < $("#footer").offset().top){
			n=1;
		}
		else{
			n=0;
		}

		if(n == 0){
			$(".header_left").removeClass("dark");
		}
		else{
			$(".header_left").addClass("dark");
		}
	});
	$(window).trigger("scroll");

	$(window).resize(function(){
		winHalf=$(window).height()/2;
	});
	$(window).trigger("resize");


	// controller
	$(".gnb li").click(function(e){ 
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=$("#page1").offset().top;
		}
		else if(n == 1){
			pos=$("#page2").offset().top;
		}
		else{
			pos=$("#footer").offset().top;
		}

		$("html").animate({scrollTop : pos}, 800);
	});

	var overN;

	$(".gnb li").hover(
		function(){
			overN=$(this).index();

			$(".gnb li").each(function(i){ // 0, 1, 2
				if(i == overN){
					$(this).addClass("active");
				}
				else{
					$(this).addClass("inactive");
				}
			});
		},
		function(){
			overN=null;
			$(".gnb li").removeAttr("class");
		}
	);

	var categoryN=0;
	var categoryGap=-80;

	$(".page2_cell > div").eq(categoryN).addClass("active");

	$(".page2_cell .title").click(function(e){
		e.preventDefault();
		$(".page2_cell > div").removeClass("active");
		$(this).parent().addClass("active");

		var portFolioTop=$(this).offset().top+categoryGap;

		$("html").animate({scrollTop:portFolioTop}, 800);
	});

	function mobileLink(){
		if(isMobile){
			$(".project1_link a").attr({href: "project1/mobile/index.html"});
			$(".project2_link a").attr({href: "project2/mobile/index.html"});
		}
		else{
			$(".project1_link a").attr({href: "project1/pc/index.html"});
			$(".project2_link a").attr({href: "project2/pc/index.html"});
		}

		$(".project3_link a").attr({href: "project3/index.html"});
	}

	mobileLink();

	var videoTimer=0;

	$(window).resize(function(){
		clearTimeout(videoTimer);

		setTimeout(function(){
			var winW=$(window).width();
			var winH=$(window).height();
			var ratio=winW/winH;

			$(".video video").removeAttr("style");

			if(ratio > 1.75){
				$(".video video").css({width:winW});
			}
			else{
				$(".video video").css({height:winH});
			}
		}, 100);
	});
	$(window).trigger("resize");
});