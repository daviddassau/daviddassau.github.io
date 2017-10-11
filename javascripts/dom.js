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