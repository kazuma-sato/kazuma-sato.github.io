<!DOCTYPE html>

<html lang="en-us"><!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
Lab Instructor Abid Rana 
-->
<?php 
	$first_name = "Kazuma";
	$last_name = "Sato";
	$year_born = 1988;
?> 
	<head>
		<title>COMP 1230 Advanced Web Programming | Lab 2</title>
		<meta name="description" content="Lab 2" />
		<meta name="keywords" content="COMP 1230, PHP, SQL, Tutorials" />
		<meta name="author" concent="Kazuma Sato : kazuma.sato@georgebrown.ca" />
	</head>
	
	<body>
		<h1>Kazuma Sato</h1>

		<?php
			$current_year = 2015;

			print "First name is: ". $first_name. " and last name is: ". $last_name. ". I am ". 
				($current_year - $year_born). " years old.";
		 ?>
	</body>
</html>