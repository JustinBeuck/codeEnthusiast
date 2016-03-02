angular.module('ItemService', []).factory('Items', ['$http', function($http) {
		return {
      get : function() {
        return $http.get('/api/items');
      }
    }
}]);