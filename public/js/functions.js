/* Just a lil javascript for my portfolio
 
								- Kaz
								me@kazuma.sato.ca */

var kazFunctions = {

	createElement : function (tagName, textNode=false, attributes=false) {
		
		var element = document.createElement(tagName);

		if(textNode) {
			element.appendChild(
				document.createTextNode(textNode));
		}
		if(attributes) {
			Object.keys(attributes)
					.forEach(function(key) {

				element.setAttribute(key, attributes[key]); 
			});
		}
		return element;
	},

	createNestedElements : function (structure) {

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
	},

	generateModalStructure : function(content) {

		return modalTemplate = [{
			tagName: "section",
			attributes: { 
				id : "crosscampusModal",
				class : "modal fade",
				tabindex : -1,
				role : "dialog",
				"aria-labledby" : content[0].childNodes[1].attributes.id
			},
			childNodes : [{
				tagName : "div",
				attributes: {
					class : "modal-dialog",
					role : "document"
				},
				childNodes : [{
					tagName : "div",
					attributes: { class : "modal-content" },
					childNodes : content
				}]
			}]
		}];
	},

	crosscampusModal : function() {
		
		
		return this.createNestedElements(
			this.generateModalStructure([{
				tagName : "header",
				attributes: { class : "modal-header" },
				childNodes : [{
					tagName : "button",
					attributes: {
						type : "button",
						class : "close",
						"data-dismiss" : "modal",
						"aria-label" :  "close",
						},
					childNodes : [{
						tagName : "span",
						attributes: { 
							"aria-hidden" : true,
							"class" : "glyphicon glyphicon-remove"
						}
					}]
				},{ tagName : "h4",
					attributes: {
						id : "ccModalLabel",
						class :  "modal-title",
					},
					childNodes : [ { textNode : "crosscampus API demo" } ]
				}]
			},{ tagName : "section",
				attributes: { 
					id : "ccModalbody",
					class :  "modal-body" 
				},
				childNodes : [ { textNode : "crosscampus API demo" } ]
			},{ tagName : "var",
				attributes: { class :  "modal-footer" },
				childNodes : [{
					tagName : "button",
					attributes: {
						type : "button",
						class : "btn btn-default",
						"data-dismiss" : "modal"
					},
					childNodes : [ { textNode : "Close" } ]
				}]
			}]
		))
	},

	portfolio : {
		author : "me@kazuma-sato.ca",
		uri : "gbc.kazuma.sato.ca",
		articles : {
			title : "crosscampus",
			subtitle : "by xcamp.us",
			featurettes : [
			{
				tagName : "hr",
				attributes : { class : "featurette-divider" }
			},{
				tagName : "article",
				attributes : { class : "row featurette" },
				childNodes : [{
					tagName : "div",
					attributes : { class : "col-md-7" },
					childNodes : [{
						tagName : "h2",
						attributes : { class : "featurette-heading" },
						childNodes : [ { 
							textNode : "crosscampus "
						},{ 
							tagName: "span",
							attributes : { class : "text-muted" },
							childNodes : [{
								textNode : "by xcamp.us "
							}]
						}]
					},{
						tagName: "p",
						childNodes : [{ 
							tagName: "span",
							attributes : { class : "lead" },
							childNodes : [{ textNode : "My most current and largest project yet. "}],
						},{
							textNode : "For my last year in college, I had a capstone project course. In September 2016, We started as group of 5. And we had decided to create a web and mobile app for academic notes sharing and classified ads catered to college students. We spent 4 months designing and planning it. Currently, March 2017, we are in the end phases of development. We have decided to build this project on Amazon Web Services with a “Server-less” RESTful API architecture. We decided to use  API Gateway triggering Lambda Functions with Node.js to interact with MySQL on RDS, Cognito for user management and S3 for file storage."
						}]
					}]
				},{
					tagName : "aside",
					attributes : { class : "col-md-5" },
					childNodes : [{
						tagName : "button",
						attributes : {
							"type" :  "button",
							"class" : "btn btn-primary btn-lg",
							"data-toggle" : "modal",
							"data-target" : "#crosscampusModal",
						},
						childNodes : [ { textNode : "Launch API demo" } ]
					}]
				}]
			}]
		}
	}
}