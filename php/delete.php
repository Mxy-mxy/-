<?php
$id = $_GET['id'];
header('Access-Control-Allow-Origin: *'); 
//创建连接
mysql_connect('localhost',"root","root");
mysql_select_db("gz2006");
$sql = "DELETE FROM goods_list WHERE goods_id=$id";
mysql_query($sql);
echo json_encode(array("error" => 0 , "data" => '删除成功'));
mysql_close()

?>