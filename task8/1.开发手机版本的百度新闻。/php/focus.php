<?php
	require_once('connect.php');//连接
	
	$name = $_POST["name"];

    $result = mysql_query("SELECT * FROM $name WHERE `news_type`='焦点图'");

            while ($row = mysql_fetch_array($result)) {
            	
				$img = $row["news_img"];
						
				echo "<img src=\"$img\"alt=\"焦点图\"/>";
            }
	mysql_close($con);	
?>