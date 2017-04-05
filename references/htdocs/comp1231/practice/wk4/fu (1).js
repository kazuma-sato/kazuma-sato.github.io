//make a prompt for # of rows and # cols and create a table
function tables () {
	var _div = document.getElementById("content");

	

	var rows = function AskRow() {
		return prompt("How many rows would you like for your table?");

	}
	function AskCol() {
		return prompt("How many colomns would you like for you table?");
	}
	function OpenTable(){
		return "<table border='1'>";
	}
	function CloseTable(){
		return "</table>";
	}
	function StartRow(){
		return "<tr>";
	}
	function CloseRow(){
		return "</tr>";
	}
	function AddCell(){
		return "<td></td>";
	}

	/*
	for (var r = row ; r >= 1 ; r--){
		tableOpenTag += "\n\t<tr>";
		for (var c = col ; c >= 1 ; c--){
			tableOpenTag += "\n\t\t<td>"+n+"</td>";
			n++;
		}
		tableOpenTag +="\n\t</tr>"
	}
	_div.innerHTML = tableOpenTag + tableCloseTag;
	console.log(tableOpenTag);
	console.log(tableCloseTag);
}
*/