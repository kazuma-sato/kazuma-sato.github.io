<!DOCTYPE html>
<html lang="en-us"><!--
Kazuma Sato 100948212 kazuma.sato@georgebrown.ca
COMP 1230 Advanced Web Programming CRN 12831
Lecture Instructor Maziar Masoudi
Lab Instructor Abid Rana 
--> <head>
		<title>COMP 1230 Advanced Web Programming | Lab 3</title>
		<meta name="description" content="Lab 3" />
		<meta name="keywords" content="COMP 1230, PHP, SQL, Tutorials" />
		<meta name="author" concent="Kazuma Sato : kazuma.sato@georgebrown.ca" />

		<style type="text/css">
		input.hidden {
			display: none;
		}
		td {
			border: 1px solid <?php echo (isset($_GET["colour"])? $_GET["colour"]: "black");?>;
		}
		</style>

	</head>
	
	<body>
		<form method="get">
			<input class="hidden" type="text" name="firstName" value="Kazuma">
			<input class="hidden" type="text" name="lastName" value="Sato">
			<input class="hidden" type="text" name="studentID" value="100 948 212">

			<lable for="row">Rows:</lable>
				<select name="row">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
				</select>
			<lable for="columns">Colomns:</lable>
				<select name="columns">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
				</select>
			<lable for="colour">Colour:</lable>
				<input type="text" name="colour">
			<input type="submit">
		</form>

		<?php			
			if (isset($_GET["colour"]) && $_GET["colour"] != ""){
				echo $_GET["firstName"]. " ". $_GET["lastName"]. ": ". $_GET["studentID"]. "\n";
				
				echo "<table>\n";
				for($row = $_GET['row']; $row > 0; $row--) {
					echo "\t<tr>\n";
					for($col = $_GET['columns']; $col > 0; $col--){
						echo "\t\t<td class='border'>";
						echo ($row%2)? $_GET["lastName"]: $_GET["firstName"];
						echo "</td>\n";
					}
					echo "\t</tr>\n";
				}
				echo "</table>";
			}
		?>

	</body>
	<?php show_source(__FILE__);?>
</html>