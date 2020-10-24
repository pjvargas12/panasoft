<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Panasoft - Main</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

</head>

<body class="body-main">
    <header>
      <img src="../imagenes/header.png">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="reglas.html">Reglas de juego</a></li>
          <li><a href="#">Acerca de</a></li>
          <li class="li_right"><a href="../index.html">Cerrar sesión</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <form class="form-box2">
        <h1>Seleccione un ávatar:</h1>
        <br>
        <label>
          <input type="radio" name="avatar" value="man" checked="checked"><img class="img" width="20%" src="../imagenes/hombre.png">
        </label>
        <label>
          <input type="radio" name="avatar" value="woman"><img class="img" width="20%" src="../imagenes/mujer.png">
        </label>
        <label>
          <input type="radio" name="avatar" value="dinosaurio"><img class="img" width="20%" src="../imagenes/dinosaurio.png">
        </label>        
        <button type="submit">JUGAR</button>
      </form>
    </section>
</body>

</html>