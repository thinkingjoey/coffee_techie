angular.module("jwt_auth")
	.controller("EventController", EventController)
	.controller("EventCreateController", EventCreateController)

EventController.$inject = ['$http', '$state']

function EventController ($http, $state) {
	var self = this
	console.log("Event Controller")
}

function EventCreateController ($http, $state) {
	var self = this;
	self.fee = '',
	self.imageUrl = '',
	self.title = '',
	self.eventType= '',
	self.startTime= '',
	self.endTime= '',
	self.description= '',
	self.location= ''

	self.create = function () {
		$http.post("/events", {
			fee: self.fee,
			imageUrl: self.imageUrl,
			title: self.title,
			eventType: self.eventType,
			startTime: self.startTime,
			endTime: self.endTime,
			description: self.description,
			location: self.location
		}).then (function (response){
			if (response.data.error) throw (err)
			else if (response.data) {
				$state.go('event')
			}
		})
	}
}
