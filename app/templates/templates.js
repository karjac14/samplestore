angular.module('templateStore.templates', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider){
      $routeProvider
        .when('/templates', {
          templateUrl: 'templates/templates.html',
          controller: 'TemplatesCtrl'
        })
        .when('/templates/:templateId', {
          templateUrl: 'templates/templates-details.html',
          controller: 'TemplatesDtl'
        });
  }])

  .controller('TemplatesCtrl', [ '$scope', '$http', function ($scope, $http) {
    $http.get('json/store.json')
      .then(
        function(response){
          $scope.templates = response.data;
        });
  }])
  .controller('TemplatesDtl', [ '$scope', '$http', function ($scope, $http) {
    $http.get('json/store.json')
      .then(
        function(response){
          $scope.templates = response.data;
        });

  }])
