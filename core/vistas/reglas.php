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
      Para obtener acceso al juego, cada jugador deberá ingresar o loguearse con su cuenta institucional de la universidad. Lo anterior para poder tener mayor control sobre las personas que intervienen en el juego.
    </p>
    <div class="img1": align="center">
      <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" height="100px" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU" height="90px">
    </div>
    <h2 style="background-color: whitesmoke" >Reglas generales</h2>
    <br>
    <p>
      El usuario deberá seleccionar un avatar apenas inicie sesión. En la pantalla principal encontrará dos perosnajes el cual uno pertenece al genero masculino y otro femenino. Posteriormente debera hacer clic al boton <i>"JUGAR"</i>. Como te puedes dar cuenta, es bastate sencillo. El juego se hizo con fines académicos, pues por medio de él podrás conocer más nuestra universidad. Al iniciar el juego, el avatar que seleccionó aparecerá en un mapa interactivo. En dicho mapa, el estudiante podrá moverse libremente. Al llegar a una sede de la institución, se encontrará informacion. Cuando el jugador lo desee y cuando se sienta preparado, se realizarán una ronda de preguntas. La idea es que responda la mayor cantidad de preguntas correctamente. En el caso de que no pueda contestar por lo menos el 60% de las preguntas, no podra avanzar a otra sede de la institución. Se quedará en la sede actual, hasta conseguir el puntaje para continuar avanzando.
    </p>
    <h2 style="background-color: whitesmoke" >Posicionamiento</h2>
    <p>
      Al finalizar el juego encontrará una lista con los mejores puntajes de los estudiantes.
      <br> 
      <b>¿Qué esperas para ser el mejor?</b>
    </p>
  
    <div class="TablaS" >
      <h2 style="background-color: whitesmoke" >Mejores Puntajes</h2>
      <br>
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