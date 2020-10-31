<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Panasoft - Registro</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
</head>

<body class="body-index">
    <form action="../core/controladores/SigninController.php" class="form-box animated fadeInUp" method="POST">
        <h1>Registro</h1>
        <h4>Nombres</h4>
        <input type="text" placeholder="Pepito" name="nombres">
        <h4>Apelllidos</h4>
        <input type="text" placeholder="Perez" name="apellidos">
        <h4>Correo</h4>
        <input type="email" placeholder="example@unipanamericana.edu.co" name="email">
        <h4>Contraseña</h4>
        <input type="password" placeholder="************" name="password">
        <h4>Valida contraseña</h4>
        <input type="password" placeholder="************" name="valPassword">
        <button type="submit">REGISTRARME</button>
        <h4>¿Ya tienes cuenta?<br>Inicia sesión <a href="../Index.php">aquí</a></h4>
    </form>
    <?php !empty($error_message) ? print($error_message) : '';?> 
</body>

</html>