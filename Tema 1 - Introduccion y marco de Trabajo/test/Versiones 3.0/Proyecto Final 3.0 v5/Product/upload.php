<?php
	if($_FILES['image']['tmp_name']){
		$name = $_POST["name"];
		move_uploaded_file($_FILES['image']['tmp_name'], './resource/'.$name.'.jpg');
	}
	?>