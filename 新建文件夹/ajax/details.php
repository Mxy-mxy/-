<?php
header('Access-Control-Allow-Origin: *'); 
$id = $_GET["id"];
 
//创建连接
mysql_connect('localhost',"root","root");
mysql_select_db("gz2006");
$sql = "SELECT *FROM goods WHERE goods_id ='$id'";
$result = mysql_query($sql);
$data = mysql_fetch_array($result);
echo json_encode(array("error"=>0,"data" =>$data));
mysql_close()

?>