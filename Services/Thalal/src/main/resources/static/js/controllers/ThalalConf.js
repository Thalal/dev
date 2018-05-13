
var Thalal = angular.module("Thalal",['ngRoute']);

var routeConfig = function ($provide, $locationProvider, $routeProvider) {
    $provide.decorator("$route", routeDecorator);
    function routeDecorator($delegate) {
        var $route = $delegate;
        $route.remove = function (path) {
            path = path.replace(/\/$/i, "");
            delete( this.routes[path] );
            delete( this.routes[path + "/"] );
            return ( this );
        };
        $route.removeAll = function () {
            for (var path in this.routes) {
                this.remove(path);
            }
            return ( this );
        };
        $route.removeCurrent = function () {
            return ( this.remove(this.current.originalPath) );
        };
        $route.when = function (path, route) {
            $routeProvider.when(path, route);
            return ( this );
        };
        $route.otherwise = function (route) {
            $routeProvider.otherwise(route);
            return ( this );
        };
        return ( $route );
    }
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
};

Thalal.config(routeConfig);


Thalal.run(function ($rootScope, $location, $http, $route) {
    $rootScope.refillRoute = function () {
        $http.get("/json/routedata.json").then(function (data) {
             var iLoop = 0, currentRoute;
            console.log(data.data.records)
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
});

