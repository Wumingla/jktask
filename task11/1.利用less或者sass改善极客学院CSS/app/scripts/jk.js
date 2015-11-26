$(document).ready(function(){
	
	$("#lessonNav li").mouseover(function(){
		$(this).addClass("lihover");
	})
	$("#lessonNav li").mouseout(function(){
		$(this).removeClass("lihover")
	});// 动态导航
	
	$(".allNav li").each(function(index){					
		$(this).mouseover(function(){	
			$(".allNav li.allnavOn").removeClass("allnavOn");
			$(this).addClass("allnavOn");
			$(".hotMain div.mblock").removeClass("mblock");
			$(".hotMain>div").eq(index).addClass("mblock");	
		})
	});//推荐课程 


	$(function () {
	    var lesson_banner = $('.lesson_banner');       //图片容器
	    var LB_container = $('.LB_container');         //图片内容
	    var buttons = $('.LB_buttons span');		   //切换按钮
	    var prev = $('#prev');						   //左箭头
	    var next = $('#next');                         //右箭头
	    var index = 1;
	    var len = 5;
	    var interval = 3000;						   //位移间隔
	    var timer;                                     //位移时间
	    // 定义变量获取元素     

	    function animate (offset) {
	        var left = parseInt(LB_container.css('left')) + offset;
	        if (offset>0) {
	            offset = '+=' + offset;
	        }
	        else {
	            offset = '-=' + Math.abs(offset);
	        }
	        LB_container.animate({'left': offset}, 300, function () {
	            if(left > -569){
	                LB_container.css('left', -569 * len);
	            }
	            if(left < (-569 * len)) {
	                LB_container.css('left', -569);
	            }
	        });
	    }//无限滚动

	    function showButton() {
	        buttons.eq(index-1).addClass('on').siblings().removeClass('on');
	    }

	    function play() {
	        timer = setTimeout(function () {
	            next.trigger('click');
	            play();
	        }, interval);
	    }

	    function stop() {
	        clearTimeout(timer);
	    }

	    next.bind('click', function () {
	        if (LB_container.is(':animated')) {
	            return;
	        }
	        if (index == 5) {
	            index = 1;
	        }
	        else {
	            index += 1;
	        }
	        animate(-569);
	        showButton();
	    });//右箭头

	    prev.bind('click', function () {
	        if (LB_container.is(':animated')) {
	            return;
	        }
	        if (index == 1) {
	            index = 5;
	        }
	        else {
	            index -= 1;
	        }
	        animate(569);
	        showButton();
	    });//左箭头

	    buttons.each(function () {
	         $(this).bind('click', function () {
	             if (LB_container.is(':animated') || $(this).attr('class')=='on') {
	                 return;
	             }
	             var myIndex = parseInt($(this).attr('index'));
	             var offset = -569 * (myIndex - index);

	             animate(offset);
	             index = myIndex;
	             showButton();
	         })
	    });//图片按钮切换

	    lesson_banner.hover(stop, play);//当鼠标停悬时停止播放

	    play();//播放

	});//焦点图片滚动



	function animate2(num1,num2,who,offset){
		var obj = who;
		var partnersConLeft = parseInt(obj.css("left"));
		var newLeft = partnersConLeft+offset;
		obj.css("left",newLeft+"px");
		if (newLeft> -num1) {
			newLeft = -num2;
			obj.css("left",newLeft+"px");
		};if(newLeft<-num2) {
			newLeft = -num1;
			obj.css("left",newLeft+"px");
		};
	};
	//左右切换


	$("#partprev").click(function(){
		animate2(164,984,$("#partnersCon"),164);
	});
	
	$("#partnext").click(function(){
		animate2(164,984,$("#partnersCon"),-164);
	});	
	// 合作企业左右切换按钮

	$("#medprev").click(function(){
		animate2(164,984,$("#medCon"),164);
	});
	
	$("#mednext").click(function(){
		animate2(164,984,$("#medCon"),-164);
	});	
	// 合作媒体左右切换按钮


	$("#schoolprev").click(function(){
		animate2(142,994,$("#schoolCon"),142);
	});
	
	$("#schoolnext").click(function(){
		animate2(142,994,$("#schoolCon"),-142);
	});	
	// // 合作院校左右切换按钮

});