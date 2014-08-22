var presenterList = [];

angular.module('presenterController', [])

// inject the Presenter service factory into our controller
.controller('mainController', ['$scope','$http','Presenters', function ($scope, $http, Presenters) {
  $scope.formData = {};
  $scope.loading = true;

  // GET 
  Presenters.get()
    .success(function (data) {
      $scope.presenters = data;
      $scope.loading = false;
    });

  // CREATE 
  $scope.createPresenter = function () {
    $scope.loading = true;

    if ($scope.formData.name !== undefined) {

      Presenters.create($scope.formData)

        .success(function (data) {
          $scope.formData = {};
          $scope.presenters = data;
        });
    }
  };

  // DELETE 
  $scope.deletePresenter = function (id) {
    $scope.loading = true;

    Presenters.delete(id)
      .success(function(data) {
        $scope.presenters = data;
      });
  };

  $scope.toggleSelection = function (name){
    presenterList.push(name);
    console.log(presenterList);
  };

  $scope.pickPresenter = function (){
    if (presenterList.length > 0){
      var picked = presenterList[Math.floor((Math.random() * presenterList.length))];
      $scope.presenterPicked = "Get ready to present, " + picked + "!";
    } else {
      $scope.presenterPicked = "Select some presenters, please.";
    };
  };
}]);
