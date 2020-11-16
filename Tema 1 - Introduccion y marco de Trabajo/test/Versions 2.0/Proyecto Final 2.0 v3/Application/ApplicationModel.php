<?php
	
	$body = file_get_contents('php://input');
	$object = json_decode($body);

	$action = $object->action;
	$data = $object->body;

	function test( $data )
	{
		return '¡Hello World from Server Code Response!';
	}

	echo json_encode( $action( $data ) );

?>