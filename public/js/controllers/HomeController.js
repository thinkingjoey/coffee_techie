angular.module("jwt_auth")
	.controller("HomeController", HomeController)

HomeController.$inject = ['$http', '$state', '$scope']

function HomeController ($http, $state, $scope) {
	var self = this
	console.log("Home Controller")
		$scope.$on('$viewContentLoaded', function(){
			console.log("content loaded")
				$('.parallax').parallax();

 });
}
