"use strict";


const dom = require('./dom');

// NEW JQUERY STUFF
// const requestBlogPosts = () => {
// 	$.ajax('./db/blog.json').done((data) => {
// 		dom(data.blog);
// 	}).fail((error) => {
// 		console.log(error);
// 	});
// };


const blogPosts = $("#blog-container");
let selectedBlogPostDiv = $('#selectedBlogPost');


const onBlogClick = () => {
	$("#blog-container").on("click", ".blogContainerDiv", function(event){
		showPostInMainDiv(event);
	});
};


const showPostInMainDiv = (event) => {
	$("#selectedBlogPost").html($(event.currentTarget).html());
};



// Firebase Promises

let firebaseKey = "";

const setFirebaseKey = (key) => {
	firebaseKey = key;
};

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax({
			url: `db/apiKeys.json`
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		setFirebaseKey(results.firebase);
		firebase.initializeApp(results.firebase);
		onBlogClick();
		return getBlogPosts();
	}).then((blogs) => {
		dom.blogString(blogs);	
	}).catch((error) => {
		console.log("error in retrieveKeys", error);
	});
};

const getBlogPosts = () => {
	let blog = [];
	return new Promise((resolve, reject) => {
		// console.log("firebaseKey", firebaseKey);
		$.ajax(`${firebaseKey.databaseURL}/blog.json`).then((fbBlogs) => {
			if (fbBlogs !== null){
				resolve(fbBlogs);
			}
		}).catch((err) => {
			console.log(err);
		});
	});
};

module.exports = {onBlogClick, retrieveKeys};


