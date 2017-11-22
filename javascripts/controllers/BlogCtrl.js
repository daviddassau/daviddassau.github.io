"use strict";

app.controller("BlogCtrl", function ($scope, PersonalBioService) {
    
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

});