"use strict";

app.service("PersonalBioService", function ($http, $q, FIREBASE_CONFIG){

    const getBlogPosts = () => {
        let blogPost = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
                let fbBlogPosts = results.data;
                Object.keys(fbBlogPosts).forEach((key) => {
                    fbBlogPosts[key].id = key;
                    blogPost.push(fbBlogPosts[key]);
                });
                resolve(blogPost);
            }).catch((error) => {
                reject(error);
            });
        });
    };

    return {getBlogPosts};

});