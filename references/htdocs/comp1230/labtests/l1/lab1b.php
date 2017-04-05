<!DOCTYPE html>
<html lang="en-us"><!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
Lab Instructor Abid Rana 
--> <head>
		<title>COMP 1230 Advanced Web Programming | Lab Test 1</title>
		<meta name="description" content="Lab Test 1" />
		<meta name="keywords" content="COMP 1230, PHP, SQL, Tutorials" />
		<meta name="author" concent="Kazuma Sato : kazuma.sato@georgebrown.ca" />
		
		<style type="text/css">
			td{
				text-align: center;
			}
		</style>
	</head>
	
	<body>
		<h1>Kazuma Sato</h1>
		
		<form action="lab1b.php" method="get">
			Num1: <input type="number" name="num1" style="width: 125px"> 
			Num2:<input type="number" name="num2" style="width: 125px">
			<input type="submit">
		</form>

		<?php
		$num1 = $_GET['num1'];
		$num2 = $_GET['num2'];

		echo '<table border="1" style="width= 400px">';
		echo	'<col width="75">';
		echo	'<col width="175">';
		echo	'<col width="75">';
		echo	'<col width="75">';
		echo	'<tr>';
		echo		'<td>'. number_format($num1, 2). '</td>';
		echo		'<td>+</td>';
		echo		'<td>'. number_format($num2, 2). '</td>';
		echo		'<td>'. number_format(($num1 + $num2), 3).'</td>';
		echo	'</tr>';
		echo	'<tr>';
		echo		'<td>'. number_format($num1, 2). '</td>';
		echo		'<td>-</td>';
		echo		'<td>'. number_format($num2, 2). '</td>';
		echo		'<td>'. number_format(($num1 - $num2), 3).'</td>';
		echo	'</tr>';
		echo	'<tr>';
		echo		'<td>'. number_format($num1, 2). '</td>';
		echo		'<td>*</td>';
		echo		'<td>'. number_format($num2, 2). '</td>';
		echo		'<td>'. number_format(($num1 * $num2), 3).'</td>';
		echo	'</tr>';
		echo	'<tr>';
		echo		'<td>'. number_format($num1, 2). '</td>';
		echo		'<td>/</td>';
		echo		'<td>'. number_format($num2, 2). '</td>';
		echo		'<td>'. number_format(($num1 / $num2), 3).'</td>';
		echo	'</tr>';
		echo'</table>';
		?>		
	</body>
</html>