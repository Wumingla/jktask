<?php
	require_once('connect.php');//连接
	
	$name = $_POST["name"];

    $result = mysql_query("SELECT * FROM $name WHERE `news_type`='滚动信息'");

            while ($row = mysql_fetch_array($result)) {
            	
				$content = $row["news_content"];	
						
				echo "<li >$content</li>";

            }

	mysql_close($con);
	
?>