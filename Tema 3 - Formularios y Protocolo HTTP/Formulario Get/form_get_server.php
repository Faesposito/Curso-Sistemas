<?php
 
$_REQUEST['name'];
$_REQUEST['surname'];
$_REQUEST['email'];
$_REQUEST['population'];
$_REQUEST['province'];
$_REQUEST['age'];
$_REQUEST['recomendation1'];
$_REQUEST['recomendation2'];
$_REQUEST['recomendation3'];
$_REQUEST['recomendation4'];
$_REQUEST['opinion'];
$_REQUEST['sugerence'];
$_REQUEST['browserTime'];

?>

<html>
    <body>
     <p> <?php echo "Nombre: ". $_REQUEST['name'] ?> </p>
     <p> <?php echo "Apellidos: ". $_REQUEST['surname'] ?></p>
     <p> <?php echo "Email: ". $_REQUEST['email'] ?></p>
     <p> <?php echo "Poblacion: ". $_REQUEST['population'] ?></p>
     <p> <?php echo "Provincia: ". $_REQUEST['province'] ?></p>
     <p> <?php echo "Edad: ". $_REQUEST['age'] ?></p>
     <p> <?php echo "Recomendacion: ". $_REQUEST['recomendation1'] ?></p>
     <p> <?php echo "Recomendacion: ". $_REQUEST['recomendation2'] ?></p>
     <p> <?php echo "Recomendacion: ". $_REQUEST['recomendation3'] ?></p>
     <p> <?php echo "Recomendacion: ". $_REQUEST['recomendation4'] ?></p>
     <p> <?php echo "Opinion: ". $_REQUEST['opinion'] ?></p>
     <p> <?php echo "Sugerencia: ". $_REQUEST['sugerence'] ?></p>
     <p> <?php echo "Tiempo en Navegador: ". $_REQUEST['browserTime'] ?></p>
    </body>
</html>