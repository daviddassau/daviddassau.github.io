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


