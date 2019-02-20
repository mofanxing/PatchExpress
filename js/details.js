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


var golbolId;
			
			
			function showTaskDetails(){
				golbolId = localStorage.getItem("details");
				var courierType = $("#courierType");
				var getAddress = $("#getAddress");
				var toAddress = $("#toAddress");
				var getTime = $("#getTime");
				var userName = $("#userName");
				var userPhone = $("#userPhone");
				var cargoYards = $("#cargoYards");
				var money = $("#money");
				var setNode = $("#note");
				var status = $("#status");
				var btn = $("#submit_btn");
				$.ajax({
					type:"get",
					url:""+getAjaxUrl.Ajaxurl.showTaskDetails+""+golbolId+"",
					async:true,
					xhrFields: {
						withCredentials: true
					},
					success:function(data){
						if(data.data.status == "已接"){
							btn.addClass("disabled")
						}
						courierType.html(data.data.express_type);
						getAddress.html(data.data.get_address);
						toAddress.html(data.data.to_address);
						getTime.html(data.data.time);
						userName.html(data.data.name);
						userPhone.html(data.data.phone);
						cargoYards.html(data.data.code);
						money.html(data.data.price);
						setNode.html(data.data.note);
						status.html(data.data.status);
					}
				});
			}
			showTaskDetails();
			
			
			//点击领取任务函数
				function clickReceive(){
						if(confirm("你确认领取该任务吗!")){
							$.ajax({
							type:"get",
							url:""+getAjaxUrl.Ajaxurl.ajax_getIssue+""+golbolId+"",
							xhrFields: {
							      withCredentials: true
							  	},
							success:function(data){
								if(data.code == 1){									
									alert("任务领取成功!");
									location.href = "index.html";
								}
							}
						});
					}
					
				}