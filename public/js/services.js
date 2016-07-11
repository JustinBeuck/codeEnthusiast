angular.module('myApp').factory('AuthService',
	['$q', '$timeout', '$http', function($q, $timeout, $http) {
		var user = null;

		return ({
			isLoggedIn: isLoggedIn,
			getUserStatus: getUserStatus,
			login: login,
			logout: logout
		})
	}])