

$(document).ready(function(){
	//获取配置文件
	var getAjaxUrl = (function() {
	    var result;
	    $.ajax({
	        type:'get',
	        url:'config.json',
	        dataType:'json',
	        async:false,
	        success:function(data){
	            result = data;
	        }
	    });
	    return result;
	})();
	
	//点击我接受的或我发布的div时显示函数
	$(".my_order_header_ul").find("li").on("click",function(){
		$(this).addClass("my_order_header_ul_li_active").siblings().removeClass("my_order_header_ul_li_active");
		if($(this).index() == 1){
			silding2();
		}else{
		silding1();
		}
	});
	
	//以下是滑动效果函数
	function silding1(){
				var left_num = parseInt($(".accept").css("left").substring(0,($(".accept").css("left").length-2)));
				var left_num2 = parseInt($(".issue").css("left").substring(0,($(".issue").css("left").length-2)));										
						$(".accept").css("left","0px");
						$(".issue").css("left",""+$(window).width()+"px");	
			}
			
			function silding2(){
				var left_num = parseInt($(".accept").css("left").substring(0,($(".accept").css("left").length-2)));
				var left_num2 = parseInt($(".issue").css("left").substring(0,($(".issue").css("left").length-2)));
						$(".accept").css("left",""+-$(window).width()+"px");
						$(".issue").css("left","0px");					
			}			
	
	
	
	
	//获取我发布的所有任务
	function ajax_getIssue(){
		$.ajax({
			type:"get",
			url:""+getAjaxUrl.Ajaxurl.ajax_getIssue+"",
			xhrFields: {
					      withCredentials: true
					  	},
			success:function(data){
				console.log(data);
				var html_txt = "";
				for(var i = 0; i < data.data.length; i++) {
					var id = data.data[i].id;
					var address = data.data[i].to_address;
					var express_type = data.data[i].express_type;
					var create_time = data.data[i].create_time;
					var status = data.data[i].status;
					var string_txt = '<li value='+id+'>'+
											 '<div class="getTaskInfo">'+
											 '<p>'+address+' '+express_type+'</p>'+ 
											 '<p>'+create_time+' 发布</p>'+
											 '</div>'+ 
											 '<div class="state">'+
												''+status+''+
					 						 '</div>'+
											 '</li>';
					html_txt += string_txt;	 
				}
				$(".issue").find("ul").html(html_txt);
			}
		});
	}
	ajax_getIssue();
	
	
	
	//获取我接受的任务
	function ajax_getAccept(){
		$.ajax({
			type:"get",
			url:""+getAjaxUrl.Ajaxurl.ajax_getIssue+"",
			data:{
				"s":"1",
				"e":"30"
			},
			xhrFields: {
					      withCredentials: true
					  	},
			success:function(data){
				if(data.data.length != 0){
					$(".prompt_text").hide();
				}
				var html_txt = "";
				for(var i = 0; i < data.data.length; i++) {
					var id = data.data[i].id;
					var address = data.data[i].to_address;
					var express_type = data.data[i].express_type;
					var create_time = data.data[i].create_time;
					var status = data.data[i].status;
					var string_txt = '<li value='+id+'>'+
											 '<div class="getTaskInfo">'+
											 '<p>'+address+' '+express_type+'</p>'+ 
											 '<p>'+create_time+' 发布</p>'+
											 '</div>'+ 
											 '<div class="state">'+
												''+status+''+
					 						 '</div>'+
											 '</li>';
					html_txt += string_txt;	 
				}
				$(".accept").find("ul").html(html_txt);
						
			}
		});
	}
	ajax_getAccept();
	
});
