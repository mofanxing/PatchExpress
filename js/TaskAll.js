$("#setTask").on("click", function() {
	$(this).addClass("li-active");
	$("#getTask").removeClass("li-active");
	$("#myTask").removeClass("li-active");
	
	silding1();
});
$("#getTask").on("click", function() {
	$(this).addClass("li-active");
	$("#setTask").removeClass("li-active");
	$("#myTask").removeClass("li-active");
	silding2();
	
});
$("#myTask").on("click", function() {
	$(this).addClass("li-active");
	$("#getTask").removeClass("li-active");
	$("#setTask").removeClass("li-active");
	silding3();
});



//以下 三个函数是用来控制页面滑动效果的
function silding1(){
	var swiper = $("#op");
	var set = $("#set");
	var get = $("#get");
	console.log(swiper);
	swiper.css("transform","translate3d(0px,0px,0px)");
	set.addClass("swiper-slide-active").removeClass("swiper-slide-prev swiper-slide-next");
	get.addClass("swiper-slide-next").removeClass("swiper-slide-prev swiper-slide-active");
	
}
function silding2(){
	var swiper = $("#op");
	var set = $("#set");
	var get = $("#get");
	var myoder = $("#order");
	swiper.css("transform","translate3d("+-$(window).width()+"px,0px,0px)");
	set.removeClass("swiper-slide-active swiper-slide-next").addClass("swiper-slide-prev");
	get.removeClass("swiper-slide-next swiper-slide-prev").addClass("swiper-slide-active");
	myoder.addClass("swiper-slide-next").removeClass("swiper-slide-active swiper-slide-prev");
	
}
function silding3(){
	var swiper = $("#op");
	var set = $("#set");
	var get = $("#get");
	var myoder = $("#order");
	swiper.css("transform","translate3d("+-(2*$(window).width())+"px,0px,0px)");
	set.removeClass("swiper-slide-prev swiper-slide-active swiper-slide-next");
	get.removeClass("swiper-slide-active swiper-slide-next").addClass("swiper-slide-prev");
	myoder.removeClass("swiper-slide-next swiper-slide-prev").addClass("swiper-slide-active");
}

//判断手指移动
function mover(){
	$(".swiper-wrapper").on("touchend",function(){
		setTimeout(function(){
			var num = parseInt($(".swiper-slide-active").attr("value"));
		if(num == 1){
			$("#setTask").addClass("li-active");
			$("#getTask").removeClass("li-active");
			$("#myTask").removeClass("li-active");
		}
		if(num == 2){
			$("#getTask").addClass("li-active");
			$("#setTask").removeClass("li-active");
			$("#myTask").removeClass("li-active");
		}
		if(num == 3){
			$("#myTask").addClass("li-active");
			$("#getTask").removeClass("li-active");
			$("#setTask").removeClass("li-active");
		}
		},500);
		
	});
}
mover();