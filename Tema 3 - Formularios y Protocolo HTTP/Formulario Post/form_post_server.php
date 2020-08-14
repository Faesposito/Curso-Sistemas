<?php
 
$_REQUEST['firstName'];
$_REQUEST['surname'];
$_REQUEST['email'];
$_REQUEST['password'];
$_REQUEST['passwordConfirmation'];
$_REQUEST['gender'];
$_REQUEST['hobbies1'];
$_REQUEST['hobbies2'];
$_REQUEST['hobbies3'];
$_REQUEST['hobbies4'];
$_REQUEST['sourceIncome'];
$_REQUEST['income'];
$_REQUEST['file'];
$_REQUEST['age'];
$_REQUEST['bio'];

?>

<html>
    <body>
     <p> <?php echo "Nombre: ". $_REQUEST['firstName'] ?> </p>
     <p> <?php echo "Apellido: ". $_REQUEST['surname'] ?></p>
     <p> <?php echo "Email: ". $_REQUEST['email'] ?></p>
     <p> <?php echo "Password: ". $_REQUEST['password'] ?></p>
     <p> <?php echo "Comfirmacion: ". $_REQUEST['passwordConfirmation'] ?></p>
     <p> <?php echo "Genero: ". $_REQUEST['gender'] ?></p>
     <p> <?php echo "Hobbie: ". $_REQUEST['hobbies1'] ?></p>
     <p> <?php echo "Hobbie: ". $_REQUEST['hobbies2'] ?></p>
     <p> <?php echo "Hobbie: ". $_REQUEST['hobbies3'] ?></p>
     <p> <?php echo "Hobbie: ". $_REQUEST['hobbies4'] ?></p>
     <p> <?php echo "Fuente de Ingresos: ". $_REQUEST['sourceIncome'] ?></p>
     <p> <?php echo "Ingreso: ". $_REQUEST['income'] ?></p>
     <p> <?php echo "Imagen de Perfil: ". $_REQUEST['file'] ?></p>
     <p> <?php echo "Edad: ". $_REQUEST['age'] ?></p>
     <p> <?php echo "Biografia: ". $_REQUEST['bio'] ?></p>
    </body>
</html>