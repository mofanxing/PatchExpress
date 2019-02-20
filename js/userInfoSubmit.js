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


function getUserUnfo(){
				var studentId = $("#studentId");
				var phoneNum = $("#phoneNum");
				var sex = $('input[name="sex"]:checked');
				$.ajax({
					type:"get",
					url:""+getAjaxUrl.Ajaxurl.getUserUnfo+"",
					async:true,
					xhrFields: {
						withCredentials: true
					},
					success:function(data){
						console.log(data.info);
						if(data.info.sex == 1){
							$("#boy").click();
						}else{
							$("#girl").click();
						}
						studentId.val(data.info.school_id);
						phoneNum.val(data.info.phone);
						sex.val(data.info.sex);
					}
				});
			}
			getUserUnfo();
			
			function submitUserInfo(){
				var studentId = $("#studentId");
				var phoneNum = $("#phoneNum");
				var sex = $('input[name="sex"]:checked');
				//console.log(studentId.val()+" "+phoneNum.val()+" "+sex.val());
				$.ajax({
					type:"post",
					url:""+getAjaxUrl.Ajaxurl.getUserUnfo+"",
					async:true,
					data:{
						"school_id":""+studentId.val()+"",
						"phone":""+phoneNum.val()+"",
						"sex":""+sex.val()+""
					},
					xhrFields: {
						withCredentials: true
					},
					success:function(data){
						alert(data.message);
						if(data.code == 1){
							location.href="userInfoSubmit.html";
						}
					}
				});
			}
			
			$("#submit_btn").on("click",function(){
				submitUserInfo();
			});