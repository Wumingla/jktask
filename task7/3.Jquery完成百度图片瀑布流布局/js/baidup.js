$(document).ready(function(){
	$(window).on("load",function(){

		imgLocation();																										//运行位置函数

		var dataImg = {"data":[{"src":"p1.jpg"},{"src":"p2.jpg"},{"src":"p3.jpg"},{"src":"p4.jpg"},{"src":"p5.jpg"}]};		//定义滚动加载的图片
		window.onscroll = function(){																						//运行加载函数
            if(scrollside()){																								//如果浏览器高度+滚动高度>临界高度时候
                $.each(dataImg.data,function(index,value){																	//历遍所有内容
                    var box =$("<div>").addClass("box").appendTo($("#container"));											//新建一个class=box的div放在container里
                    var content = $("<div>").addClass("content").appendTo(box);												//新建一个class=content的div放进box里
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);									//新建一个img放在content里，并添加其src位置属性
                });
                imgLocation();																								//加载内容运行位置函数定位
            }
        };

        // 使用window.resize，当浏览器发生变化时候，自动刷新
        $(window).resize(function() {
        	window.location.reload()
        });

	});
});

function scrollside(){
	var box = $(".box");																//获取盒子
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);	//临界高度
	var documentHeight = $(window).height();											//浏览器高度
	var scrollHeight = $(window).scrollTop();											//滚动高度
	return(lastboxHeight<scrollHeight+documentHeight)?true:false;						//浏览器高度+滚动高度>临界高度为真
}//加载函数，鼠标滚动到某个位置加载内容

function imgLocation(){
	var box = $(".box");										//获取盒子
	var boxWidth = box.eq(0).width();                           //确定盒子宽度
	var num = Math.floor($("#container").width()/boxWidth);     //内容宽度/盒子宽度=一行内盒子的数量
	var boxArr =[];												//定义一个数组用于存放每个内容距离顶部的高度
	box.each(function(index,value){								//历遍所有内容
		var boxHeight = box.eq(index).height();                 //每一个盒子的高度
		if (index<num) {                                        //在第一行的情况下
			boxArr[index] = boxHeight;							//高度就等于第一拍盒子对应的高度
		}else{													//第二行以后的情况下
			var minboxHeight=Math.min.apply(null,boxArr);		//获取最小的高度
			var minboxIndex=$.inArray(minboxHeight,boxArr);		//获取最小高度对应的位置
			$(value).css({										//改变位置样式
				"position":"absolute",							//使用绝对定位
				"top":minboxHeight,								//高度等于最小高度
				"left":box.eq(minboxIndex).position().left		//左距离等于最小高度对应的左距离
			});													//位置在最小高度位置的下面
			boxArr[minboxIndex]+=box.eq(index).height();		//刷新最小位置的高度
		}
	});
}//位置函数，把内容位置至于最小高度的下方