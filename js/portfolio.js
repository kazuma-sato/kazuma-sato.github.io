/* Just a lil javascript for my portfolio
								- Kaz
									me@kazuma.sato.ca */
// (function() {
// 	'use strict';

	/* Adding forEach() to HTMLCollection and NodeList prototypes */
	if(!HTMLCollection.prototype.forEach) HTMLCollection.prototype.forEach = Array.prototype.forEach;
	if(!NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;	

	var selections = [];
	var uri = "https://or4xc50d36.execute-api.us-west-2.amazonaws.com/dev/";
	var path = document.getElementById("uriPath");
	var uriDomain =  document.getElementById("uriDomain");
	var apiResource1 = document.getElementById("apiResource1Group");
	var apiResource2 = document.getElementById("resource2Button");
	var apiResource2Dropdown = document.getElementById("resource2Dropdown");
	var apiResource2Text = document.getElementById("resource2Text");

	

	document.getElementById("apiClear")
			.addEventListener("click", function(){
		
		resetDemo('User clicked "Clear"');
	});
	document.getElementById("apiUndo")
			.addEventListener("click", function(){
		
		if(selections.length > 1) {
			selections.pop();
			var lastPath = path.textContent.split("/");
			lastPath.pop();
			path.textContent = lastPath.join("/");
		} else { resetDemo("Undo after only 0 or 1 selection");}
	})
	document.getElementById("apiSubmit")
			.addEventListener("click", function(){

	pathParam = document.getElementById("resource2Text").value;
		if(pathParam){
			path.textContent += "/" + pathParam
		}
			userRequestSubmit(url + path.textContent);
	})
	document.getElementById("entry1")
			.addEventListener("click",resource1OnClick);
	document.getElementById("user1")
			.addEventListener("click",resource1OnClick);

	function resetDemo(error) {

		console.log("Resetting Demo. . . ")
		if(error) console.log(error)

		path.textContent = "";
		apiResource2.textContent="Select a Resource";
		apiResource2.disabled = true;
		selections = [];
		uriDomain.textContent = "https://api.crosscampus.camp.us";
		while (apiResource1.hasChildNodes()) {
				apiResource1.removeChild(apiResource1.lastChild);
		}
		Object.keys(resources[0].options).forEach(function(key) {

			var buttonStructure = [{
				tagName : "div",
				attributes : {
					class : "btn-group",
					role : "group",
				},
				childNodes : [{
					noteName : "button",
					attributes : {
						type : "radio",
						id : key + 1,
						class : "btn btn-default apiResource1Group",
						name : "apiResource1Group"
					},
					childNodes : [ { 
						textNode : 
						key.charAt(0).toUpperCase() + key.slice(1)
					}] 
				}]
			}]; 
			createNestedElements(buttonStructure)
					.forEach(function(node) {
		
				node.addEventListener("click", populateResource2);
				apiResource1.appendChild(node);
			});
		}, this);
	}
	function resource1OnClick(event){
		
		event.target.classList.add("active");
		document.getElementById("entry1").removeEventListener("click",resource1OnClick);
		document.getElementById("user1").removeEventListener("click",resource1OnClick);
		populateResource2(event.target.textContent.toLowerCase());
	}

	function populateResource2(currentSelection) {
		
		apiResource2Text.value = currentSelection;
		apiResource2.textContent = "Loading...";
		apiResource2.disabled = true;
		
		if(!selections.length) selections.push(resources);

		var options = {
			hasPathParameter : false,
			matched : false,
		}

		var currentOptions = selections[selections.length-1].options;

		Object.keys(currentOptions)
			.forEach(function(key) {
				document.getElementById(key + "1").disabled = true;
				console.log(key == currentSelection)
				console.log((currentOptions[key].pathParameter))
				if(key == currentSelection) {
					selections.push(currentOptions[key]);
					options.matched = true;
				} else if (currentOptions[key].pathParameter){
					options.hasPathParameter = currentOptions[key];
				}	
		});
		if(!options.matched && options.hasPathParameter){
			selections.push(options.hasPathParameter);
		}
		if(selections.length == resources.length) {
			path.textContent += "/" + currentSelection;
			userRequestSubmit(uri + path.textContent);
		}
			var newOptions = selections[selections.length-1].options;
				path.textContent += "/" + currentSelection;
				apiResource2Text.value = "";

			while(apiResource2Dropdown.hasChildNodes()) {
				apiResource2Dropdown.removeChild(apiResource2Dropdown.lastChild);
			}
			console.log(options)
			new Promise(function(resolve, reject) {

				var dropdownStructure = [
				{
					tagName : "li",
					attributes : { class : "dropdown-header" },
					childNodes : [ { textNode : "Select another resource..." } ]
				}];
				var newOptionsHaspathParam = false;
				Object.keys(newOptions)
					.forEach(function(option) {

					if(!newOptions[option].pathParameter) {
						var liElement = {
							tagName : "li",
							attributes : {class : "api-resource-option"},
							childNodes : [{
								tagName : "a",
								attributes : { href : "#" },
								childNodes : [ { textNode: "" }  ]
							}]
						};
						liElement.childNodes[0].textNode = option.name; 
						dropdownStructure.push(liElement); 
					} else { newOptionsHaspathParam = newOptions[option]; }  
				});
				if(newOptionsHaspathParam) {
					return createHttpGETRequest(uri + path.textContent)
							.then(function(response) { return dropdownStructure.concat(createPathParamList(response)); });
				} else { resolve(dropdownStructure); }
			}).then(function(dropdownStructure) {
			
				var newElements = createNestedElements(dropdownStructure)
				var dropdownList = document.getElementById("resource2Dropdown")
					console.log(newElements)
					newElements.forEach(function(element){
						console.log(element)
						dropdownList.appendChild(element);
					});
				
				document.getElementById("resource2Button").textContent = "Click me!";
				apiResource2.disabled = false;
				var customOption = document.getElementsByClassName("api-custom-input");
				var resourceOption = document.getElementsByClassName("api-resource-option");
				var pathParamOption = document.getElementsByClassName("api-pathparm-option");
				
				resourceOption.forEach(function(element){
					
					element.addEventListener("click", 
						function(event){

							document.getElementById("resource2Text").disabled = true;
							populateResource2(event.target.textContent.toLowerCase());

					});
				});

			}).catch(function(error){resetDemo(error)});

		function createPathParamList(response) {
			console.log(response)
			var responseObj = JSON.parse(response);
			var pathParameterStructure = [];
			Object.keys(newOptions).forEach(function(option) {

				if(newOptions[option].pathParameter){
					var apiCustomInput = [{
						tagName : "li",
						attributes : { 
							class : "divider", 
							role : "separator"
						},
						childNodes : []
					},{
						tagname : "li",
						attributes : { class : "dropdown-header" },
						childNodes : [ 
							{ textNode : "" } 
						]
					},{
						tagname : "li",
						attributes : { class : "api-custom-input" },
						childNodes : [ 
							{ textNode : "OR type something in" },
							{ tagname : "span",
								attributes : { class : "glyphicon glyphicon-hand-right" },
								childNodes : [ ] }
						]
					}];
					console.log(JSON.stringify(option))
					apiCustomInput[1].childNodes[0].textNode =  "or select a " +  option.name 
				}
				pathParameterStructure.push(apiCustomInput);
				var opt = responseObj.map(function(result) {

					var optionText;
					if(currentSelection == "entry") optionText = result['"id"'];
					if(currentSelection == "user") optionText = result.username;
						var	pathParamOption = {
							tagName : "li",
							attributes : { class : "api-pathparm-option" },
							childNodes : [{
								tagName : "a",
								attributes : { href : "#" },
								childNodes : [ { textNode : "" }  ]
							}]
						};
						pathParamOption.childNodes[0].textNode = optionText;
					return optionText;
				});
				console.log(pathParameterStructure)
				pathParameterStructure.concat(opt);
				return pathParameterStructure;
				}
			);
		}
	}
	
	// Make the actual CORS request.
	function createHttpGETRequest(url) {
		
		return new Promise((resolve, reject) => {

			var xhr = new XMLHttpRequest();
			if ("withCredentials" in xhr) {
				xhr.open("GET", url, true);
			} else if (typeof XDomainRequest != "undefined") {
				xhr = new XDomainRequest();
				xhr.open("Get", url);
			} else {
				return reject(new Error('CORS not supported'));
			}

			// Response handlers.
			xhr.onload = function() {
				console.log('Response from CORS request to ' + url + ' : \n' + xhr.responseText);
				resolve(xhr.responseText)
			};
			xhr.onerror = function() {
				return reject(new Error('Woops, there was an error making the request.'));
			};
			console.log('CORS request sent to ' + url)
			xhr.send();
		});
	}
	
	var createNestedElements = function (structure) {

		return generateDomStructure(structure);
		
		function generateDomStructure(structure) {
		
			return structure.map(function(node) {
				
				if(node.textNode != undefined) {
					if(node.textNode) { return document.createTextNode(node.textNode); 
					} else { return document.createTextNode("");}
				} else {
					var currentNode = document.createElement(node.tagName);
					if(node.attributes) {
						Object.keys(node.attributes)
								.forEach(function(propertyName) {
							
							currentNode.setAttribute(
									propertyName, node.attributes[propertyName]);
						});
					}
					if(node.childNodes != undefined){
						var childern = generateDomStructure(node.childNodes)
								.forEach(function(child) { 
							
							currentNode.appendChild(child);
						}); 
					} 
				}
				return currentNode;
			});
		}

	}

// The tree stucture for the API resources
	var resources = { options : {
			entry: { 
				name : "entry",
				pathParameter : false,
				options: {
					notes : {
						name : "notes",
						pathParameter : false,
						options : null },
					ads : {
						name : "ads",
						pathParameter : false,
						options : null },
					id : {
						name : "id",
						pathParameter : true,
						options : {
							comments: {
								name : "comments",
								pathParameter : false,
								options : null },
							rating : {
								name : "rating",
								pathParameter : false,
								options : null }
			}}}},
			school : {
				name : "school",
				pathParameter : false,
				options: {
					school : {
						name : "school",
						pathParameter : true,
						options : {
							program : {
								name : "program",
								pathParameter : false,
								options : {
									year: {
										name : "year",
										pathParameter : true,
										options : {
											program: {
												name : "program",
												pathParameter : true,
												options : {
													course: {
														name : "course",
														pathParameter : true,
														options : null}
			}}}}}}}}}},
			user : {
				name :"user",
				pathParameter : false,
				options: {
					username: {
						name : "username",
						pathParameter : true,
						options : {
							entry : {
								name : "entry",
								pathParameter : false,
								options : null 
							},
							rating: {
								name : "rating",
								pathParameter : false,
								options : null
}}}}}}}
	
//} })();