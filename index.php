<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Panasoft - Login</title>
    <link rel="stylesheet" href="lib/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

</head>

<body class="body-index">
  <header>
    <img src="imagenes/header.png">
  </header>
    <form action="core/controladores/LoginController.php" class="form-box animated fadeInUp" method="POST">
        <h1>Inicio de sesión</h1>
        <h2>Correo electronico</h2>
        <input id="email" name="email" type="email" placeholder="example@unipanamericana.edu.co">
        <h2>Contraseña</h2>
        <input type="password" placeholder="***********" name="password" id="password">
        <button id="entrar" type="submit">INICIAR SESIÓN</button>
        <h4>¿No tienes cuenta?<br>Regristrate <a href="lib/registro.html">aquí</a></h4>
    </form>
</body>

</html>