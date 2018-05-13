/*
'use strict';


var Thalal = angular.module('Thalal', ['ngRoute']);

var routeConfig = function ($provide, $locationProvider, $routeProvider) {
    $provide.decorator("$route", routeDecorator);

    function routeDecorator($delegate) {
        // Create a familiar short-hand for the delegate.
        var $route = $delegate;
        // I remove a defined route at the given path.
        $route.remove = function (path) {
            // Normalize the path by removing any trailing slash - when
            // AngularJS sets up a route, it creates an auto-redirect from
            // your route to the other version (with or without a slash,
            // depending on what you defined); we need to delete your path
            // and the auto-redirect path.
            path = path.replace(/\/$/i, "");
            // Delete your path and the auto-redirect version.
            delete(this.routes[path]);
            delete( this.routes[path + "/"] );
            return ( this );
        };
        $route.removeAll = function () {
            for (var path in this.routes) {
                this.remove(path);
            }
            return ( this );
        };
        // This provides a short-hand to removing the current route without
        // having to access the current route in the calling context.
        $route.removeCurrent = function () {
            return ( this.remove(this.current.originalPath) );
        };
        // I allow routes to be defined after the application has been
        // bootstrapped. These go into a shared "routes" collection.
        $route.when = function (path, route) {
            $routeProvider.when(path, route);
            return ( this );
        };
        $route.otherwise = function (route) {
            $routeProvider.otherwise(route);
            return ( this );
        };
        // Return the decorated service.
        return ( $route );
    }



};

Thalal.config(routeConfig);
Thalal.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);

}]);
Thalal.run(function ($rootScope, $location, $http, $route) {

    $rootScope.refillRoute = function () {
        $http.get("/json/routedata.json").then(function (data) {
            alert(JSON.stringify(data.data.records.length))
            var iLoop = 0, currentRoute;
            for (iLoop = 0; iLoop < data.data.records.length; iLoop++) {
                currentRoute = data.data.records[iLoop];
                var routeName = currentRoute.KeyName;
                $route.when(routeName, {
                    templateUrl: currentRoute.PageUrls
                });
            }
            $route.otherwise({
                redirectTo: "/"
            });
            $route.reload();
        });
    };
    $rootScope.refillRoute();

    $rootScope.changePage = function (index) {
        $rootScope.ind = index;
    };
    $location.path('/');
    $rootScope.setPath = function (p) {
        $location.path(p);
    };

});
*/
