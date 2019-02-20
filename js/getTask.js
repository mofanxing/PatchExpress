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
				var listUl = $(".getTask-ul");				
				$.ajax({
					type:"get",
					url:""+getAjaxUrl.Ajaxurl.getTaskList+"",
					async:true,
					data:{
						"s":"1",
						"e":"30"
					},
					xhrFields: {
							      withCredentials: true
							  	},
					success:function(data){
						var html_txt = "";
						for(var i = 0;i < data.data.length;i++){
							var id = data.data[i].id;
							var address = data.data[i].to_address;
							var express_type = data.data[i].express_type;
							var create_time = data.data[i].create_time;
							var status = data.data[i].status;
							if(status == '未接'){
								var string_txt = '<li value='+id+' onclick="saveId(this)">'+
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
								 
						}
						
						listUl.html(html_txt);
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