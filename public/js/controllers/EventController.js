angular.module("jwt_auth")
	.controller("EventController", EventController)
	.controller("EventCreateController", EventCreateController)
	.controller("EventShowController", EventShowController)

EventController.$inject = ['$http', '$state']

// function ListingResource($resource) {
// 	return $resource(
// 			"/api/listings/:id",
// 			{id: "@id"}
// 		)
// }

function EventController ($http, $state) {
	var self = this
	console.log('event')
	self.index = function (){
		self.events =[]
		//5 event types
		self.eventTypes = ["Conference", "Coffee Meetup", "Happy Hours", "Party", "Others"]
	}
}
function EventCreateController ($http, $state) {
	console.log("event create")
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
		$http.post("/events?token=" + localStorage.token, {
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
				console.log(response.data)
				$state.go('event')
			}
		})
	}
}

function EventShowController($http, $state){
	console.log("event show")
	var self = this

	self.events = []

	$htttp({
		url: '/events/' + id,
		method: 'GET',
		params: {}
	}).then (function (response) {
		self.events = response.data
	})

}
