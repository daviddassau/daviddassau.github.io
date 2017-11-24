// "use strict";


// const dom = require('./dom');


// const blogPosts = $("#blog-container");
// let selectedBlogPostDiv = $('#selectedBlogPost');


// const onBlogClick = () => {
// 	$("#blog-container").on("click", ".blogContainerDiv", function(event){
// 		showPostInMainDiv(event);
// 	});
// };


// const showPostInMainDiv = (event) => {
// 	$("#selectedBlogPost").html($(event.currentTarget).html());
// };



// // Firebase Promises

// let firebaseKey = "";

// const setFirebaseKey = (key) => {
// 	firebaseKey = key;
// };

// const apiKeys = () => {
// 	return new Promise ((resolve, reject) => {
// 		$.ajax({
// 			url: `db/apiKeys.json`
// 		}).done((data) => {
// 			resolve(data.apiKeys.firebaseKeys);
// 			console.log(data.apiKeys.firebaseKeys);
// 		}).fail((error) => {
// 			reject(error);
// 		});
// 	});
// };

// const retrieveKeys = () => {
// 	apiKeys().then((results) => {
// 		setFirebaseKey(results);
// 		firebase.initializeApp(results);
// 		callBlogPosts();
// 	}).then((blogs) => {
// 		// dom.blogString(blogs);	
// 	}).catch((error) => {
// 		console.log("error in retrieveKeys", error);
// 	});
// };

// const getBlogPosts = () => {
// 	let blog = [];
// 	return new Promise((resolve, reject) => {
// 		$.ajax(`${firebaseKey.databaseURL}/blog.json`).then((fbBlogs) => {
// 			if (fbBlogs !== null){
// 				Object.keys(fbBlogs).forEach((key) => {
// 					fbBlogs[key].id = key;
// 					blog.push(fbBlogs[key]);
// 				});
// 			}
// 			resolve(blog);
// 		}).catch((err) => {
// 			reject(err);
// 		});
// 	});
// };

// const callBlogPosts = () => {
// 	getBlogPosts().then((results) => {
// 		dom.blogString(results);
// 	}).catch((error) => {
// 		console.log("error in callBlogPosts", error);
// 	});
// };

// module.exports = {onBlogClick, retrieveKeys};


