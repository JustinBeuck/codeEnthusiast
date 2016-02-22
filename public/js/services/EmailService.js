angular.module('EmailService', []).factory('Emails', ['$http',function($http) {
    return {
      get : function() {
        return $http.get('/api/emails');
      },
      create : function(todoData) {
        return $http.post('/api/emails', todoData);
      },
      delete : function(id) {
        return $http.delete('/api/emails/' + id);
      }
    }
}]);