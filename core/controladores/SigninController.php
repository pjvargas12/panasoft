<?php
/**
 * 
 */
include ('../modelos/SigninModel.php');
if (!isset($_POST['registro'])) {
	echo '<script type="text/javascript">window.location.href="../vistas/Error.php"; </script>';
} else {
	if (trim($_POST['nombres']) == '' || trim($_POST['apellidos']) == '' || trim($_POST['email']) == '' || trim($_POST['password']) == '' || trim($_POST['valPassword']) == '') {
		echo '<script type="text/javascript"> alert("Se deben diligenciar todos los campos"); window.location.href="../vistas/registro.php"; </script>';
	} else {
		if(md5($_POST['password']) != md5($_POST['valPassword'])){
			echo '<script type="text/javascript"> alert("Las contraseñas no coinciden"); window.location.href="../vistas/registro.php"; </script>';
		}else{
			if (validaCorreo($_POST['email']) > 0) {
				echo '<script type="text/javascript"> alert("El correo que intenta registrar ya existe"); window.location.href="../vistas/registro.php"; </script>';
			}else{
				var_dump($_POST);
				if (!insertaUsuario($_POST)){
					echo '<script type="text/javascript"> alert("Imposible crear el registro"); window.location.href="../vistas/registro.php"; </script>';
				} else {
					echo '<script type="text/javascript"> alert("Usuario creado con éxito"); window.location.href="../../index.php"; </script>';
				}
			}
		}
	}
}
 ?>