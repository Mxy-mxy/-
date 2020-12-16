<?php
header('Access-Control-Allow-Origin: *'); 
$id = $_POST["userId"];
$username = $_POST["username"];
$goods_name = $_POST["goods_name"];
$goods_detail = $_POST["goods_detail"];
$goods_price = $_POST["goods_price"];
// $goods_number = $_POST["goods_number"];


 
//创建连接
mysql_connect('localhost',"root","root");
mysql_select_db("gz2006");
$sql = "INSERT INTO goods_list (goods_id,username,goods_name,goods_detail,goods_price) VALUES ('$id','$username','$goods_detail','$goods_name','$goods_price')";
// $sql = "select $goods_name,COUNT($goods_num) from goods_list where $goods_name='$goods_name' group by $goods_name";
mysql_query($sql);
echo json_encode(array("error" => 0 , "data" => '添加成功'));
mysql_close()

?> 