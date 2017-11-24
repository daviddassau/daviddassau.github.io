"use strict";

app.controller("BlogCtrl", function ($location, $scope, PersonalBioService) {
    
    const getBlogs = () => {
        $scope.blogs = [];
        PersonalBioService.getBlogPosts().then((results) => {
            $scope.blogs = results;
            console.log(results);
        }).catch((error) => {
            console.log("error in getBlogs", error);
        });
    };

    getBlogs();

    $scope.blogDetail = (blogsId) => {
        $location.path(`/blog_detail/${blogsId}`);
    };

});