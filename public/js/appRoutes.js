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

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		})
		.otherwise({
			redirectTo: '/'
		});

}]);