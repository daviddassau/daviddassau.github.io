"use strict";

app.controller("BlogDetailCtrl", function ($location, $routeParams, $scope, PersonalBioService){
    
    $scope.blogs = {};

    const getBlogPost = () => {
        PersonalBioService.getSingleBlogPost($routeParams.id).then((results) => {
            $scope.blogs = results.data;
        }).catch((error) => {
            console.log("error in getSingleBlogPost", error);
        });
    };

    getBlogPost();

    $scope.mainBlogPage = () => {
        $location.path(`/blog`);
    };

});