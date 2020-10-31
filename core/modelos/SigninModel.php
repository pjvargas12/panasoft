<?php 
require '../../config/conexion.php';
/**
 * 
 */

function insertaUsuario($params){
	$sql = "INSERT INTO usuario (nombres, apellidos, correo, contrasena, avatar_codigo) VALUES ('{$params['nombres']}', '{$params['apellidos']}', '{$params['email']}', md5('{$params['password']}'), 1)";
	$result = mysqli_query(conectar(), $sql);
	return $result;
}

function validaCorreo($email){
	$sql = "SELECT * FROM usuario WHERE correo = '{$email}'";
	$result = mysqli_fetch_row(mysqli_query(conectar(), $sql));
	return $result;
}

 ?>