
// creating App module for the project
var SoMas = angular.module("Thalal",[]);
SoMas.controller('ThalalHomeController', function($scope) {

    $scope.singIn=function(singvar){
        alert(singvar)

    };
    
});