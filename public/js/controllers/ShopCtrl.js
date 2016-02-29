angular.module('ShopCtrl', []).controller('ShopController', function($scope, $http) {

	$scope.formData = {};
    $scope.loading = true;

    // GET =====================================================================
    // when landing on the page, get all emails and show them
    // use the service to get all the emails
    $http({
  		method: 'GET',
  		url: '/api/apparel'
		}).then(function successCallback(res) {
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(res) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
});