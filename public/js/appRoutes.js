angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: '/views/home.html',
			controller: 'MainController'
		})

		.when('/shop', {
			templateUrl: '/views/shop.html',
			controller: 'ShopController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		})
		.otherwise({
			redirectTo: '/'
		});

}]);