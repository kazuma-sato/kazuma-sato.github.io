<!DOCTYPE html>
<html lang="en-us"><!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
Lab Instructor Abid Rana 
--> <head>
		<title>COMP 1230 Advanced Web Programming | Lab 3</title>
		<meta name="description" content="Lab 3" />
		<meta name="keywords" content="COMP 1230, PHP, SQL, Tutorials" />
		<meta name="author" concent="Kazuma Sato : kazuma.sato@georgebrown.ca" />
	</head>
	
	<body>
		<h1>Kazuma Sato</h1>

		<?php
			if(isset($_GET["n1"]) && isset($_GET["n2"])) {
				$n1 = $_GET["n1"];
				$n2 = $_GET["n2"];

				print $n1. " + ". $n2. " = ". ($n1 + $n2); 
			} else {
				print "<a href='http://localhost/comp1230/practice/wk3/get.php?n1=".
					rand(). "&n2=". rand(). "'>Try this link.</a>";
			}
		?> 

	</body>
</html>