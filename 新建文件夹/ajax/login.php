<?php
header('Access-Control-Allow-Origin: *');   
$username = $_POST["username"];
$password = $_POST["password"];

 
//创建连接
mysql_connect('localhost',"root","root");
mysql_select_db("gz2006");
$sql = "SELECT * FROM username WHERE username='$username' and password = '$password'";
$result = mysql_query($sql);
$row = mysql_fetch_array($result);
if($row){
    echo json_encode(array("error" => 0, "data" => "登陆成功"));

   
}else{
    echo json_encode(array("error" => 1, "data" => "用户名或密码错误"));
  
}



?>