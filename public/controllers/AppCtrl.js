var myApp = angular.module('myApp', []).controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {

	$http.get('/contactList').success(function (response) {
		console.log('Success Response');
		$scope.contactList = response;
	});

}])