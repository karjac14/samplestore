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
  .controller('TemplatesDtl', [ '$scope', '$http', '$routeParams', '$filter', function ($scope, $http, $routeParams, $filter) {
    var templateId = $routeParams.templateId;
    $http.get('json/store.json')
      .then(
        function(response){
          var data = response.data;
          console.log(data);
          $scope.template = $filter ('filter')(data, function (d){
            console.log(d.id == templateId);
            //add element to the filtered array if 
            return d.id == templateId;
          })[0]; //sub-0 because $filter output is an array enclosing an object
          console.log($scope.template);
          $scope.fullImage = $scope.template.images[0].name;
        });

    $scope.changeImg = function(img){
      $scope.fullImage = img.name;
    }

  }]);
