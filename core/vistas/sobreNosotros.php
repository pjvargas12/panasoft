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
          <p >Hola! </br>
          </br>
          El día de hoy te queremos contar un poco sobre nosotros, 
          somos estudiantes de <b>ingeniería de software</b> específicamente en 6to semestre, 
          nuestro equipo esta conformado por tres integrantes con muchas ganas de que 
          los estudiantes, docentes o terceros conozcan un poco mas sobre nuestra institución. 
          </p>
          <p>La idea de este proyecto surge debido a que al ingresar a la institución muchas 
            veces no lográbamos reconocer todas las sedes ya que la verdad hay bastantes, 
            acontinuación te dejamos unos mapas con todas las sedes  <p>
      </Div>
          <div class="containerF">
  
            <ul class="slider">
              <li id="slide1">
                <img src="../../imagenes/mapa2.jpg" width="500px" />
              </li>
              <li id="slide2">
                <img src="../../imagenes/mapa1.jpg" width="500px"/>
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