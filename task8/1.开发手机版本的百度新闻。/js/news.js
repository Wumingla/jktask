$(function() {
	
	//加载默认推荐模块	
	$("#mainContent").load("../php/news.php",{name:$("#navRec").attr("value")});
	$("#hotRight ul").load("../php/scroll.php",{name:$("#navRec").attr("value")});
	$(".banCon").load("../php/focus.php",{name:$("#navRec").attr("value")});

	var $navli = $(".headNavs ul li");
	
	//点击切换模块
	$navli.click(function() {
		var $clickValue = $(this).attr("value");
		
		//新闻信息
		$("#mainContent").load("../php/news.php", {
			name: $clickValue
		});
		
		//滚动信息
		$("#hotRight ul").load("../php/scroll.php", {
			name: $clickValue
		});
		
		//焦点图
		$(".banCon").load("../php/focus.php", {
			name: $clickValue
		});	
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
