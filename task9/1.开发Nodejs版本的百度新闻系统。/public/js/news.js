$(function() {

	//加载信息
	function showTable(){
		//移除历史信息
		$("#mainContent *").remove();
		$(".banCon *").remove();
		$("#hotRight ul *").remove();

		//获取焦点图信息
		$.get('/dataimg', {
			name: $(".navon").attr("value")
		}, function(data) {

			$.each(data, function(index, element) {
				boximage = $("<img>").attr("src", element.news_img).appendTo($(".banCon"));			
			})
		});

		//获取滚动文字信息
		$.get('/dataspan', {
			name: $(".navon").attr("value")
		}, function(data) {

			$.each(data, function(index, element) {				
				boxspan = $("<li></li>").text(element.news_content).appendTo($("#hotRight ul"));			
			})
		});

		//获取新闻信息
		$.get('/datanews', {
			name: $(".navon").attr("value")
		}, function(data) {
			if ($(".navon").attr("value") == 'navImg') {
				$.each(data, function(index, element) {
					box = $("<div></div>").addClass("navimgPhoto").appendTo($("#mainContent"));
					boximg = $("<img>").attr("src", element.news_img).appendTo(box);
					boxtitle = $("<p></p>").addClass("navimgTitle").text(element.news_title).appendTo(box);
				})
			}else{
				$.each(data, function(index, element) {
					box = $("<li></li>").appendTo($("#mainContent"));
					boximg = $("<img>").attr("src", element.news_img).appendTo(box);
					boxtitle = $("<p></p>").addClass("newstitle").text(element.news_title).appendTo(box);
					boxcon = $("<p></p>").appendTo(box);
					boxcontent = $("<span></span>").addClass("newsContent").text(element.news_content).appendTo(boxcon);
					boxdate = $("<span></span>").addClass("newsdate").text(element.news_date).appendTo(box);
					boxfrom = $("<span></span>").addClass("newsfrom").text(element.news_from).appendTo(box);		
				})
			}		
		});	
	}
	showTable();

	//点击切换模块
	var $navli = $(".headNavs ul li"); 
	$navli.click(function() {
		var $clickValue = $(this).attr("value");		
		var $hoverNav = $navli.each(function(index, element){
			var $allValue = $(element).attr("value");
				if ($allValue == $clickValue) {
					$(element).addClass('navon'); 
				} else {
					$(element).removeClass('navon');
				}
		});
		showTable();
	});


});

//滚动信息
var area = $('#hotRight')[0];
var iliHeight = 28;//单行滚动的高度
var speed = 50;//滚动的速度
var time;
var delay= 2000;

area.scrollTop=0;
area.innerHTML+=area.innerHTML;//克隆一份一样的内容

function startScroll(){
	time=setInterval("scrollUp()",speed);
	area.scrollTop++;
}

function scrollUp(){
	if(area.scrollTop % iliHeight==0){
		clearInterval(time);
		setTimeout(startScroll,delay);
}else{
	area.scrollTop++;
	if(area.scrollTop >= area.scrollHeight/2){
		area.scrollTop =0;
		}
	}
}

setTimeout(startScroll,delay);