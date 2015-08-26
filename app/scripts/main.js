"use strict";

angular.module('quickstart', [
  'ui.bootstrap'
]);

angular.module('quickstart')
    .controller('AlertCtrl', function ($scope) {
      $scope.alerts = [{
        type: 'danger',
        msg: '경고 메세지 입니다.'
      }, {
        type: 'warning',
        msg: '경고 메세지 입니다.'
      }, {
        type: 'info',
        msg: '경고 메세지 입니다.'
      }, {
        type: 'success',
        msg: '경고 메세지 입니다.'
      }];
    });

angular.module('quickstart')
    .controller('ButtonCtrl', function ($scope) {
      $scope.button1 = 0;
      $scope.button2 = 'left';
      $scope.buttons = {};
    });

angular.module('quickstart')
    .controller('CollapseCtrl', function ($scope) {
      $scope.isCollapsed = false;
    });

angular.module('quickstart')
    .controller('DropdownCtrl', function ($scope) {
      $scope.isOpen = false;
    });

angular.module('quickstart')
    .controller('ModalCtrl', function ($scope, $modal) {
      $scope.open = function (size) {

        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return [1,2,3];
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

      $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };
    });

angular.module('quickstart')
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });