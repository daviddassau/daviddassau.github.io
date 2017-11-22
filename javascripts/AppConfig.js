"use strict";

// let isAuth = (AuthService) => new Promise((resolve, reject) => {
//     if (AuthService.isAuthenticated()) {
//         resolve();
//     } else {
//         reject();
//     }
// });

app.run(function ($location, $rootScope, FIREBASE_CONFIG, AuthService) {
    firebase.initializeApp(FIREBASE_CONFIG);

    //watch method that fires on change of a route.  3 inputs. 
    //event is a change event
    //currRoute is information about your current route
    //prevRoute is information about the route you came from
    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
        // checks to see if there is a current user
        var logged = AuthService.isAuthenticated();

        var appTo;

        // to keep error from being thrown on page refresh
        if (currRoute.originalPath) {
            // check if the user is going to the auth page = currRoute.originalPath
            // if user is on auth page then appTo is true
            // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
            appTo = currRoute.originalPath.indexOf('/professional-history') !== -1;
        }

        //if not on /auth page AND not logged in redirect to /auth
        if (!appTo && !logged) {
            event.preventDefault();
            // change auth according to what it's called for your project
            $location.path('/professional-history');
        }
    });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/professional-history", {
            templateUrl: 'partials/professional-history.html',
            controller: 'ProfessionalHistoryCtrl'
        })
        .when("/contact-info", {
            templateUrl: 'partials/contact-info.html',
            controller: 'ContactInfoCtrl',
            resolve: { isAuth }
        })
        .when("/projects", {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsCtrl',
            resolve: { isAuth }
        })
        .when("/about-me", {
            templateUrl: 'partials/about-me.html',
            controller: 'AboutMeCtrl',
            resolve: { isAuth }
        })
        .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl',
            resolve: { isAuth }
        })
        .otherwise('/professional-history');
});