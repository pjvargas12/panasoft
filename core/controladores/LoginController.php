<?php
/**
 * 
 */
include ('../modelos/LoginModel.php');

$result = validaCorreo($_POST['email']);
if ($result == 0) {
	echo'<script type="text/javascript">
		    alert("Correo incorrecto");
		    window.location.href="../../index.php";
    	</script>';
}else{
	if ($result[4]!=md5($_POST['password'])) {		
		echo'<script type="text/javascript">
	    		alert("Contrasena incorrecta");
			    window.location.href="../../index.php";
		    </script>';
	} else {
		session_start();
		$_SESSION['correo'] = $result[3];
		$_SESSION['nombres'] = $result[1];
		header('location: ../../lib/main.php');
	}
}

 ?>