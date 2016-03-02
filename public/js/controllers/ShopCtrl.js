angular.module('ShopCtrl', []).controller('ShopController', function($scope, Clothes) {

    $scope.loading = true;

    Clothes.get()
      .success(function(data) {
	      console.log(data);
        $scope.clothes = data;
        $scope.loading = false;
    });

});