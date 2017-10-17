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
	$('#blog-container').click((event) => {
	showPostInMainDiv(event);
    });
};


// const showPostInMainDiv = (event) => {
// 	let selectedBlogPost;
// 	if(){
		
// 	}
// };



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





module.exports = {requestBlogPosts, onBlogClick};


