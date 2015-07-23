var myApp = angular.module('myApp', []).controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {

	$http.get('/contactList').success(function (response) {
		$scope.contactList = response;
	});

	$scope.addUser = function () {
		console.log($scope.contact);
		$http.post('/contactList', $scope.contact);
	}

}])