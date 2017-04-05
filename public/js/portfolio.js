/* Just a lil javascript for my portfolio
								- Kaz
								me@kazuma.sato.ca */
 (function() {
	'use strict';
	
	if(!kazFunctions){
		console.log("functions are missing")
		return;
	} 
	var k = kazFunctions;
	var createNestedElements = k.createNestedElements;
	var createElement = k.createElement;
	var section = document.getElementById("portfolio");
	var featurettes = k.portfolio.articles.featurettes;

	// Generating modal for crosscampus
	k.crosscampusModal()
		.forEach(function(modal){

		document.body.appendChild(modal);
	});
	
	// Setting up the header for Portfolio section
	section.setAttribute("class", "container-fluid");
	section.appendChild(createElement("h1", "Portfolio", { class : "page-header" })).appendChild(createElement("small"," mostly stuff I did in school"));

	// Generating Featurette content 
	createNestedElements(featurettes)
		.forEach(function(featurette){

		document.body.appendChild(featurette);
	});
 })();