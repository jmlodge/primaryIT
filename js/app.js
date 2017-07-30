angular.module('PrimaryITApp', ['ngRoute', 'RouteControllers']);

angular.module('PrimaryITApp').config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true); // This enables routing without hashes

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })

    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })

    .when('/services', {
        templateUrl: 'templates/services.html',
        controller: 'ServicesController'
    })

});