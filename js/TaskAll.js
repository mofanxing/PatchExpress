$("#setTask").on("click", function() {
	$(this).addClass("li-active");
	$("#getTask").removeClass("li-active");
	$("#myTask").removeClass("li-active");
	$(".iframe-box iframe").attr("src", "set_task.html");
});
$("#getTask").on("click", function() {
	$(this).addClass("li-active");
	$("#setTask").removeClass("li-active");
	$("#myTask").removeClass("li-active");
	$(".iframe-box iframe").attr("src", "get_task.html");
});
$("#myTask").on("click", function() {
	$(this).addClass("li-active");
	$("#getTask").removeClass("li-active");
	$("#setTask").removeClass("li-active");
	$(".iframe-box iframe").attr("src", "my_order.html");
});