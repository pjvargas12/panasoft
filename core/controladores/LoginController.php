<?php
/**
 * 
 */
include ('../modelos/LoginModel.php');
if (isset($_POST['btnCerrar'])) {
	session_start();
	if($_SESSION['valida'] == 'OK'){
		session_unset();
		session_destroy();
		header('location: ../../index.php');
	} else {		
		session_unset();
		session_destroy();
		echo'<script type="text/javascript">
			    alert("Debe iniciar sesión");
			    window.location.href="../../index.php";
	    	</script>';
	}
} elseif(isset($_POST['entrar'])) {
	if (trim($_POST['password']) == '' || trim($_POST['email']) == ''){
		echo'<script type="text/javascript">
			    alert("Todos los campos deben diligenciarse");
			    window.location.href="../../index.php";
	    	</script>';
	}else{
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
				$_SESSION['valida'] = 'OK';
				$_SESSION['correo'] = $result[3];
				$_SESSION['nombres'] = $result[1];
				header('location: ../vistas/main.php');
			}
		}
	}
} else{
	echo'<script type="text/javascript">
		    window.location.href="../vistas/Error.php";
	    </script>';
}

 ?>