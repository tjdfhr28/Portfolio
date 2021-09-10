$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).find("ul").stop().fadeIn(300);
		},
		function(){
			$(this).find("ul").stop().fadeOut(300);
		}
	);
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		$(this).next("ul").stop().slideDown(300);
	});
	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
		$(this).parent().stop().slideUp(300);
	});
	$(".language > ul > li").hover(
		function(){
			$(this).find("ul").stop().slideDown(150);
		},
		function(){
			$(this).find("ul").stop().slideUp(150);
		}
	);

	var video=document.getElementById("my_video");
	var videoN=0;
	var videoTotal=3;
	var videoResource=["cliff.mp4", "fish.mp4", "ocean.mp4"];
	video.muted=true;
	video.play();

	video.addEventListener("ended", function(){
		if(videoN <(videoTotal-1)){
			videoN=videoN+1;
		}
		else{
			videoN=0;
		}

		$("#my_video").attr({"src":"video/"+videoResource[videoN]});
		video.currentTime=0;
		video.play();
	});

	var t=0;
	var prevt=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < prevt){
			if(t != 0){
				if(!$("#header").hasClass("fixed")){
					$("#header").addClass("fixed");
					$("#header").children().animate({top:0}, 300);
				}
			}
			else{
				if($("#header").hasClass("fixed")){
					$("#header").removeClass("fixed");
					$("#header").children().removeAttr("style");
				}
			}
		}
		else{
			$("#header").removeClass("fixed");
			$("#header").children().removeAttr("style");
		}
		prevt=t;
	});
});