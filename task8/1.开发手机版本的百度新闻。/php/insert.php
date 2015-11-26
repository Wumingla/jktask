<?php
	require_once('connect.php');//连接
		
	$newssort = $_POST["newssort"];
	$newstype = $_POST["newstype"];
	$newstitle = $_POST["newstitle"];
	$newsimg = $_POST["newsimg"];
	$newscontent = $_POST["newscontent"];
	$newsfrom = $_POST["newsfrom"];
	$newsdate = $_POST["newsdate"];

	if (!isset($_POST["newssort"]) || empty($_POST["newssort"])
		|| !isset($_POST["newstype"]) || empty($_POST["newstype"])
		|| !isset($_POST["newsdate"]) || empty($_POST["newsdate"])) {
		echo '{"success":false,"msg":"新建信息填写不全"}';
		return;
	}

	$msq ="insert into $newssort(news_type,news_title,news_img,news_content,news_from,news_date) values('$newstype','$newstitle','$newsimg','$newscontent','$newsfrom','$newsdate')";
	$result = mysql_query($msq);
	
	echo '{"success":true,"msg":"新建信息保存成功 "}';

	mysql_close($con);
	
?>