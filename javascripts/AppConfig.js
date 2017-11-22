"use strict";

app.run(function ($location, $rootScope, FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/professional-history", {
            templateUrl: 'partials/professional-history.html',
            controller: 'ProfessionalHistoryCtrl'
        })
        .when("/contact-info", {
            templateUrl: 'partials/contact-info.html',
            controller: 'ContactInfoCtrl'
        })
        .when("/projects", {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsCtrl'
        })
        .when("/about-me", {
            templateUrl: 'partials/about-me.html',
            controller: 'AboutMeCtrl'
        })
        .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl'
        })
        .otherwise('/professional-history');
});