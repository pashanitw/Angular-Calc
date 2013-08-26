'use strict';

/* Controllers */

angular.module('calc.controllers', []).
  controller('MyCtrl1', function($scope){
        $scope.result='';

    })
  .controller('MyCtrl2', [function() {

  }]);