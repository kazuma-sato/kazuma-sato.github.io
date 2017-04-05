/* Just a lil javascript for my portfolio
 
								- Kaz
								me@kazuma.sato.ca */

var kazFunctions = 

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
				childNodes : [ {
					tagName : "",
					attributes : {},
					childNodes : []
				} ]
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

	
						
						
						


	gameModel : function(){
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
					childNodes : [ { textNode : "game  demo" } ]
				}]
			},{ tagName : "section",
				attributes: { 
					id : "game",
					class :  "modal-body" 
				},
				childNodes : [ { textNode : "unity game" } ]
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
	}
	,


	portfolio : {
		author : "me@kazuma-sato.ca",
		uri : "gbc.kazuma.sato.ca",
		articles : {
			title : "crosscampus",
			subtitle : "by xcamp.us",
			featurettes : [{
				tagName : "article",
				attributes : { class : "row featurette" },
				childNodes : [{
					tagName : "div",
					attributes : { class : "col-md-7" },
					childNodes : [{
						tagName : "a",
						attributes : { 
							class : "featurette-heading h3",
							href : "http://crosscampus.xcamp.us"
						},
						childNodes : [ {  textNode : "crosscampus " }]
					},{
						tagName : "a",
						attributes : { 
							class : "featurette-heading h3",
							href : "http://xcamp.us"
						},
						childNodes : [{
							tagName: "span",
							attributes : { class : "text-muted" },
							childNodes : [{ textNode : "by xcamp.us" }]
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
					attributes : { 
						class : "well col-md-5 text-center btn-group-vertical" 
					},
					childNodes : [{
						tagName : "button",
						attributes : {
							type :  "button",
							class : "btn btn-primary btn-lg",
							"data-toggle" : "modal",
							"data-target" : "#crosscampusModal",
						},
						childNodes : [ { textNode : "Launch API demo" } ]
					},{
						tagName : "button",
						attributes : {
							type :  "button",
							class : "btn btn-lg btn-success",
							"data-toggle" : "collapse",
							"data-target" : "#collapseGit",
							"aria-expanded": false,
							"aria-controls" : "collapseGit"
						},
						childNodes : [ { textNode : "GitHub Repositories" } ]
					},{
						tagName : "div",
						attributes: {
							id: "collapseGit",
							class : "collapse",
							role : "group"
						},
						childNodes :[{
							tagName : "div",
							attributes: {
								class : "btn-group-vertical",
								role : "group",
								style : "display:block"
							},
							childNodes :[{			
								tagName : "a",
								attributes : {
									type :  "button",
									class : "btn btn-default btn-lg btn-block",
									href : "https://github.com/kazuma-sato/xcampus-crosscampus"
								},
								childNodes : [ { textNode : "API & Database" } ]
							},{
								tagName : "a",
								attributes : {
									type :  "button",
									class : "btn btn-default btn-lg btn-block",
									href : "https://github.com/kazuma-sato/CAPSTONE2-xcampus"
								},
								childNodes : [ { textNode : "Requirements & Wireframes" } ]
							},{
								tagName : "a",
								attributes : {
									type :  "button",
									class : "btn btn-default btn-lg btn-block",
									href : "https://github.com/kazuma-sato/CAPSTONE2-xcampus"
								},
								childNodes : [ { textNode : "Implementation & Deployment" } ]
							}]
						}]
					}]
				}]
			},{
				tagName : "hr",
				attributes : { class : "featurette-divider" }
			},{
				tagName : "article",
				attributes : { class : "row featurette" },
				childNodes : [{
					tagName : "div",
					attributes : { class : "col-md-7 col-md-push-5 text-right" },
					childNodes : [{
						tagName : "h3",
						attributes : { class : "featurette-heading" },
						childNodes : [ { 
							textNode : "Space Blaster "
						},{ 
							tagName: "span",
							attributes : { class : "text-muted" },
							childNodes : [{
								textNode : "a lil game"
							}]
						}]
					},{
						tagName: "p",
						childNodes : [{ 
							tagName: "span",
							attributes : { class : "lead" },
							childNodes : [{ textNode : "Learning game development was tough "}],
						},{
							textNode : "but it helped learn a lot. This is a little game I did for my game development class. It was done in Unity. "
						}]
					}]
				},{
					tagName : "aside",
					attributes : { class : "col-md-5 col-md-pull-7 text-center" },
					childNodes : [{
						tagName : "div",
						attributes : {class : "well fill"},
						childNodes: [{
							tagName : "button",
							attributes : {
								"type" :  "button",
								"class" : "btn btn-primary btn-lg btn-block",
								"data-toggle" : "modal",
								"data-target" : "#gameModal",
							},
							childNodes : [ { textNode : "Launch game" } ]
						}]
					}]
				}]
			}
			]
		}
	}
}