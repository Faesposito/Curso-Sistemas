<?php
	//Inicio de sesión (Persistencia de datos en diferentes ejecuciones)
	session_start();

	$connection = null;
	
	//Ejecutando la conexión en un bloque protegido. En caso de falla X al conectar, se atrapa la excepción
	try {

		$connection = new PDO('mysql:host=127.0.0.1:3306;dbname=product-app', 'root', 'Faespo1493' );
		
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch (PDOException $connectionException) {

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

	function login( $connection, $data ) {

		$SQLCode = "SELECT password FROM user WHERE username = '$data->username'";
		
		$db_password = $connection->query($SQLCode)->fetch()['password'];
		

		if ( $db_password == $data->password ) {

			$oldKey = $_SESSION["userKeyAccess"];
			$_SESSION["userKeyAccess"] = uniqid();
			return $_SESSION["userKeyAccess"];
		}
		else {

			return null;
		}
	}

	function authorize( $lastUserAccessKey, $connection, $action, $data ) {

		if ( $action != 'login' ) {	
			
			if ( $_SESSION["userKeyAccess"] == $lastUserAccessKey ) {

				$response = $action( $connection, $data );
				$_SESSION["userKeyAccess"] = uniqid();
				return [ "key" => $_SESSION["userKeyAccess"], "body" => $response ];
				
			}
		}
		else {

			$SQLCode = "SELECT admin FROM user WHERE username = '$data->username'";

			$db_admin = $connection->query($SQLCode)->fetch()['admin'];

			if ( $db_admin == 1) {

				return [ "key" => login($connection,$data), "body" => "isAdmin" ];
			}
			else {

				return [ "key" => login($connection,$data), "body" => "isNotAdmin" ];

			}
			
		}		
	}

	function register( $connection, $data ) {
	
		if ( isValidUserData( $data )) {

			try {

				$SQLCode = "INSERT INTO user (username,password,firstname,surname,email,age,address) 
							VALUES('$data->username','$data->password','$data->firstname','$data->surname','$data->email','$data->age','$data->address' )";
				$connection->query($SQLCode);
			}
			catch( PDOException $connectionException ) {

				return array( status=>'error', description=>$connectionException->getMessage() );
			}
		}
		else {

			return array( status=>'error', description=>'Los datos del usuario no cumplen con la especificación requerida.' );
		}
	}

	function isValidUserData( $productData ) {

		$success = true;

		$success = ( $success && array_key_exists('username', $productData ) && !is_null( $productData->username ) );
		$success = ( $success && array_key_exists('password', $productData ) && !is_null( $productData->password ) );
		$success = ( $success && array_key_exists('confirmPassword', $productData ) && $productData->confirmPassword == $productData->password );
		$success = ( $success && array_key_exists('firstname', $productData ) && !is_null( $productData->firstname ) );
		$success = ( $success && array_key_exists('surname', $productData ) && !is_null( $productData->surname ) );
		$success = ( $success && array_key_exists('email', $productData ) && !is_null( $productData->email ) );
		$success = ( $success && array_key_exists('age', $productData ) && !is_null( $productData->age ) && $productData->age >= 18);
		$success = ( $success && array_key_exists('address', $productData ) && !is_null( $productData->address ) );

		return success;	
	};


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
	
	//echo json_encode( $action( $connection, $data ) );
	
	echo json_encode( authorize($key, $connection, $action, $data) );
?>