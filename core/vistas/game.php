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
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Juego</title>
    <link rel="stylesheet" href="../../lib/style.css">
  </head>
  <body class="body-main">
  	<header>
      <img src="../../imagenes/header.png">
      <nav>
        <ul>
          <li><a href="main.php">Inicio</a></li>
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
    <script type="text/javascript" src="../../lib/phaser.min.js"></script>
    <div class="div_juego">
      <script type="text/javascript" src="../../lib/script.js"></script>
    </div>
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