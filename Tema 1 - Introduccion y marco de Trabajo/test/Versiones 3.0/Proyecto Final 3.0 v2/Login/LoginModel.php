<?php
	//Inicio de sesión (Persistencia de datos en diferentes ejecuciones)
	session_start();

	$connection = null;
	
	//Ejecutando la conexión en un bloque protegido. En caso de falla X al conectar, se atrapa la excepción
	try
	{
		$connection = new PDO('mysql:host=127.0.0.1:3306;dbname=product-app', 'root', 'Faespo1493' );
		
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch (PDOException $connectionException) 
	{
		$status = array( status=>'error', description=>$connectionException->getMessage() );
	    echo json_encode($status);

	    die();
	};

	$json_body = file_get_contents('php://input');

	$object = json_decode($json_body);

	$key = $object->key;
	$action = $object->action;
	$data = $object->body;


	/******** CODIGO NUEVO **********/

	function login( $connection, $data )
	{
		$SQLCode = "SELECT password FROM user WHERE username = '$data->username'";
		
		$db_password = $connection->query($SQLCode)->fetch()['password'];
		

		if ( $db_password == $data->password )
		{
			$oldKey = $_SESSION["userKeyAccess"];
			$_SESSION["userKeyAccess"] = uniqid();
			return $_SESSION["userKeyAccess"];
		}
		else
		{
			return null;
		}
	}

	function authorize( $lastUserAccessKey, $connection, $action, $data )
	{
		if ( $action != 'login' )
		{
			if ( $_SESSION["userKeyAccess"] == $lastUserAccessKey )
			{
				$response = $action( $connection, $data );
				$_SESSION["userKeyAccess"] = uniqid();
				return [ "key" => $_SESSION["userKeyAccess"], "body" => $response ];
			}
		}
		else
		{
			return [ "key" => login($connection,$data), "body" => null ];
		}		
	}

	function register( $connection, $data )
	{
		return 'RegisterOK!';
	}


	/********************************/


	/*La siguiente línea tiene mucho significado:
	"Ejecuta la función correspondiente al nombre de acción enviado por el cliente, le suministra
	el argumento basado en el cuerpo del mensaje recibido en la petición, y a la respuesta la codifica
	en texto formato JSON e imprime este texto como respuesta al cliente"

	$action es el texto(string) del nombre de la función a invocar.
	$action() --> Invoca la función cuyo nombre coincide con la que existe programada aquí.
	Ejemplo: Si $action es 'create', entonces la línea se convierte en create()
	Como esto está generalizando la invocación de cualquier función, es peligroso
	dado que no todas las funciones tienen la misma cantidad de parámetros y no todas tienen
	datos de retorno. Por cuestión de simplificación se aborda así.*/
	
	echo json_encode( authorize($key, $connection, $action, $data) );
?>