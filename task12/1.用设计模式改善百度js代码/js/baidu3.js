//设计模式：单例设计模式
//设计目的：为了代码复用，增加可维护性
//模式优点：1.模块间的通信。2.系统中某个类的对象只能存在一个。3.保护自己的属性和方法。
//模式注意：1.注意this的使用。2.闭包容易造成内存泄露，不需要的赶快干掉。3.注意new的成本。

var singleton = {
    init: function() {
        this.render();
        this.bind();
    },

    render: function() {
        var me = this;
        me.mpMouseOver = $("#h_n_more");
        me.mpMouseLeave = $("#h_more");
        me.setMouseOver = $("#h_n_set");
        me.setMouseLeave = $("#h_set");
        me.userMouseOver = $("#h_n_userinfo");
        me.userMouseLeave = $("#h_user");
        me.weatherMouseOver = $(".h_weather");
        me.weatherMouseLeave = $("#h_rain");

        me.menusMouseOver= $(".main_menus span");
        me.menusMainMouseOver= $(".m_n_top span");
        me.newsPhotoMouseOver= $(".news_miniphoto span");
        me.shopMouseOver= $(".shopTop span");
        me.videoMouseOver= $(".videoTop span");
        me.videoChooseMouseOver= $(".videochoose span");
        me.shortVideoChooseMouseOver= $(".shortVideoChoose span");
        me.zyChooseMouseOver= $(".zyChoose span");
        me.tvChooseMouseOver= $(".tvChoose span");
        me.movieChooseMouseOver= $(".movieChoose span");
        me.dmChooseMouseOver= $(".dmChoose span");
        me.gameChooseMouseOver= $(".gameChoose span");
    },

    bind: function() {
        var me = this;

        //更多产品
        me.mpMouseOver.mouseover(function() {
            $("#h_more").show();
        });
        me.mpMouseLeave.mouseleave(function() {
        	$("#h_more").hide();
        });

        //设置
        me.setMouseOver.mouseover(function() {
            $("#h_set").show();
        });
        me.setMouseLeave.mouseleave(function() {
        	$("#h_set").hide();
        });

        //用户
        me.userMouseOver.mouseover(function() {
            $("#h_user").show();
        });
        me.userMouseLeave.mouseleave(function() {
        	$("#h_user").hide();
        });

    	//天气
    	me.weatherMouseOver.mouseover(function(){
    		$("#h_rain").show();
    	})
    	me.weatherMouseLeave.mouseleave(function(){
    		$("#h_rain").hide();
    	})

        //左导航切换
		me.menusMouseOver.each(function(index){					
			$(this).mouseover(function(){							
				$(".main_right div.content").removeClass("content");
				$(".main_right>div").eq(index).addClass("content");	
				$(".main_menus span.tabin").removeClass("tabin");	
				$(this).addClass("tabin");   									
			})
		});

		//推荐导航切换
		me.menusMainMouseOver.each(function(index){
			$(this).mouseover(function(){
				$(".m_n_main div.mblock").removeClass("mblock");
				$(".m_n_main>div").eq(index).addClass("mblock");
				$(".m_n_top span.m_n_t_on").removeClass("m_n_t_on");
				$(this).addClass("m_n_t_on");
			})
		});

		//新闻图片切换
		me.newsPhotoMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".news_maxphoto div.mblock").removeClass("mblock");
				$(".news_maxphoto>div").eq(index).addClass("mblock");	
				$(".news_miniphoto span.whenclick").removeClass("whenclick");	
				$(this).addClass("whenclick");
			})
		});

		//购物导航切换
		me.shopMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".shopMain div.mblock").removeClass("mblock");
				$(".shopMain>div").eq(index).addClass("mblock");	
				$(".shopTop span.m_n_t_on").removeClass("m_n_t_on");	
				$(this).addClass("m_n_t_on");			
			})
		});

		//视频导航切换
		me.videoMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".videoMain div.mblock").removeClass("mblock");
				$(".videoMain>div").eq(index).addClass("mblock");	
				$(".videoTop span.m_n_t_on").removeClass("m_n_t_on");	
				$(this).addClass("m_n_t_on"); 							
			})
		});

		//视频图片切换
		me.videoChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".video div.vblock").removeClass("vblock");
				$(".video>div").eq(index).addClass("vblock");	
				$(".videochoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});

		//短视频图片切换
		me.shortVideoChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".videoPhoto div.vblock").removeClass("vblock");
				$(".videoPhoto>div").eq(index).addClass("vblock");	
				$(".shortVideoChoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});

		//综艺视频图片切换
		me.zyChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".zyVideo div.vblock").removeClass("vblock");
				$(".zyVideo>div").eq(index).addClass("vblock");	
				$(".zyChoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});

		//电视视频图片切换
		me.tvChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".tvVideo div.vblock").removeClass("vblock");
				$(".tvVideo>div").eq(index).addClass("vblock");	
				$(".tvChoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});

		//电影视频图片切换
		me.movieChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".movieVideo div.vblock").removeClass("vblock");
				$(".movieVideo>div").eq(index).addClass("vblock");	
				$(".movieChoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});

		//动漫视频图片切换
		me.dmChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".dmVideo div.vblock").removeClass("vblock");
				$(".dmVideo>div").eq(index).addClass("vblock");	
				$(".dmChoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});

		//游戏视频图片切换
		me.gameChooseMouseOver.each(function(index){					
			$(this).mouseover(function(){								
				$(".gameVideo div.vblock").removeClass("vblock");
				$(".gameVideo>div").eq(index).addClass("vblock");	
				$(".gameChoose span.whenChooseOn").removeClass("whenChooseOn");	
				$(this).addClass("whenChooseOn"); 							
			})
		});	
    }
};

var start = (function() {
    singleton.init();
})();
