<?php 
 session_start();
 if (!isset($_SESSION['valida'])) {
   echo'<script type="text/javascript">
        alert("Debe iniciar sesión");
        window.location.href="../../index.php";
      </script>';
 }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Panasoft - Main</title>
    <link rel="stylesheet" href="../../lib/style.css">
</head>

<body class="body-main">
    <header>
      <img src="../../imagenes/header.png">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="reglas.php">Reglas de juego</a></li>
          <li><a href="sobreNosotros.php">Acerca de</a></li>
          <li class="li_right">
            <form method="POST" action="../controladores/LoginController.php">
              <button type="submit" name="btnCerrar" class="btnCerrar">
                Cerrar sesión
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <form class="form-box2" action="game.php">
        <br><br><br><br><br>
        <h1>Bienvenido <?php echo ($_SESSION['nombres']); ?></h1>
        <!--
        <label>
          <input type="radio" name="avatar" value="man" checked="checked"><img class="img" width="20%" src="../imagenes/hombre.png">
        </label>
        <label>
          <input type="radio" name="avatar" value="woman"><img class="img" width="20%" src="../imagenes/mujer.png">
        </label>
        <label>
          <input type="radio" name="avatar" value="dinosaurio"><img class="img" width="20%" src="../imagenes/dinosaurio.png">
        </label>   
      -->
        <button type="submit">JUGAR</button>
        <br><br><br><br><br>
      </form>
    </section>
</body>
<style type="text/css">
  .btnCerrar{
    text-decoration: none;
    display: block;
    padding: 20px;
    color: #E8600F;
    font-weight: bold;
    border:0px;
    background: #fff;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
  .btnCerrar:hover{
    background: #E8600F;
    color: white;
    cursor:pointer;
  }
</style>
</html>