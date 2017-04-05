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
			$number = rand(0,100);

			echo "The number is ". $number. ".<br>";

			if (!($number % 2)) {
				print "The number is even.<br>";
			} else {
				print "The number is odd.<br>";
			}

			print (!($number % 2)) ? "The number is even." : "The number is odd.";
			echo "<br>";

			$mark = $number;

			if ($mark < 49){
				echo "The mark is F.<br>";
			} elseif ($mark < 56) {
				echo "The mark is D.<br>";
			} elseif ($mark < 59) {
				echo "The mark is D+.<br>";
			} elseif ($mark < 62) {
				echo "The mark is C-.<br>";
			} elseif ($mark < 66) {
				echo "The mark is C.<br>";
			} elseif ($mark < 69) {
				echo "The mark is C+.<br>";
			} elseif ($mark < 72) {
				echo "The mark is B-.<br>";
			} elseif ($mark < 76) {
				echo "The mark is B.<br>";
			} elseif ($mark < 79) {
				echo "The mark is B+.<br>";
			} elseif ($mark < 85) {
				echo "The mark is A-.<br>";
			} elseif ($mark < 89) {
				echo "The mark is A.<br>";
			} else {
				echo "The mark is A+.<br>";
			}

			switch ($number) {
				case $mark < 49:
					echo "The mark is F.<br>";
					break;
				case $mark < 56:
					echo "The mark is D.<br>";
					break;
				case ($mark < 59):
					echo "The mark is D+.<br>";
					break;
				case ($mark < 62):
					echo "The mark is C-.<br>";
					break;
				case ($mark < 66):
					echo "The mark is C.<br>";
					break;
				case ($mark < 69):
					echo "The mark is C+.<br>";
					break;
				case ($mark < 72):
					echo "The mark is B-.<br>";
					break;
				case ($mark < 76):
					echo "The mark is B.<br>";
					break;
				case ($mark < 79):
					echo "The mark is B+.<br>";
					break;
				case ($mark < 85):
					echo "The mark is A-.<br>";
					break;
				case ($mark < 89):
					echo "The mark is A.<br>";
					break;
				default:
					echo "The mark is A+.<br>";
				} 
		?>

	</body>
</html>