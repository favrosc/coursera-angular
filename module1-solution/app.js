(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.myInput = "";
    $scope.clickBtn = function () {
      if ($scope.myInput == "") {
        $scope.message = "Please enter data first";
      } else {
        var items = $scope.myInput.split(',');
        items = items.filter(function (el){
          return el != "";
        });
        if (items.length <= 3 && items.length > 0) {
          $scope.message = "Enjoy!";
        } else if (items.length > 3) {
          $scope.message = "Too much!";
        } else {
          $scope.message = "Please enter data first";
        }
      }
    };
  };

}) ();
