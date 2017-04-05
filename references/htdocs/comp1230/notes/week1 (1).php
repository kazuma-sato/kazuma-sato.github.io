<!DOCTYPE html>
<html lang="en-us"><!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
--> <head>
		<title>COMP 1231 Advanced Web Programming | Week 1</title>
	</head>

	<body>
		<h1>Welcome to PHP</h1>
		<form>
			<input type="text" name="key" value="value">
			<input type="number" name="age" value="50">
			<input type="submit">
		</form>
			<?php
			echo 'Maziar<br>';
			
			// Array of values sent from GET or POST
			echo $_GET['key'] . "  " . $_GET['age'];

			//echo $_POST;
			//echo $_REQUEST
		?>
		

	</body>
</html>