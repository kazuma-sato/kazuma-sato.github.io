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

			$start = rand(0,100);
			$end = rand(($start + 1),100);

			print "Start: ". $start. " End: ". $end."<br>";

			for (; $start <= $end; $start++) {
				print $start. "<br>";
			}

		?>
	</body>
</html>