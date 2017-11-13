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
	//let selectedBlogPost;
	//console.log($(this));
	$("#selectedBlogPost").html($(event.currentTarget).html());
};





// Firebase Promises

let firebaseKey = "";

const setKey = (key) => {
	firebaseKey = key;
};

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax({
			url: `./db/apiKeys.json`
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		setKey(results.firebase);
		firebase.initializeApp(results.firebase);
		onBlogClick();
		return getBlogPosts();
	}).then((blogs) => {
		dom.blogString(blogs);	
	}).catch((error) => {
		console.log("error in retrieveKeys", error);
	});
};

// const retrieveKeys = () => {
//     apiKeys().then((results) => {        
//         setFirebaseKey(results.firebase);
//         firebase.initializeApp(results.firebase);
//         events.myLinks();
//         return getBlogs();
//     }).then((blogs) => {
//         dom.createBlogDomString(blogs);
//         return getJobs();
//     }).then((jobs) => {
//         dom.createJobDomString(jobs);
//         return getProjects();
//     }).then((projects) => {
//     	dom.createPortfolioDomString(projects);
//     }).catch((error) => {
//         console.log(error); 
//     });
// };

const getBlogPosts = () => {
	let blogs = [];
	return new Promise((resolve, reject) => {
		$.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((fbBlogs) => {
			if (fbBlogs !== null){
				resolve(fbBlogs);
			}
		}).catch((err) => {
			console.log(err);
		});
	});
};


// const getBlogs = () => {
//     let blogs = []; 
//     return new Promise((resolve, reject) => {
//         $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((fbBlogs) => { 
//             if (fbBlogs !== null) {
//                 resolve(fbBlogs) ;
//             }         
//         }).catch((err) => {
//             console.log(err);
//         });
//     }); 
// };

// code from theme park project
// const getAreas = () => {
//     return new Promise((resolve, reject) => {
//         $.ajax(`${firebaseKey.databaseURL}/areas.json`).then((fbAreas) => { 
//             if (fbAreas !== null) {
//                 resolve(fbAreas);
//             }
//         }).catch((err) => {
//             reject(err); 
//         });
//     });
// };





module.exports = {onBlogClick, retrieveKeys};


