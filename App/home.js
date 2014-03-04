/// <reference path="../Scripts/RequireJs/require.js" />
/// <reference path="../Scripts/AngularJs/angular.js" />

define(['app'], function (app) {
    app.controllerProvider.register('HelloWorld', function ($scope) {
        $scope.greet = function () {
            return 'Hello World!'
        }
    });
    return app;
});