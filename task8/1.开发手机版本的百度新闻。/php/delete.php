<?php
	require_once('connect.php');//连接

	$newssort = $_POST["newssort"];
	$newsid = $_POST["newsid"];

	$msq ="delete from $newssort where `news_id`=$newsid";
	$result = mysql_query($msq);

	echo '{"success":true,"msg":"信息删除成功！"}';

	mysql_close($con);
	
?>