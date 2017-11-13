"use strict";

const data = require('./data');
const apiKeys = require('./apiKeys');

apiKeys.retrieveKeys();

data.requestBlogPosts();

data.onBlogClick();

// data.showPostInMainDiv();















