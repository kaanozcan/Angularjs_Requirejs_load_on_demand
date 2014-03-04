/// <reference path="../Scripts/AngularJs/angular.js" />
/// <reference path="../Scripts/RequireJs/require.js" />

define('app', ['angular', 'angular-route'], function (angular) {
    var app = angular.module('app', ['ngRoute'])
    .config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controllerProvider = $controllerProvider;
        app.compileProvider = $compileProvider;
        app.routeProvider = $routeProvider;
        app.filterProvider = $filterProvider;
        app.provide = $provide;

        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HelloWorld',
            resolve: {
                load: ['$q', '$rootScope', function ($q, $rootScope) {
                    var deferred = $q.defer();

                    require(['home'], function () {
                        deferred.resolve();
                        $rootScope.$apply();

                    });
                    return deferred.promise;
                }]
            }
        });
    });
    return app;
});