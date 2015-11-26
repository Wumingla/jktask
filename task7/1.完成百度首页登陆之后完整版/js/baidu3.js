$(document).ready(function(){

	$("#h_n_more").mouseover(function(){
		$("#h_more").show();
	})// 显示更多产品
	$("#h_more").mouseleave(function(){
		$("#h_more").hide();
	})// 隐藏更多产品


	$("#h_n_set").mouseover(function(){
		$("#h_set").show();
	})// 显示设置
	$("#h_set").mouseleave(function(){
		$("#h_set").hide();
	})// 隐藏设置

	$("#h_n_userinfo").mouseover(function(){
		$("#h_user").show();
	})// 显示用户
	$("#h_user").mouseleave(function(){
		$("#h_user").hide();
	})// 隐藏用户

	$(".h_weather").mouseover(function(){
		$("#h_rain").show();
	})// 显示用户
	$("#h_rain").mouseleave(function(){
		$("#h_rain").hide();
	})// 隐藏用户



	$(".main_menus span").each(function(index){					//获取菜单栏每一个span
		$(this).mouseover(function(){								//当点击的时候
			$(".main_right div.content").removeClass("content");//移除默认的div
			$(".main_right>div").eq(index).addClass("content");	//为对应的内容div添加显示样式
			$(".main_menus span.tabin").removeClass("tabin");	//移除默认的选中class样式
			$(this).addClass("tabin");   						//为自己添加选中的class样式				
		})
	})//左菜单导航切换

	$(".m_n_top span").each(function(index){					
		$(this).mouseover(function(){								
			$(".m_n_main div.mblock").removeClass("mblock");
			$(".m_n_main>div").eq(index).addClass("mblock");	
			$(".m_n_top span.m_n_t_on").removeClass("m_n_t_on");	
			$(this).addClass("m_n_t_on");   							
		})
	})//推荐导航切换

	$(".news_miniphoto span").each(function(index){					
		$(this).mouseover(function(){								
			$(".news_maxphoto div.mblock").removeClass("mblock");
			$(".news_maxphoto>div").eq(index).addClass("mblock");	
			$(".news_miniphoto span.whenclick").removeClass("whenclick");	
			$(this).addClass("whenclick");   							
		})
	})//新闻图片切换

	$(".shopTop span").each(function(index){					
		$(this).mouseover(function(){								
			$(".shopMain div.mblock").removeClass("mblock");
			$(".shopMain>div").eq(index).addClass("mblock");	
			$(".shopTop span.m_n_t_on").removeClass("m_n_t_on");	
			$(this).addClass("m_n_t_on");   							
		})
	})//购物导航切换

	$(".videoTop span").each(function(index){					
		$(this).mouseover(function(){								
			$(".videoMain div.mblock").removeClass("mblock");
			$(".videoMain>div").eq(index).addClass("mblock");	
			$(".videoTop span.m_n_t_on").removeClass("m_n_t_on");	
			$(this).addClass("m_n_t_on"); 							
		})
	})//视频导航切换

	$(".videochoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".video div.vblock").removeClass("vblock");
			$(".video>div").eq(index).addClass("vblock");	
			$(".videochoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//视频图片切换

	$(".shortVideoChoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".videoPhoto div.vblock").removeClass("vblock");
			$(".videoPhoto>div").eq(index).addClass("vblock");	
			$(".shortVideoChoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//短视频图片切换

	$(".zyChoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".zyVideo div.vblock").removeClass("vblock");
			$(".zyVideo>div").eq(index).addClass("vblock");	
			$(".zyChoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//综艺视频图片切换

	$(".tvChoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".tvVideo div.vblock").removeClass("vblock");
			$(".tvVideo>div").eq(index).addClass("vblock");	
			$(".tvChoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//电视视频图片切换

	$(".movieChoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".movieVideo div.vblock").removeClass("vblock");
			$(".movieVideo>div").eq(index).addClass("vblock");	
			$(".movieChoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//电影视频图片切换

	$(".dmChoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".dmVideo div.vblock").removeClass("vblock");
			$(".dmVideo>div").eq(index).addClass("vblock");	
			$(".dmChoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//动漫视频图片切换

	$(".gameChoose span").each(function(index){					
		$(this).mouseover(function(){								
			$(".gameVideo div.vblock").removeClass("vblock");
			$(".gameVideo>div").eq(index).addClass("vblock");	
			$(".gameChoose span.whenChooseOn").removeClass("whenChooseOn");	
			$(this).addClass("whenChooseOn"); 							
		})
	})//游戏视频图片切换



	// 切换封装测试
	// function nextphoto(x,y,z,i){
	// 	$(x+"span").each(function(index){
	// 		$(y+ "div."+z).removeClass(z);
	// 		$(y+">div").eq(index).addClass(z);
	// 		$(x +"span."+z).removeClass(i);
	// 		$(this).addClass(i)
	// 	})
	// }

	// $(function(){
	// 	nextphoto(.gameChoose,.gameVideo,vblock,whenChooseOn);
	// })
	

})