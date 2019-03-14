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


function getTaskList(){
				var listUl = $(".getTask-ul #loding");
				var listUlNum = 30+parseInt($(".getTask-ul").attr("value"));
				$.ajax({
					type:"get",
					url:""+getAjaxUrl.Ajaxurl.getTaskList+"",
					async:true,
					data:{
						"s":""+listUlNum+"",
						"e":""+(listUlNum+30)+""
					},
					xhrFields: {
							      withCredentials: true
							  	},
					success:function(data){
						console.log(data);
						if(data.data.length == 0){
							alert("已全部加载");
							listUl.html("已全加载");
							return 0;
						}
						if(data.data.length > 30){
							listUl.css("display","block")
						}
						var html_txt = "";
						var string_txt2 = "";
						for(var i = 0;i < data.data.length;i++){
							var id = data.data[i].id;
							var address = data.data[i].to_address;
							var express_type = data.data[i].express_type;
							var create_time = data.data[i].create_time;
							var status = data.data[i].status;
							var price = data.data[i].price;
							if(status == '未接'){
								var string_txt = '<li value='+id+' onclick="saveId(this)">'+
											 '<div class="getTaskInfo">'+
											 '<p>'+address+' '+express_type+'</p>'+ 
											 '<p>'+create_time+' 发布</p>'+
											 '</div>'+ 
											 '<div class="price">'+
											 ''+price+' 元'+
											 '</div>'+
											 '<div class="state">'+
												''+status+''+
					 						 '</div>'+
											 '</li>';
								html_txt += string_txt;			
							}if(status == '已接'){
								var string_txt3 = '<li value='+id+' onclick="saveId(this)">'+
											 '<div class="getTaskInfo">'+
											 '<p>'+address+' '+express_type+'</p>'+ 
											 '<p>'+create_time+' 发布</p>'+
											 '</div>'+ 
											 '<div class="price">'+
											 ''+price+' 元'+
											 '</div>'+
											 '<div class="state bg-public">'+
												''+status+''+
					 						 '</div>'+
											 '</li>';
								string_txt2 += string_txt3;			
							}
								 
						}
						html_txt = html_txt+string_txt2;
						listUl.before(html_txt);
						listUl.html("点击加载");
						
						
					}
				});
			}
			getTaskList();
			
			//将列表ID存储在本地存储当中
			function saveId(e){
				var id = $(e).attr("value");	
				localStorage.setItem("details",id);
				window.open("details.html");
			}
			
$("#loding").on("click",function(){
	var listUlNum =parseInt($(".getTask-ul").attr("value"));
	listUlNum+=2;
	$(".getTask-ul").attr("value",""+listUlNum+"");
	var listUl = $(".getTask-ul #loding");
	listUl.html("加载中");
	getTaskList();
})
