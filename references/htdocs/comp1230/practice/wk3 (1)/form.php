<!DOCTYPE html>
<html lang="en-us"><!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
Lab Instructor Abid Rana 
--> <head>
		<title>COMP 1230 Advanced Web Programming | Lab 3</title>
		<meta name="description" content="Lab " />
		<meta name="keywords" content="COMP 1230, PHP, SQL, Tutorials" />
		<meta name="author" concent="Kazuma Sato : kazuma.sato@georgebrown.ca" />
	</head>
	
	<body>
		<h1>Kazuma Sato</h1>

		<form action="form.php" method="get">
			Number 1 : <input type="text" name="n1">
			<select name="operator">
				<option>+</option>
				<option>-</option>
				<option>*</option>
				<option>/</option>
			</select>
			Number 2: <input type="text" name="n2">			
			<input type="submit">
		</form>

		<?php
			if(isset($_GET["n1"]) && isset($_GET["n2"]) && isset($_GET["n2"])) {
				$n1 = $_GET["n1"];
				$n2 = $_GET["n2"];
				$operator = $_GET["operator"];

				print $n1. " ";

				if ($operator == "+")
					print "+ ". $n2. " = ". ($n1 + $n2);
				else if ($operator == "-")
					print "- ". $n2. " = ". ($n1 - $n2);
				else if ($operator == "*")
					print "* ". $n2. " = ". ($n1 * $n2);
				else 
					print "/ ". $n2. " = ". ($n1 / $n2);
			}
		?> 

	</body>
</html>