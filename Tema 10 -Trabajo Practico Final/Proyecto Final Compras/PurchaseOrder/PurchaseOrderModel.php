<?php
	
	$connection = new PDO('mysql:host=127.0.0.1:3306;dbname=product-app', 'root', 'Faespo1493' );

	$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	try {

		$connection = new PDO('mysql:host=127.0.0.1:3306;dbname=product-app', 'root', 'Faespo1493' );
	}
	catch (PDOException $connectionException) {

		$status = array( status=>'error', description=>$connectionException->getMessage() );
	    echo json_encode($status);

	    die();
	};

	$json_body = file_get_contents('php://input');

	$object = json_decode($json_body);

	$action = $object->action;
	$data = $object->body;


	function create( $connection, $data ) {

	$SQLCode = "INSERT INTO purchase_order (name,category,price,quantity,description) VALUES('$data->name','$data->category','$data->price','$data->quantity','$data->description' )";
	$connection->query($SQLCode);

	} 

	function edit( $connection, $data ) {

		$SQLCode = "UPDATE purchase_order
					SET name='$data->name', category='$data->category',	price='$data->price', quantity='$data->quantity',description='$data->description'
					WHERE id='$data->id'";
		$connection->query($SQLCode);
	};

	function delete( $connection, $data ) {

		$SQLCode = "DELETE FROM purchase_order WHERE name='$data->name'";

		$connection->query($SQLCode);
	};
	
	function getAll($connection) {

		$SQLCode = "SELECT * FROM purchase_order ORDER BY name ASC LIMIT 1000";

		$result = $connection->query($SQLCode)->fetchAll();

		return $result;
	};

	
	/* 
	La siguiente línea tiene mucho significado:
	"Ejecuta la función correspondiente al nombre de acción enviado por el cliente, le suministra
	el argumento basado en el cuerpo del mensaje recibido en la petición, y a la respuesta la codifica
	en texto formato JSON e imprime este texto como respuesta al cliente"

	$action es el texto(string) del nombre de la función a invocar.
	$action() --> Invoca la función cuyo nombre coincide con la que existe programada aquí.
	Ejemplo: Si $action es 'create', entonces la línea se convierte en create()
	Como esto está generalizando la invocación de cualquier función, es peligroso
	dado que no todas las funciones tienen la misma cantidad de parámetros y no todas tienen
	datos de retorno. Por cuestión de simplificación se aborda así.*/
	
	echo json_encode( $action( $connection, $data ) );

?>