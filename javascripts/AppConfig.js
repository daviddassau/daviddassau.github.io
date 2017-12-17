"use strict";

app.run(function ($location, $rootScope, FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl'
        })
        .when("/blog_detail/:id", {
            templateUrl: 'partials/blog_detail.html',
            controller: 'BlogDetailCtrl'
        })
        .otherwise('/home');
});