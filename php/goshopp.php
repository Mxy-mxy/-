<?php
header('Access-Control-Allow-Origin: *');   
//创建连接
mysql_connect('localhost',"root","root");
mysql_select_db("gz2006");
$sql = "SELECT *FROM goods_list";
$result = mysql_query($sql);
$arr = array();
while($row = mysql_fetch_array($result)){
    array_push($arr,$row);
}
echo json_encode(array("error" => 0 , "data" => $arr));
 
?>