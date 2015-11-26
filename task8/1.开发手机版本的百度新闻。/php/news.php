<?php
	require_once('connect.php');//连接
	
	$name = $_POST["name"];

    $result = mysql_query("SELECT * FROM $name WHERE `news_type`='新闻'");


	if ($result) {
        // 图片模块
        if ($name == "navImg") {
            while ($row = mysql_fetch_array($result)) {
            	
                $title   = $row["news_title"];
                $img     = $row["news_img"];	
						
				echo "<div class=\"navimgPhoto\" >
					<img src=\"$img\">
					<p class=\"navimgTitle\">$title</p>
				</div>";
            }
        // 其他模块
        } else {
            while ($row = mysql_fetch_array($result)) {
            	
                $title   = $row["news_title"];
                $img     = $row["news_img"];
                $date    = $row["news_date"];
                $from    = $row["news_from"];
				$content = $row["news_content"];	
						
				echo "<li >
					<img src=\"$img\">
					<p class=\"newstitle\">$title</p>
					<p><span class=\"newsContent\">$content</span></p>
					<span class=\"newsdate\">$date</span>
					<span class=\"newsfrom\">$from</span>
				</li>";
            }
        }
    }

	mysql_close($con);
	
?>