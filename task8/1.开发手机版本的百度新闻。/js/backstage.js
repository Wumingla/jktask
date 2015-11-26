$(function(){
	
	//加载推荐分类信息
	$("#adminContent").load("../php/bstage.php",{name:$("#navRec").attr("value")});
	var $navli = $("#navAll li");
	$("#newssort").css("display","none");
	$("#newssort").val("navRec");

	//点击切换分类信息
	$navli.click(function(){
		
		var $clickValue = $(this).attr("value");
		
		//按钮效果
		var $hoverNav = $navli.each(function(index, element){
		var $allValue = $(element).attr("value");
			if ($allValue == $clickValue) {
				$(element).addClass('tabon');
			} else {
				$(element).removeClass('tabon');
			}
		});
		
		$("#adminContent").load("../php/bstage.php", {
			name: $clickValue
		});	
		$("#newssort").val($clickValue);
		$(".admanage").show();
		$(".resetfrom").hide();
	});
	
	//新增数据
	$("#smbtn").click(function(){
		event.preventDefault();
		$.ajax({
				url:"../php/insert.php",
				type:"POST",
				dataType:"json",
				data:{
					newssort: $("#newssort").val(), 
					newstype: $("#newstype").val(),
					newstitle: $("#newstitle").val(),
					newsimg: $("#newsimg").val(),
					newscontent: $("#newscontent").val(),
					newsfrom: $("#newsfrom").val(),
					newsdate:$("#newsdate").val()
				},
				success: function(data){
					if (data.success) { 
						alert(data.msg);
						$("#adminContent").load("../php/bstage.php",{name:$("#newssort").val()});
					} else {
						alert(data.msg);
					}  
				},
				error: function(jqXHR){     
			   		alert("发生错误：" + jqXHR.status);  
				}, 
		})
	});
		
	//删除数据
	$("#adminContent").on('click', '.deletbtn', function(event) {
		event.preventDefault();
		var $indexid = $(this).attr("title");
		$.ajax({
			url:"../php/delete.php",
			type:"POST",
			dataType:"json",
			data:{
				newssort: $("#newssort").val(), 
				newsid:$indexid
			},
			success: function(data){
				if (data.success) { 
					alert(data.msg);
					$("#adminContent").load("../php/bstage.php",{name:$("#newssort").val()});
				} else {
					alert(data.msg);
				}  
			},
			error: function(jqXHR){     
			   	alert("发生错误：" + jqXHR.status);  
			}, 
		})			
	});	
	
	//切换到修改界面
	$("#adminContent").on('click', '.resetbtn', function(event) {
		$(".admanage").hide();
		$(".resetfrom").show();
		$("#resetsort").val($("#newssort").val());
		$("#resetid").val($(this).attr("title"));

	});	
				
	//新增数据
	$("#resetsbm").click(function(){
		event.preventDefault();
		$.ajax({
				url:"../php/update.php",
				type:"POST",
				dataType:"json",
				data:{
					newssort: $("#resetsort").val(), 
					newsid:$("#resetid").val(),
					newstype: $("#resettype").val(),
					newstitle: $("#resettitle").val(),
					newsimg: $("#resetimg").val(),
					newscontent: $("#resetcontent").val(),
					newsfrom: $("#resetfrom").val(),
					newsdate:$("#resetdate").val()
				},
				success: function(data){
					if (data.success) { 
						alert(data.msg);
						$(".admanage").show();
						$(".resetfrom").hide();
						$("#adminContent").load("../php/bstage.php",{name:$("#newssort").val()});
					} else {
						alert(data.msg);
					}  
				},
				error: function(jqXHR){     
			   		alert("发生错误：" + jqXHR.status);  
				}, 
		})
	});

})





