'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates'
]).
//default landing page
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);

//TODO: try to add .value method here

//TODO: try to add .constant method here
s
