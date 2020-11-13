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
    <link rel="stylesheet" href="../../lib/style.css">
    <title>Panasoft - Reglas</title>
</head>
<body class="body-main">
  <header>
    <img src="../../imagenes/header.png">
    <nav>
      <ul>
        <li><a href="main.php">Inicio</a></li>
        <li><a href="reglas.php">Reglas de juego</a></li>
        <li><a href="#">Acerca de</a></li>
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
  <section class="contenido wrapper">
    <h1>Sobre Nosotros</h1>
      <Div style="text-align: justify;">
          <p >¡Hola! </br>
          </br>
          El día de hoy te queremos contar un poco sobre nosotros, 
          somos estudiantes de 6to semestre de la carrera <b>ingeniería de software</b>.<br>
          Nuestro equipo está conformado por tres integrantes con muchas ganas de que 
          los estudiantes, docentes y terceros conozcan un poco más sobre nuestra institución. 
          </p>
          <p>La idea de este proyecto surge debido a un problema que muy seguramente todos tuvimos al ingresar a la institución, ya que muchas veces no lográbamos reconocer y ubicar todas las sedes tan rápido, lo que nos generaba llegadas tarde u otro tipo de inconvenientes.<br>
          A continuación, te dejamos algunos de mapas con los que te puedes ubicar y ver donde están nuestras sedes: <p>
      </Div>
          <div class="containerF">
  
            <ul class="slider">
              <li id="slide1">
                <img src="../../imagenes/mapa2.jpg" width="500px" alt="Sede Principal" />
              </li>
              <li id="slide2">
                <img src="../../imagenes/mapa1.jpg" width="500px" alt="Mapa general" />
              </li>
            </ul>
            
            <ul class="menu">
              <li>
                <a href="#slide1">1</a>
              </li>
              <li>
                <a href="#slide2">2</a>
              </li>
            </ul>
            
          </div>  
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