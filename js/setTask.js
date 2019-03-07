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

function setTask(){
				var courierType = $("#Courier-type");
				var getAddress = $("#getAddress");
				var toAddress = $("#toAddress");
				var getTime = $("#getTime");
				var userName = $("#userName");
				var userPhone = $("#userPhone");
				var cargoYards = $("#cargoYards");
				var money = $("#money");
				var setNode = $("#setNote");
				
				//console.log(courierType+" "+getAddress+" "+toAddress+" "+getTime+" "+userName+" "+userPhone+" "+cargoYards+" "+setNode);		
				$.ajax({
					type:"post",
					url:""+getAjaxUrl.Ajaxurl.setTask+"",
					async:true,
					data:{
						"express_type":""+courierType.val()+"",
						"get_address":""+getAddress.val()+"",
						"to_address":""+toAddress.val()+"",
						"time":""+getTime.val()+"",
						"name":""+userName.val()+"",
						"phone":""+userPhone.val()+"",
						"code":""+cargoYards.val()+"",
						"price":""+money.val()+"",
						"note":""+setNode.val()+""
					},
					xhrFields: {
						withCredentials: true
					},
					success:function(data){
						alert(data.message);
						if(data.code == 1){
							location.href="task_all.html";
						}
					}
					
				});
			}
			$("#submit_btn").on("click",function(){
				setTask();
			});