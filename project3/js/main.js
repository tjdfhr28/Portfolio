$(function(){
	var w;
	var n=0;
	var t=0;
	var pos=0;
	var winHalf;

	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$(".wrapper").addClass("active"); 
		$(".side_menu").addClass("active");
		$(".tab").addClass("open"); 
		$(".dim").addClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("fixed");
		$(".wrapper").removeClass("active"); 
		$(".side_menu").removeClass("active");
		$(".tab").removeClass("open"); 
		$(".dim").removeClass("active");
	});
	$(window).resize(function(){
		w=$(window).width();

		if(w > 600){
			if($(".side_menu").hasClass("active")){
				$(".dim").trigger("click");
			}
		}
	});
	
	setTimeout(function(){
		$(".main_title").addClass("active");
		$(".controller").eq(n).addClass("on");
	}, 1000);
	
	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < $("#pag1").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#pag2").offset().top-winHalf){
			n=1;
		}
		else if(t < $("#pag3").offset().top-winHalf){
			n=2;
		}
		else if(t < $("#pag4").offset().top-winHalf){
			n=3;
		}
		else if(t < $("#pag5").offset().top-winHalf){
			n=4;
		}
		else{
			n=5;
		}
		
		categoryControl();

		$(".controller li").removeClass("on");
		$(".controller li").eq(n).addClass("on");

		if(t > 80){
			$(".top").addClass("fixed");
			$(".btn_top").fadeIn(300); 
		}
		else{
			$(".top").removeClass("fixed");
			$(".btn_top").fadeOut(300);
		}
	});
	function categoryControl(){
		if($("#pag5").hasClass("active") == true){
			return;
		}

		console.log("category n :"+n);

		if(n == 0){
			$(".main_title").addClass("active");
		}
		else{
			$("#pag"+n).addClass("active");
		}
	}

	$(window).resize(function(){
		winHalf=$(window).height()/2;
	});
	$(window).trigger("resize");

	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$(".side_menu").addClass("active");
		$(".tab").addClass("active");
		$(".dim").addClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("fixed"); 
		$(".side_menu").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});
	$("nav li, .controller li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=$(".main_title").offset().top; //pos=0;
		}
		else{
			pos=$("#pag"+n).offset().top;
		}
		

		$("html").animate({scrollTop : pos}, 800);

		$("body").removeClass("fixed"); 
		$(".side_menu").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});
	$(".btn_top").click(function(e){
		e.preventDefault();
		pos=0;
		$("html").animate({scrollTop : pos}, 800);
	});
});