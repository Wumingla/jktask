<?php
	require_once('connect.php');//连接
	
	$name = $_POST["name"];

    $result = mysql_query("SELECT * FROM $name");

            while ($row = mysql_fetch_array($result)){
            	
            	$id      = $row["news_id"];
				$type    = $row["news_type"];
                $title   = $row["news_title"];
                $img     = $row["news_img"];
                $date    = $row["news_date"];
                $from    = $row["news_from"];
				$content = $row["news_content"];	

				echo "<tr>
					    <td class=\"text-center\">$id</td>
					    <td class=\"text-center\">$type</td>
					    <td >$title</td>
					    <td class=\"text-center\">$from</td>
					    <td class=\"text-center\">$img</td>
					    <td >$content</td>
					    <td class=\"text-center\">$date</td>
					    <td class=\"text-center\">
					    	<input type=\"button\" class=\"btn btn-danger btn-sm deletbtn\" value=\"删除\" title=\"$id\" />
					   	 	<input type=\"button\" value=\"修改\" class=\"btn btn-info btn-sm resetbtn\"  title=\"$id\" />
					    </td>			    
					</tr>";

            }

	mysql_close($con);
	
?>