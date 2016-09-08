angular.module("jwt_auth")
	.controller("HomeController", HomeController)

HomeController.$inject = ['$http', '$state']

function HomeController ($http, $state) {
	var self = this
	console.log("Home Controller")
}
