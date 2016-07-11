angular.module('myApp').factory('AuthService',
	['$q', '$timeout', '$http', function($q, $timeout, $http) {
		var user = null;

		function isLoggedIn() {
		  if(user) {
		    return true;
		  } else {
		    return false;
		  }
		}

		function login(username, password) {

		  // create a new instance of deferred
		  var deferred = $q.defer();

		  // send a post request to the server
		  $http.post('/user/login',
		    {username: username, password: password})
		    // handle success
		    .success(function (data, status) {
		      if(status === 200 && data.status){
		        user = true;
		        deferred.resolve();
		      } else {
		        user = false;
		        deferred.reject();
		      }
		    })
		    // handle error
		    .error(function (data) {
		      user = false;
		      deferred.reject();
		    });

		  // return promise object
		  return deferred.promise;

		}
		  
		return ({
			isLoggedIn: isLoggedIn,
			getUserStatus: getUserStatus,
			login: login,
			logout: logout
		})

	}])