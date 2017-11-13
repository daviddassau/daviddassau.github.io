(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

const setKey = (key) => {
	firebaseKey = key;
};

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax({
			url: `db/apiKeys.json`
		}).done((data) => {
			resolve(data.apiKeys);
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

const getBlogPosts = () => {
	let blogs = [];
	return new Promise((resolve, reject) => {
		// console.log("firebaseKey", firebaseKey);
		$.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((fbBlogs) => {
			if (fbBlogs !== null){
				resolve(fbBlogs);
			}
		}).catch((err) => {
			console.log(err);
		});
	});
};

module.exports = {onBlogClick, retrieveKeys};



},{"./dom":2}],2:[function(require,module,exports){
"use strict";

const blogContainer = $('#blog-container');

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
    blogContainer.html(domString);
};


module.exports = blogString;
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

data.retrieveKeys();


data.onBlogClick();

// data.showPostInMainDiv();
















},{"./data":1}]},{},[3]);
