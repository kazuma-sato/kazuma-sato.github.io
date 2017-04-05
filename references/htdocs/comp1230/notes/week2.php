<!DOCTYPE html>
<html lang="en-us">
<!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
Lab Instructor Abid Rana
-->
	<head>
		<title>COMP 1231 Advanced Web Programming | Week 2</title>
					
		<style> 
		<>
		body{
			background-color: <?php echo $color ?>;
			}<style>'
	</head>

	<body>
		<h1>COMP 1231 Advanced Web Programming</h1>
		<h2>Week 2</h2>
		
		<form method="post">
			<input type="text" name="n1">
			<input type="text" name="n2">
			<input type="text" name="n3">
			<input type="submit">
		</form>

		<?php
			// THIS IS A COMMENT YO!
			# THIS IS ANOTHER COMMENT. HASHTAG COMMENT!


			/********************************* 
			 * THIS          MUCH COMMENT!   *
			 * IS            SO CAPS!        *
			 * A 			 SUCH LOUD!      *
			 * MULTI-LINE    WOW!            *
			 * COMMENT!!!                    *
			 *********************************/	
			
			$num1 = $_POST['n1'];
			$num2 = $_POST['n2'];
			$num3 = $_POST['n3'];

			$sum  = $_POST['n1'] + $_POST['n2'] + $_POST['n3'];

			echo $_POST['n1']. " + ". $_POST['n2']. " + ". $_POST['n3']. " = ". $sum;


			// define() declares CONST variables
			// Parameters for Define (string 'name', value, bool 'case-sensitivity')

			define('TAX', 0.13);

			print "The tax is ". (TAX * 100). "%."

			// defined() returns bool value if string in parameter used for a CONST value
			$isTAXdefined = defined('TAX');
				# $isTAXdefined will be true.

			// number_format() formats numbers, DUH!!!
			echo number_format(14.18365242, 3);

			// date()


		?>
		

	</body>
</html>