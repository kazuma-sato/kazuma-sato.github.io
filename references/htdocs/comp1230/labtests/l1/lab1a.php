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
		
	</head>

	<?php
		//vars
		$firstName = "";
		$lastName = "";
		$email = "";

		if(isset($_GET['firstName']) && isset($_GET['lastName']) && isset($_GET['email'])){
			$firstName = $_GET['firstName'];
			$lastName = $_GET['lastName'];
			$email = $_GET['email'];
		}
	?>

	<body>
		<h1>Kazuma Sato</h1>

		<form action="lab1a.php" method="get">
			<fieldset style="width: 162px">
				Your Information<br>
				First Name:<br>
				<input type="text" name="firstName"><br>
				Last Name:<br>
				<input type="text" name="lastName"><br>
				Email:<br>
				<input type="email" name="email"><br>
				<input type="submit">
			</fieldset>
		</form>
			
		<strong>Name:</strong> <?php echo $firstName. " ". $lastName; ?><br>
		<strong>email:</strong> <?php echo $email;?><br>
	</body>
</html>