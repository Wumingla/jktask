<?php
	require_once('connect.php');//连接

	$newssort = $_POST["newssort"];
	$newsid = $_POST["newsid"];
	$newstype = $_POST["newstype"];
	$newstitle = $_POST["newstitle"];
	$newsimg = $_POST["newsimg"];
	$newscontent = $_POST["newscontent"];
	$newsfrom = $_POST["newsfrom"];
	$newsdate = $_POST["newsdate"];
	
	$msq = "update $newssort set news_type='$newstype',news_title='$newstitle',news_img='$newsimg',news_content='$newscontent',news_from='$newsfrom',news_date='$newsdate' where news_id =$newsid";

	$result = mysql_query($msq);

	echo '{"success":true,"msg":"信息修改成功！ "}';
	
	mysql_close($con);
	
?>