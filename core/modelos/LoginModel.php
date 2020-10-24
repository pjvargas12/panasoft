<?php 
require '../../config/conexion.php';
/**
 * 
 */

	function validaCorreo($email){
		
		$sql = "SELECT * FROM usuario WHERE correo = '{$email}'";
		$result = mysqli_fetch_row(mysqli_query(conectar(), $sql));
		return $result;
	}


 ?>