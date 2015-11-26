$(function(){
	
	var $navli = $("#navAll li");
	$("#newssort").css("display","none");
	$("#newssort").val("navRec");

	//切换分类信息
	function showTable(){
		//移除历史信息
		$("#adminContent *").remove();
		$.get('/database', {
			name: $("#newssort").val()
		}, function(data) {
			/*optional stuff to do after success */
			$.each(data, function(index, element) {
				box = $("<tr></tr>").appendTo($("#adminContent"));
				tdId = $("<td class=\" text-center\"></td>").text(element.news_id).appendTo(box);
				tdType = $("<td class=\" text-center\"></td>").text(element.news_type).appendTo(box);
				tdTitle = $("<td class=\" text-center\"></td>").text(element.news_title).appendTo(box);
				tdImg = $("<td class=\" text-center\"></td>").text(element.news_img).appendTo(box);
				tdFrom = $("<td class=\" text-center\"></td>").text(element.news_from).appendTo(box);			
				tdContent = $("<td class=\"text-center\"></td>").text(element.news_content).appendTo(box);
				tdTime = $("<td class=\" text-center\"></td>").text(element.news_date).appendTo(box);
				tdUpdate = $("<td class=\" text-center\"></td>").appendTo(box);
				updateMessage = $("<input class = \"btn btn-info btn-sm resetbtn\" value=\"修改\">").attr("title", element.news_id).appendTo(tdUpdate);
				deleteMessage = $("<input class = \"btn btn-danger btn-sm deletbtn\" value=\"删除\">").attr("title", element.news_id).appendTo(tdUpdate);
			})
		});
	}
	showTable();
	
	//查看信息
	$navli.click(function(e){		
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
		//显示信息界面
		$("#newssort").val($clickValue);
		showTable();	
		$(".admanage").show();
		$(".resetfrom").hide();
	});
	

	//新增数据
	$("#smbtn").unbind("click").bind("click", function(event) {
		//阻止默认动作
		event.preventDefault();
		$.ajax({
			url: '/insert',
			type: 'POST',
			data: {
				'news_sort': $("#newssort").val(),
				'news_type': $("#newstype").val(),
				'news_title': $("#newstitle").val(),
				'news_img': $("#newsimg").val(),
				'news_content':$("#newscontent").val(),
				'news_from': $("#newsfrom").val()
			},
			success: function(date) {
				alert(date);
				showTable();
			},
			error: function() {
				alert("操作失败");
			}
		});
		return false;
	});

	//修改界面
	$("#adminContent").on('click', '.resetbtn', function(event) {
		//切换修改界面
		$(".admanage").hide();
		$(".resetfrom").show();
		$("#resetsort").val($("#newssort").val());
		$("#resetid").val($(this).attr("title"));
		//获取单条数据
		$.post('/find', {
			name: $("#resetid").val()
		}, function(data) {
			$("#resetsort").val(data[0].news_sort);
			$("#resettype").val(data[0].news_type);
			$("#resettitle").val(data[0].news_title);
			$("#resetimg").val(data[0].news_img);
			$("#resetfrom").val(data[0].news_from);
			$("#resetdate").val(data[0].news_date);
			$("#resetcontent").val(data[0].news_content);
		});
	});

	//修改数据
	$("#resetsbm").click(function(event){
		event.preventDefault();
		$.ajax({
			url:"/update",
			type:"POST",
			dataType:"json",
			data:{
				'news_sort': $("#resetsort").val(), 
				'news_id':$("#resetid").val(),
				'news_type': $("#resettype").val(),
				'news_title': $("#resettitle").val(),
				'news_img': $("#resetimg").val(),
				'news_content': $("#resetcontent").val(),
				'news_from': $("#resetfrom").val(),
				'news_date':$("#resetdate").val()
			},			
			success: function(data){
				alert(data);
				$(".admanage").show();
				$(".resetfrom").hide();
				showTable();
			},
			error: function(jqXHR){     
		   		alert("发生错误：" + jqXHR.status);  
			}, 
		})
	});

	//删除数据
	$("#adminContent").on('click', '.deletbtn', function(event) {
		var newsid = $(this).attr("title");
		$.ajax({
			url:"/delete",
			type:"POST",
			dataType:"json",
			data:{
				'name': $(this).attr("title"), 
			},			
			success: function(data){
				alert(data);
				showTable();
			},
			error: function(jqXHR){     
		   		alert("发生错误：" + jqXHR.status); 
			}, 
		})
	});
})