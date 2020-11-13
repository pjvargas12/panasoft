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
        <li><a href="#">Reglas de juego</a></li>
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
  <section class="contenido wrapper">
    <H1 style="background-color: whitesmoke">Guía Básica</h1>
    <br>
    <p>
      Para obtener acceso al juego, cada jugador deberá ingresar o loguearse con una cuenta que se ha creado al inicio. Lo anterior para poder tener mayor control sobre las personas que intervienen en el juego.
    </p>
    <div class="img1": align="center">
      <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" height="100px" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU" height="90px">
    </div>
    <h2 style="background-color: whitesmoke" >Reglas generales</h2>
    <p>
      Para abrir la ventana del juego, basta con dar en el botón "Jugar" de la pantalla de Inicio.<br>
      Posterior a eso, esperar unos segundos mientras carga el juego y apenas veamos que se despliega el mapa, ya podemos interactuar usando nuestro teclado, y más específicamente, <b>las teclas de dirección</b> <i>(Arriba - Izquierda - Abajo - Derecha).</i> <br>
      La idea es que encuentres las sedes de la institución, que se encuentran ubicadas en las <b>posiciones naranjas</b> del siguiente mapa:
      <img src="../../imagenes/mapa_general.png" height="500px" style="margin: 20px;"><br>
      El personaje aparecerá en donde está ubicado el círculo verde. Es decir, en la parte superior izquierda del mapa.<br><br>
    </p>
    <h2 style="background-color: whitesmoke" >Objetivo</h2>
    <p>
      La idea del juego, es que se pueda recorrer el mapa y conocer a grandes rasgos, la ubicación de las sedes de la universidad.
      <br> 
      <b>¿Qué estás esperando?</b>
    </p>
  
    <div class="TablaS" >
      <h2 style="background-color: whitesmoke" >Mejoras al juego</h2>
      <p>
        La idea es implementar más dinamismo a la hora de interactuar con las sedes. Esto se hará por medio de una pregunta acerca de cada una de ellas. 
        El resultado de cada pregunta se guardará en una base de datos y se asignará un puntaje. Luego, haremos una tabla de posición de los resultados del día. Dicha tabla sería de la siguiente manera:
      </p>
      <table style="border: 1px solid" border="1" align="center">  
        <tr >
          <th >Nombres</th>
          <th>Correo</th>
          <th>Puntaje</th>
        </tr>
        <tr>
          <td>Juan Parra </td>
          <td>pparra@unipana</td>
          <td>10.650</td>
        </tr>
        <tr>
          <td>Juan Diego P</td>
          <td>JdRodriguez@unipana</td>
          <td>9.983</td>
        </tr>
        <tr>
          <td>Pedro Vargas</td>
          <td>pjulian@unipana</td>
          <td>9.001</td>
        </tr>
      </table>
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