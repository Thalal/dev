/**
 * Created by Elavarasan on 13-05-2018.
 */

 var Thalal = angular.module("Thalal", ["ngRoute"]);

 Thalal.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
 $locationProvider.html5Mode(true);
 $locationProvider.hashPrefix('');
 $routeProvider
 .when("/", {
 templateUrl : "html/MainPages/HomePage.html",
 controller: 'ThalalHomeController'
 })
 .when("/register", {
 templateUrl : "html/MainPages/registration.html",
 controller: 'ThalalHomeController'
 })
 .otherwise({
 redirectTo: '/'
 });


 }]);