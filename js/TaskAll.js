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
	var left_num = parseInt($("#set").css("left").substring(0,($("#set").css("left").length-2)));
	var left_num2 = parseInt($("#get").css("left").substring(0,($("#get").css("left").length-2)));
	var left_num3 = parseInt($("#order").css("left").substring(0,($("#order").css("left").length-2)));
	if(left_num == 0){
		return 0;
	}else{		
			$("#set").css("left","0px");
			$("#get").css("left",""+$(window).width()+"px");
			$("#order").css("left",""+(2*$(window).width())+"px");
	}	
}
function silding2(){
	var left_num = parseInt($("#set").css("left").substring(0,($("#set").css("left").length-2)));
	var left_num2 = parseInt($("#get").css("left").substring(0,($("#get").css("left").length-2)));
	var left_num3 = parseInt($("#order").css("left").substring(0,($("#order").css("left").length-2)));
	if(left_num2 == 0){
		return 0;
	}else{
		$("#set").css("left",""+-$(window).width()+"px");
			$("#get").css("left","0px");
			$("#order").css("left",""+$(window).width()+"px");
	}	
}
function silding3(){
	var left_num = parseInt($("#set").css("left").substring(0,($("#set").css("left").length-2)));
	var left_num2 = parseInt($("#get").css("left").substring(0,($("#get").css("left").length-2)));
	var left_num3 = parseInt($("#order").css("left").substring(0,($("#order").css("left").length-2)));
	if(left_num3 == 0){
		return 0;
	}else{
		$("#set").css("left",""+-(2*$(window).width())+"px");
			$("#get").css("left",""+-$(window).width()+"px");
			$("#order").css("left","0px");
	}
}
var movexBefor,movexAfter;//判断手指移动方向
function touch(){
	
	document.querySelector("body").addEventListener("touchstart",function(e){		
		e = e || window.event;
		movexBefor = e.pageX;		
	});
	document.querySelector("body").addEventListener("touchend",function(e){		
		e = e || window.event;
		movexAfter = e.pageX;	
		if(movexBefor - movexAfter > 50){
			alert("向左滑");
		}
		if(movexBefor - movexAfter < 50){
			alert("向右滑");
		}
	});
}
<<<<<<< HEAD
touch();
=======
//touch();
>>>>>>> 8d3e8fca0733bc2ddd351f8a8d0edca1c0ee87eb
