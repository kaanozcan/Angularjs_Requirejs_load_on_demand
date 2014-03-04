/// <reference path="../Scripts/AngularJs/angular.js" />
/// <reference path="../Scripts/RequireJs/require.js" />
require.config({
    baseUrl: "",
    paths: {
        'domReady': 'Scripts/RequireJs/dom-ready/domReady',
        "angular": "Scripts/AngularJs/angular",
        "angular-route": "Scripts/AngularJs/angular-route",
        "angular-resource": "Scripts/AngularJs/angular-resource",
        'app': 'App/app',
        'home': 'App/home'
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-resource": {
            deps: ["angular"]
        },
        "angular-route": {
            deps: ["angular"]
        }
    }
});

require(['domReady', "angular", "app"], function (domReady, angular) {
    domReady(function () {
        angular.element().ready(function () {
            angular.bootstrap(document, ["app"])
        });
    });
});