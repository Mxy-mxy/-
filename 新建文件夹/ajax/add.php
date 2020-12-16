<?php
header('Access-Control-Allow-Origin: *'); 
$username = $_POST["username"];
$password = $_POST["password"];
 
//创建连接
mysql_connect('localhost',"root","root");
mysql_select_db("gz2006");
$sql = "INSERT INTO username  VALUES ('$username','$password')";
mysql_query($sql);
mysql_close()

?>