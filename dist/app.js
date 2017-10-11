(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


const dom = require('./dom');

const runThisAfterBlogLoads = function(){
	var data = JSON.parse(this.responseText);
	dom(data.blog);
};

// function runThisAfterBlogLoads() {
// 	var data = JSON.parse(this.responseText);
// 	dom(data.blog);
// }

const itsBroken = () => {
	// console.log("Shit broke");
};


// XHR Request from JSON File
const loadBlogJSON = () => {
	let blogJsonRequest = new XMLHttpRequest();
	blogJsonRequest.addEventListener("load", runThisAfterBlogLoads);
	blogJsonRequest.addEventListener("error", itsBroken);
	blogJsonRequest.open("GET", "db/blog.json");
	blogJsonRequest.send();
};



const blogPosts = document.getElementById("blog-container");
// const blogPosts = $("#blog-container");
let selectedBlogPostDiv = document.getElementById("selectedBlogPost");

// Event listener for when user clicks on single blog post
blogPosts.addEventListener('click', function(event){
	showPostInMainDiv(event);
});

const showPostInMainDiv = (event) => {
	let selectedBlogPost;
	if(event.target.classList.contains("blogContainerDiv")){
		selectedBlogPost = event.target;
		} else if (event.target.parentNode.classList.contains("blogContainerDiv")){
	    selectedBlogPost = event.target.parentNode;
	    } else if (event.target.parentNode.parentNode.classList.contains("blogContainerDiv")){
	    selectedBlogPost = event.target.parentNode.parentNode;
	  	} else if (event.target.parentNode.parentNode.parentNode.classList.contains("blogContainerDiv")){
	    selectedBlogPost = event.target.parentNode.parentNode.parentNode;
	  	} else if (event.target.parentNode.parentNode.parentNode.parentNode.classList.contains("blogContainerDiv")){
	    selectedBlogPost = event.target.parentNode.parentNode.parentNode.parentNode;
	  	}
	  	console.log(selectedBlogPost);
	  	selectedBlogPostDiv.innerHTML = selectedBlogPost.innerHTML;
};


// NEW JQUERY STUFF
// const requestBlogPosts = () => {
// 	$.ajax('./db/blog.json').done((data) => {
// 		// runThisAfterBlogLoads(data)
// 		console.log(data);
// 	}).fail((error) => {
// 		console.log(error);
// 	});
// };


module.exports = loadBlogJSON;



},{"./dom":2}],2:[function(require,module,exports){
"use strict";

const blogContainer = document.getElementById("blog-container");

const blogString = (blogParam) => {
	let domString = "";
	for (let i = 0; i < blogParam.length; i++) {
	domString +=   `<div class="col-md-4 col-sm-6 set-height blogPost blogContainerDiv">`;
	domString +=     `<div class="thumbnail set-height">`;
	domString +=       `<div class="caption">`;
    domString +=         `<div>`;
    domString +=           `<h4>${blogParam[i].postTitle}</h4>`;
    domString +=           `<p class="blog-date small">${blogParam[i].postDate}</p>`;
    domString +=         `</div>`;
    domString +=         `<div class="blog-body">`;
	domString +=	       `<p>${blogParam[i].postBody}</p>`;
    domString +=         `</div>`;
    domString +=       `</div>`;
    domString +=     `</div>`;
    domString +=   `</div>`;

    writeToDom(domString);
	}
};

const writeToDom = (domString) => {
	blogContainer.innerHTML = domString;
};

// JQUERY VERSION OF ^
// const writeToDom = (domString) => {
// 	$("#blog-container").html(domString);
// };


module.exports = blogString;
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

data();
















},{"./data":1}]},{},[3]);
