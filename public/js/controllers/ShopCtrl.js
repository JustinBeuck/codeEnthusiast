angular.module('ShopCtrl', []).controller('ShopController', function($scope, Items) {

    $scope.loading = true;

    Items.get()
      .success(function(data) {
	      console.log(data);
        $scope.clothes = data;
        $scope.loading = false;
    });

});