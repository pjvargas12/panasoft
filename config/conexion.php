<?php 

require 'constantes.php';

function conectar(){

	$db = new Mysqli(HOST, USER, PASSWORD, DATABASE);

	if (!$db) {
		echo "Imposible conectarse: ".mysqli_error($db);
	}
	return $db;
}
 ?>