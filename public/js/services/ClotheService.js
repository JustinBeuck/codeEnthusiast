angular.module('ClotheService', []).factory('Clothes', ['$http', function($http) {
		return {
      get : function() {
        return $http.get('/api/clothes');
      },
      create : function(todoData) {
        return $http.post('/api/clothes', todoData);
      },
      delete : function(id) {
        return $http.delete('/api/clothes/' + id);
      }
    }
}]);