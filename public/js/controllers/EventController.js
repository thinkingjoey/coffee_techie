angular.module("jwt_auth")
	.controller("EventController", EventController)

EventController.$inject = ['$http', '$state']

function EventController ($http, $state) {
	var self = this
	this.top = "bottom"
	console.log("Event Controller")
}
