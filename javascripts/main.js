// Main JS File

// Code to grab id DIV ID from the HTML
const blogContainer = document.getElementById("blog-container");

// const blogContainer = $("#blog-container");


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
}


const writeToDom = (domString) => {
	// console.log(Date.now());
	blogContainer.innerHTML = domString;
}

// const writeToDom = (domString) => {
// 	$('blog-container').html(domString);
// }


function runThisAfterBlogLoads() {
	var data = JSON.parse(this.responseText);
	blogString(data.blog);
}

const shitsBroke = () => {
	// console.log("Shit broke");
}



// XHR Request from JSON File
let blogJsonRequest = new XMLHttpRequest();
blogJsonRequest.addEventListener("load", runThisAfterBlogLoads);
blogJsonRequest.addEventListener("error", shitsBroke);
blogJsonRequest.open("GET", "db/blog.json");
blogJsonRequest.send();


// $.ajax('./blog.json').done(() => {

// });







const blogPosts = document.getElementById("blog-container");
let selectedBlogPostDiv = document.getElementById("selectedBlogPost");

// Event listener for when user clicks on single blog post
blogPosts.addEventListener('click', function(event){
	showPostInMainDiv(event);
});

// $('#blogContainer').click(function(event) => {
// 	showPostInMainDiv(event);
// });

showPostInMainDiv = (event) => {
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
}













