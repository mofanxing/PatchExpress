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

$("#index").on("click", function() {
	$("#myInfo").removeClass("btn-active");
	$("#index").addClass("btn-active");
	$("#iframe-index").attr("src", "index_son.html");
});
$("#myInfo").on("click", function() {
	$("#index").removeClass("btn-active");
	$("#myInfo").addClass("btn-active");
	$("#iframe-index").attr("src", "userInfo.html");
});

//用户登录
function login() {
	$.ajax({
		type: "post",
		url: ""+getAjaxUrl.Ajaxurl.login+"",
		async: true,
		data: {
			"user": "loid22"
		},
		xhrFields: {
			withCredentials: true
		},
		success: function(data) {
			alert("用户登录成功");
		}
	});
}
login();


