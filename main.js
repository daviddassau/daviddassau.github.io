// Main JS File

// Code to grab id DIV ID from the HTML
var blogContainer = document.getElementById("blog-container");


function blogString(blogParam){
	var domString = "";
	for (var i = 0; i < blogParam.length; i++) {
	domString +=   `<div class="col-md-4 col-sm-6 set-height">`;
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
}


function writeToDom(domString){
	blogContainer.innerHTML = domString;
}


function runThisAfterBlogLoads() {
	var data = JSON.parse(this.responseText);
	blogString(data.blog);
}

function shitsBroke() {
	// console.log("Shit broke");
}



// XHR Request from JSON File
var blogJsonRequest = new XMLHttpRequest();
blogJsonRequest.addEventListener("load", runThisAfterBlogLoads);
blogJsonRequest.addEventListener("error", shitsBroke);
blogJsonRequest.open("GET", "blog.json");
blogJsonRequest.send();


















