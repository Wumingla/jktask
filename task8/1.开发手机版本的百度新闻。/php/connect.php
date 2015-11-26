<?php
	header("Content-type:text/html;charset=utf-8");
	define('HOST','localhost');
	define('USERNAME', 'root');
	define('PASSWORD', '');

	if(!($con=mysql_connect(HOST,USERNAME,PASSWORD))){//连库
		echo mysql_error();
	}

	if(!mysql_select_db('newsbaidu')){//选库
		echo mysql_error();
	}

	if(!mysql_query('set names utf8')){//字符集 
		echo mysql_error();
	}
?>