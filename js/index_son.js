var flag = false;
			function silding1(){
				var left_num = parseInt($(".silBox").css("left").substring(0,($(".silBox").css("left").length-2)));
				var left_num2 = parseInt($(".body-content").css("left").substring(0,($(".body-content").css("left").length-2)));										
						$(".silBox").css("left","0px");
						$(".body-content").css("left",""+$(window).width()+"px");	
			}
			
			function silding2(){
				var left_num = parseInt($(".silBox").css("left").substring(0,($(".silBox").css("left").length-2)));
				var left_num2 = parseInt($(".body-content").css("left").substring(0,($(".body-content").css("left").length-2)));
				flag = true;
						$(".silBox").css("left",""+-$(window).width()+"px");
						$(".body-content").css("left","0px");					
			}			
//			$(function(){				
//				window.addEventListener("popstate", function(e) {
//					
//					if(flag){
//						pushHistory();
//					}else{
//						
//					}
//					silding1();
//					console.log(flag);
//					flag = false;
//					
//				}, false);
//				function pushHistory() {
//				var state = {
//				title: "title",
//				url: "#"
//				};
//				window.history.pushState(state, "title", "#");
//				}
//				});