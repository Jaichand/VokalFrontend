//author : Jaichand
var app = angular.module('vokalAssignment', ['ngRoute','ui.bootstrap.tpls', 'ui.bootstrap']);

app.config(['$routeProvider', '$httpProvider' ,function($routeProvider, $httpProvider){
  $routeProvider
  .when('/login', {
    templateUrl : 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .when('/signup', {
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
  })
  .when('/home', {
    templateUrl: 'templates/landing.html',
    controller: 'LandingCtrl'
  })
  .when('/searchedlocation', {
    templateUrl: 'templates/searchedlocation.html',
    controller: 'Locations'
  })
  .otherwise("/home");
}]);
