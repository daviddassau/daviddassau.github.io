(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			resolve(data.apiKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		firebaseApi.setKey(results.firebaseKeys);
		firebase.initializeApp(results.firebaseKeys);
		console.log("firebase apps?", firebase.apps);
	}).catch((error) => {
		console.log("error in retrieveKeys", error);
	});
};

module.exports = {retrieveKeys};
},{"./firebaseApi":4}],2:[function(require,module,exports){
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



},{"./dom":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

let firebaseKey = "";

const setKey = (key) => {
	firebaseKey = key;
};

module.exports = {setKey};
},{}],5:[function(require,module,exports){
"use strict";

const data = require('./data');
const apiKeys = require('./apiKeys');

apiKeys.retrieveKeys();

data.requestBlogPosts();

data.onBlogClick();

// data.showPostInMainDiv();
















},{"./apiKeys":1,"./data":2}]},{},[5]);
