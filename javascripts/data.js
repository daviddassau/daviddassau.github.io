"use strict";


const dom = require('./dom');

// NEW JQUERY STUFF
const requestBlogPosts = () => {
	$.ajax('./db/blog.json').done((data) => {
		dom(data.blog);
	}).fail((error) => {
		console.log(error);
	});
};




const blogPosts = $("#blog-container");
let selectedBlogPostDiv = $('#selectedBlogPost');

// Event listener for when user clicks on single blog post
// blogPosts.addEventListener('click', function(event){
// 	showPostInMainDiv(event);
// });

const onBlogClick = () => {
	$("#blog-container").on("click", ".blogContainerDiv", function(event){
		showPostInMainDiv(event);
	});
};


// const showPostInMainDiv = (event) => {
// 	let selectedBlogPost;
// 	if(){
		
// 	}
// };



const showPostInMainDiv = (event) => {
	//let selectedBlogPost;
	//console.log($(this));
	$("#selectedBlogPost").html($(event.currentTarget).html());
};





module.exports = {requestBlogPosts, onBlogClick};


